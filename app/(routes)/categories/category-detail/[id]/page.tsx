'use client';
import { SearchIcon } from '@@/components/home/icons/SearchIcon';
import { VerticalDotsIcon } from '@@/components/home/icons/VerticalDotsIcon';
import api from '@@/config/api';
import { ISearch } from '@@/interface/interface';
import {
	Button,
	Chip,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Pagination,
	Selection,
	SortDescriptor,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import { Select, message } from 'antd';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BreadcrumbsContainer from '../../breadcrumb/breadCrumbsContainer';
import { category, columns } from './data';

interface ICategory {
	id: number;
	name: string;
	childCategory: [];
}

interface IProps {
	id: string;
	updateCategories: any;
	openUpdate: (id: string) => void;
	setUpdateId: Dispatch<SetStateAction<any>>;
	setUpdateCategories: Dispatch<SetStateAction<any>>;
}

export default function CategoryData({
	openUpdate,
	setUpdateId,
	setUpdateCategories,
}: IProps) {
	const { id } = useParams<{ id: string }>();
	const [dataValue, setDataValue] = useState<ICategory[] | any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [filterValue, setFilterValue] = React.useState('');
	const [filterData, setFilterData] = React.useState<ISearch[]>([]);
	const INITIAL_VISIBLE_COLUMNS = [
		'rasm',
		'kategoriya',
		'child category',
		'actions',
	];
	const [messageApi, contextHolder] = message.useMessage();
	type User = (typeof dataValue)[0];
	const success = () => {
		messageApi.open({
			type: 'success',
			content: "ma'lumot  o'chirildi",
		});
	};

	const getData = async () => {
		const response = await api.get(`/category/${id}`);

		console.log(response.data?.data);
		setDataValue(response.data?.data);
	};

	useEffect(() => {
		getData();
	}, []);

	const filterSearchCategory = async (value: any) => {
		setIsLoading(true);
		const data = await axios.get(
			`http://95.130.227.131:8080/api/v1/category/list?page=${
				page - 1
			}&size=10&search=${value}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		setFilterData(data.data.data.parent);
		console.log(data.data.data.parent);

		const values = filterData.map(item => item.hasChildren);

		setIsLoading(false);
		return data;
	};

	const filterOptionCategory = async (value: any) => {
		console.log(value);

		setIsLoading(true);
		const data = await axios.get(
			`http://95.130.227.131:8080/api/v1/category/list?size=${value}&search=${filterValue}&value=${page}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		setDataValue(data?.data?.data?.parent);
		setRowsPerPage(value);

		await getData();

		setIsLoading(false);

		return data;
	};

	console.log(dataValue);

	const deleteData = async (id: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.delete(
				`http://95.130.227.131:8080/api/v1/category/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			await getData();
			success();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	const updateGetData = async (id: string) => {
		try {
			setIsLoading(true);
			const data = await axios.get(
				`http://95.130.227.131:8080/api/v1/category/${id}`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setUpdateCategories(data?.data?.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateData = async (id: string) => {
		setUpdateId(id);
		openUpdate(id);

		updateGetData(id);
	};

	const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
		new Set([])
	);
	const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
		column: 'age',
		direction: 'ascending',
	});

	const [page, setPage] = React.useState(1);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === 'all') return columns;

		return columns.filter(column =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...category];

		if (hasSearchFilter) {
			filteredUsers = filterData.filter(user =>
				user.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		return filteredUsers;
	}, [category, filterValue]);

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...category].sort((a: User, b: User) => {
			const first = a;
			const second = b;
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === 'descending' ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const onNextPage = React.useCallback(async () => {
		const data = await axios.get(
			`http://95.130.227.131:8080/api/v1/category/list?page=${
				page + 1
			}&size=5&search=${filterValue}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const pagesQuery = data?.data?.data?.pageable?.pageNumber;
		if (page < pages) {
			setPage(pagesQuery);
		}
	}, [page, pages]);

	const onPreviousPage = React.useCallback(async () => {
		const data = await axios.get(
			`http://95.130.227.131:8080/api/v1/category/list?page=${
				page - 1
			}&size=5&search=${filterValue}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const pagesQuery = data?.data?.data?.pageable?.pageNumber;
		if (page > 1) {
			setPage(pagesQuery);
		}
	}, [page, pages]);

	const onRowsPerPageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setRowsPerPage(Number(e));
			filterOptionCategory(e);
			setPage(1);
		},
		[]
	);

	const onSearchChange = React.useCallback(async (value?: string) => {
		if (value) {
			setFilterValue(value);
			setIsLoading(true);
			const { data } = await filterSearchCategory(value);
			const filter = data?.data;
			const filterResult = filter?.content?.filter((user: any) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase())
			);

			const filterSearch = filterResult?.map((item: any) => item);
			setFilterData(filterSearch);
			setPage(1);
		} else {
			setFilterValue('');
		}
	}, []);

	const onClear = React.useCallback(() => {
		setFilterValue('');
		setPage(1);
	}, []);

	const topContent = React.useMemo(() => {
		return (
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between gap-3 items-end'>
					<Input
						isClearable
						className='w-full sm:max-w-[44%]'
						placeholder='Search by name...'
						startContent={<SearchIcon />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
						minLength={3}
					/>

					{isLoading && 'searching...'}
				</div>
				<div className='flex justify-start items-center'>
					<span className='text-default-400 text-small mr-10 ml-3'>
						Total {dataValue.length} users
					</span>
					<label className='flex items-center text-default-400 text-small'>
						Rows per page:
						<Select
							className='bg-transparent outline-none text-default-400 text-small'
							onChange={e => onRowsPerPageChange(e)}
							options={[
								{
									value: '5',
									label: '5',
								},
								{
									value: '10',
									label: '10',
								},
								{
									value: '15',
									label: '15',
								},
								{
									value: '20',
									label: '20',
								},
							]}
						></Select>
					</label>
				</div>
				<BreadcrumbsContainer data={dataValue} />
			</div>
		);
	}, [
		filterValue,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		dataValue.length,
		hasSearchFilter,
	]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className='py-2 px-2 flex justify-between items-center'>
				<span className='w-[30%] text-small text-default-400'>
					{selectedKeys === 'all'
						? 'All items selected'
						: `${selectedKeys.size} of ${filteredItems.length} selected`}
				</span>
				<Pagination
					isCompact
					showControls
					showShadow
					color='primary'
					page={page}
					total={pages}
					onChange={setPage}
				/>
				<div className='hidden sm:flex w-[30%] justify-end gap-2'>
					<Button
						isDisabled={pages === 1}
						size='sm'
						variant='flat'
						onPress={onPreviousPage}
					>
						Previous
					</Button>
					<Button
						isDisabled={pages === 1}
						size='sm'
						variant='flat'
						onPress={onNextPage}
					>
						Next
					</Button>
				</div>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	return (
		<div>
			<h1 className='text-lg mt-3 mb-5'>
				<span className='text-2xl'>{dataValue?.name}</span>
			</h1>
			<Table
				aria-label='Example table with custom cells, pagination and sorting'
				isHeaderSticky
				bottomContent={bottomContent}
				bottomContentPlacement='outside'
				classNames={{
					wrapper: 'max-h-[582px]',
				}}
				selectedKeys={selectedKeys}
				sortDescriptor={sortDescriptor}
				topContent={topContent}
				topContentPlacement='outside'
				onSelectionChange={setSelectedKeys}
				onSortChange={setSortDescriptor}
			>
				<TableHeader columns={headerColumns}>
					{column => (
						<TableColumn
							key={column.uid}
							align={column.uid === 'actions' ? 'center' : 'start'}
							allowsSorting={column.sortable}
						>
							{column.name}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody emptyContent={'No users found'} items={sortedItems}>
					{item => (
						<TableRow
							key={dataValue.id}
							className='border-b-2 mb-2 border-b-gray-500 mt-3'
						>
							<TableCell>
								<div className='flex flex-col '>
									<p className='text-bold  text-lg  capitalize text-default-400'>
										<Image
											src={
												'https://www.usnews.com/cmsmedia/f5/4b/efa92f4c4dcebb2af996dfc4c01f/2023-lucid-air-1.jpg'
											}
											width={'180'}
											height={'180'}
											className='rounded-xl'
											alt='image'
										/>
									</p>
								</div>
							</TableCell>
							<TableCell>
								<div className='flex flex-col'>
									<p className='text-bold   text-lg capitalize text-default-400'>
										{item?.category}
									</p>
								</div>
							</TableCell>
							<TableCell>
								<Chip
									size='md'
									variant={'faded'}
									className='flex flex-col cursor-pointer  capitalize border-none gap-1  text-default-900 text-[50px]'
								>
									<Link
										href={
											item?.child_category
												? `/category-details/${dataValue.id}`
												: '/categories'
										}
									>
										<p className='text-bold   relative top-1  text-lg capitalize text-default-400  flex  justify-center items-center'>
											{item?.child_category ? <FaArrowRight /> : ''}
										</p>
									</Link>
								</Chip>
							</TableCell>
							<TableCell>
								<div className='relative flex justify-end items-center gap-2'>
									{contextHolder}
									<Dropdown>
										<DropdownTrigger>
											<Button isIconOnly size='sm' variant='light'>
												<VerticalDotsIcon
													className='text-default-300'
													width={100}
													height={100}
												/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu>
											<DropdownItem>View</DropdownItem>
											<DropdownItem onClick={() => updateData(dataValue.id)}>
												Edit
											</DropdownItem>
											<DropdownItem onClick={() => deleteData(dataValue.id)}>
												Delete
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}

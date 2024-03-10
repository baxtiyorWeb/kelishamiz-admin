'use client';
import { columns, property } from '@@/components/home/data/properties';
import { capitalize } from '@@/components/home/utils/utils';
import {
	Button,
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
	User,
} from '@nextui-org/react';
import React from 'react';
import { ChevronDownIcon } from '../home/icons/ChevronDownIcon';
import { PlusIcon } from '../home/icons/PlusIcon';
import { SearchIcon } from '../home/icons/SearchIcon';
import { VerticalDotsIcon } from '../home/icons/VerticalDotsIcon';

const INITIAL_VISIBLE_COLUMNS = ['title', 'value', 'actions'];

type User = (typeof property)[0];

const Crud = () => {
	const [filterValue, setFilterValue] = React.useState('');
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
		let filteredUsers = [...property];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter(user =>
				user.title.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		return filteredUsers;
	}, [property, filterValue]);

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a: User, b: User) => {
			const first = a[sortDescriptor.column as keyof User] as number;
			const second = b[sortDescriptor.column as keyof User] as number;
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === 'descending' ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof User];

		switch (columnKey) {
			case 'title':
				return (
					<User description={user.title} name={cellValue}>
						{user.title}
					</User>
				);
			case 'value':
				return (
					<div className='flex flex-col'>
						<p className='text-bold text-small capitalize'>{cellValue}</p>
						<p className='text-bold text-tiny capitalize text-default-400'>
							{user.value}
						</p>
					</div>
				);

			case 'actions':
				return (
					<div className='relative flex justify-end items-center gap-2'>
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
								<DropdownItem>Edit</DropdownItem>
								<DropdownItem>Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	const onNextPage = React.useCallback(() => {
		if (page < pages) {
			setPage(page + 1);
		}
	}, [page, pages]);

	const onPreviousPage = React.useCallback(() => {
		if (page > 1) {
			setPage(page - 1);
		}
	}, [page]);

	const onRowsPerPageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setRowsPerPage(Number(e.target.value));
			setPage(1);
		},
		[]
	);

	const onSearchChange = React.useCallback((value?: string) => {
		if (value) {
			setFilterValue(value);
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
					/>
					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='text-small' />}
									variant='flat'
								>
									Columns
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label='Table Columns'
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode='multiple'
								onSelectionChange={setVisibleColumns}
							>
								{columns.map(column => (
									<DropdownItem key={column.uid} className='capitalize'>
										{capitalize(column.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Button
							color='primary'
							endContent={<PlusIcon size={10} width={100} height={100} props />}
						>
							Add New
						</Button>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<span className='text-default-400 text-small'>
						Total {property.length} users
					</span>
					<label className='flex items-center text-default-400 text-small'>
						Rows per page:
						<select
							className='bg-transparent outline-none text-default-400 text-small'
							onChange={onRowsPerPageChange}
						>
							<option value='5'>5</option>
							<option value='10'>10</option>
							<option value='15'>15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		property.length,
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
		<Table
			aria-label='Example table with custom cells, pagination and sorting'
			isHeaderSticky
			bottomContent={bottomContent}
			bottomContentPlacement='outside'
			classNames={{
				wrapper: 'max-h-[382px]',
			}}
			selectedKeys={selectedKeys}
			selectionMode='multiple'
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
					<TableRow key={item.id}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default Crud;
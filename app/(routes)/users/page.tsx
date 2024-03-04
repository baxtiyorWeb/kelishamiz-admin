'use client';

import { Drawer, useDisclosure } from '@chakra-ui/react';

import { DeleteUser } from '@@/app/(routes)/users/UI/deleteUser';
import {
	Button,
	Chip,
	ChipProps,
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
import { columns, statusOptions } from './data';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { PlusIcon } from './icons/Plusicon';
import { SearchIcon } from './icons/SearchIcon';
import { VerticalDotsIcon } from './icons/VerticalDotIcons';
import { capitalize } from './utils';

// @ts-ignore
import EditUser from '@@/app/(routes)/users/UI/editUser';
import ViewUser from '@@/app/(routes)/users/UI/view';
import { IUser } from '@@/app/(routes)/users/interface/user.interface';
import { useUser } from '@@/store/useUser';

const statusColorMap: Record<string, ChipProps['color']> = {
	active: 'success',
	paused: 'danger',
	vacation: 'warning',
};

const data: IUser[] = [
	{
		firstName: ' Xurshid',
		lastName: 'Soatov',
		secondName: "Xusan O'gli",
		birthDate: '1994-02-21',
		username: 'windoxas',
		password: '5hspkfn9',
		phone: '998332575767',
		email: 'windoxas@gmail.com',
		authorityId: 12,
		addressForm: {
			id: 1,
			regionId: 2,
			districtId: 4,
			address: 'Kumkurgan',
		},
	},
	{
		firstName: ' Xurshid',
		lastName: 'Soatov',
		secondName: "Xusan O'gli",
		birthDate: '1994-02-21',
		username: 'windoxas',
		password: '5hspkfn9',
		phone: '998332575767',
		email: 'windoxas@gmail.com',
		authorityId: 12,
		addressForm: {
			id: 2,
			regionId: 2,
			districtId: 4,
			address: 'Kumkurgan',
		},
	},
];

const INITIAL_VISIBLE_COLUMNS = [
	'id',
	'name',
	'email',
	'username',
	'phone',
	'age',
	'actions',
];

type User = (typeof data)[0];

export default function UserPage() {
	// @ts-ignore
	const userName = useUser(state => state.addUser);

	const [filterValue, setFilterValue] = React.useState('');
	const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
		new Set([])
	);
	const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
	const [rowsPerPage, setRowsPerPage] = React.useState(8);
	const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
		column: 'age',
		direction: 'ascending',
	});
	const cancelRef: React.LegacyRef<HTMLButtonElement | null | undefined> =
		React.useRef();
	function isOpenEdit(user: User) {
		onOpen();
		userName(user);
		setEditUser(!editUser);
	}

	function getUserName(user: IUser) {
		// @ts-ignore
		userName(user);
		setDeleteUser(!deleteUser);
	}

	function isViewUser(user: IUser) {
		userName(user);
		setIsView(!isView);
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isView, setIsView] = React.useState(false);
	const [editUser, setEditUser] = React.useState(false);

	const [page, setPage] = React.useState(1);
	const [deleteUser, setDeleteUser] = React.useState(false);
	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === 'all') return columns;

		return columns.filter(column =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...data];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter(user =>
				user.firstName.toLowerCase().includes(filterValue.toLowerCase())
			);
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptions.length
		) {
			filteredUsers = filteredUsers.filter(user =>
				Array.from(statusFilter).includes(user.username)
			);
		}

		return filteredUsers;
	}, [data, filterValue, statusFilter]);

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

	const renderCell = React.useCallback(
		(user: User, columnKey: React.Key): Element | string | number | any => {
			const cellValue = user[columnKey as keyof User];

			switch (columnKey) {
				case 'id':
					return <p>{user.authorityId}</p>;

				case 'name':
					return (
						<User
							description={user.addressForm.address}
							name={user.lastName + user.firstName}
						>
							{user.email}
						</User>
					);

				case 'age':
					return <p>{user.birthDate}</p>;

				case 'status':
					return (
						<Chip
							className='capitalize'
							color={statusColorMap[user.email]}
							size='sm'
							variant='flat'
						>
							{user.lastName}
						</Chip>
					);
				case 'actions':
					return (
						<div className='relative flex justify-end items-center gap-2'>
							<Dropdown>
								<DropdownTrigger>
									<Button isIconOnly size='sm' variant='light'>
										<VerticalDotsIcon className='text-default-300' />
									</Button>
								</DropdownTrigger>
								<DropdownMenu>
									<DropdownItem onClick={() => isViewUser(user)}>
										View
									</DropdownItem>
									<DropdownItem onClick={() => isOpenEdit(user)}>
										Edit
									</DropdownItem>
									<DropdownItem onClick={() => getUserName(user)}>
										Delete
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					);
				default:
					return cellValue;
			}
		},
		[]
	);

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
						<Button color='primary' endContent={<PlusIcon />}>
							Add New
						</Button>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<span className='text-black font-bold text-small'>
						Jami {data.length} foydalanuvchi
					</span>
					<label className='flex items-center text-default-400 text-small'>
						Rows per page:
						<select
							className='bg-transparent outline-none text-default-400 text-small'
							onChange={onRowsPerPageChange}
						>
							<option value='5'>5</option>
							<option value='8'>8</option>
							<option value='10'>10</option>
							<option value='15'>15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		data.length,
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
		<>
			<h1 className='text-3xl font-bold p-5 text-gray-500'>
				Foydalanuvchilar malumot bazasi{' '}
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
				<TableBody
					emptyContent={'No users found'}
					items={sortedItems}
					className='border'
				>
					{item => (
						<TableRow key={item.addressForm.id}>
							{columnKey => (
								<TableCell>{renderCell(item, columnKey)}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div
				className={
					isView
						? 'transition-transform translate-y-[0%] w-full h-[80vh]  bg-white shadow-2xl fixed top-0 left-0 z-[99999]'
						: 'transition-transform translate-y-[-120%] w-full h-[80vh]  bg-white shadow-2xl fixed top-0 left-0 z-[99999]'
				}
			>
				{isView ? <ViewUser onClose={setIsView} /> : ''}
			</div>

			{editUser ? (
				<Drawer onClose={onClose} isOpen={isOpen} size={'lg'}>
					<EditUser onClose={onClose} />
				</Drawer>
			) : (
				''
			)}

			{deleteUser ? <DeleteUser deleteUser={setDeleteUser} /> : ''}
		</>
	);
}

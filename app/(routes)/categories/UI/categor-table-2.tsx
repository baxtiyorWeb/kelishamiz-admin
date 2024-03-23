import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ICategory {
	id: string;
	name: string;
	childCategory: [];
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: ICategory;
	index: number;
	children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

const CategoryDataTable: React.FC = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState<ICategory[] | any>([]);
	const [editingKey, setEditingKey] = useState('');
	const getData = async () => {
		try {
			const data = await axios.get(
				`http://95.130.227.131:8080/api/v1/category/all?page=0&size=10&parentId=null`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setData(data.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const isEditing = (record: ICategory) => record.id === editingKey;

	const edit = (record: Partial<ICategory> & { key: React.Key }) => {
		form.setFieldsValue({ name: '', id: '', childCategory: '', ...record });
		setEditingKey(record.id);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as ICategory;

			const newData = [...data];
			const index = newData.findIndex(item => key === item.id);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

	const columns = [
		{
			title: 'name',
			dataIndex: 'name',
			width: '25%',
			editable: true,
		},
		{
			title: 'age',
			dataIndex: 'age',
			width: '15%',
			editable: true,
		},
		{
			title: 'address',
			dataIndex: 'address',
			width: '40%',
			editable: true,
		},
		{
			title: 'operation',
			dataIndex: 'operation',
			render: (_: any, record: ICategory) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link
							onClick={() => save(record.id)}
							style={{ marginRight: 8 }}
						>
							Save
						</Typography.Link>
						<Popconfirm title='Sure to cancel?' onConfirm={cancel}>
							<a>Cancel</a>
						</Popconfirm>
					</span>
				) : (
					<Typography.Link
						disabled={editingKey !== ''}
						onClick={() => edit(record)}
					>
						Edit
					</Typography.Link>
				);
			},
		},
	];

	const mergedColumns = columns.map(col => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: ICategory) => ({
				record,
				inputType: col.dataIndex === 'age' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});

	return (
		<Form form={form} component={false}>
			<Table
				components={{
					body: {
						cell: EditableCell,
					},
				}}
				bordered
				dataSource={data}
				columns={mergedColumns}
				rowClassName='editable-row'
				pagination={{
					onChange: cancel,
				}}
			/>
		</Form>
	);
};

export default CategoryDataTable;

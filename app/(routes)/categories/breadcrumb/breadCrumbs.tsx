// Breadcrumb.tsx
'use client';
import { Breadcrumb, BreadcrumbLink } from '@chakra-ui/react';
import { BreadcrumbItem } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import React from 'react';

interface BreadcrumbProps {
	data: any; // Ma'lumotlar obyekti
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ data }) => {
	const breadcrumbsArr = [];
	const { id } = useParams<{ id: string }>();

	let currentData = data;
	while (currentData) {
		breadcrumbsArr.unshift(
			<Breadcrumb fontWeight='medium' fontSize='sm' key={currentData.id}>
				<BreadcrumbItem isCurrent={currentData.id == id}>
					<BreadcrumbLink
						href={
							currentData.parent !== null
								? `/categories/category-detail/${currentData.id}`
								: '/categories'
						}
					>
						{currentData.name}
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		);

		currentData = currentData.parent;
	}

	return (
		<div className='flex justify-start items-center'>{breadcrumbsArr}</div>
	);
};

export default Breadcrumbs;

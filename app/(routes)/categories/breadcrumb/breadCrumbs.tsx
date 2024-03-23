// Breadcrumb.tsx
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

interface BreadcrumbProps {
	data: any; // Ma'lumotlar obyekti
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => {
	const params = useParams<{ id: string }>();
	const breadcrumbs = [];

	let currentData = data;
	while (currentData) {
		breadcrumbs.unshift(
			<span key={params.id}>
				<Link href={`/category-details/${currentData.id}`}>
					{currentData.name}
				</Link>
				<span> / </span>
			</span>
		);

		currentData = currentData.parent;
	}

	return <div>{breadcrumbs}</div>;
};

export default Breadcrumb;

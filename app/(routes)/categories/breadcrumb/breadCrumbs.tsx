// // Breadcrumb.tsx
'use client';

import Link from 'next/link';
<<<<<<< HEAD
=======
import { useParams } from 'next/navigation';
>>>>>>> 30f908962fd5ae2566906ba8bcf74f0d46586d62

interface Category {
	id: number;
	name: string;
	image: string;
	parent?: Category;
	properties: any;
}

interface BreadcrumbsProps {
	data: Category;
}

<<<<<<< HEAD
import { useParams } from 'next/navigation';
const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
	const { id } = useParams<{ id: string }>();

	function generateBreadcrumbs(node: any, breadcrumbs = []) {
		if (!node) return breadcrumbs;
=======
const Breadcrumb = ({ data }: BreadcrumbProps) => {
	const params = useParams<{ id: string }>();
	const breadcrumbs = [];

	let currentData = data;
	while (currentData) {
		breadcrumbs.unshift(
			<span className='text-lg font-bold text-sky-500' key={params.id}>
				<Link
					className='hover:underline'
					href={`/category-details/${currentData.id}`}
				>
					{currentData.name}
				</Link>
				<span className='text-blue-600'> &gt; </span>
			</span>
		);
>>>>>>> 30f908962fd5ae2566906ba8bcf74f0d46586d62

		const updatedBreadcrumbs: any = [...breadcrumbs, node];

		return generateBreadcrumbs(node.parent, updatedBreadcrumbs);
	}

	const breadcrumbs = generateBreadcrumbs(data).reverse();

	return (
		<div>
			{breadcrumbs.map((crumb: { id: number; name: string }, index) => (
				<span className='text-lg font-bold text-sky-500' key={crumb?.id}>
					<Link
						className='hover:underline'
						href={`/categories/category-detail/${crumb?.id}`}
					>
						{crumb?.name}
						{index < breadcrumbs.length - 1 && (
							<span className='text-blue-600'> &gt; </span>
						)}
					</Link>
				</span>
			))}
		</div>
	);
};

export default Breadcrumbs;

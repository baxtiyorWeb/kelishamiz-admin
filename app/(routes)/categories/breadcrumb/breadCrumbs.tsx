// // Breadcrumb.tsx
'use client';

import Link from 'next/link';

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

import { useParams } from 'next/navigation';
const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
	const { id } = useParams<{ id: string }>();

	function generateBreadcrumbs(node: any, breadcrumbs = []) {
		if (!node) return breadcrumbs;

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

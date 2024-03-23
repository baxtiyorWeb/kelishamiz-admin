// Breadcrumb.tsx
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BreadcrumbPropsChild {
	name: string;
	id: number;
	parent: any;
}

interface BreadcrumbProps {
	data: BreadcrumbPropsChild; // Ma'lumotlar obyekti
}

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

		currentData = currentData.parent;
	}

	return <div>{breadcrumbs}</div>;
};

export default Breadcrumb;

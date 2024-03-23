import React from 'react';
interface BreadcrumbProps {
	children: React.ReactNode;
}

const Layout = ({ children }: BreadcrumbProps) => {
	return (
		<div>
			<h1>ok</h1>
			{/* <Breadcrumb data={data} /> */}

			{children}
		</div>
	);
};

export default Layout;

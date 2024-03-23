import React from 'react';
interface BreadcrumbProps {
	data: any; // Ma'lumotlar obyekti
	children: React.ReactNode;
}

const Layout: React.FC<BreadcrumbProps> = ({ data, children }) => {
	return (
		<div>
			<h1>ok</h1>
			{/* <Breadcrumb data={data} /> */}
			{children}
		</div>
	);
};

export default Layout;

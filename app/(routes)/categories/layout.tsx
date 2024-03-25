import React from 'react';
import Breadcrumb from './breadcrumb/breadCrumbs';
interface BreadcrumbProps {
	children: React.ReactNode;
}

const Layout = ({ children }: BreadcrumbProps) => {
	return (
		<div>
<<<<<<< HEAD
			<Breadcrumb data={data} />
=======
			<h1>ok</h1>
			{/* <Breadcrumb data={data} /> */}

>>>>>>> 30f908962fd5ae2566906ba8bcf74f0d46586d62
			{children}
		</div>
	);
};

export default Layout;

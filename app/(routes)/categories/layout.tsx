import React from 'react';
import Breadcrumb from './breadcrumb/breadCrumbs';
interface BreadcrumbProps {
	data: any; // Ma'lumotlar obyekti
	children: React.ReactNode;
}

const Layout: React.FC<BreadcrumbProps> = ({ data, children }) => {
	return (
		<div>
			<Breadcrumb data={data} />
			{children}
		</div>
	);
};

export default Layout;

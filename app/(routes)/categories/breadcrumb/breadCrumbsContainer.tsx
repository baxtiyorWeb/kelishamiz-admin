// BreadcrumbsContainer.tsx

import React from 'react';
import Breadcrumb from './breadCrumbs';

interface BreadcrumbsContainerProps {
	data: any; // Ma'lumotlar obyekti
}

const BreadcrumbsContainer: React.FC<BreadcrumbsContainerProps> = ({
	data,
}) => {
	return (
		<div>
			<Breadcrumb data={data} />
		</div>
	);
};

export default BreadcrumbsContainer;

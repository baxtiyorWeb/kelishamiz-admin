const categoriesMenu = [
	{
		id: 10,
		categoriesName: 'Avtomobile',
		description: '',
		icons: '/categories_img/car.png',
		count: 2341,
	},
	{
		id: 1,
		categoriesName: "Ko'chmas mulk",
		description: '',
		icons: '/categories_img/home.png',
		count: 2341,
	},
	{
		id: 2,
		categoriesName: 'Ish va Xizmatlar',
		description: '',
		icons: '/categories_img/worker_services.png',
		count: 2341,
	},
	{
		id: 3,
		categoriesName: 'Elektronika',
		description: '',
		icons: '/categories_img/computer.png',
		count: 2341,
	},
	{
		id: 4,
		categoriesName: "Uy bog'",
		description: '',
		icons: '/categories_img/garden.png',
		count: 2341,
	},
	{
		id: 5,
		categoriesName: 'Qurilish mollari',
		description: '',
		icons: '/categories_img/build.png',
		count: 2341,
	},
	{
		id: 6,
		categoriesName: 'Shaxsiy buyumlar',
		description: '',
		icons: '/categories_img/clothes.png',
		count: 2341,
	},
	{
		id: 7,
		categoriesName: "O'yinchoqlar",
		description: '',
		icons: '/categories_img/toys.png',
		count: 2341,
	},
	{
		id: 8,
		categoriesName: 'Xobbi',
		description: '',
		icons: '/categories_img/xobbi.png',
		count: 2341,
	},
	{
		id: 9,
		categoriesName: 'Hayvonlar',
		description: '',
		icons: '/categories_img/animals.png',
		count: 2341,
	},

	{
		id: 11,
		categoriesName: 'Ehtiyot qisimlari va Akksesuarlar',
		description: '',
		icons: '/categories_img/things.png',
		count: 2341,
	},
];

const columns = [
	{ name: 'ID', uid: 'id', sortable: true },
	{ name: 'RASM', uid: 'rasm', sortable: false },
	{ name: 'KATEGORIYA', uid: 'kategoriya', sortable: true },
	{ name: 'CHILD CATEGORY', uid: 'child category', sortable: true },
	{ name: 'ACTIONS', uid: 'actions' },
];
const category = [
	{
		id: 1,
		image:
			'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D',
		category: 'yengil avtomobil',
		child_category: '>',
	},
];

export { category, columns };

export { categoriesMenu };

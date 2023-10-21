export const navigations = [
	{ name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
	// { name: 'Inventory Management', path: '/dashboard/inventory', icon: 'store' },
	{ label: 'Sections', type: 'label' },

	{
		name: 'Customer',
		icon: 'people',
		children: [
			{ name: 'Customer List', iconText: 'SI', path: '/dashboard/customerlist' },
			// { name: 'View Customer', iconText: 'SU', path: '/session/signup' },
			{ name: 'Add Customer', iconText: 'FP', path: '/dashboard/addcustomer' }
		]
	},
	{
		name: 'Product',
		icon: 'shopping_cart',
		children: [
			{ name: 'Product List', iconText: 'SI', path: '/dashboard/productlist' },
			// { name: 'View Product', iconText: 'SU', path: '/session/signup' },
			{ name: 'Add Product', iconText: 'FP', path: '/dashboard/newproduct' }
		]
	},
	{
		name: 'Order',
		icon: 'folder',
		children: [
			{ name: 'Order List', iconText: 'SI', path: '/dashboard/orderlist' },
			// { name: 'View Order', iconText: 'SU', path: '/dashboard/orderdetails' }
		]
	},
	{
		name: 'Category',
		icon: 'category',
		children: [
			{ name: 'Category List', iconText: 'SI', path: '/dashboard/categorylist' },
			// { name: 'View Category', iconText: 'SU', path: '/session/signup' },
			{ name: 'Add Category', iconText: 'SU', path: '/dashboard/addcategory' },
			{ name: 'Add Sub Category', iconText: 'SC', path: '/dashboard/addsubcategory'}, 

		]
	},
	{
		name: 'Banner',
		icon: 'imagesmode',
		children: [
			{ name: 'Banner List', iconText: 'SI', path: '/dashboard/bannerlist' },
			{ name: 'Add Banner', iconText: 'SU', path: '/dashboard/addbanner' }
		]
	},
	{
		name: 'FAQ',
		icon: 'quiz',
		children: [
			{ name: 'FAQ List', iconText: 'SI', path: '/dashboard/faqlist' },
			{ name: 'Add FAQ', iconText: 'SU', path: '/dashboard/addfaq' }
		]
	},
	{
		name: 'Static page',
		icon: 'quiz',
		children: [
			{ name: 'Static page List', iconText: 'SI', path: '/dashboard/staticpagelist' },
			{ name: 'Add Static page', iconText: 'SU', path: '/dashboard/addstaticpage' }
		]
	},
	{
		name: 'Website Setting',
		icon: 'settings',
		children: [
			{ name: 'Category List', iconText: 'SI', path: '/session/signin' },
			// { name: 'View Category', iconText: 'SU', path: '/session/signup' },
			{ name: 'Add Category', iconText: 'SU', path: '/session/signup' }
		]
	},
	{
		name: 'Coupon',
		icon: 'redeem',
		children: [
			{ name: 'Coupon List', iconText: 'SI', path: 'dashboard/couponlist' },
			{ name: 'Add Coupon', iconText: 'SU', path: '/dashboard/addcoupon' }
		]
	},
	{ label: 'PAGES', type: 'label' },
	{ name: 'Privacy Policy', path: '/dashboard/privacy', icon: 'shield_locked' },
	{
		name: 'Term & Condition',
		path: '/dashboard/termcondition',
		icon: 'shield_locked'
	},
	{ name: 'About US', path: '/dashboard/aboutus', icon: 'view_compact_alt' }
];

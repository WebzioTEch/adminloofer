import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';


const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export default function OrderTable() {
	const [orderInfo,setOrderInfo] = useState([])
	const navigate = useNavigate();


	useEffect(()=>{
		console.log(localStorage.getItem("token"),"customer token")
		// dispatch(showCustomerDispatch());
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		};

		axios.post('https://loofer.bellazza.in/api/getAllOrder', null, {
			headers: {
			  'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		  }).then(res => {
					console.log(res,'res reeees')
					let orders=[];
					if(res.status===200 && res.data){
						if(res.data.data.length > 0){
						setOrderInfo(res.data.data);
					}
				}
				}).catch(err => {
					console.error({err});
				});
			

	},[])

	const columns = [
		{ field: 'user_id', headerName: 'ID', width: 90 },
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			editable: true
		},
		// {
		// 	field: 'order_item',
		// 	headerName: 'Order Items',
		// 	width: 300, // Adjust the width as needed
		// 	sortable: false,
		// 	renderCell: (params) => (
		// 	  <ul>
		// 		{params.value.map((item, index) => (
		// 		  <li key={index}>
		// 			<strong>ID:</strong> {item.id}<br />
		// 			<strong>Order ID:</strong> {item.order_id}<br />
		// 			<strong>Product ID:</strong> {item.product_id}<br />
		// 			{/* Add other properties here */}
		// 		  </li>
		// 		))}
		// 	  </ul>
		// 	),
		//   },
		{
			field: 'amount',
			headerName: 'Amount',
			type: 'number',
			width: 110,
			editable: true
		},
		{
			field: 'transaction_id',
			headerName: 'Transaction ID',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 280,
		},
		
		
		{
			field: 'payment_status',
			headerName: 'Payment Status',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'status',
			headerName: 'Order status',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'viewDetails',
			headerName: 'View Details',
			width: 150,
			sortable: false,
			renderCell: (params) => (
			  <Button
				variant="outlined"
				color="primary"
				onClick={() => navigate(`/dashboard/orderdetails`, { state: { ID: params.id } })}
			  >
				View
			  </Button>
			),
		  },
		
	];

	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={orderInfo}
				columns={columns}
				// initialState={{
				// 	pagination: {
				// 		paginationModel: {
				// 			pageSize: 5
				// 		}
				// 	}
				// }}
				// pageSizeOptions={[5]}
				// checkboxSelection
				// disableRowSelectionOnClick
			/>
		</Box>
	);
}

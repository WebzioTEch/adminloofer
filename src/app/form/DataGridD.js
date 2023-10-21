import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { showCustomerDispatch } from 'reducers/HomeReducer';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'name',
		headerName: 'Name',
		width: 150,
		editable: true
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 150,
		editable: true
	},
	{
		field: 'created_at',
		headerName: 'Created At',
		type: 'number',
		width: 110,
		editable: true
	},
];

const rows = [
	{ id: 1, name: 'Snow', email: 'Jon', created_at: 35 },
];

export default function DataGridD() {

	const initialEditedData = {};
	const dispatch = useDispatch(); 
	const [customerInfo,setCustomerInfo] = useState([])

	useEffect(()=>{
		console.log(localStorage.getItem("token"),"customer token")
		// dispatch(showCustomerDispatch());
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		};

			fetch('https://loofer.bellazza.in/api/admin/all_users',{
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("token")}`
				}
			}).then(response => response.json())
				.then(res => {
					console.log(res,'res reeees')
					let customer=[];
					if(res){
					res.users.map((val)=>{
						customer.push(val)
					})
					setCustomerInfo(customer);

					console.log({res});
				}
				}).catch(err => {
					console.error({err});
				});
			

	},[])

	const mapCategoryDataToRows = (data) => {
		console.log(data, 'data');
		if (data && Array.isArray(data) && data.length > 0) {
		  return data.map((category) => ({
			id: category?.id||Math.floor(new Date().getTime()),
			name: category?.name,
			email: category?.email,
			
			created_at: new Date(category.created_at).toDateString(),
			// Map other properties as needed
		  }));
		} else {
		  return [
			{ id: 1, name: 'Snow', email: 'Jon', created_at:""},
		  ];
		}
	  };
	var rows = mapCategoryDataToRows(customerInfo);
	return (
		<Box sx={{ height: 400, width: '100%' }}>
			{/* {console.log(customerInfo,'customerInfo')} */}
			<DataGrid
				rows={customerInfo.length ? customerInfo : rows}
				columns={columns}
				getRowId={(row) => row.id || 2 }
				// initialState={{
				// 	pagination: {
				// 		paginationModel: {
				// 			pageSize: 5
				// 		}
				// 	}
				// }}
				// pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
}

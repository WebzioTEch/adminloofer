import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Button } from "@mui/material";

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { showCategoryDispatch } from 'reducers/HomeReducer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



var rows = [
	{ id: 1, name: 'Snow', slug: 'Jon', age: 35 },
];

export default function CategoryTable() {
	const dispatch = useDispatch(); 
	const categoryData = useSelector((state) => state.home.category.categoryInfo);
	const [productInfo,setProductInfo] = useState([])





	
	useEffect(()=>{
		// console.log(categoryData,":","calling show category");
		// var storageData=localStorage.getItem('category_list')
		// setProductInfo(JSON.parse(storageData))
		// console.log("hhsdhsh", productInfo)
		// dispatch(showCategoryDispatch());
		fatchData();			

	},[dispatch])

	const fatchData=()=>{
		
		const config = {
			
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		};

			fetch(`https://loofer.bellazza.in/api/admin/categories`,config).then(response=> response.json()).then(res => {
					console.log(res,'res reeees')
					let product=[];
					if(res){
					res.map((val)=>{
						product.push(val)
					})
					setProductInfo(product);

					console.log({res});
				}else{
					Swal.fire({
						title: "Category Status",
						text: "You are not authorized as admin",
						icon: "error",
						});
				}
				}).catch(err => {
					console.error({err});
				});

	}

	const mapCategoryDataToRows = (data) => {
		console.log(data, 'data');
		if (data && Array.isArray(data) && data.length > 0) {
		  return data.map((category) => ({
			id: category?.id||Math.floor(new Date().getTime()),
			name: category?.name,
			slug: category?.slug,
			description: category?.description,
			parent: category?.parent || 0,
			image_url: category.image_url,
			// Map other properties as needed
		  }));
		} else {
		  return [
			{ id: 1, name: 'Snow', slug: 'Jon', age: 35, parent: "0"},
		  ];
		}
	  };
	  
	  var rows = mapCategoryDataToRows(productInfo);

	  const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			editable: true
		},
		{
			field: 'slud',
			headerName: 'Slug',
			width: 150,
			editable: true
		},
		{
			field: 'description',
			headerName: 'Description',
			type: 'number',
			width: 110,
			editable: true
		},
		{
			field: 'parent',
			headerName: 'Parent',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			renderCell: (params) =>{ 
				console.log('parent', params);
			   return params?.row?.parent?.id;
		}
	},
		{
			field: 'image_url',
			headerName: 'Image Url',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			renderCell: (params) =>{ 
				console.log('params', params);
			   return <img src={params.row.image_url} style={{ height: 50 }} />},
			  
			
		},
		{
			field: "action",
			headerName: "Action",
			width: 300,
			editable: true,
			renderCell: (cellValues) => {
			  console.log("cellValues", cellValues)
			  return (
				<Box style={{ display: "flex", justifyContent: "space-between" }}>
				  <Button
					variant="contained"
					color="primary"
					style={{ marginLeft: 10 }}
					onClick={(event) => {
					  const config = {
						method: 'DELETE',
						headers: {
						  "Content-Type": "multipart/form-data",
						  Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					  };
				  
					  fetch("https://loofer.bellazza.in/api/admin/categories/"+cellValues.id,  config).then(response => response.json())
					  .then((res) => {
						  console.log(res)
						  let product = [];
						  if (res) {
							Swal.fire({
							  title: "Category Status",
							  text: "Delete Banner",
							  icon: "success",
							  });
							  fatchData();	
						  }else{
							Swal.fire({
							  title: "Banner Status",
							  text: "You are not authorized as admin",
							  icon: "error",
							  });
						  }
				  
						  console.log({ res });
						})
					}}
				  >
					Delete
				  </Button>
				</Box>
			  );
			},
		  },
	];
	
	  
	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
		
				rows={productInfo?.length >0 ? productInfo :rows}
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

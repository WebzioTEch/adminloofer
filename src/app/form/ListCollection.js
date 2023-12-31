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
import { useNavigate } from 'react-router-dom';



var rows = [
	{ id: 1, name: 'Snow', slug: 'Jon', age: 35 },
];

export default function ListCollectionTable() {
	const dispatch = useDispatch(); 
	const categoryData = useSelector((state) => state.home.category.categoryInfo);
	const [productInfo,setProductInfo] = useState([])

	const navigate = useNavigate();



	
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

			fetch(`https://loofer.bellazza.in/api/list-collection`,config).then(response=> response.json()).then(res => {
					console.log(res,'res reeees')
					let product=[];
					if(res){
					res?.data.map((val)=>{
						product.push(val)
					})
					setProductInfo(product);

					console.log({res});
				}else{
					Swal.fire({
						title: "Collection Status",
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
			title: category?.title,
			url: category?.url,
			
			image_url: category?.image,
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
        field: 'title',
        headerName: 'Title',
        width: 150,
        editable: true
      },
      {
        field: 'url',
        headerName: 'Url',
        width: 150,
        editable: true
      },

      {
        field: 'image_url',
        headerName: 'Image Url',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
          console.log('params', params);
          return <img src={params.row.image} style={{ height: 50 }} />;
        }
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 300,
        editable: true,
        renderCell: (cellValues) => {
          console.log('cellValues', cellValues);
          return (
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: 10 }}
                onClick={(event) => {
                  const config = {
                    headers: {
                      //   "Content-Type": "multipart/form-data",
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                  };

                  axios
                    .post(
                      'https://loofer.bellazza.in/api/admin/delete-collection',
                      { collection_id: cellValues.id },
                      config
                    )
                    .then((res) => {
                      console.log(res);
                      let product = [];
                      if (res.data.status) {
                        Swal.fire({
                          title: 'Collection Status',
                          text: 'Delete Collection',
                          icon: 'success'
                        });
                        fatchData();
                      } else {
                        Swal.fire({
                          title: 'Collection Status',
                          text: 'You are not authorized as admin',
                          icon: 'error'
                        });
                        fatchData();
                      }

                      console.log({ res });
                    });
                }}
              >
                Delete
              </Button>
            </Box>
          );
        }
      },
      {
        field: '',
        headerName: 'Edit',
        width: 300,
        editable: true,
        renderCell: (params) => {
          return (
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: 10 }}
                onClick={()=>{
					navigate(`/dashboard/editcollection/${params.id}`);
				}}
              >
                Edit
              </Button>
            </Box>
          );
        }
      }
    ];
	
	  
	return (
		<>
		<div className='container' style={{margin: "20px"}}>
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
		</div>
		</>
		
	);
}

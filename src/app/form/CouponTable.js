import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Discount_Amount",
    headerName: "Discount Amount",
    width: 150,
    editable: true,
  },
  {
    field: "Discount_Quantity",
    headerName: "Discount Quantity",
    width: 150,
    editable: true,
  },
  {
    field: "Free_Shipping",
    headerName: "Free Shipping",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Reward_pts",
    headerName: "Reward Points",
    type: "number",
    width: 110,
    editable: true,
  },

{
    field: "Processing_Status",
    headerName: "Processing Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Color",
    headerName: "Color",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Ship_Charges",
    headerName: "Ship Charges",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Max_Quantity",
    headerName: "Max Quantity",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function CouponTable() {

	const [couponInfo,setCouponInfo] = useState([])
	useEffect(()=>{
		
		// var storageData=localStorage.getItem('coupon_list')
		// setCouponInfo(JSON.parse(storageData))
		// console.log("hushpuppies", couponInfo)
		// dispatch(showCategoryDispatch());
					
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("https://loofer.bellazza.in/api/admin/banners",  config).then(response => response.json())
    .then((res) => {
        console.log(res)
        let product = [];
        if (res) {
          res.map((val)=>{
          product.push(val);
          })
          setCouponInfo(product);
        }else{
          Swal.fire({
            title: "Banner Status",
            text: "You are not authorized as admin",
            icon: "error",
            });
        }

        console.log({ res });
      })
      .catch((err) => {
        console.error({ err });
      });

	},[])

	const mapCategoryDataToRows = (data) => {
		console.log(data, 'data');
		if (data && Array.isArray(data) && data.length > 0) {
		  return data.map((category) => ({
			id: category?.id||Math.floor(Math.random() * 100),
			Discount_Amount: category?.discount_amt,
			Discount_Quantity: category?.discount_quantity,
			Free_Shipping: category?.free_shipping,
			Max_Quantity: category?.max_quantity,
			Reward_pts: category?.reward_pts,
			Ship_Charges: category?.ship_charges,
			Processing_Status: category?.stop_processing,
			Color: category.color,
			// Map other properties as needed
		  }));
		} else {
		  return [];
		}
	  };
	  
	  var rows = mapCategoryDataToRows(couponInfo);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

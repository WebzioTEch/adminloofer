import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproductDispatch,
  showproductDispatch,
} from "reducers/HomeReducer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const rows = [
  {
    id: "1",
    name: "snow",
    product_type: "demo",
    description: "demo",
    price: "123",
    offer_price: "1233",
    features_image: "123123",
    category_id: "123",
  },
];

export default function ProductTable() {
  const initialEditedData = {};
  const dispatch = useDispatch();
  const [editedData, setEditedData] = useState(initialEditedData);
  const [productInfo, setProductInfo] = useState([]);
  const [productFeilds, setProductFeilds] = useState([]);

  const userInfo = useSelector((state) => state);
  const token = useSelector((state) => state);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "First name",
      width: 150,
      editable: true,
      sortable: false,
      valueGetter: (params) => `${params.row.name || ""}`,
    },
    {
      field: "product_type",
      headerName: "Product Type",
      width: 150,
      editable: true,
      sortable: false,
      valueGetter: (params) => `${params.row.product_type || ""}`,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      width: 160,
      editable: true,
      sortable: false,
      valueGetter: (params) => `${params.row.description || ""}`,
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      type: "number",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.price || ""}`,
    },
    {
      field: "offer_price",
      headerName: "Offer Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.offer_price || ""}`,
    },
    {
      field: "features_image",
      headerName: "Features Image",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.features_image || ""}`,
      renderCell: (params) => (
        <img src={params.row.features_image} width={50} height={50} />
      ),
    },
    {
      field: "category_id",
      headerName: "Category id",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.category_id || ""}`,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <React.Fragment>
          <GridDeleteIcon
            onClick={() => handleDelete(params.row.id)}
            style={{ cursor: "pointer" }}
          />
        </React.Fragment>
      ),
    },
    //   {
    // 	field: 'Edit',
    // 	headerName: 'Actions',
    // 	width: 100,
    // 	sortable: false,
    // 	renderCell: (params) => (

    // 	  <span onClick={() => handleEdit(params.row.id)} style={{ cursor: 'pointer' }}>
    // 	  Edit
    // 	</span>
    // 	),
    //   },
  ];

  const ID = "7";

  const handleDelete = (idToDelete) => {
    dispatch(deleteproductDispatch(ID));
    console.log(`Delete row with ID: ${idToDelete}`);
    fatchData();
  };

  const handleCellEdit = (editData) => {
    console.log("editing");
    console.log(editData);
    setEditedData((prevData) => ({
      ...prevData,
      [editData.id]: editData,
    }));
  };

  const handleEdit = (idToEdit) => {
    console.log(idToEdit);
    // Check if the edited data is available in the editedData object
    if (editedData[idToEdit]) {
      const editedRow = editedData[idToEdit];
      // Dispatch an API call here with the editedRow data
      // Example: dispatch(updateProductDispatch(ID, editedRow));
      console.log("Edited data:", editedRow);
    }
  };

  useEffect(() => {
    // var storageData=localStorage.getItem("product_list");
    // setProductFeilds(JSON.parse(storageData));
    // console.log("lo;;yjpdr", productFeilds);

    // console.log("userInfo:",userInfo)
    // console.log("Token:",token)
    // dispatch(showproductDispatch(ID));
    fatchData();
  }, []);

  const fatchData = () => {
    const config = {
      method: "POST",
      body: {},
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(`https://loofer.bellazza.in/api/list-product`, config)
      .then((response) => response.json())
      .then((res) => {
        console.log(res, "res reeees");
        let product = [];
        if (res) {
          // res.data.data.map((val)=>{
          product.push(res.message);
          // })
          setProductInfo(res.message);

          console.log({ res });
        } else {
          Swal.fire({
            title: "Product Status",
            text: "You are not authorized as admin",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  const mapCategoryDataToRows = (data) => {
    console.log(data, "data");
    if (data && Array.isArray(data) && data.length > 0) {
      return data.map((category) => (console.log("hopppeee", category),
	  {
		
        id: category?.id || Math.floor(new Date().getTime()),
        name: category?.name,
        offer_price: category?.offer_price,
        product_type: category?.product_type,
        price: category?.price,
        quantity: category?.quantity,
        description: category?.description,
        image_url: category.image_url,
        sku: category.sku,
        // Map other properties as needed
      }));
    } else {
      return [];
    }
  };

  var rows = mapCategoryDataToRows(productInfo);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {console.log(productInfo, "productInfo")}
      <DataGrid
        // rows={productInfo}
        rows={productInfo?.length > 0 ? productInfo : rows}
        columns={columns}
        onEditCellChange={handleCellEdit}
		getRowId={(row) => {
			console.log("Logging in getRowId",row);
			return row?.id;
		  }}
		
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

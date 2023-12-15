import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { showbannerDispatch } from "reducers/HomeReducer";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    image:
      "https://admin-six-iota.vercel.app/assets/images/products/headphone-2.jpg",
    name: "Jon",
  },
];

export default function BannerTable() {
  var navigate = useNavigate()
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const token = useSelector((state) => state.home.token);
  const [bannerInfo, setbannerInfo] = useState([]);
  const [bannerFeilds, setBannerFeilds] = useState([]);

  // , formData,config

  useEffect(() => {
    // var storageData = localStorage.getItem("banner_list");
    // setBannerFeilds(JSON.parse(storageData));
    // console.log("lo;;yjpdr", bannerFeilds);

    // dispatch(showbannerDispatch(ID));
    getBanners()
  }, []);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getBanners = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

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
          setbannerInfo(product);
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
  };

  const mapCategoryDataToRows = (data) => {
    console.log(data, "data");
    if (data && Array.isArray(data) && data.length > 0) {
      return data.map((category) => ({
        id: category?.id || Math.floor(new Date().getTime()),
        description: category?.description,
        image: category.image_url,
        // Map other properties as needed
      }));
    } else {
      return [];
    }
  };

  var rows = mapCategoryDataToRows(bannerInfo);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Image",
      width: 300,
      height: 300,
      editable: true,
      renderCell: (params) =>{ 
      console.log('params', params);
     return <img src={params.row.image_url} style={{ height: 50 }} />},
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      height: 300,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      editable: true,
      renderCell: (cellValues) => {
        console.log("cellValues", cellValues)
        return (
          <>
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
            
                fetch("https://loofer.bellazza.in/api/admin/banners/"+cellValues.id,  config).then(response => response.json())
                .then((res) => {
                    console.log(res)
                    let product = [];
                    if (res) {
                      Swal.fire({
                        title: "Banner Status",
                        text: "Delete Banner",
                        icon: "success",
                        });
                        getBanners()
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

<Box style={{ display: "flex", justifyContent: "space-between" }}>
<Button
  variant="contained"
  color="warning"
  style={{ marginLeft: 10 }}
  onClick={(event) => {
    localStorage.setItem('editBanner', JSON.stringify(cellValues?.row))
    setTimeout(() => {
      navigate('/dashboard/editbanner')
    }, 2000);
  }}
>
  Edit
</Button>
</Box>
          </>
      
        );
      },
    },
  ];
  

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* <Grid item xs={12} lg={3}>
        <Button
          type="button"
          style={{
            background: "rgb(25, 118, 210)",
            color: "white",
            marginTop: 30,
            borderRadius: 5,
            width: "100%",
          }}
          onClick={getBanners}
        >
          Get Banners
        </Button>
      </Grid> */}
      <DataGrid
        rows={bannerInfo.length > 0 ? bannerInfo : rows}
        columns={columns}
        getRowId={(row) => row.id}
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

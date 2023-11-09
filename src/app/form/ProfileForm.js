import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Box, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createproductDispatch } from "reducers/HomeReducer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const Navigate =useNavigate();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataArray, setDataArray] = useState(
    JSON.parse(String(localStorage.getItem("category_list"))) || []
  );
  const token = useSelector((state) => state.home.token);
  const [img, setImageData] = useState(null);
  const [attributes, setAttributes] = useState([]);

  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    product_type: "",
    description: "",
    sku: "",
    price: "",
    offer_price: "",
    quantity: "",
    category_id: "",
    features_image: null,
  });
  const [productArray,setProductArray]=useState(
	JSON.parse(String(localStorage.getItem("product_list")))||[]
  );

  // const onImageChange = e => {
  // 	const formData = new FormData({});

  // 	if (e.target && e.target.files[0]) {
  // 	  formData.append('features_image', e.target.files[0])
  // 	  // for (const value of formData.values()) {
  // 	  setImageData(formData)
  // 	  // }
  // 	}
  //   }

  useEffect(() => {
   
     fetchData()
  })
  

//   const handleFormSubmit = (values, { resetForm }) => {
	const handleFormSubmit = (values, index) => {
	
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
    try {
      let img = values.features_image;
      console.log(img, "img");
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("product_type", values.product_type);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("offer_price", values.offer_price);
      formData.append("category_id[]", values.category_id);

      formData.append("features_image", values.features_image);
      formData.append("stock", values.stock);
      formData.append("attribute_value_id[]", values.size);



      const config = {
        method:'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData
      };

      fetch(
          "https://loofer.bellazza.in/api/admin/product_create",
          config
        )
        .then((res) => {
          if(res.status==200){
            setSuccessMessage("Product added successfully");
            Swal.fire({
              title: "Product Status",
              text: "Product added successfully",
              icon: "success",
              });
              setTimeout(() => {
                Navigate("/dashboard/productlist")
              }, 1000);
            
          }else{
            Swal.fire({
              title: "Product Status",
              text: "You are not authorized as admin",
              icon: "error",
              });
          }
          
          // resetForm();
          console.log({ res });
        })
        .catch((err) => {
          console.error({ err });
        });

      // dispatch(createproductDispatch(formData));
    } catch (error) {
      console.error("Error:", error);
    }
   };

  const validationSchema = Yup.object({
    // email: Yup.string().email('Invalid email address').required('Email is required'),
    name: Yup.string().required("name is required"),
    product_type: Yup.string().required("product_type is required"),
    description: Yup.string().required("description is required"),
    sku: Yup.number().required("sku is required"),
    category: Yup.string().required("category is required"),
    price: Yup.number().required("price is required"),
    offer_price: Yup.number().required("offer_price is required"),
    quantity: Yup.number().required("quantity is required"),
    category_id: Yup.number().required("category_id is required"),
    features_image: Yup.mixed().required("features_image is required"),
  });



  const fetchData = () => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

  fetch(`https://loofer.bellazza.in/api/admin/categories`, config)
    .then((response) => response.json())
    .then((res) => {
      console.log(res, "res reeees");
      let product = [];
      if (res) {
        res.map((val) => {
          product.push(val);
        });
        setDataArray(product);

        console.log({ res });
      } else {
        Swal.fire({
          title: "Category Status",
          text: "You are not authorized as admin",
          icon: "error",
        });
      }
    })
    .catch((err) => {
      console.error({ err });
    });


    fetch(`https://loofer.bellazza.in/api/admin/get_all_attributes`, config)
    .then((response) => response.json())
    .then((res) => {
      console.log(res, "res reeees");
      let product = [];
      if (res) {
        res.map((val) => {
          product.push(val);
        });
        setAttributes(product);

        console.log({ res });
      } else {
        Swal.fire({
          title: "Attribute Status",
          text: "You are not authorized as admin",
          icon: "error",
        });
      }
    })
    .catch((err) => {
      console.error({ err });
    });
};

  return (
    <Formik
      initialValues={{
        // email:'',
        name: "",
        product_type: "",
        description: "",
        stock: "",
        size: "",

        category: "",
        price: "",
        offer_price: "",
        quantity: "",
        category_id: "",
        features_image: null,
      }}
      // validationSchema={validationSchema}
      onSubmit={(e) => {
        // e.preventDefault()
        for (let index = 0; index < 1; index++) {
          // const element = array[index];
          handleFormSubmit(e, index);
        }
      }}
    >
      {(formik) => {
        const { errors, setFieldValue } = formik;
        return (
          <Form encType="multipart/form-data">
            <Box style={{ padding: 10 }}>
              <Box
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px",
                  padding: 30,
                  background: "white",
                }}
              >
                <h2>Add New Product</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  {successMessage && (
                    <div style={{ color: "green", marginBottom: 10 }}>
                      {successMessage}
                    </div>
                  )}
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.name ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="name"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="product_type"
                      type="text"
                      placeholder="product Code"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.product_type
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="product_type"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="description"
                      as="textarea"
                      rows="10"
                      type="text"
                      placeholder="description"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.description
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="description"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="stock"
                      type="text"
                      placeholder="Stock"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.stock ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="stock"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                 <Grid item xs={12} lg={6}>
                    <Field
                      name="size"
                      as="select"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.size
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                    >
                    <option value=''></option>
                      
                    <option value='4'>XL</option>
                  
                     
                      
                      {/* Add more options as needed */}
                    </Field>
                    <br />
                    <ErrorMessage
                      name="category_id"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} lg={6}>
                    <Field
                      name="category"
                      type="text"
                      placeholder="CATEGORY"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.category
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="category"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid> */}
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="price"
                      type="text"
                      placeholder="PRICE"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.price ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="price"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="offer_price"
                      type="text"
                      placeholder="Sale Price"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.offer_price
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="offer_price"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>{" "}
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="quantity"
                      type="text"
                      placeholder="Quantity"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.quantity
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    <ErrorMessage
                      name="quantity"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="category_id"
                      as="select"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors?.category_id
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                    >
                      {dataArray.map((map)=>{
                        return  <option value={map.id}>{map.name}</option>
                      })}
                     
                      
                      {/* Add more options as needed */}
                    </Field>
                    <br />
                    <ErrorMessage
                      name="category_id"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <input
                      name="features_image"
                      type="file"
                      value={undefined}
                      //   onChange={onImageChange}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "features_image",
                          event.target.files[0]
                        );
                      }}
                      // style={{
                      // padding: 10,
                      // width: '100%',
                      // borderRadius: 5,
                      // border: errors?.features_image ? '2px solid red' : '1px solid',
                      // marginTop: 10
                      // }}
                      // inputProps={{
                      // style: { padding: 12 }
                      // }}
                    />
                    <br />
                    <ErrorMessage
                      name="features_image"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}></Grid>
                  <Grid item xs={12} lg={3}>
                    <Button
                      type="submit"
                      style={{
                        background: "red",
                        color: "white",
                        marginTop: 30,
                        borderRadius: 5,
                        width: "100%",
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;

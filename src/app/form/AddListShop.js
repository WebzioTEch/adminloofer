import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { Grid, Box, Button, Divider } from "@mui/material";
import { createCategoryDispatch , createListShopDispatch} from "reducers/HomeReducer";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { SwapCalls } from "@mui/icons-material";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddListShopForm = () => {
  const Navigate =useNavigate();
  const [dataArray, setDataArray] = useState(
    JSON.parse(String(localStorage.getItem("category_list"))) || []
  );
  // const [categoryInfo, setCategoryInfo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = (values, index) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("url", values.url);
  
    formData.append("image", values.image);
    // formData.append("sub_parent_id", values.sub_parent_id);

    dispatch(createListShopDispatch(formData));
    console.log(values);
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    url: Yup.string().required("Url is required"),

    image: Yup.string().required("Image URL is required"),
    // .url('Invalid URL')
  });

  const fetchData = () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(`https://loofer.bellazza.in/api/admin/categories`, config)
      .then((response) => response.json())
      .then((res) => {
        let product = [];
        if (res) {
          res.map((val) => {
            product.push(val);
            
          });
          setDataArray(product);
          

          console.log({ res });
          
        }
        
      })
      .catch((err) => {
        console.error({ err });
      });
  
  };

  return (
    <Formik
      initialValues={{
        title: "",
        url: "",
       
        image: "",
        // sub_parent_id:""
      }}
      onSubmit={(e) => {
        // e.preventDefault()
        for (let index = 0; index < 1; index++) {
          // const element = array[index];
          handleFormSubmit(e, index);
        }
      }}
      validationSchema={validationSchema} // Apply validation schema to Formik
    >
      {(formik) => {
        const { errors } = formik;
        return (
          <Form>
            <Box style={{ padding: 10 }}>
              <Box
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px",
                  padding: 30,
                  background: "white",
                }}
              >
                <h2>Add New List Shop</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="title"
                      type="text"
                      placeholder="Title"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.title ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.name ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.title}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="url"
                      type="text"
                      placeholder="https:// or http://"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.slug ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.slug ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.slug}
                      </span>
                    ) : null}
                  </Grid>
                 
                  {/* <Grid item xs={12} lg={6}>
                    <Field
                      name="sub_parent_id"
                      type="text"
                      placeholder=" Sub Parent ID"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.sub_parent_id
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.sub_parent_id ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.sub_parent_id}
                      </span>
                    ) : null}
                  </Grid> */}
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="image"
                      value={undefined}
                      type="file" // Use type 'file' for file uploads
                      placeholder="Image"
                      onChange={(event) => {
                        // Set the selected image file in Formik's values
                        formik.setFieldValue(
                          "image",
                          event.currentTarget.files[0]
                        );
                      }}
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.image ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.image ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.image}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={6}></Grid>
                  <Grid item xs={12} lg={3}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        marginTop: 30,
                        // padding: 16,
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
export default AddListShopForm;

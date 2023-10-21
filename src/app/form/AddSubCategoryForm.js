import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { Grid, Box, Button, Divider } from "@mui/material";
import { createCategoryDispatch } from "reducers/HomeReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SwapCalls } from "@mui/icons-material";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import Swal from "sweetalert2";

const AddSubCategoryForm = () => {
  const [dataArray, setDataArray] = useState(
    JSON.parse(String(localStorage.getItem("category_list"))) || []
  );
  const [categoryInfo, setCategoryInfo] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = (values, index) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("description", values.description);
    formData.append("parent_id", values.parent_id);
    formData.append("image", values.image);
    formData.append("sub_parent_id", values.sub_parent_id);

    dispatch(createCategoryDispatch(formData));
    console.log("values saved :",values);
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    slug: Yup.string().required("Slug is required"),
    description: Yup.string().required("Description is required"),
    parent_id: Yup.string().required("Parent ID is required"),
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
  };
 

  return (
    <Formik
      initialValues={{
        name: "",
        slug: "",
        description: "",
        parent_id: "",
        image: "",
        sub_parent_id: "8",
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
                <h2>Add Sub Category</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.name ? "2px solid red" : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.name ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.name}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="slug"
                      type="text"
                      placeholder="Slug"
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
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="description"
                      type="text"
                      placeholder="Description"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.description
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.description ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.description}
                      </span>
                    ) : null}
                  </Grid>
                  {/* <Grid item xs={12} lg={6}>
                    <Field
                      name="parent_id"
                      type="text"
                      placeholder="Parent ID"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.parent_id
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.parent_id ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.parent_id}
                      </span>
                    ) : null}
                  </Grid> */}
                  <Grid item xs={12} lg={6}>
                    <InputLabel htmlFor="parent_id">Parent ID</InputLabel>
                    <Field
                      as={Select}
                      style={{
                        padding: 5,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.description
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 5,
                      }}
                      name="parent_id"
                      label="Parent ID"
                      error={errors.parent_id ? true : false}
                      helperText={<ErrorMessage name="parent_id" />}
                    >
                      
                      
                      {dataArray.map(count => {
                        return ( <MenuItem value={count.id}>
                        <em>{count.name}</em>
                      </MenuItem>)
                       
                      })}
                    </Field>
                  </Grid>
                  <Grid item xs={12} lg={6}>
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
                  </Grid>
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
export default AddSubCategoryForm;

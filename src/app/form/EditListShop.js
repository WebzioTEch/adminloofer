import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { Grid, Box, Button, Divider } from '@mui/material';
import { createCategoryDispatch, createListShopDispatch } from 'reducers/HomeReducer';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { SwapCalls } from '@mui/icons-material';
import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';

import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditListShop = () => {
  const navigate = useNavigate();
  const [dataArray, setDataArray] = useState(
    JSON.parse(String(localStorage.getItem('category_list'))) || []
  );
  // const [categoryInfo, setCategoryInfo] = useState();
  const dispatch = useDispatch();
  const [editData, setEditData] = useState();
  const { id } = useParams();


  useEffect(() => {
    fatchEditData();
  }, []);

  const fatchEditData = () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };

    fetch(`https://loofer.bellazza.in/api/list-shop-event`, config)
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          const editData = res?.data.filter(val => val.id===parseInt(id))[0];
          setEditData(editData);
        } else {
          Swal.fire({
            title: 'List Shop Status',
            text: 'You are not authorized as admin',
            icon: 'error'
          });
        }
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = (values, index) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('url', values.url);

    formData.append('image', values.image);
    // formData.append("sub_parent_id", values.sub_parent_id);

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('slug', values.slug);
      formData.append('description', values.description);
      formData.append('parent_id', values.parent_id);
      formData.append('image', values.image);

      const config = {
        // method:'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };

      axios
        .post(`https://loofer.bellazza.in/api/admin/edit-shop-event/${id}`, formData, config)
        .then((res) => {
          if (res.status == 200) {
            Swal.fire({
              title: 'Category Status',
              text: 'Category Edited successfully',
              icon: 'success'
            });
            setTimeout(() => {
              navigate('/dashboard/add-list-shop-list');
            }, 1000);
          } else {
            Swal.fire({
              title: 'Category Status',
              text: 'You are not authorized as admin',
              icon: 'error'
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
      console.error('Error:', error);
    }
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    url: Yup.string().required('Url is required'),

    image: Yup.string().required('Image URL is required')
    // .url('Invalid URL')
  });

  const fetchData = () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
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


  console.log("editData", editData);
  return (
    <Formik
      key={editData?.id || 'new'}
      enableReinitialize
      initialValues={{
        title: editData?.title,
        url: editData?.url,

        image: editData?.image
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
                    'rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px',
                  padding: 30,
                  background: 'white'
                }}
              >
                <h2>Edit List Shop</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="title"
                      type="text"
                      placeholder="Title"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: errors.title ? '2px solid red' : '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                    <br />
                    {errors.name ? (
                      <span style={{ color: 'red', fontSize: 12 }}>{errors.title}</span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="url"
                      type="text"
                      placeholder="https:// or http://"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: errors.slug ? '2px solid red' : '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                    <br />
                    {errors.slug ? (
                      <span style={{ color: 'red', fontSize: 12 }}>{errors.slug}</span>
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
                        formik.setFieldValue('image', event.currentTarget.files[0]);
                      }}
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: errors.image ? '2px solid red' : '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                    <br />
                    {errors.image ? (
                      <span style={{ color: 'red', fontSize: 12 }}>{errors.image}</span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={6}></Grid>
                  <Grid item xs={12} lg={3}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                        marginTop: 30,
                        // padding: 16,
                        borderRadius: 5,
                        width: '100%'
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
export default EditListShop;

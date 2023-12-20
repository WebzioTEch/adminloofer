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
import "./ProfileForm.css";




const ProfileForm = () => {
  const Navigate =useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([])
  const [attributes, setAttributes] = useState([]);
  const [img, setImageData] = useState([]);


  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    product_type: "",
    description: "",
    price: "",
    offer_price: "",
    quantity: "",
    stock:""
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
  };


  useEffect(() => {
     fetchAttributes();
     fetchCat();
  },[])
  
  const fetchAttributes = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };

      // Fetch attributes
      const attributesResponse = await fetch(
        'https://loofer.bellazza.in/api/admin/get_all_attributes',
        config
      );

      if (!attributesResponse.ok) {
        throw new Error(`Error fetching attributes. HTTP status: ${attributesResponse.status}`);
      }

      const attributesData = await attributesResponse.json();

      console.log(attributesData, 'attributes data');

      if (attributesData) {
        setAttributes(attributesData.data);
      } else {
        Swal.fire({
          title: 'Category Status',
          text: 'Failed to retrieve attributes',
          icon: 'error'
        });
      }
    } catch (err) {
      console.error('Error fetching attributes:', err.message || err.response || err);
    }
  };
  async function fetchCat() {
    try {
      const data = await fetch('https://loofer.bellazza.in/api/get_all_category');

      if (!data.ok) {
        // Handle non-successful response (e.g., status code other than 200)
        throw new Error(`Failed to fetch categories. Status: ${data.status}`);
      }

      const res = await data.json();
      setCategory(res.categories);
    } catch (error) {
      // Handle errors, log them, or show an alert
      console.error('Error fetching categories:', error.message);
      // You can also show an alert or perform other error handling actions here
    }
  }
  

	const handleFormSubmit = (values, index) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("product_type", 1);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("offer_price", values.offer_price);
      formData.append('quantity', values.quantity);
      for(let i=0; i<img.length; i++){
        formData.append(`features_image[${i===3?4:i}]`, img[i]);
      }
      formData.append("stock", values.stock);
      formData.append('attribute_value_id', selectedOptions);
      formData.append('category_id', values.category_id);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        // body: formData
      };

      axios.post(
          "https://loofer.bellazza.in/api/admin/product_create",
          formData,
          config
        )
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            setSuccessMessage('Product added successfully');
            console.log(formData, 'f');
            Swal.fire({
              title: 'Product Status',
              text: 'Product added successfully',
              icon: 'success'
            });
            setTimeout(() => {
              Navigate('/dashboard/productlist');
            }, 1000);
          } else {
            Swal.fire({
              title: 'Product Status',
              text: 'You are not authorized as admin',
              icon: 'error'
            });
          }
          
          // resetForm();
          console.log({ res });
        })
        .catch((err) => {
          console.error({ err });
           Swal.fire({
             title: 'Product Status',
             text: 'Product Creation Failed',
             icon: 'error'
           });
        });

      // dispatch(createproductDispatch(formData));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    product_type: Yup.string().required('product_type is required'),
    description: Yup.string().required('description is required'),
    stock: Yup.number().required('stock is required'),
    price: Yup.number().required('price is required'),
    offer_price: Yup.number().required('offer_price is required'),
    quantity: Yup.number().required('quantity is required'),
    // size: Yup.array().of(Yup.string()).required('Size is required')
  });

  console.log("img", img);
  console.log("sf", selectedOptions);
return (
  <Formik
    initialValues={{
      name: '',
      product_type: '',
      description: '',
      stock: '',
      price: '',
      offer_price: '',
      quantity: '',
      category_id:'',
    }}
    validationSchema={validationSchema}
    onSubmit={(e) => {
      for (let index = 0; index < 1; index++) {
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
                  'rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px',
                padding: 30,
                background: 'white'
              }}
            >
              <h2>Add New Product</h2>
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
              <Grid container style={{ padding: 10 }} spacing={4}>
                {successMessage && (
                  <div style={{ color: 'green', marginBottom: 10 }}>{successMessage}</div>
                )}
                <Grid item xs={12} lg={6}>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.name ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Field
                    name="product_type"
                    type="text"
                    placeholder="product Code"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.product_type ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="product_type"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
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
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.description ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="description"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Field
                    name="stock"
                    type="text"
                    placeholder="Stock"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.stock ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="stock"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Field
                    name="category_id"
                    as="select"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.size ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                  >
                    <option value="">Category</option>

                    {/* <option value='4'>XL</option> */}

                    {category?.map((map) => {
                      return map?.child?.length > 0 ? (
                        map.child.map((e) => (
                          <option value={map.id}>
                            {e.name} ({map.name}){' '}
                            {map?.parent?.name ? `(${map.parent.name})` : null}
                          </option>
                        ))
                      ) : (
                        <option value={map.id}>
                          {map.name} {map?.parent?.name ? `(${map.parent.name})` : null}
                        </option>
                      );
                    })}

                    {/* Add more options as needed */}
                  </Field>
                  <br />
                  <ErrorMessage
                    name="category_id"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
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
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.price ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="price"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Field
                    name="offer_price"
                    type="text"
                    placeholder="Sale Price"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.offer_price ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="offer_price"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>{' '}
                <Grid item xs={12} lg={6}>
                  <Field
                    name="quantity"
                    type="text"
                    placeholder="Quantity"
                    style={{
                      padding: 10,
                      width: '100%',
                      borderRadius: 5,
                      border: errors?.quantity ? '2px solid red' : '1px solid',
                      marginTop: 10
                    }}
                    inputProps={{
                      style: { padding: 12 }
                    }}
                  />
                  <br />
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div className={`multi-select-dropdown ${isOpen ? 'open' : ''}`}>
                    <div className="dropdown-header" onClick={toggleDropdown}>
                      Select Options
                    </div>
                    {isOpen && (
                      <div className="dropdown-content">
                        {attributes
                          ?.filter((e) => e.type === 'size' && e.name !== 'size')
                          .map((option) => (
                            <label key={option.id}>
                              <input
                                type="checkbox"
                                value={option.id}
                                checked={selectedOptions.includes(option.id)}
                                onChange={() => handleCheckboxChange(option.id)}
                              />
                              {option.name}
                            </label>
                          ))}
                      </div>
                    )}
                  </div>
                  <br />
                  <ErrorMessage
                    name="size"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <input
                    name="features_image"
                    type="file"
                    value={undefined}
                    multiple
                    onChange={(event) => {
                      if (event.target.value[0]) {
                        setImageData([...img, event.target.files[0]]);
                      }
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
                  {img.map((i) => (
                    <h4>{i.name}</h4>
                  ))}
                  <ErrorMessage
                    name="features_image"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}></Grid>
                <Grid item xs={12} lg={3}>
                  <Button
                    type="submit"
                    style={{
                      background: 'red',
                      color: 'white',
                      marginTop: 30,
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

export default ProfileForm;

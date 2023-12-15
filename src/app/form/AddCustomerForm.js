import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Grid, Box, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Swal from "sweetalert2";

const AddCustomerForm = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("phone", values.mobile);
    formData.append("gender", values.gender);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };
    console.log("body is this", formData.get('name'));

    fetch(
      `https://loofer.bellazza.in/api/admin/add_user`,
      requestOptions
    )
    .then(data=>{
      console.log("data", data);
      if (data.status == 200) {
        Swal.fire({
          title: "Create User  Status",
          text: "User Created",
          icon: "success",
        });
      }
    })
    
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        mobile: "",
        gender:""
      }}
      onSubmit={(e) => {
        // e.preventDefault()
        for (let index = 0; index < 1; index++) {
          handleFormSubmit(e);
        }
      }}
    >
      {(formik) => {
        const { errors, setFieldValue } = formik;
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
                <h2>Add New Customer</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="name"
                      type="text"
                      placeHolder="Name"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Field
                      name="email"
                      type="text"
                      placeHolder="Email"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="password"
                      type="password"
                      placeHolder="Password"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="mobile"
                      type="text"
                      placeHolder="Mobile"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Field
                      name="gender"
                      as="select"
                      style={{
                        padding: 10,
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid',
                        marginTop: 10
                      }}
                      inputProps={{
                        style: { padding: 12 }
                      }}
                    >
                      <option value="" label="Gender" />
                      <option value="male" label="Male" />
                      <option value="female" label="Female" />
                    </Field>
                    {errors.gender && (
                      <div style={{ color: 'red', marginTop: '5px' }}>{errors.gender}</div>
                    )}
                  </Grid>

                  <Grid item xs={12} lg={3}>
                    <Button
                      type="submit"
                      style={{
                        background: 'red',
                        color: 'white',
                        marginTop: 30,
                        // padding: 16,
                        borderRadius: 5,
                        width: '100%'
                      }}
                    >
                      Proceed
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

export default AddCustomerForm;

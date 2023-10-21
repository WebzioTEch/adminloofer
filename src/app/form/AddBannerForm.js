import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Grid, Box, Button, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { json } from "react-router-dom";
import { values } from "lodash";

const AddBannerForm = () => {
  const [description, setDescription] = useState("");
  const [bannerArray, setBannerArray] = useState(
    JSON.parse(String(localStorage.getItem("editBanner"))) || null
  );

  var formData = new FormData();

  useEffect(() => {});

  const handleFormSubmit = (values, index) => {
    formData.append("description", values.description);
    formData.append("url",  values.url);


    if (bannerArray) {
      formData.append("id", bannerArray.id);
      formData.append("status", 1);
    }

    console.log('formData', formData.get('image'))

    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };

    // console.log("bannerID",bannerArray.id);

    // if (bannerArray) {
    //   fetch(
    //     "https://loofer.bellazza.in/api/admin/banners/" + bannerArray.id,
    //     config
    //   )
    //     .then((res) => {
    //       console.log(res);

    //       if (res.status == 201) {
    //         Swal.fire({
    //           title: "Banner Update",
    //           text: "You can close this window",
    //           icon: "success",
    //         });
    //         localStorage.removeItem("editBanner");
    //       } else {
    //         Swal.fire({
    //           title: "Banner Status",
    //           text: "You are not authorized as admin",
    //           icon: "error",
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       if (err) {
    //         Swal.fire({
    //           title: "Banner Status",
    //           text: err?.message,
    //           icon: "error",
    //         });
    //       }
    //       console.error({ err });
    //     });
    // } else {
      fetch("https://loofer.bellazza.in/api/admin/banners", config)
        .then((res) => {
          console.log(res);

          if (res.status == 201) {
            Swal.fire({
              title: "Banner Saved",
              text: "You can close this window",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Banner Status",
              text: "You are not authorized as admin",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          if (err) {
            Swal.fire({
              title: "Banner Status",
              text: err?.message,
              icon: "error",
            });
          }
          console.error({ err });
        });
      // }
  };
  const fileInputRef = React.createRef();
  const fileChange = async (event) => {
    event.preventDefault();

    const fileToUpload = event.target.files[0];
    console.log("fileToUpload", fileToUpload)

    //  setCoverPath(URL.createObjectURL(fileToUpload[0]));
    // const response = await convertImage(URL.createObjectURL(fileToUpload[0]));
    // setUploadCover(`data:${fileToUpload['0'].type};base64,` + response);

    formData.append("image", fileToUpload);
  };

  return (
    <Formik
      initialValues={{
        image: "",
        description: bannerArray?.description || "",
        url:""
      }}
      onSubmit={(e) => {
        handleFormSubmit(e);
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
                    "rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px",
                  padding: 30,
                  background: "white",
                }}
              >
                <h2>Add New Banner</h2>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Grid container style={{ padding: 10 }} spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <Box
                      mt={1}
                      mb={1}
                      sx={{
                        border: "1px dashed #E61855",
                        background: "#FDF5F7",
                        borderRadius: 5,
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                      // className={classes.upload}
                      onClick={() => fileInputRef.current.click()}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{
                          padding: 62,
                        }}
                      >
                        <Box display="flex" justifyContent="space-between">
                          <span
                            one
                            style={{
                              color: "rgba(0, 50, 91, 0.5)",
                              fontWeight: 600,
                            }}
                          >
                            Drag and drop or
                          </span>
                          <span
                            style={{
                              color: "#E61855",
                              marginLeft: 5,
                            }}
                          >
                            Browse
                          </span>
                        </Box>
                      </Box>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={fileChange}
                      />
                    </Box>
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
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="url"
                      type="text"
                      placeholder="Url"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 5,
                        border: errors.url
                          ? "2px solid red"
                          : "1px solid",
                        marginTop: 10,
                      }}
                      inputProps={{
                        style: { padding: 12 },
                      }}
                    />
                    <br />
                    {errors.url ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {errors.url}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Button
                      type="submit"
                      style={{
                        background: "red",
                        color: "white",
                        marginTop: 30,
                        // padding: 16,
                        borderRadius: 5,
                        width: "100%",
                      }}
                    >
                      Upload
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

export default AddBannerForm;

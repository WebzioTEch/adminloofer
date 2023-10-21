import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, Box, Button, Divider } from "@mui/material";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  color: Yup.string().required("Color is required"),
  discount_amt: Yup.number().required("Discount Amount is required"),
  discount_quantity: Yup.number().required(
    "Max. Qty Discount is Applied To is required"
  ),
  max_quantity: Yup.number().required("Discount Qty Step(Buy X) is required"),
  ship_charges: Yup.string().required("Apply to Shipping Amount is required"),
  free_shipping: Yup.string().required("Free Shipping is required"),
  stop_processing: Yup.string().required(
    "Stop Further Rules Processing is required"
  ),
  reward_pts: Yup.number().required("Reward Points is required"),
});
const AddCouponForm = () => {
  const [dataArray, setDataArray] = useState(
    JSON.parse(String(localStorage.getItem("coupon_list"))) || []
  );

  const handleFormSubmit = (values) => {
    // let data = [];
    // data = JSON.parse(String(localStorage.getItem("coupon_list"))) || [];
    // // Handle form submission here
    // data.push(values);
    // setDataArray(data);

    // console.log("Form submitted with values:", values);
    // localStorage.setItem("coupon_list", JSON.stringify(dataArray));
    // if (data.length > 0) {
    //   Swal.fire({
    //     title: "Coupons details saved",
    //     text: "You can close this window",
    //     icon: "success",
    //   });
    // }
    console.log('values', values)

    var formData = new FormData()

    formData.append('code', values.code)
    formData.append('status', values.status)
    formData.append('type', values.type)
    formData.append('value', values.code)


    const config = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };

    fetch("https://loofer.bellazza.in/api/admin/add_coupon", config)
      .then((res) => {
        console.log(res );

        if(res.status == 200){
          Swal.fire({
            title: "Coupon Saved",
            text: "You can close this window",
            icon: "success",
            });
        }else{
          Swal.fire({
            title: "Coupon Status",
            text: "You are not authorized as admin",
            icon: "error",
            });
        }
      })
      .catch((err) => {
        if(err){
          Swal.fire({
            title: "Coupon Status",
            text: "You are not authorized as admin",
            icon: "error",
            });
        }
        console.error({ err });
      });

    return;
  };
  return (
    <Formik
      initialValues={{
        color: "",
        discount_amt: "",
        discount_quantity: "",
        max_quantity: "",
        ship_charges: "",
        free_shipping: "",
        stop_processing: "",
        reward_pts: "",
        code:"",
        type:"",
        value:"",
        status:"",
      }}
      onSubmit={(values) => {
        handleFormSubmit(values);

        console.log("values", values);
      }}
    //   validationSchema={validationSchema}
    >
      {(formik) => {
        const { errors } = formik;
        return (
          <Form>
            {/* Form Fields */}
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6}>
                {/* Color */}
                <span style={{ color: "rgba(88, 89, 91, 1)" }}>Select Coupon Type</span>
                <Field
                  as="select"
                  name="type"
                  style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 5,
                    border: "1px solid",
                    marginTop: 10,
                  }}
                >
                  <option value=""></option>
                 
                  <option value="1">Fixed Price</option>
                  <option value="2">Percentage </option>
                </Field>
                <ErrorMessage name="color" component="div" className="error" />
              </Grid>
              <Grid item xs={12} lg={6}>
                {/* Discount Amount */}
                <span style={{ color: "rgba(88, 89, 91, 1)" }}>
                 Coupon
                </span>
                <Field
                  name="code"
                  type="text"
                  style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 5,
                    border: "1px solid",
                    marginTop: 10,
                  }}
                />
                <ErrorMessage
                  name="discount_amt"
                  component="div"
                  className="error"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                {/* Max. Qty Discount is Applied To */}
                <span style={{ color: "rgba(88, 89, 91, 1)" }}>
                  Amount
                </span>
                <Field
                  name="value"
                  type="text"
                  style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 5,
                    border: "1px solid",
                    marginTop: 10,
                  }}
                />
                <ErrorMessage
                  name="discount_quantity"
                  component="div"
                  className="error"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                {/* Color */}
                <span style={{ color: "rgba(88, 89, 91, 1)" }}>Status </span>
                <Field
                  as="select"
                  name="status"
                  style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 5,
                    border: "1px solid",
                    marginTop: 10,
                  }}
                >
                  <option value=""></option>
                 
                  <option value="1" selected>Active</option>
                  <option value="0">Inactive </option>
                </Field>
                <ErrorMessage name="color" component="div" className="error" />
              </Grid>
            
              <Grid item xs={12} lg={3}>
                <Button
                  type="submit"
                  //   onClick={handleFormSubmit}
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddCouponForm;

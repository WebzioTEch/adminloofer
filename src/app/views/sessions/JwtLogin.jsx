import React, { useState , useEffect} from "react";
import { LoadingButton } from "@mui/lab";
import { Card, Checkbox, Grid, TextField } from "@mui/material";
import { Box, styled, useTheme } from "@mui/material";
import { Paragraph } from "app/components/Typography";
import axios from "axios";
import useAuth from "app/hooks/useAuth";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginDispatch } from "reducers/HomeReducer";
import * as Yup from "yup";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)",
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));

// inital login credentials
const initialValues = {
  email: "",
  password: "",
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string().required("Email is required!"),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  const { login } = useAuth();

  useEffect(() => {
   if(localStorage.getItem('token')){
    navigate("/dashboard/default")
   }
  });
  const handleFormSubmit = (email,password) => {
    setLoading(true);
    const formData = new FormData();
    // console.log("aaaa", values?.values);
    formData.append('login', email);
     formData.append('password', password);
    //   // console.log('login', values);
      console.log('formData', formData.get('login'));
    dispatch(loginDispatch(formData, setLoading, navigate))
   
 
      navigate("/dashboard/default")
    
    
    
      
   
    
    ;
    
    //   console.log("testing bro", 1);
    //   setLoading(true);
    //   // Simulate loading, replace with your actual login logic.
    //   // setTimeout(() => {
    //   //   setLoading(false);
    //   //   navigate("/");
    //   // }, 20); // Simulating a 2-second delay
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img
                src="/assets/images/illustrations/dreamer.svg"
                width="100%"
                alt=""
              />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              {/* <Formik
                onSubmit={handleFormSubmit}
              
                // validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => ( */}
              <form>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={userEmail}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserEmail(e.target.value);
                    console.log("sdasdsad", userEmail);
                  }}
                  sx={{ mb: 3 }}
                />
              </form>
              <form>
                <TextField
                  fullWidth
                  size="small"
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={userPassword}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserPassword(e.target.value);
                    console.log("sdasdsad", userPassword);
                  }}
                  sx={{ mb: 1.5 }}
                />

                <FlexBox justifyContent="space-between">
                  <FlexBox gap={1}>
                    <Checkbox
                      size="small"
                      name="remember"
                      sx={{ padding: 0 }}
                    />

                    <Paragraph>Remember Me</Paragraph>
                  </FlexBox>

                  <NavLink
                    to="/session/forgot-password"
                    style={{ color: theme.palette.primary.main }}
                  >
                    Forgot password?
                  </NavLink>
                </FlexBox>

                <LoadingButton
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("jjjjjjjjjjjj", e);
                    // navigate("/dashboard/default");
                    handleFormSubmit(userEmail,userPassword);
                  }}
                  type="button"
                  color="primary"
                  loading={loading}
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  Login
                </LoadingButton>

                <Paragraph>
                  Don't have an account?
                  <NavLink
                    to="/session/signup"
                    style={{
                      color: theme.palette.primary.main,
                      marginLeft: 5,
                    }}
                  >
                    Register
                  </NavLink>
                </Paragraph>
              </form>
              {/* )}
              </Formik> */}
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;

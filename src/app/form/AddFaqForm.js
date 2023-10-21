import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Box, Button, Divider } from '@mui/material';
import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

const AddFaqForm = ({ faqData, mode, onSuccess, onCancel, successMsg }) => {
	const navigate=useNavigate();
	const [successMessage, setSuccessMessage] = useState('');
	const initialFormValues = {
		question: faqData?.question || '',
		answer: faqData?.answer || '',
	  }; 

	  useEffect(() => {

		if(faqData){
				console.log(faqData,'faqData')
				if(faqData.faqData){
				console.log(faqData.faqData,'faqDatafaqData')

				console.log('true faq')
			}else{
				console.log('false faq')

			}
		}
	// 	console.log(faqData.faqData,'faqData.faqData');
	// 	console.log(faqData,'faqData');
	// 	// Set the form initial values based on the FAQ data
	// 	setInitialValues({
	// 	  question: (faqData && faqData.faqData.question) ? faqData.faqData.question : '',
	// 	  answer: (faqData && faqData.faqData.answer) ? faqData.faqData.answer : '',
	// 	});
	  }, [faqData]);
	
	  const [initialValues, setInitialValues] = useState({
		question: '',
		answer: '',
	  });
	
	const handleFormSubmit = (values, { resetForm }) => {
		const timer = setTimeout(() => {
			setSuccessMessage('');
		  }, 2000);

		try {
			const formData = new FormData();
		formData.append('question', values.question);
		formData.append('answer', values.answer);
		
			const config = {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("token")}`
				},
				body: formData
			};

				fetch('https://loofer.bellazza.in/api/admin/faq', config)
    				.then(res => {
						if(res.status === 200){
							setSuccessMessage('FAQ added successfully');
							resetForm();
							Swal.fire({
								title: "FAQ Status",
								text: "FAQ created",
								icon: "success",
								});
						}else{
							Swal.fire({
								title: "FAQ Status",
								text: "You are not authorized as admin",
								icon: "error",
								});
						}
        				console.log({res});
    				}).catch(err => {
        				console.error({err});
    				});
				
		
		  } catch (error) {
			console.error('Error:', error);
		  }


	};

	

	  
	const validationSchema = Yup.object({
			question: Yup.string().required('Question is required'),
			answer: Yup.string().required('Answer is required'),
	  });

	return (
		<Formik
		initialValues={initialFormValues}
		  validationSchema={validationSchema}
		  onSubmit={mode === 'edit' ? onSuccess : handleFormSubmit}>
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
								}}>
								<h2>{mode === 'edit' ? 'Edit FAQ' : 'Add New FAQ'}</h2>
								<Divider style={{ marginTop: 20, marginBottom: 20 }} />
								<Grid container style={{ padding: 10 }} spacing={4}>
								{successMessage ?  (
              				<div style={{ color: 'green', marginBottom: 10 }}>{successMessage}</div>
            			): (successMsg && <div style={{ color: 'green', marginBottom: 10 }}>{successMsg}</div>)}
									<Grid item xs={12} lg={12}>
										<Field
											name='question'
											type='text'
											placeHolder='Question'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.question ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
									<ErrorMessage	name='question'	component='div'	style={{ color: 'red', fontSize: 12 }}/>
									</Grid>
									<Grid item xs={12} lg={12}>
										<Field
											name='answer'
											type='text'
											placeHolder='Answer'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.answer ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
										<ErrorMessage	name='answer'	component='div'	style={{ color: 'red', fontSize: 12 }}/>
									</Grid>
									{mode === 'edit' ? (<>
										<Grid item xs={6} lg={3}>

                      <Button
                        type='submit'
                        style={{
                          background: 'rgb(25, 118, 210)',
                          color: 'white',
                          marginTop: 30,
                          borderRadius: 5,
                          width: '100%',
                        }}
                      >
                        Update
                      </Button>
							</Grid>
					  <Grid item xs={6} lg={3}>
					  <Button
					  type='button'
					  onClick={onCancel}
					  style={{
						background: 'rgb(25, 118, 210)',
						color: 'white',
						marginTop: 30,
						borderRadius: 5,
						width: '100%',
					  }}
					>
					  Cancle
					</Button>
					</Grid>
					</>
                    ) : (
						<Grid item xs={12} lg={3}>

                      <Button
                        type='submit'
                        style={{
                          background: 'red',
                          color: 'white',
                          marginTop: 30,
                          borderRadius: 5,
                          width: '100%',
                        }}
                      >
                        Submit
                      </Button>
					  </Grid>

                    )}
								</Grid>
							</Box>
						</Box>
					</Form>
				);
			}}
		</Formik>
	);
};

export default AddFaqForm;

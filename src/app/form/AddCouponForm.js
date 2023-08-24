import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Grid, Box, Button, Divider } from '@mui/material';

const AddCouponForm = () => {
	const handleFormSubmit = () => {};
	return (
		<Formik
			initialValues={{
				email: '',
				phone: ''
			}}
			onSubmit={handleFormSubmit}>
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
								<h2>Add New Coupon</h2>
								<Divider style={{ marginTop: 20, marginBottom: 20 }} />
								<Grid container style={{ padding: 10 }} spacing={4}>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Apply</span>
										<br></br>
										<Field
											as='select'
											name='color'
											placeHolder='Name'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}>
											<option value='red'>Percentage of product price discount</option>
											<option value='green'>Green</option>
											<option value='blue'>Blue</option>
										</Field>
										{/* <Field
											name='email'
											type='text'
											placeHolder='Name'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/> */}
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Discount Amount</span>
										<br></br>
										<Field
											name='email'
											type='text'
											placeHolder='Discount Amount'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
											Max. Qty Discount is Applied To
										</span>
										<br></br>
										<Field
											name='email'
											type='text'
											placeHolder='Max. Qty Discount is Applied To'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Discount Qty Step(Buy X)</span>
										<br></br>
										<Field
											name='email'
											type='text'
											placeHolder='Discount Qty Step(Buy X)'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Apply to Shipping Amount</span>
										<br></br>
										<Field
											as='select'
											name='color'
											placeHolder='Name'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}>
											<option value='green'>YES</option>
											<option value='blue'>NO</option>
										</Field>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Free Shipping</span>
										<br></br>
										<Field
											as='select'
											name='color'
											placeHolder='Name'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}>
											<option value='green'>For Shiping with Matching Item</option>
											<option value='green'>For Shiping with Matching Item</option>
										</Field>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
											Stop Further Rules Processing
										</span>
										<br></br>
										<Field
											as='select'
											name='color'
											placeHolder='Name'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}>
											<option value='green'>YES</option>
											<option value='blue'>NO</option>
										</Field>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>{' '}
									<Grid item xs={12} lg={6}>
										<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Add Reward Points</span>
										<br></br>
										<Field
											name='email'
											type='text'
											placeHolder='Add Reward Points'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												marginTop: 10
											}}
											inputProps={{
												style: { padding: 12 }
											}}
										/>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={3}>
										<Button
											type='submit'
											style={{
												background: 'rgb(25, 118, 210)',
												color: 'white',
												marginTop: 30,
												// padding: 16,
												borderRadius: 5,
												width: '100%'
											}}>
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

export default AddCouponForm;

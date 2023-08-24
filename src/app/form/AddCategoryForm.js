import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Grid, Box, Button, Divider } from '@mui/material';

const AddCategoryForm = () => {
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
								<h2>Add New Category</h2>
								<Divider style={{ marginTop: 20, marginBottom: 20 }} />
								<Grid container style={{ padding: 10 }} spacing={4}>
									<Grid item xs={12} lg={6}>
										<Field
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
										/>
										<br />
										{errors?.email ? (
											<span style={{ color: 'red', fontSize: 12 }}>{errors?.email}</span>
										) : null}
									</Grid>
									<Grid item xs={12} lg={6}>
										<Field
											name='email'
											type='text'
											placeHolder='Product Code'
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
										<Field
											name='email'
											type='text'
											placeHolder='Description'
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
										<Field
											name='email'
											type='text'
											placeHolder='SKU'
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
										<Field
											name='email'
											type='text'
											placeHolder='CATEGORY'
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
										<Field
											name='email'
											type='text'
											placeHolder='PRICE'
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
										<Field
											name='email'
											type='text'
											placeHolder='Sale Price'
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
									</Grid>{' '}
									<Grid item xs={12} lg={6}>
										<Field
											name='email'
											type='text'
											placeHolder='Quantity'
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
										<Field
											name='email'
											type='text'
											placeHolder='Minimum Order Amount'
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
									<Grid item xs={12} lg={6}></Grid>
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

export default AddCategoryForm;

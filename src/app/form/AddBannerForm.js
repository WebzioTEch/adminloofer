import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Grid, Box, Button, Divider } from '@mui/material';

const AddBannerForm = () => {
	const handleFormSubmit = () => {};
	const fileInputRef = React.createRef();
	const fileChange = async (event) => {
		event.preventDefault();
		const fileToUpload = event.target.files;
		// await setCoverPath(URL.createObjectURL(fileToUpload[0]));
		// const response = await convertImage(URL.createObjectURL(fileToUpload[0]));
		// setUploadCover(`data:${fileToUpload['0'].type};base64,` + response);
	};

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
								<h2>Add New Banner</h2>
								<Divider style={{ marginTop: 20, marginBottom: 20 }} />
								<Grid container style={{ padding: 10 }} spacing={4}>
									<Grid item xs={12} lg={6}>
										<Box
											mt={1}
											mb={1}
											sx={{
												border: '1px dashed #E61855',
												background: '#FDF5F7',
												borderRadius: 5,
												'& .MuiInput-underline:before': {
													borderBottom: 'none'
												}
											}}
											// className={classes.upload}
											onClick={() => fileInputRef.current.click()}>
											<Box
												display='flex'
												alignItems='center'
												justifyContent='center'
												style={{
													padding: 62
												}}>
												<Box display='flex' justifyContent='space-between'>
													<span
														one
														style={{
															color: 'rgba(0, 50, 91, 0.5)',
															fontWeight: 600
														}}>
														Drag and drop or
													</span>
													<span
														style={{
															color: '#E61855',
															marginLeft: 5
														}}>
														Browse
													</span>
												</Box>
											</Box>
											<input
												ref={fileInputRef}
												type='file'
												accept='image/*'
												hidden
												onChange={fileChange}
											/>
										</Box>
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

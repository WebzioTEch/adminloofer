import { axiosInstance } from '../Axios';
import { baseURL } from 'baseURL';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from "react-router-dom";
const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
	authentication: {
	  success: false,
	  error: null,
	  loading: false,
	  loginInfo: null,
	  token: null,
	},
	createproduct: {
	  success: false,
	  loading: false,
		createProductInfo: null,
		error: null,
	  },
	product: {
	  success: false,
	  loading: false,
	  ProductInfo: null,
	  error: null,
	},
	deleteProduct: {
	  success: false,
	  loading: false,
	  deleteProductInfo: null,
	  error: null,
	  },
	  createCategory: {
	  success: false,
	  loading: false,
	  createCategoryInfo: null,
	  error: null,
	  },
	  category: {
		success: false,
		loading: false,
		categoryInfo: null,
		error: null,
	  },
	  customer: {
		success: false,
		loading: false,
		customerInfo: null,
		error: null,
		},
  };

  
const HomeReducer = createSlice({
	
	name: 'home',
	initialState,
	reducers: {
		loginRequest(state, action) {
			state.authentication.loading = true;
		},
		loginSuccess(state, action) {
			console.log("state:",state.authentication);
			console.log("action:",action);
			state.authentication.loading = false;
			state.authentication.loginInfo = action.payload;
			state.authentication.token = action.payload.token;
			state.authentication.error = null;
		},
		loginFail(state, action) {
			state.authentication.loading = false;
			state.authentication.error = action.payload;
		},

		logoutRequest(state, action) {
			state.authentication.loading = true;
		},
		logoutSuccess(state, action) {
			console.log("state:",state.authentication);
			console.log("action:",action);
			state.authentication.loading = false;
			state.authentication.logoutInfo = null;
			state.authentication.token = null;
			state.authentication.error = null;
		},
		logoutFail(state, action) {
			state.authentication.loading = false;
			state.authentication.error = action.payload;
		},


		createProduct(state, action) {
			state.createproduct.loading = true;
		},
		createProductSuccess(state, action) {
			state.createproduct.loading = false;
			state.createproduct.createProductInfo = action.payload;
			state.createproduct.error = null;
		},
		createProductFail(state, action) {
			state.createproduct.loading = false;
			state.createproduct.error = action.payload;
		},

		productRequest(state, action) {
			state.product.loading = true;
		},
		productSuccess(state, action) {
			state.product.loading = false;
			state.product.productInfo = action.payload;
			state.product.token = action.payload.token;
			state.product.error = null;
		},
		productFail(state, action) {
			state.product.loading = false;
			state.product.error = action.payload;
		},

		deleteProductRequest(state, action) {
			state.deleteProduct.loading = true;
		},
		deleteProductSuccess(state, action) {
			state.deleteProduct.loading = false;
			state.deleteProduct.deleteProductInfo = action.payload;
			state.deleteProduct.token = action.payload.token;
			state.deleteProduct.error = null;
		},
		deleteProductFail(state, action) {
			state.deleteProduct.loading = false;
			state.deleteProduct.error = action.payload;
		},

		createCategoryRequest(state, action) {
			state.createCategory.loading = true;
		},
		createCategorySuccess(state, action) {
			state.createCategory.loading = false;
			state.createCategory.createCategoryInfo = action.payload;
			state.createCategory.error = null;
		},
		createCategoryFail(state, action) {
			state.createCategory.loading = false;
			state.createCategory.error = action.payload;
		},

		categoryRequest(state, action) {
			state.category.loading = true;
		},
		categorySuccess(state, action) {
			state.category.loading = false;
			state.category.categoryInfo = action.payload;
			state.category.error = null;
		},
		categoryFail(state, action) {
			state.category.loading = false;
			state.category.error = action.payload;
		},

		customerRequest(state, action) {
			state.customer.loading = true;
		},
		customerSuccess(state, action) {
			state.customer.loading = false;
			state.customer.customerInfo = action.payload;
			state.customer.token = action.payload.token;
			state.customer.error = null;
		},
		customerFail(state, action) {
			state.customer.loading = false;
			state.customer.error = action.payload;
		},
	}
});

const { actions } = HomeReducer;



const config = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': initialState.authentication.token || 'Bearer 369|TrCJ7t86NSUiPxoikvdUoZw1Ri4aEdCbcyMpUxDtf9275fa6',
		'admin_api_token':'369|TrCJ7t86NSUiPxoikvdUoZw1Ri4aEdCbcyMpUxDtf9275fa6'
	
	}
};
export const { loginRequest, loginSuccess, loginFail} = actions;

// export const loginDispatch = (bodyData) => async (dispatch) => {
// 	try {
// 		dispatch(loginRequest());
// 		console.log('body', bodyData);

// 		const { data } = await axiosInstance.post('login', bodyData, config);
// 		console.log('data', data);
// 		localStorage.setItem("token",data.token)
// 		dispatch(loginSuccess(data));
// 		// setLoading(false);
// 	} catch (error) {
// 		dispatch(
// 			loginFail(
// 				error.response && error.response.data.message ? error.response.data.message : error.message
// 			)
// 		);
// 	}
// };

export const loginDispatch = (bodyData) => async (dispatch) => {
	//
	try {
	  dispatch(loginRequest());
	  console.log('body', bodyData);
  
	  const requestOptions = {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'cache-control': 'no-cache',
		},
		body: new URLSearchParams(bodyData),
	  };
  
	  const response = await fetch(`${baseURL}login`, requestOptions);
  
	  if (response.ok) {
		const data = await response.json();
		console.log('data', data);
		localStorage.setItem("token", data.token);
		localStorage.setItem("userData",JSON.stringify(data))
		dispatch(loginSuccess(data));
		return true;
	  } else {
		const errorData = await response.json();
		dispatch(loginFail(
		  errorData.message || 'An error occurred during login.'
		));
		Swal.fire("Invalid Credentials")
	  }
	} catch (error) {
	  dispatch(loginFail(
		error.response && error.response.data.message ? error.response.data.message : error.message
	  ));
	}
  };


  export const registerDispatch = (bodyData) => async(dispatch) =>{
	console.log(bodyData)
	const headers = new Headers();
    headers.append('Content-Type', 'application/json');
	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(bodyData),
	  };
	try{
		const response = await fetch(`${baseURL}user/register`, requestOptions);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData, "response");
        
      } else {
        console.error("Error occurred during registration");
       
      }
	}
	catch(error){}
  }
  
export const { logoutRequest, logoutSuccess, logoutFail} = actions;

export const logoutDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(logoutRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.get('logout', bodyData, config);
		console.log('data', data);
		localStorage.setItem("token",data.token)
		dispatch(logoutSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			logoutFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const showbannerDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('banner', bodyData, config);
		console.log('data', data);
		dispatch(loginSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const createbannerDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('login', bodyData, config);
		console.log('data', data);
		dispatch(loginSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const deletebannerDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('login', bodyData, config);
		console.log('data', data);
		dispatch(loginSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const updatebannerDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('login', bodyData, config);
		console.log('data', data);
		dispatch(loginSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const { createProduct, createProductSuccess, createProductFail} = actions;
export const createproductDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(createProduct());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('admin/product_create',bodyData, config);
		console.log('data', data);
		dispatch(createProductSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			createProductFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const { productRequest, productSuccess, productFail} = actions;

export const showproductDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(productRequest());
		console.log('body', bodyData);
		console.log(config,'config');

		// const { data } = await axiosInstance.get(`admin/product_details/${bodyData}`, config);
		const { data } = await axiosInstance.get(`admin/product_details/5`, config);
		console.log('data', data);
		dispatch(productSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			productFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};
export const editproductDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.post('login', bodyData, config);
		console.log('data', data);
		dispatch(loginSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};

export const { deleteProductRequest, deleteProductSuccess, deleteProductFail} = actions;

export const deleteproductDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(deleteProductRequest());
		console.log('body', bodyData);

		const { data } = await axiosInstance.get(`admin/delete_product/${bodyData}`, config);
		console.log('data', data);
		dispatch(deleteProductSuccess(data));
		// setLoading(false);
	} catch (error) {
		dispatch(
			deleteProductFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};

export const { createCategory, createCategorySuccess, createCategoryFail} = actions;
export const createCategoryDispatch = (bodyData) => async (dispatch) => {
	try {
		//dispatch(createCategory());
		const requestOptions = {
			method: 'POST',
			headers: {
			  Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: bodyData,
		  };
		console.log('body is this', bodyData);

		 fetch(`${baseURL}admin/categories`,  requestOptions).then((data)=>{
			console.log('data', data);
			if(data.status == 201){
			   Swal.fire({
				   title: "Category Status",
				   text: "Category saved",
				   icon: "success",
				   });
		   }
		   dispatch(createCategorySuccess(data));
		 });
	
		// setLoading(false);
	} catch (error) {
		dispatch(
			createCategoryFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};

export const { categoryRequest, categorySuccess, categoryFail} = actions;

export const showCategoryDispatch = () => async (dispatch) => {
	try {
		dispatch(categoryRequest());
		console.log('body', );

		const { data } = await axiosInstance.get(`admin/categories`, config);
		console.log('data', data);
		dispatch(categorySuccess(data));
		// setLoading(false);
	} catch (error) {
		console.log("error:",error)
		dispatch(
			categoryFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};


export const { customerRequest, customerSuccess, customerFail} = actions;

export const showCustomerDispatch = () => async (dispatch) => {
	try {
		dispatch(customerRequest());
		console.log('body', );

		const { data } = await axiosInstance.get(`admin/all_users`, config);
		console.log('data', data);
		dispatch(customerSuccess(data));
		// setLoading(false);
	} catch (error) {
		console.log("error:",error)
		dispatch(
			customerFail(
				error.response && error.response.data.message ? error.response.data.message : error.message
			)
		);
	}
};



export default HomeReducer;

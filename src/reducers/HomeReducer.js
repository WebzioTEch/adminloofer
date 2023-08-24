import { axiosInstance } from '../Axios';
const { createSlice } = require('@reduxjs/toolkit');

const HomeReducer = createSlice({
	name: 'home',
	initialState: {
		success: false,
		error: null,
		loading: false,
		loginInfo: null
	},
	reducers: {
		loginRequest(state, action) {
			state.loading = true;
		},
		loginSuccess(state, action) {
			state.loading = false;
			state.loginInfo = action.payload;
			state.error = null;
		},
		loginFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

const { actions } = HomeReducer;
const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};
export const { loginRequest, loginSuccess, loginFail } = actions;

export const loginDispatch = (bodyData) => async (dispatch) => {
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
export const createproductDispatch = (bodyData) => async (dispatch) => {
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
export const showproductDispatch = (bodyData) => async (dispatch) => {
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
export const deleteproductDispatch = (bodyData) => async (dispatch) => {
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

export default HomeReducer;

import UiReducer from './UiReducer';
import HomeReducer from './HomeReducer';
const rootReducer = {
	ui: UiReducer.reducer,
	home: HomeReducer.reducer
};

export default rootReducer;

import { combineReducers } from "redux";
import loginReducer from "./reducers/auth/authReducers";
import toggleReducer from "./reducers/dashboard/dashboardReducers";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  toggleReducer: toggleReducer,
});

export default rootReducer;

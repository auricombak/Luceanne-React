import {createStore} from "redux";
import rootReducer from "./reducers";

const storeRedux = createStore(rootReducer);

export default storeRedux;
//redux/reducer/index.js
import { combineReducers } from 'redux';
import carReducer from './carReducer';
import { alertreducer } from './alertreducer';
import carImageUploadReducer from './carImageUploadReducer';


const rootReducer=combineReducers({
    cars:carReducer,
    alert:alertreducer,
    carImageUpload:carImageUploadReducer,
});

export default rootReducer;

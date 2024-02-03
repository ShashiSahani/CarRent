//reducers/carImageUploadReducer.js

const initialState={
    carImage:[],
}


const carImageUploadReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_CARS_IMAGE':
            return {
                ...state,
                cars:action.payload,
            };
            default:
                return state;
    }
}
export default carImageUploadReducer;
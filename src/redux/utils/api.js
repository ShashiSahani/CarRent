//utils/api.js


import axios from "axios";

const serverEndpoint='http://localhost:5000/api/cars';

export const uploadImageToServer=(imageSrc)=>{
    return axios.post(serverEndpoint,{image:imageSrc})
}
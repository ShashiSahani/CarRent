import axios from 'axios';
import message from 'axios'


export const userLogin=(reqObj)=>async dispatch=>{
dispatch({type:'LOADING',payload:true})
    try {
        const respone=await axios.post('/api/user/login',reqObj)
        localStorage.setItem('user',JSON.stringify(respone.data))
        message.success('LOGIN SUCESS')
        dispatch({type:'LOADING',payload:false})
    } catch (error) {
        console.log('SOMETHING WENT WRONG',error)
        dispatch({type:'LOADING',payload:true})
    }


}
export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        
        const respone =await axios.post('/api/users/login',reqObj)
        dispatch({type:'LOADING',payload:false})
        message.success('Registration successFull!')
    } catch (error) {
        console.log('SOMETHING WENT WRONG',error)
        dispatch({type:'LOADING',payload:true})
    }

}
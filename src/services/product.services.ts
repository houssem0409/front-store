import { json } from 'stream/consumers';
import {API} from '../config';

export const getProducts = () => {
    // console.log(name, email , password)
    console.log(API);
    

    return fetch(`${API}/products` , {
        method: "GET" ,
        headers: {
            Accept: 'application/json', 
            "Content-Type" : "application/json"
        },
        
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    })
 }
 

 
export const addProduct = (product : any) => {
    // console.log(name, email , password)
    console.log(API);
    

    return fetch(`${API}/products` , {
        method: "POST" ,
        headers: {
            Accept: 'application/json', 
            "Content-Type" : "application/json"
        },
        body : JSON.stringify( product)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    })
 }
 







export const signin = (user : any) => {
    // console.log(name, email , password)

    return fetch(`${API}/login` , {
        method: "POST" ,
        headers: {
            Accept: 'application/json', 
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user )
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    })
 };

 export const authenticate = (data : any, next : any ) => {
     if(typeof window !== 'undefined') {
         localStorage.setItem('jwt' , JSON.stringify(data.token))
         localStorage.setItem('user' , JSON.stringify(data.user))
         next();
     }
 }

 export const signout = () => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt' );
        localStorage.removeItem('user' );
    
        // return fetch(`${API}/signout`, {
        //     method: "GET",

        // })
        // .then(response => {
        //     console.log('signout' , response)
        // })
        // .catch(err => console.log(err))
    }
 }

 export const isAuthenticated = () => {
     if(typeof window == 'undefined') {
         return false
     }
     if(localStorage.getItem('jwt')){

        return JSON.stringify(localStorage.getItem('jwt'))

     }else {
         return false
     }
     
 } 
import * as types from "./actionTypes"
import axios from "axios"

const getProductsRequest = () => {
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getProductsSuccess = (payload) => {
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
const getProductsError = () => {
    return {
        type:types.GET_PRODUCTS_ERROR
    }
}

const singleProductRequest = () => {
    return{
        type:types.SINGLE_PRODUCTS_REQUEST
    }
}


const singleProductSuccess = (payload) => {
    return {
        type:types.SINGLE_PRODUCTS_SUCCESS,
        payload
    }
}

const singleProductError = () => {
    return{
        type:types.SINGLE_PRODUCTS_ERROR
    }
}

const searchByQueryRequest = () => {
    // console.log("payload",paylaod);
    return {
        type:types.SEARCH_QUERY_REQUEST
    }
}
const searchByQuerySuccess = (payload) => {
    console.log("payload",payload);
    return {
        type:types.SEARCH_QUERY_SUCCESS,
        payload
    }
}
const searchByQueryError = () => {
    // console.log("payload",paylaod);
    return {
        type:types.SEARCH_QUERY_ERROR
    }
}

export const getProducts = (page,params) => (dispatch) => {
    console.log("page",page);
    dispatch(getProductsRequest())
    // return axios.get(`https://ill-cyan-buffalo-kilt.cyclic.app/products?_page=${page}&_limit=10`,params)
    return axios.get(`https://unusual-sandals-dog.cyclic.app/product/read?page=${page}&limit=10`,params)
    .then((res) =>{  
        console.log("res => ",res.data.data);
        dispatch(getProductsSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(getProductsError()))
}

export const getSingleProducts = (id) => (dispatch) => {
    dispatch(singleProductRequest())
    // return axios.get(`https://ill-teal-betta-garb.cyclic.app/product/read/${id}`
    return axios.get(`https://unusual-sandals-dog.cyclic.app/product/read/${id}`)
    .then((res) =>{  
        // console.log("resksjdfkl => ",res.data);
        dispatch(singleProductSuccess(res.data))
    })
    .catch((err) =>  dispatch(singleProductError()))
}

export const searchProducts= (query) => (dispatch) => {
    // console.log("query",query);
    dispatch(searchByQueryRequest())
    return axios.get(`https://green-hermit-crab-vest.cyclic.app/products?name=${query}`)
    .then((res) =>{  
        // console.log("search query => ",res.data);
        dispatch(searchByQuerySuccess(res.data))
    })
    .catch((err) =>  dispatch(searchByQueryError()))
}
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GITHUB,
    headers:{
        Authorization:`${process.env.GITHUB_TOKEN}`
    }
})
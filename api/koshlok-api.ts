import axios, { AxiosResponse } from "axios"

export const instance = axios.create({
    baseURL:'https://api.etherscan.io/api' ,
    withCredentials: true,
    headers: {
        'API':'XI67VVMYANJ7R4S64DNMPKRH4SGDC8H4XW',
    },
})

export const pocketAPI=()=>{
    getBalance(){
        return instance.get()
    },
}
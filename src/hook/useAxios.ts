import axios from "axios"

export const useAxios = () => {

    const API_ENTRYPOINT_BASE_URL = "http://localhost:8080/api/v1" 

    const axiosPublic = axios.create({
        baseURL: API_ENTRYPOINT_BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    })

    return { axiosPublic: axiosPublic }
}

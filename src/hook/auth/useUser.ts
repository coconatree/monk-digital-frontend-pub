import { API_BASE_URL } from "../../common/Constant"
import { checkResponseOkAxios } from "../../common/Utility"
import { useAxios } from "../useAxios"
import { useMonkAuth } from "./useMonkAuth"

export const useUser = () => {

    const { axiosPublic } = useAxios()
    const { authenticate } = useMonkAuth()

    const createUser = (email: string, password: string) => {
        return axiosPublic.post(
            `${API_BASE_URL}/user/create`,
            JSON.stringify({
                email:    email,
                password: password,
            }),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(checkResponseOkAxios)
        .then(() => {
            authenticate(email, password, "/auth/login")
        })
    }

    const validateUserEmail = async (email: string) => { 
        return axiosPublic.get(`${API_BASE_URL}/user/check/${email}`)
            .then(checkResponseOkAxios)
            .then(response => response.data)
    }

    return {
        createUser:        createUser, 
        validateUserEmail: validateUserEmail
    }
}


import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Cookies from "universal-cookie/es6/Cookies"

import { API_BASE_URL } from "../../common/Constant"
import { checkResponseOkAxios } from "../../common/Utility"
import { useAxios } from "../useAxios"
import { ApplicationContext } from "../../context/ApplicationContext"

export const useMonkAuth = () => {

    const { axiosPublic } = useAxios()

    const { 
        loginUser, 
        logoutUser,
        setAccessToken 
    } 
    = 
    useContext(ApplicationContext)

    const navigate = useNavigate()

    const authenticate = async (email: string, password: string, redirect: string) => {
        const refreshToken = await retrieveRefreshToken(email, password)
        const accessToken  = await retrieveAccessToken(refreshToken)
        await retrieveProfileAfterAuthentication(accessToken)
        navigate(redirect)
    }

    const retrieveRefreshToken = (email: string, password: string) => {
        return axiosPublic.post(
            `${API_BASE_URL}/token/issue/refresh`,
            JSON.stringify({
                email:    email,
                password: password
            })
        )
        .then(checkResponseOkAxios)
        .then(response => response.data)
        .then(data => {
            const cookies = new Cookies()
            cookies.set("MONK_TOKEN", null)
            cookies.set("MONK_TOKEN", data.token, {
                sameSite: "none"
            })
            return data.token
        })
    }

    const retrieveAccessToken = (refreshToken: string) => {
        return axiosPublic.get(`${API_BASE_URL}/token/issue/access`, {headers: {
            "Authorization": `Bearer ${refreshToken}`
        }})
            .then(checkResponseOkAxios)
            .then(response => response.data)
            .then(data => {
                setAccessToken(data.token)
                return data.token
            })
    }
    
    const retrieveProfileAfterAuthentication = (accountToken: string) => {

        return axiosPublic.get(`${API_BASE_URL}/user/select`, {
            headers: {
                "Authorization": `Bearer ${accountToken}`
            }
        })
        .then(checkResponseOkAxios)
        .then(response => response.data)
        .then(data => {
            loginUser({
                id:                         data.id,
                username:                   data.email,
                createdAt:                  data.createdAt,
                role:                       data.role,
                photoURL:                   "",
                isEmailvalidated:           false,
                isGoogleAccountConnected:   false,
                isLinkedinAccountConnected: false
            })
        })
    }

    const logout = () => {
        const cookies = new Cookies()
        cookies.set("MONK_TOKEN", null)
        logoutUser()
        navigate("/")
    }   

    return { 
        authenticate: authenticate, 
        logout: logout,
    }
}

import { Icon, TextField } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { ApplicationContext } from "../context/ApplicationContext"
import { useMonkAuth } from "../hook/auth/useMonkAuth"

import { 
    API_BASE_URL, 
    BUTTON_CLASSNAME, 
    PARAGRAPH_CLASSNAME, 
    TITLE_CLASSNAME 
} 
from "../common/Constant"

import { useAxios } from "../hook/useAxios"

import { checkResponseOkAxios } from "../common/Utility"
import { Layout } from "../component/common/Layout"

import CheckIcon from '@mui/icons-material/Check';

export const ProfilePage = () => {
    
    const {user, accessToken} = useContext(ApplicationContext)
    
    const navigate = useNavigate()

    if (user === undefined) {
        navigate("/auth/login")
    }

    const { logout } = useMonkAuth()

    const {axiosPublic} = useAxios()

    const sendEmailValidation = () => {
        
        axiosPublic.get(`${API_BASE_URL}/user/validate/email`, {headers: {
            "Authorization": `Bearer ${accessToken}`
        }})
            .then(checkResponseOkAxios)
            .catch(error => console.log(error))
    }

    const renderEmailValidationButton = () => {
        if (user?.isEmailvalidated) {
            return (
                <Icon component = {CheckIcon}/>
            )
        }
        return (
            <button 
                disabled  = {user?.isEmailvalidated}
                className = {BUTTON_CLASSNAME}
                onClick   = {sendEmailValidation}
            >
                Validate
            </button>
        )
    }

    return (
        <Layout>
            <div className = "min-h-screen row-start-1 row-end-2 col-span-12 lg:col-start-3 lg:col-end-11 px-10 custom-mt-6 mb-20">
                <div>
                    <div>
                        <h1 className = {TITLE_CLASSNAME + "mt-8"}>
                            Profile
                        </h1>
                        <p className = {PARAGRAPH_CLASSNAME + "mt-4"}>
                            Welcome, 
                            <br></br>
                            {user?.username}. This is your profile page. Here you logout or validate your email address.
                        </p>
                        <div className = "mt-8">
                            <button 
                                className = {BUTTON_CLASSNAME}
                                onClick   = {() => logout()}
                            >
                                Logout
                            </button>
                        </div>
                        <div className = "mt-10 gap-4 flex flex-col">
                            <TextField type = "email" disabled = {true} value = {user?.username}/>
                            {renderEmailValidationButton()}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

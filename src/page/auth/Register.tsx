import { Icon, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon   from '@mui/icons-material/Google';

import { useUser } from "../../hook/auth/useUser"

import { 
    AUTH_CONTAINER_CLASSNAME, 
    AUTH_FORM_BUTTON_CLASSNAME, 
    AUTH_FORM_CTA_CONTAINER_CLASSNAME, 
    AUTH_FORM_FIELD_CONTAINER_CLASSNAME, 
    AUTH_FORM_ICON_CONTAINER_CLASSNAME, 
    AUTH_FORM_LINK_CLASSNAME, 
    FORM_LABEL_CLASSNAME, 
    LOGIN_FORM_CLASSNAME 
} 
from "../../common/Constant"

import { SimpleLayout } from "../../component/common/SimpleLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
 
    return (
        <SimpleLayout>
            <div className = {AUTH_CONTAINER_CLASSNAME + "custom-mt-6"}>
                <RegistrationForm/>
            </div>
        </SimpleLayout>
    )
}

export const RegistrationForm = () => {
    
    const { createUser } = useUser()

    const [formData, setFormData] = useState({
        email:          "",
        password:       "",
        passwordRepeat: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ... formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmition = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUser(formData.email, formData.password)
    }

    return (
        <form method = "POST" onSubmit = {handleSubmition} className = {LOGIN_FORM_CLASSNAME}>
            <div className = {AUTH_FORM_FIELD_CONTAINER_CLASSNAME}>
                <label 
                    className   = {FORM_LABEL_CLASSNAME}
                    id          = "sign-in-email-label"
                    htmlFor     = "sign-in-email-input"
                >
                    Your email
                </label>
                <TextField
                    name        = "email"
                    onChange    = {handleChange}
                    value       = {formData.email}
                    placeholder = "email@domain.com"
                    id          = "sign-in-email-input"
                    type        = "text"
                />
            </div>
            <div className = {AUTH_FORM_FIELD_CONTAINER_CLASSNAME}>
                <label 
                    className   = {FORM_LABEL_CLASSNAME}
                    id          = "sign-in-password-label"
                    htmlFor     = "sign-in-password-input"
                >
                    Enter your password
                </label>
                <TextField
                    name        = "password"
                    onChange    = {handleChange}
                    value       = {formData.password}
                    placeholder = "*******"
                    id          = "sign-in-password-input"
                    type        = "password"
                />
            </div>
            <div className = {AUTH_FORM_FIELD_CONTAINER_CLASSNAME}>
                <label 
                    className   = {FORM_LABEL_CLASSNAME}
                    id          = "sign-in-password-repeat-label"
                    htmlFor     = "sign-in-password-input"
                >
                    Repeat your password
                </label>
                <TextField
                    name        = "passwordRepeat"
                    onChange    = {handleChange}
                    value       = {formData.passwordRepeat}
                    placeholder = "*******"
                    id          = "sign-in-password-repeat-input"
                    type        = "password"
                />
            </div>
            <div className = {AUTH_FORM_CTA_CONTAINER_CLASSNAME}>
                <button className = {AUTH_FORM_BUTTON_CLASSNAME}>
                    Register
                </button>
                <div className = {AUTH_FORM_ICON_CONTAINER_CLASSNAME}>
                    <Icon component = {GoogleIcon}/>
                    <Icon component = {LinkedInIcon}/>
                </div>
            </div>
            <div className = "flex flex-col gap-2 mt-4">
                <Link to = "/auth/login" className = {AUTH_FORM_LINK_CLASSNAME}>
                    Already a member ?
                </Link>
                <Link to = "/auth/password-reset" className = {AUTH_FORM_LINK_CLASSNAME}>
                    Forgot my password?
                </Link>
            </div>
        </form>
    )
}

import { TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import { useMonkAuth } from "../../hook/auth/useMonkAuth"

import { SimpleLayout } from "../../component/common/SimpleLayout"
import { Link } from "react-router-dom";
import { validateEmail } from "../../common/Utility";

import { 
    AUTH_CONTAINER_CLASSNAME, 
    AUTH_FORM_BUTTON_CLASSNAME, 
    AUTH_FORM_CTA_CONTAINER_CLASSNAME, 
    AUTH_FORM_FIELD_CONTAINER_CLASSNAME,
    AUTH_FORM_LINK_CLASSNAME, 
    FORM_LABEL_CLASSNAME, 
    LOGIN_FORM_CLASSNAME 
} 
from "../../common/Constant";

export const LoginPage = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
 
    return (
        <SimpleLayout>
            <div className = {AUTH_CONTAINER_CLASSNAME}>
                <LoginForm/>    
            </div>
        </SimpleLayout>
    )
}

export const LoginForm = () => {

    const { authenticate } = useMonkAuth()
    
    const [formData, setFormData] = useState({
        email:    "",
        password: "",
    })

    const [emailError, setEmailError] = useState({
        hasError:     true,
        errorMessage: ""
    })

    const [passwordError, setPasswordError] = useState({
        hasError:     true,
        errorMessage: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ... formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmition = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (formData.email.length === 0) {
            setEmailError({
                hasError:     true,
                errorMessage: "Email can't be empty"
            })
        }
        else if (!validateEmail(formData.email)) {
            setEmailError({
                hasError:     true,
                errorMessage: "Enter a valid email"
            })
        }
        else {
            setEmailError({hasError: false, errorMessage: ""})
        }

        if (formData.password.length === 0) {
            setPasswordError({
                hasError:     true,
                errorMessage: "Password can't be empty"
            })
        }
        else if (formData.password.length < 10) {
            setPasswordError({
                hasError:     true,
                errorMessage: "Your password needs to be at least 10 charcaters"
            })
        }
        else {
            setPasswordError({hasError: false, errorMessage: ""})
        }

        if (!emailError.hasError || !passwordError.hasError) {
            authenticate(formData.email, formData.password, "/")
        }
    }

    return (
        <form onSubmit = {handleSubmition} className = {LOGIN_FORM_CLASSNAME + "justify-center"}>
            <div className = {AUTH_FORM_FIELD_CONTAINER_CLASSNAME}>
                <label 
                    className   = {FORM_LABEL_CLASSNAME}
                    id          = "sign-in-email-label"
                    htmlFor     = "sign-in-email-input"
                >
                    Email
                </label>
                <TextField
                    name        = "email"
                    onChange    = {handleChange}
                    value       = {formData.email}
                    placeholder = "email@domain.com"
                    id          = "sign-in-email-input"
                    type        = "text"
                />
                {
                emailError.hasError ? 
                (
                <span className = "text-red-900 text-sm mt-2">
                    {emailError.errorMessage}
                </span>
                ): 
                <></>    
                }
            </div>
            <div className = {AUTH_FORM_FIELD_CONTAINER_CLASSNAME}>
                <label 
                    className   = {FORM_LABEL_CLASSNAME}
                    id          = "sign-in-password-label"
                    htmlFor     = "sign-in-password-input"
                >
                    Password
                </label>
                <TextField
                    name        = "password"
                    onChange    = {handleChange}
                    value       = {formData.password}
                    placeholder = "*******"
                    id          = "sign-in-password-input"
                    type        = "password"
                />
                {
                passwordError.hasError ? 
                (
                <span className = "text-red-900 text-sm mt-2">
                    {passwordError.errorMessage}
                </span>
                ): 
                <></>    
                }
            </div>
            <div className = {AUTH_FORM_CTA_CONTAINER_CLASSNAME}>
                <button className = {AUTH_FORM_BUTTON_CLASSNAME}>
                    Login
                </button>
            </div>
            <div className = "flex flex-col gap-4 mt-8">
                <Link to = "/auht/password-reset" className = {AUTH_FORM_LINK_CLASSNAME}>
                    Forgot your password ?
                </Link>
                <Link to = "/auth/register" className = {AUTH_FORM_LINK_CLASSNAME}>
                    Sign Up
                </Link>
            </div>
        </form>
    )
}
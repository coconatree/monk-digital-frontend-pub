import { ChangeEvent, useState } from "react"

import { TextField, TextareaAutosize, Modal, Button } from "@mui/material"

import { useAxios } from "../../hook/useAxios"
import { validateEmail } from "../../common/Utility"
import { API_BASE_URL, TEXT_AREA_CLASSNAME } from "../../common/Constant"

export const ContactForm = ({className} : {className: string}) => {

    const { axiosPublic } = useAxios()

    const [formData, setFormData] = useState<{email: string, message: string}>({
        email:   "",
        message: "",
    })

    const [emailError, setEmailError] = useState({
        hasError: false,
        errorMsg: "",
    })

    const [open, setOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState("")

    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (!validateEmail(formData.email)) {
            setEmailError({
                hasError: true,
                errorMsg: "Please enter a valid email"
            })
            return
        }
        setEmailError({hasError: false, errorMsg: ""})
    }

    const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateEmail(formData.email)) {
            setModalMessage("Please enter a valid email.")
            setOpen(true)
            return
        }
        
        setBtnDisabled(true)
        
        axiosPublic.post(
            `${API_BASE_URL}/contact/create`, 
            formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            }
        })
        .then(() => {
            setModalMessage("Succesfully created a contact requests. We will get in touch with you as soon as posible.")
            setOpen(true)
        })
        .catch(_ => {
            setModalMessage("An error occured and it has been recorded. We are working on it. Please try again later.")
            setOpen(true)
        })
        .finally(() => {
            setFormData({
                email:   "",
                message: "",
            })
            setBtnDisabled(false)
        })
    }

    const getMessageClassname = (message: string): string => {
        if (message.length === 500) {
            return "text-red-900"
        }
        if (300 < message.length) {
            return "text-yellow-600"
        }
        return ""
    }

    return (
        <div id = "contact" className = {"custom-pt-10 px-10 flex flex-col justify-center monk-min-h-90 mt-8 mb-20" + " " + className}>
            <h2 className = "text-4xl font-bold leading-normal">
                Contact Me
            </h2>
            <p className = "mt-8 text-xl">
                If you have any inquiries or requests, feel free to contact me at any time. 
                Just fill out the form below, and I'll get back to you as soon as possible.
            </p>
            <form 
                method    = "POST" 
                onSubmit  = {handleSubmition}
                className = "flex flex-col mt-14 xl:w-1/2"
            >
                <div className = "flex flex-col gap-3">
                    <label
                        className = "font-bold text-lg"
                        id        = "contact-form-email-label"
                        htmlFor   = "contact-form-email-input"
                    >
                        Your email
                    </label>
                    <TextField 
                        placeholder = "email@domain.com"
                        name        = "email"
                        className   = "border rounded-sm shadow-sm px-2 py-2"
                        id          = "contact-form-email-input"
                        onChange    = {handleChange}
                        value       = {formData.email}
                        type        = "text"
                    />
                    {
                    emailError.hasError ? 
                        (
                        <span className = "text-red-900 font-bold text-sm mt-1">
                            {emailError.errorMsg}
                        </span>
                        ): 
                        <></>    
                    }
                </div>
                <div className = "flex flex-col gap-3 mt-6">
                    <label
                        className = "font-bold text-lg"
                        id        = "contact-form-message-label"
                        htmlFor   = "contact-form-message-input"
                    >
                        Your message
                    </label>
                    <TextareaAutosize 
                        placeholder = {"Hello ..."}
                        maxLength   = {500}
                        minRows     = {5}
                        name        = "message"
                        className   = {TEXT_AREA_CLASSNAME + " text-lg"}
                        id          = "contact-form-message-input" 
                        onChange    = {handleChange}
                        value       = {formData.message}
                    />
                    <div className = "flex flex-row-reverse">
                        <span className = {"text-sm font-bold bg-slate-200 rounded-md px-2 py-1 " + getMessageClassname(formData.message)}>
                            {formData.message.length} / 500
                        </span>
                    </div>
                </div>
                <Button 
                    className = "w-full text-lg shadow-xl bg-blue-900 text-slate-100 rounded-md py-2 px-10 mt-10 2xl:mt-20 2xl:w-1/2"
                    type      = "submit"
                    disabled  = {btnDisabled}
                >
                    Send Message
                </Button>
            </form>
            <Modal
                open             = {open}
                onClose          = {() => setOpen(false)}
                aria-labelledby  = "modal-modal-title"
                aria-describedby = "modal-modal-description"
            >
                <div className = "px-10 custom-modal shadow-md rounded-md w-10/12 bg-white h-40 flex flex-col justify-center items-center">
                    <h3 className = "text-lg text-center">
                        {modalMessage}
                    </h3>
                    <button className = "mt-10 text-xl shadow-xl bg-blue-900 text-slate-100 rounded-sm py-2 px-10" onClick = {() => setOpen(false)}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    )
}

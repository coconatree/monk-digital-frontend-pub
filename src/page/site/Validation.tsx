import { useEffect } from "react"
import { useAxios } from "../../hook/useAxios"
import { useParams } from "react-router-dom"

import Cookies from "universal-cookie/es6/Cookies"

import { Layout } from "../../component/common/Layout"

import { API_BASE_URL, PARAGRAPH_CLASSNAME, TITLE_CLASSNAME } from "../../common/Constant"
import { replaceAll } from "../../common/Utility"

export const ValidationPage = () => {
    
    const {token} = useParams()

    const { axiosPublic } = useAxios()

    useEffect(() => {
        const cookies = new Cookies()
        
        if (token === undefined) {
            return
        }

        const refreshToken = cookies.get("MONK_TOKEN")
        const convertedToken = replaceAll(token, '%', '.')

        axiosPublic.post(`${API_BASE_URL}/user/validate/email`, JSON.stringify({token: convertedToken}), {
            headers: {
                "Authorization": `Bearer ${refreshToken}`
            }
        })
    }, [])

    return (
        <Layout>
            <div className = "col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11 custom-mt-6 flex flex-col items-center justify-center custom-monk-h-94 px-20">
                <h1 className = {TITLE_CLASSNAME}>
                    Verifying Your Email
                </h1>
                <p className = {PARAGRAPH_CLASSNAME + "mt-8"}>
                    Plesase wait ...
                </p>
            </div>
        </Layout>
    )
} 

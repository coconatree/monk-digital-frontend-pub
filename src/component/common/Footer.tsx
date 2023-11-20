import { Icon } from "@mui/material"

import { SOCIAL_LINK_LIST } from "../../common/Constant"
import MonkDigitalLogo from "../../../resources/logo.svg"

export const Footer = () => {
    
    const renderSocialLinks = () => {
        return SOCIAL_LINK_LIST.map((item, index) => (
            <a key = {index} href = {item.href} target = "_blank" className = "flex justify-center items-center">
                <Icon component = {item.logo} className = "cursor-pointer col-span-1 footer-logo"/>
            </a>
        ))
    }
    
    return (
        <footer className = "relative col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 px-10 py-6 pt-12">
            <div className = "flex flex-col gap-2">
                <img className = "w-6" alt = "logo" src = {MonkDigitalLogo}/>
                <h1 className = "text-md font-bold mt-2">
                    Monk Digital
                </h1>
                <p className = "text-sm mt-2">
                    Unlock efficiency, enhance productivity, and streamline operations.
                </p>
                <p className = "text-sm">
                    Powered by <a 
                        target    = "_blank" 
                        href      = "https://react.dev/" 
                        className = "font-semibold underline">
                            React
                        </a>
                    , <a 
                        target    = "_blank" 
                        href      = "https://spring.io/" 
                        className = "font-semibold underline">Spring
                        </a> and <a 
                            target    = "_blank" 
                            href      = "https://www.postgresql.org/" 
                            className = "font-semibold underline">
                                PostgreSQL
                                </a>
                </p>
                <div className = "flex items-center gap-4 mt-12">
                {renderSocialLinks()}
                </div>
            </div>
            <div className = "flex justify-center items-center pb-2 pt-20">
                <small className = "text-center text-h font-semibold">
                    @MonkDigital, All rights reserved 2023
                </small>
            </div>
        </footer>
    )
}

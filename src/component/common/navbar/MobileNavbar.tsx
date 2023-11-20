import { useState } from "react";

import { HashLink } from "react-router-hash-link"

import { Icon } from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const MobileNavbar = ({setIsOpen}: {setIsOpen: (b: boolean) => void}) => {

    const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)

    const switchProjectsMenu = () => {
        setIsProjectsMenuOpen(!isProjectsMenuOpen)
    }

    const renderMonkBotMenu = () => {
        
        if (!isProjectsMenuOpen) {
            return
        }
        
        return (
            <ul className = "flex flex-col gap-4">
                <li className = "flex justify-center">
                    <HashLink 
                        to        = "/monk-bot/letters" 
                        className = "text-xl font-semibold text-center cursor-pointer underline"
                    >
                        Letters
                    </HashLink>
                </li>
                <li className = "flex justify-center">
                    <HashLink 
                        to        = "/#http-project" 
                        className = "text-xl font-semibold text-center cursor-pointer underline"
                    >
                        HTTP
                    </HashLink>
                </li>
                <li className = "flex justify-center">
                    <HashLink 
                        to        = "/thesis/introduction-to-category-theory" 
                        className = "text-xl font-semibold text-center cursor-pointer underline"
                    >
                        Category Theory
                    </HashLink>
                </li>
                <li className = "flex justify-center">
                    <HashLink 
                        to        = "/project/pertubation-methods-on-lotka-volterra-equations" 
                        className = "text-xl font-semibold text-center cursor-pointer underline"
                    >
                        Lotka Volterra
                    </HashLink>
                </li>
            </ul>
        )
    }

    return (
        <div className = "custom-mt-6 w-full fixed z-40 bg-white custom-monk-h-94 flex flex-col gap-6 pt-20">
            <HashLink 
                smooth    = {true} 
                to        = "/#about" 
                onClick   = {() => setIsOpen(false)} 
                className = "text-xl font-semibold text-center underline"
            >
                About Me
            </HashLink>
            <div className = "flex justify-center">
                <div className = "cursor-pointer" onClick = {switchProjectsMenu}>
                    <span className = "text-xl font-semibold text-center pl-6">
                        Projects
                    </span>
                    {
                        isProjectsMenuOpen ? 
                        (
                            <Icon component = {ExpandLessIcon} className = "ml-1 mb-1"/>
                        )
                        :
                        (
                            <Icon component = {ExpandMoreIcon} className = "ml-1 mb-1"/>
                        )
                    }
                </div>
            </div>
            {renderMonkBotMenu()}
            <HashLink 
                smooth    = {true} 
                to        = "/#contact" 
                onClick   = {() => setIsOpen(false)} 
                className = "text-xl font-semibold text-center underline"
            >
                Contact Me
            </HashLink>
        </div>
    )
}

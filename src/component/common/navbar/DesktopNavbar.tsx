import { useState } from "react";

import { HashLink } from "react-router-hash-link"

import { Icon } from "@mui/material"

import { NavbarMonkBotMenu }  from "./MonkBotMenu"

import ExpandMoreIcon    from '@mui/icons-material/ExpandMore';
import ExpandLessIcon    from '@mui/icons-material/ExpandLess';

export const DesktopNavbar = () => {

    // Drop down menu
    const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)

    const switchProjectsMenu = () => {
        setIsProjectsMenuOpen(!isProjectsMenuOpen)
    }

    const renderMonkBotMenu = () => {
        if (!isProjectsMenuOpen) {
            return
        }
        return <NavbarMonkBotMenu setOpen = {setIsProjectsMenuOpen}/>
    }
    
    return (
        <ul className = "flex gap-8">
            <li>
                <HashLink smooth = {true} to = "/#about" className = "text-lg font-semibold text-center">
                    About Me
                </HashLink>
            </li>
            <li>
                <HashLink smooth = {true} to = "/#contact" className = "text-lg font-semibold text-center">
                    Contact Me
                </HashLink>
            </li>
            <li>
                <span onClick = {switchProjectsMenu} className = "cursor-pointer text-lg font-semibold text-center">
                    Projects
                    {
                        !isProjectsMenuOpen ?
                        (
                            <Icon className = "ml-1 mb-1" component = {ExpandMoreIcon}/>
                        )
                        :
                        (
                            <Icon className = "ml-1 mb-1" component = {ExpandLessIcon}/>
                        )
                    }
                </span>
                {renderMonkBotMenu()}
            </li>
        </ul>
    )
}
import { HashLink } from "react-router-hash-link"

import { MobileNavbar } from "./MobileNavbar";
import { HamburgerSwitch } from "./HamburgerSwitch";
import { DesktopNavbar } from "./DesktopNavbar";
import { useEffect, useState } from "react";

export const Navbar = () => {

    const [isResize, setIsResized] = useState(false)

    // Handling the switch between the mobile and desktop navigation
    useEffect(() => {
        const handleResize = () => {
            setIsResized(!isResize)
            if (800 < window.innerWidth) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const swicthHamburgerMenu = () => {   
        setIsOpen(!isOpen)
    }

    const handleLogoClick = () => {
        if (isOpen) {
            setIsOpen(false)
        }
    }

    const renderNavbar = () => {
        if (800 < window.innerWidth) {
            return <DesktopNavbar/>
        }
        return <HamburgerSwitch swicthHamburgerMenu = {swicthHamburgerMenu} isOpen = {isOpen}/>
    }

    return (
        <>
            <nav className = "fixed navbar border-b bg-white z-20 grid grid-cols-12">
                <div className = "flex items-center justify-between col-start-1 col-end-13 2xl:col-start-2 2xl:col-end-12 px-10 py-2">
                    <HashLink 
                        smooth    = {true} 
                        to        = {"/#hero"}
                        className = ""  
                        onClick   = {handleLogoClick}
                    >
                        <h1 className = "font-bold text-md lg:text-lg text-slate-900">
                            Monk Digital
                        </h1>
                    </HashLink>
                    {renderNavbar()}
                </div>
            </nav>
            {
                isOpen ? <MobileNavbar setIsOpen = {setIsOpen}/> : <></>
            }
        </>
    )
}

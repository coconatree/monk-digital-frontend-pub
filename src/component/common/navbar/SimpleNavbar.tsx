import { HashLink } from "react-router-hash-link"

export const SimpleNavbar = () => {
    return (
        <>
            <nav className = "fixed navbar border-b bg-white z-20 grid grid-cols-12">
                <div className = "flex items-center justify-between col-start-1 col-end-13 lg:col-start-2 lg:col-end-12 px-10 py-2">
                    <HashLink 
                        to        = {"/#hero"}
                        smooth    = {true} 
                        className = ""
                    >
                        <h1 className = "font-bold text-md lg:text-lg text-slate-900">
                            Monk Digital
                        </h1>
                    </HashLink>
                </div>
            </nav>
        </>
    )
}

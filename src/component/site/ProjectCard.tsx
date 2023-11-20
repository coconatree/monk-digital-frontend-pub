import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { BUTTON_CLASSNAME, SECONDARY_BUTTON_CLASSNAME } from "../../common/Constant"

export const ProjectCard = ({id, title, featureList, children, cta, scta}: PropsWithChildren<{id?: string, title: string, featureList: {text: string}[], cta?: {text: string, link: string}, scta?: {text: string, link: string}}>) => {
    
    const renderCallToActionButtons = () => {
        return (
            <div className = "flex gap-2">
                {renderCallToAction()}
                {renderSecondaryCallToAction()}
            </div>
        )
    }

    const renderCallToAction = () => {
        if (cta === undefined) {
            return
        }
        
        return (
            <div className = "mt-10 lg:mt-20">
                <Link to = {cta.link}>
                    <button className = {BUTTON_CLASSNAME + " min-w-6/12"}>
                        {cta.text}
                    </button>
                </Link>
            </div>
        )
    }

    const renderSecondaryCallToAction = () => {
        if (scta === undefined) {
            return
        }
        
        return (
            <div className = "mt-10 lg:mt-20">
                <Link to = {scta.link}>
                    <button className = {SECONDARY_BUTTON_CLASSNAME + " min-w-6/12"}>
                        {scta.text}
                    </button>
                </Link>
            </div>
        )
    }
    
    return (
        <div  id = {id !== undefined ? id : ""} className = "custom-pt-10 min-h-screen flex flex-col justify-center">
            <h1 className = "text-4xl font-bold">
                {title}
            </h1>
            {children}
            {renderCallToActionButtons()}
            <ul className = "mt-10 list-none flex gap-2 flex-wrap">
                {
                    featureList
                    .map((item, index) => (
                        <li key = {index} className = "mt-2 bg-slate-100 rounded-md px-3 py-1 text-xl font-semibold">
                            {item.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}   

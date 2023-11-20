import { HashLink } from "react-router-hash-link"
import { BUTTON_CLASSNAME, PARAGRAPH_CLASSNAME, TITLE_CLASSNAME } from "../../common/Constant"

export const Hero = ({className}: ClassNameProps) => {
    return (
        <div id = "hero" className = {"custom-mt-6 flex flex-col items-center justify-center custom-monk-h-94 pb-10 px-10" + " " + className}>
            <h1 className = {TITLE_CLASSNAME + "text-center"}>
                Creating Value By Implementing Software Solutions
            </h1>
            <p className = {PARAGRAPH_CLASSNAME + "text-center mt-8"}>
                Unlock efficiency, unlock productivity and streamline operations
            </p>
            <div className = "mt-20 relative z-10">
                <HashLink
                    smooth    = {true}
                    to        = "#about"
                    className = {BUTTON_CLASSNAME}
                >
                    Learn More
                </HashLink>
            </div>
        </div>
    )
}
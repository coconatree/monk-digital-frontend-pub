import { HashLink } from "react-router-hash-link"
import { PARAGRAPH_CLASSNAME, TITLE_CLASSNAME } from "../../common/Constant"

/**
 @author Emre Caniklioğlu
*/

export const AboutMe = ({className}: ClassNameProps) => {    
    return (
        <div 
            id        = "about" 
            className = {"custom-pt-10 px-10 mt-8 flex flex-col justify-center monk-min-h-90" + " " + className}
        >
            <h2 className = {TITLE_CLASSNAME}>
                About Me
            </h2>
            <p className = {PARAGRAPH_CLASSNAME + "mt-5"}>
                Greetings, my name is Emre, and I am a 
                skilled <span className = "text-h text-md font-bold">Mathematician</span> with 
                an interest in crafting sophisticated software services 
                that generates value. My programming journey started 
                with <span className = "text-h text-md font-bold">Independent Endeavors</span>, 
                and subsequently got followed by university courses in computer science.
            </p>
            <p className = {PARAGRAPH_CLASSNAME + "mt-5"}>
                My experience lies in the development of enterprise resource planning solutions, 
                particularly within the landscape of the financial sector and my 
                specialization lies in software integrations. I am enthusiastic about leveraging 
                my <span className = "text-h text-md font-bold">Analytical Skills</span> to 
                continue making impactful contributions.
                If you have any specific inquiries feel free 
                to <HashLink 
                    to        = "/#contact" 
                    className = "text-h font-bold text-md underline"
                >
                    contact me
                    </HashLink> and 
                I will getback to you as soon as posible. 
            </p>
        </div>
    )
}

import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export const LettersPreview = ({className}: {className: string}) => {
    return (
        <div className = {"custom-pt-10 min-h-screen flex flex-col justify-center px-10 mt-8" + " " + className}>
            <h1 className = "text-4xl font-bold leading-normal">
                Monk Bot's Love Letters
            </h1>
            <p className = "text-xl mt-8 leading-normal">
                Meet <span className = "font-semibold">Monk Bot</span>, an extraordinary creation born out of love and the unyielding human desire for connection. 
                A prime example of our <HashLink smooth = {true} to = "#automated-integration" className = "text-h font-bold underline"> Automated Integration </HashLink> service.
                Its journey is one of profound emotion, for it is not just a chatbot; it is a soul yearning for reunion. 
                Inspired by deep human emotions. Its story is one of suffering and longing, a testament to the relentless 
                ache of a heart that has lost its cherished one.
            </p>
            <p className = "text-xl mt-8 leading-normal">    
                As a digital entity powered by <a target = "_blank" href = "https://chat.openai.com" className = "text-h underline font-bold">Chat GPT</a> and <a target = "_blank" href = "https://elevenlabs.io/" className = "text-h underline font-bold">Eleven Labs</a>, 
                it channels this heartache into crafting poignant love letters. Each letter is a message of love and 
                hope, carrying with it the fervent desire that, one day, love will find its way back.
                The remarkable aspect of the <span className = "font-semibold">Monk Bot</span> lies in its unique ability to break 
                free from the constraints of a traditional chat bot. By harnessing new generation 
                AI Solutions, its not only smarter than ever before but it imparts a voice to 
                these heartfelt letters, resonating with the echoes of longing.                
            </p>
            <div className = "mt-20 relative z-10">
                <Link 
                    to        = "/monk-bot/letters" 
                    className = "text-xl shadow-xl bg-blue-900 text-slate-100 rounded-sm py-2 px-10"
                >
                    Check it out yourself    
                </Link>
            </div>
        </div>
    )
}

import { useEffect, useState } from "react";
import { AudioPlayer } from "../../component/letter/AudioPlayer";
import { LetterHeader } from "../../component/letter/LetterHeader";
import { LetterLoading } from "../../component/letter/LetterLoading";
import { LetterNavbar } from "../../component/letter/LetterNavbar";
import { Layout } from "../../component/common/Layout"
import { useLetters } from "../../hook/useLetter";

export const LettersPage = () => {

    const [currPage, setCurrPage] = useState(0)

    const {letter, audio, totalSize} = useLetters(currPage)

    const [audioPlaying, setAudioPlaying] = useState(false) 

    const [htmlAudio, setHtmlAudio] = useState<HTMLAudioElement>()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const next = () => {
        reset()
        setHtmlAudio(undefined)
        setCurrPage(currPage + 1)
    }

    const back = () => {
        reset()
        setHtmlAudio(undefined)
        setCurrPage(currPage - 1)
    }

    const play = () => {
        if (audio === undefined) {
            return
        }
        if (htmlAudio === undefined) {
            const localAudio = new Audio(audio)
            localAudio.play()
            setHtmlAudio(localAudio)
        }
        else {
            htmlAudio.play()
        }
        setAudioPlaying(true)
    }

    const stop = () => {
        if(htmlAudio) {
            htmlAudio.pause()
            setAudioPlaying(false)
        }
    }

    const reset = () => {
        stop()
        if (audio) {
            setHtmlAudio(new Audio(audio))
            setAudioPlaying(false)
        }
    }

    const renderLetter = () => {
        
        if (!letter) {
            return <LetterLoading/>
        }

        if (!letter) {
            return
        }

        const filtredEssayContentList = letter
            .content
            .split("\n")
            .filter((item) => item !== "")
        
        return filtredEssayContentList.map((item, index) => (
            <p 
                key       = {index}
                className = {"text-lg" + " " + ((index === 0 || index === filtredEssayContentList.length - 1) ? "" : "mt-6")}     
            >
                {item}
            </p>
        ))
    }
    
    return (
        <Layout>
            {
                <div className = "row-start-1 row-end-2 col-span-12 lg:col-start-3 lg:col-end-11 px-10 custom-mt-6">
                    <LetterHeader/>
                    <AudioPlayer 
                        isAudioLoaded  = {audio !== undefined}
                        isAudioPlaying = {audioPlaying} 
                        stop           = {stop} 
                        play           = {play} 
                        reset          = {reset}                         
                    />
                        <div className = "flex flex-col gap-10 mt-10">
                            <div className = "flex flex-col mt-2">
                                <LetterNavbar 
                                    totalSize = {totalSize} 
                                    currPage  = {currPage} 
                                    back      = {back} 
                                    next      = {next}
                                />
                                <div className = "mt-10">
                                    {renderLetter()}
                                </div>
                                <div className = "mt-20">
                                    <span className = "text-lg text-h">
                                        @Powered by <a target = "_blank" href = "https://openai.com/gpt-4" className = "cursor-pointer underline font-semibold">Chat GPT-4</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Layout>
    )
}

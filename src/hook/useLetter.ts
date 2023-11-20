import { useEffect, useState } from "react"
import { useError } from "./useError"
import { useAxios } from "./useAxios"
import { API_BASE_URL } from "../common/Constant"
import { checkResponseOkAxios, checkResponseOkFecth, convertArryaBufferToAudioBlob } from "../common/Utility"

let userLeft = false

export const useLetters = (currPage: number) => {

    const { navigateToErrorPage } = useError()

    const { axiosPublic } = useAxios()

    // Letter and Auidio state

    const [letter, setLetter] = useState<LetterDTO>()
    const [audio,  setAudio]  = useState<string>()

    const [letterError, setLetterError]  = useState<boolean>(false)
    const [audioError, setAudioError]  = useState<boolean>(false)

    // Fetching the metadata for the letters

    const [letterMetaData, setLetterMetaData] = useState<LetterMetaData[]>([])

    useEffect(() => {
        userLeft = false
        axiosPublic.get(`${API_BASE_URL}/letter/list/metadata`, {})
            .then(checkResponseOkAxios)
            .then(response => response.data)
            .then(data => setLetterMetaData(data))
            .catch(_ => {
                if (!userLeft) {
                    navigateToErrorPage("Failed to load the page.")
                }
            })
            return () => {
                userLeft = true
            }
            
    }, [])

    // Cache for the page
    const [cache, _] = useState<LetterPageCache>({
        letterCache:    new Map(),
        audioCache:     new Map(),
    })

    useEffect(() => {
        const fetchLetter = async () => {
             // Check if the metadata is loaded
             if(letterMetaData.length === 0) {
                return
            }
            // Check if the page pivot is ouy of bounds
            if (currPage < 0 || letterMetaData.length <= currPage) {
                return
            }           

            // Reset the letter state
            setLetter(undefined)        
            setLetterError(false)
            // Check the cache if not fetch and add to cache
            const metadata = letterMetaData[currPage]
            const cachedLetter = cache.letterCache.get(metadata.id)
            if (cachedLetter === undefined) {
                await axiosPublic.get(`${API_BASE_URL}/letter/select/${metadata.id}`, {
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(checkResponseOkAxios)
                    .then(response => response.data)
                    .then(data => {
                        cache.letterCache.set(data.id, data)
                        setLetter(data)
                    })
                    .catch(_ => {})
            }
            else {
                setLetter(cachedLetter)
            }
        }
        fetchLetter()
    }, [currPage, letterMetaData])

    useEffect(() => {
        const fetchVoiceOver = async () => {  
            // Check if the metadata is loaded
            if(letterMetaData.length === 0) {
                return
            }
            // Check if the page pivot is ouy of bounds
            if (currPage < 0 || letterMetaData.length <= currPage) {
                return
            }
            // Reset the audio state
            setAudioError(false)
            setAudio(undefined)
            
            // Check the cache if not fetch and add to cache
            const metadata = letterMetaData[currPage]
            const cachedAudio = cache.audioCache.get(metadata.id)
            
            if(!cachedAudio) {
                fetch(`${API_BASE_URL}/letter/voiceover/select/${metadata.id}`, {
                        headers: {
                            "accept": "audio/mpeg",
                        }
                    }
                )
                .then(checkResponseOkFecth)
                .then(response => response.arrayBuffer())
                .then(convertArryaBufferToAudioBlob)
                .then(blob => {
                    const audio = URL.createObjectURL(blob)
                    cache.audioCache.set(metadata.id, audio)
                    setAudio(audio)
                })
                .catch(error => {console.log(error)})
            }
            else {
                setAudio(cachedAudio)
            }
        }
        fetchVoiceOver() 
    }, [currPage, letterMetaData])

    return {
        letter:      letter,
        audio:       audio,
        totalSize:   letterMetaData.length,
        letterError: letterError,
        audioError:  audioError
    }
}

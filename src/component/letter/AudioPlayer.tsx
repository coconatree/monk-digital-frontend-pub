import { Icon } from "@mui/material"

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import RestartAltIcon from '@mui/icons-material/RestartAlt';

/**
    Audio player used inthe letters project
*/
export const AudioPlayer = ({
    isAudioLoaded,
    isAudioPlaying, 
    stop, 
    play, 
    reset
}: AudioPlayerProps
) => 
{
    const renderAudioPlayer = () => {
        if (!isAudioLoaded) {
            return (
                <div className = "px-4 py-6 mt-10 rounded-md flex shadow-md bg-blue-100 gap-4">
                    <span className = "text-lg font-semibold text-center w-full">
                        Loading the audio file. Please wait.
                    </span>
                </div>
            )
        }

        return (
            <div className = "px-2 md:px-8 py-4 mt-10 rounded-md flex shadow-md bg-blue-100 gap-4">
                <div className = "flex gap-x-2">
                    <button 
                        className = "rounded-3xl border border-black w-10 h-10 mt-2 mb-2"
                        onClick   = {isAudioPlaying ? stop : play}
                    >
                        <Icon component = {isAudioPlaying ? PauseIcon : PlayArrowIcon}/>
                    </button>
                    <button 
                        className = "rounded-3xl border border-black w-10 h-10 mt-2 mb-2"
                        onClick   = {reset}
                    >
                        <Icon component = {RestartAltIcon}/>
                    </button>
                </div>
                <div className = "flex justify-center items-center">
                    <h2 className = "text-lg w-full md:ml-4">
                        Listen to the voiceover, <span className = "text-h">
                        @Powered by <a 
                            target    = "_blank" 
                            href      = "https://elevenlabs.io/" 
                            className = "font-semibold underline"
                        >
                            ElevanLabs
                        </a>
                        </span> 
                    </h2>
                </div>
            </div>
        )
    }
    return renderAudioPlayer()
}

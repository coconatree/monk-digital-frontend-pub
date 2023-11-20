import { useNavigate } from "react-router-dom"

export const useError = () => {
    
    const navigate = useNavigate()

    const navigateToErrorPage = (msg: string) => {
        navigate("/error", {
            state: {msg: msg}
        })
    }

    return { navigateToErrorPage }
} 

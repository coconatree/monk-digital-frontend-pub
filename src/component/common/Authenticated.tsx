import { PropsWithChildren, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ApplicationContext } from "../../context/ApplicationContext"

export const Authenticated = ({children}: PropsWithChildren<EmptyProps>) => {
    
    const navigate = useNavigate() 
    const { isLoggedIn } = useContext(ApplicationContext)

    if (isLoggedIn) {
        navigate("/auth/login")
    }
    return <>{children}</>
}

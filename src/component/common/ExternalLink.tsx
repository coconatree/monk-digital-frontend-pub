import { Link } from "react-router-dom"

export const ExternalLink = ({text, link}: {text: string, link: string}) => {
    return (
        <Link to = {link} className = "text-md text-h underline font-bold pointer-cursor">
            {text}
        </Link>
    )
}
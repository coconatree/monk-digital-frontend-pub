import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export const NavbarMonkBotMenu = ({setOpen}: {setOpen: (b: boolean) => void}) => {
    return (
        <ul className = "navbar-menu absolute rounded bg-white px-5 py-2 flex flex-col gap-3 z-30 mt-4 shadow-xl border">
            <li>
                <Link 
                     to       = "/monk-bot/letters"
                    className = "font-semibold text-lg"
                >
                    Letters
                </Link>
            </li>
            <li className = "font-semibold text-lg">
                <HashLink 
                    smooth  = {true} 
                    to      = "/#http-project" 
                    onClick = {() => setOpen(false)}
                >
                    HTTP
                </HashLink>
            </li>
            <li className = "font-semibold text-lg">
                <Link 
                    to = "/thesis/introduction-to-category-theory"
                >
                    Category
                </Link>
            </li>
            <li className = "font-semibold text-lg">
                <Link 
                    to = "/project/pertubation-methods-on-lotka-volterra-equations"
                >
                    Lotka Volterra
                </Link>
            </li>
        </ul>
    )
}


import { Footer } from "./Footer"
import { SimpleNavbar } from "./navbar/SimpleNavbar"

/** 
 Layout for the authentication pages 
*/

export const SimpleLayout = ({children}: LayoutProps) => {
    return (
        <>
            <SimpleNavbar/>
            <section id = "hero" className = "grid grid-cols-12">
                {children}
            </section>
            <div className = "grid grid-cols-12 border-t border-slate-400 mt-20">
                <Footer/> 
            </div>
        </>
    )
}

import { Footer } from "./Footer"
import { Navbar } from "./navbar/Navbar"

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar/>
            <section id = "hero" className = "grid grid-cols-12">
                {children}
            </section>
            <div className = "grid grid-cols-12 border-t border-slate-400">
                <Footer/> 
            </div>
        </>
    )
}

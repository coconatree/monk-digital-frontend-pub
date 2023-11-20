import { Layout } from "../../component/common/Layout"

import HoleVector from "../../../resources/hole.svg"

import { Hero } from "../../component/site/Hero"
import { AboutMe } from "../../component/site/About"
import { ContactForm } from "../../component/site/Contact"
import { ProjectsSection } from "../Projects"

export const HomePage = () => {

    const renderHoleVector = () => {
    
        if (window.innerWidth < 1350) {
            return <></>
        }
        
        return (
            <img className = "hole-vector" src = {HoleVector}/>
        )
    }

    return (
        <>
            <Layout>
                <Hero            className = "row-start-1 row-end-2 col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11"/>
                <AboutMe         className = "row-start-2 row-end-3 col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11"/>
                <ProjectsSection className = "row-start-3 row-end-4 col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11"/>
                <ContactForm     className = "row-start-5 row-end-6 col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11"/>
            </Layout>
            {renderHoleVector()}
        </>
    )
}

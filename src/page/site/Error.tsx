import { Link, useParams } from "react-router-dom"
import { Layout } from "../../component/common/Layout"

export const ErrorPage = () => {
    
    const {msg} = useParams()

    return (
        <Layout>
            <div className = "col-start-1 col-end-13 lg:col-start-3 lg:col-end-11 px-10 flex flex-col min-h-screen justify-center items-center">
                <h1 className = "text-4xl font-bold text-center">
                    An Error Occured
                </h1>
                <p className = "text-xl mt-10 text-center">
                    {msg ? msg + "" : "Failed to load the page"}
                </p>
                <p className = "text-lg mt-10 text-center">
                    Go back to <Link className = "text-h underline" to = "/"> Home</Link>. 
                </p>
            </div>
        </Layout>
    )
} 

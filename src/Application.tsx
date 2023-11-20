import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"

import { HomePage } from "./page/site/Home"
import { LettersPage } from "./page/project/Letters"
import { ErrorPage } from "./page/site/Error"
import { useState } from "react"
import { ApplicationContext, DEFAULT_APPLICATION_CONTEXT } from "./context/ApplicationContext"
import { LoginPage } from "./page/auth/Login"
import { RegisterPage } from "./page/auth/Register"
import { ProfilePage } from "./page/Profile"
import { ValidationPage } from "./page/site/Validation"

import AppliedMathProject from "../data/project/AppliedMathematicsProject.pdf"
import IntroductionToCategoryTheory from "../data/project/BachelorThesis.pdf"

import { PDFPage } from "./page/project/PDF"

export const Application = () => {

	const [user, setUser] = useState<ApplicationUser>()

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const loginUser = (user: ApplicationUser) => {
		setUser(user)
		setIsLoggedIn(true)
	}

	const [accessToken, setAccessToken] = useState("")

	const clearAccountToken = () => {
		setAccessToken("")
	}

	const logoutUser = () => {
		setIsLoggedIn(false)
		setUser(undefined)
		clearAccountToken()
	}

	return (
		<ApplicationContext.Provider value = {
			{
				... DEFAULT_APPLICATION_CONTEXT,
				logoutUser: 	   logoutUser,
				user: 		       user,
				loginUser: 	       loginUser,
				isLoggedIn:        isLoggedIn,
				accessToken:       accessToken,
				setAccessToken:    setAccessToken,
				clearAccountToken: clearAccountToken
			}
		}>
			<BrowserRouter>
				<Routes>
					<Route index path = "/" 	   	             element = {<HomePage/>}/>
					<Route  	 path = "/auth/login"            element = {<LoginPage/>}/>
					<Route  	 path = "/auth/register"         element = {<RegisterPage/>}/>
					<Route 		 path = "/monk-bot/letters"      element = {<LettersPage/>}/>
					<Route 		 path = "/user/validate/:token"  element = {<ValidationPage/>}/>
					<Route 		 path = "/profile" 			 	 element = {<ProfilePage/>}/>
					<Route 		 
								path    = "/thesis/introduction-to-category-theory" 
								element = {<PDFPage pdfFile = {IntroductionToCategoryTheory}/>}
					/>
					<Route 		 
								path    = "/project/pertubation-methods-on-lotka-volterra-equations" 
								element = {<PDFPage pdfFile = {AppliedMathProject}/>}
					/>
					<Route 		 path = "/error/:msg"  	         element = {<ErrorPage/>}/>
					<Route 		 path = "*" 	   	   	         element = {<ErrorPage/>}/>
				</Routes>
			</BrowserRouter>
		</ApplicationContext.Provider>
	)
}

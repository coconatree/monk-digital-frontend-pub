import { createContext } from "react";

export const DEFAULT_APPLICATION_CONTEXT: ApplicationContextI = {
    isLoggedIn:        false,
    user:              undefined,
    loginUser:         (_) => { },
    logoutUser:        () => { },
    accessToken:       "",
    setAccessToken:    (_) => {},
    clearAccountToken: () => {}
}

export const ApplicationContext = createContext<ApplicationContextI>(DEFAULT_APPLICATION_CONTEXT)

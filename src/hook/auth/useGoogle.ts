
import { 
    GOOGLE_DISCOVERY_DOCS, 
    GOOGLE_SCOPES, 
    IS_GOOGLE_INIT_DONE, 
    changeGoogleInit 
} 
from "../../common/Constant";

export const useGoogle = () => {

    const init = (options: {updateLoggedInStatus: (status: boolean) => void;}) => {
        if (IS_GOOGLE_INIT_DONE) {
            return;
        }
        changeGoogleInit(true)
             
        gapi.client
            .init({
                clientId:      "GOOGLE_CLIENT_ID",
                discoveryDocs: GOOGLE_DISCOVERY_DOCS,
                scope: 		   GOOGLE_SCOPES.join(" "),
                apiKey: 	   "GOOGLE_API_KEY",
        })
        .then(() => {	  
            gapi
                .auth2
                .getAuthInstance()
                .isSignedIn
                .listen(options.updateLoggedInStatus);
                    options.updateLoggedInStatus(
                    gapi.auth2.getAuthInstance().isSignedIn.get()
                );
          })
          .catch((err: any) => {
              console.error("Caught error", err);
          });
    }

    const signIn = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        gapi
            .auth2
            .getAuthInstance()
            .signIn()
            .then((response: any) => {
                const profile = response.getBasicProfile()
                console.log(profile)
            })
    }

    const signOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        gapi
            .auth2
            .getAuthInstance()
            .signOut()
    }

    return {
        signIn:  signIn,
        signOut: signOut,
        init:    init
    }
}

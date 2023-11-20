
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon  from '@mui/icons-material/Twitter';

/**
    Constant values used in the application
*/

export let IS_GOOGLE_INIT_DONE = false

export const changeGoogleInit = (v: boolean) => {
    IS_GOOGLE_INIT_DONE = v
}

export const GOOGLE_DISCOVERY_DOCS = [
	"https://www.googleapis.com/discovery/v1/apis/people/v1/rest",
]
  
export const GOOGLE_SCOPES 	= [
    "https://www.googleapis.com/auth/calendar"
]
  
const IS_PRODUCTION = false

export const API_BASE_URL = IS_PRODUCTION ? "https://www.monk-digital.com:8082/api/v1" : "http://localhost:8080/api/v1"

export const SOCIAL_LINK_LIST = [
    {logo: LinkedInIcon, href: "https://www.linkedin.com/company/monk-digital/", name: "linkedin/monk-digital"}, 
    {logo: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61553384755330", name: "facebook/monk-digital"}, 
    {logo: TwitterIcon,  href: "https://twitter.com/monk_digital_x", name: "twitter/monk-digital"}
]

// Constant classnames

export const TITLE_CLASSNAME     = "text-4xl font-bold leading-normal "

export const PARAGRAPH_CLASSNAME = "text-xl leading-normal "

export const SERVICE_CARD_CLASSNAME = "custom-pt-10 rounded-md flex flex-col justify-center monk-min-h-90"

export const SERVICE_LIST_CLASSNAME = "list-inside flex flex-col gap-1 mt-10 "

export const SERVICE_LIST_ITEM_CLASSNAME = "text-lg mt-2 "

export const BUTTON_CLASSNAME = "text-lg lg:text-xl shadow-xl bg-blue-900 rounded-md border text-slate-100 py-1 py-3 px-6 lg:px-10 "
export const SECONDARY_BUTTON_CLASSNAME = "text-lg lg:text-xl shadow-xl border-blue-900 border text-black rounded-md py-1 py-3 px-6 lg:px-10 "

export const TEXT_AREA_CLASSNAME = "border rounded-sm shadow-sm px-2 py-2 h-40 resize-none"
                        
export const LOGIN_FORM_CLASSNAME = "mt-10 w-full flex flex-col items-center gap-4 "
export const AUTH_CONTAINER_CLASSNAME = "flex min-h-screen col-start-1 col-end-13 px-10 "
export const FORM_FIELD_CONTAINER_CLASSNAME = "flex flex-col "
export const AUTH_FORM_FIELD_CONTAINER_CLASSNAME = FORM_FIELD_CONTAINER_CLASSNAME + "w-full mt-4"

export const FORM_LABEL_CLASSNAME = "text-lg font-semibold mb-3"
export const FORM_INPUT_CLASSNAME = "mt-10 mb-1"
export const AUTH_FORM_BUTTON_CLASSNAME = "text-xl shadow-xl bg-blue-900 text-slate-100 rounded-md py-3 px-10 w-full"

export const AUTH_FORM_LINK_CLASSNAME = "text-md underline cursor-pointer text-center"

export const AUTH_FORM_CTA_CONTAINER_CLASSNAME = "flex flex-col mt-6 w-full"

export const AUTH_FORM_ICON_CONTAINER_CLASSNAME = "flex gap-4 w-full justify-center mt-8"
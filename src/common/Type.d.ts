
/**
    Type declerations for the application
*/

type ErrorPageProps = {
    message: string
}

interface NewContactRequest {
    email:   string,
    message: string,
}

type LetterDTO = {
    id:          number
    title:       string
    content:     string
    prompt:      string
    createdAt:   Date
    publishedAt: Date
}

type EmptyProps = {}

type LayoutProps = PropsWithChildren<{}>

type LetterPageState = {
    letterCache:    Map<number, LetterDTO>,
    audioCache:     Map<number, {audio: HTMLAudioElement, url: string}>,
    isAudioPlaying: boolean
}

type LetterPageCache = {
    letterCache:    Map<number, LetterDTO>,
    audioCache:     Map<number, string>,
}

type LeterState = {
    isLoaded: boolean,
    isFailed: boolean,
    letter?:  LetterDTO,
}

type AudioState = {
    isLoaded: boolean,
    isFailed: boolean,
    audio?:   HTMLAudioElement,
    url?:     string      
}

type LetterMetaData = {
    id: number
}

type ClassNameProps = {
    className: string
}

type LetterNavbarProps = {
    totalSize: number
    currPage:  number
    back:      () => void, 
    next:      () => void,
}

type AudioPlayerProps = {
    isAudioLoaded:  boolean,
    isAudioPlaying: boolean, 
    stop:           () => void, 
    play:           () => void, 
    reset:          () => void
}

type ApplicationUser = {
    id:                         string,
    username:                   string,
    createdAt:                  Date,
    role:                       string,
    photoURL:                   string,
    isEmailvalidated:           boolean,
    isGoogleAccountConnected:   boolean,
    isLinkedinAccountConnected: boolean,
}

interface ApplicationContextI {
    isLoggedIn:        boolean,
    user?:             ApplicationUser,
    loginUser:         (user: ApplicationUser) => void,
    logoutUser:        () => void,
    accessToken:       string,
    setAccessToken:    (token: string) => void,
    clearAccountToken: () => void
}

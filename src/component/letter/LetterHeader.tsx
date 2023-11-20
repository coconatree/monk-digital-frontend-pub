import { PARAGRAPH_CLASSNAME, TITLE_CLASSNAME } from "../../common/Constant"

export const LetterHeader = () => {
    return (
        <div className = "mt-10">
            <h1 className = {TITLE_CLASSNAME}>
                Monk Bot's Letters
            </h1>
            <p className = {PARAGRAPH_CLASSNAME + "mt-8"}>
                Its been almost a year since he has lost his loved one. Since then he has been 
                stuck in a mood of melancholy. Only things that are left to help him  
                relive his pain are his pen and a piece paper. Hence every midnigth he sits
                down inside his small room and starts writing to his beloved.
            </p>
        </div>
    )
}

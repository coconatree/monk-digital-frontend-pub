import { TITLE_CLASSNAME } from "../../common/Constant"

export const LetterLoading = () => {
    return (
        <div className = "col-span-12 px-10 h-80 flex justify-center items-center custom-mt-6">
            <h3 className = {TITLE_CLASSNAME + "text-center w-full"}>
                Loading the letter. Please wait.
            </h3>
        </div>
    )
} 

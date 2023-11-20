import { Icon } from "@mui/material"

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

export const LetterNavbar = ({
    totalSize, 
    currPage, 
    back, 
    next
} : LetterNavbarProps ) => 
{
    return (
        <div className = "flex flex-row-reverse mt-4">
            <div className = "flex gap-2">
            {
                    0 < currPage ? (
                        <Icon 
                            onClick   = {back}
                            className = "cursor-pointer"
                            component = {ArrowLeftIcon}
                        />
                    ) : <></>
                }
                <span className = "flex justify-center items-center">
                    {currPage + 1} / {totalSize}
                </span>
                {
                    currPage < totalSize - 1 ? (
                        <Icon 
                            onClick   = {next}
                            className = "cursor-pointer"
                            component = {ArrowRightIcon}
                        />
                    ) : <></>
                }
            </div>
        </div>
    )
}


export const HamburgerSwitch= ({swicthHamburgerMenu, isOpen}: {swicthHamburgerMenu: () => void, isOpen: boolean}) => {
    return (
        <div 
            className = "flex flex-col gap-y-1 justify-center cursor-pointer"
            onClick   = {swicthHamburgerMenu}
        >
            {
                !isOpen ? ( 
                    <>
                        <span className = "line line-1"></span>
                        <span className = "line line-2"></span>
                        <span className = "line line-3"></span>
                    </>
                ) : (
                    <div className = "cross-container">
                        <span className = "line line-4"></span>
                        <span className = "line line-5"></span>
                    </div>
                )
            }
        </div>
    )
}

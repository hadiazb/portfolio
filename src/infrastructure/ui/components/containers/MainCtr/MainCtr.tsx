import React, { FC } from 'react'

export interface MainCtrProps {
    children: React.ReactNode
}

const MainCtr: FC<MainCtrProps> = ({ children }): JSX.Element => {
    return (
        <div className="min-h-screen transition-[all] duration-[300ms] delay-[150ms]">
            {children}
        </div>
    )
}

export default MainCtr

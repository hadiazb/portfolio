import React, { FC } from 'react'

export interface DefaultCtrProps {
    children: React.ReactNode
}

const DefaultCtr: FC<DefaultCtrProps> = ({ children }) => {
    return <div className="px-1 mx-2 max-w-screen-xl sm:mx-auto sm:px-3 md:px-5">{children}</div>
}

export default DefaultCtr

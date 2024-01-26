import React, { FC } from 'react'
import { DefaultCtr, MainCtr } from '..'

export interface HOCCtrProps {
    children: React.ReactNode
}

const HOCCtr: FC<HOCCtrProps> = ({ children }) => {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <MainCtr>
                    <DefaultCtr>{children}</DefaultCtr>
                </MainCtr>
            </body>
        </html>
    )
}

export default HOCCtr

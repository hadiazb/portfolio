'use client'

import React, { FC, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface IStyledComponentsRegistry {
    children: React.ReactNode
}

const StyledComponentsRegistry: FC<IStyledComponentsRegistry> = ({ children }) => {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== 'undefined') return <>{children}</>

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    )
}

export default StyledComponentsRegistry

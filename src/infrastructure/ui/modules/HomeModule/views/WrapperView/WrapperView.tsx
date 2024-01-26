'use client'

import { FC, ReactElement } from 'react'

// views
import { AboutMeView, BlogView, ProjectsView, TutorialView } from '..'

// interfaces
import { Option } from '@/infrastructure/ui/components/ui/MobileMenu/MobileMenu'

// styles
import { StyledWrapperView } from './wrapperView-style'

export interface WrapperViewProps {
    options: Option[]
    value: number
}

const WrapperView: FC<WrapperViewProps> = ({ options, value }): ReactElement => {
    const views: Record<number, JSX.Element> = {
        0: <AboutMeView />,
        1: <ProjectsView />,
        2: <BlogView />,
        3: <TutorialView />,
    }

    return (
        <>
            {options
                .filter((opt) => opt.id === value)
                .map((option) => (
                    <StyledWrapperView key={option.id}>{views[value]}</StyledWrapperView>
                ))}
        </>
    )
}

export default WrapperView

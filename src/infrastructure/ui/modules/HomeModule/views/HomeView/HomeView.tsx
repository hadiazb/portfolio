'use client'

import React, { SyntheticEvent, useState } from 'react'
import { WrapperView } from '..'
import { MobileMenu } from '@/infrastructure/ui/components'
import { StyledHomeView } from './homeView-styled'

const options = [
    {
        label: 'About Me',
        fontSize: 11,
        icon: 'Person2',
        id: 0,
    },
    {
        label: 'Projects',
        fontSize: 11,
        icon: 'Work',
        id: 1,
    },
    {
        label: 'Blog',
        fontSize: 11,
        icon: 'Notifications',
        id: 2,
    },
    {
        label: 'Tutorial',
        fontSize: 11,
        icon: 'Lightbulb',
        id: 3,
    },
]

const HomeView = (): JSX.Element => {
    const [value, setValue] = useState(0)

    const handleChangeOption = (_e: SyntheticEvent<Element, Event>, newValue: number): void => {
        setValue(newValue)
    }
    return (
        <StyledHomeView>
            <WrapperView options={options} value={value} />
            <MobileMenu options={options} value={value} onChangeValue={handleChangeOption} />
        </StyledHomeView>
    )
}

export default HomeView

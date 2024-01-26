'use client'

import { Tabs, TabsProps } from '@mui/material'
import styled from 'styled-components'

export type StyledTabsProps = TabsProps & {
    $indicatorPosition?: 'top' | 'bottom'
}

export const StyledTabs = styled(Tabs)<StyledTabsProps>``

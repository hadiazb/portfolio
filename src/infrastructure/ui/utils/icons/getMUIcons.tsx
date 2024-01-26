import { JSXElementConstructor, ReactElement } from 'react'
import * as MUIIcons from '@mui/icons-material'

type IIcons = Record<
    string,
    string | ReactElement<unknown, string | JSXElementConstructor<unknown>>
>

export const muiIcons: IIcons = {
    Person2: <MUIIcons.Person2 />,
    Work: <MUIIcons.Work />,
    Notifications: <MUIIcons.Notifications />,
    Lightbulb: <MUIIcons.Lightbulb />,
    Abc: <MUIIcons.Abc />,
    AbcOutlined: <MUIIcons.AbcOutlined />,
    GitHub: <MUIIcons.GitHub />,
    LinkedIn: <MUIIcons.LinkedIn />,
    Twitter: <MUIIcons.Twitter />,
}

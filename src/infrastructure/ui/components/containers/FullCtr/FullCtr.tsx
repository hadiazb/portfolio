import React, { FC } from 'react'
import { DefaultCtr, MainCtr } from '..'

export interface FullCtrProps {
	children: React.ReactNode;
}


const FullCtr: FC<FullCtrProps> = ({children}) => {
  return (
    <MainCtr>
      <DefaultCtr>
        {children}
      </DefaultCtr>
    </MainCtr>
  )
}

export default FullCtr
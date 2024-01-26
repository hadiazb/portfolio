'use client'

/* Core */
import { PersistGate } from 'redux-persist/integration/react'

// state
import { persistor } from '@/domain/store/store'

const PersistProvider = (props: React.PropsWithChildren): JSX.Element => {
    return (
        <PersistGate persistor={persistor} loading={null}>
            {props.children}
        </PersistGate>
    )
}

export default PersistProvider

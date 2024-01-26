'use client'

/* Core */
import { Provider } from 'react-redux'

// state
import { store } from '@/domain/store/store'

const ProviderRedux = (props: React.PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{props.children}</Provider>
}

export default ProviderRedux

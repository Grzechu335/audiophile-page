import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google'
import { Provider } from 'react-redux'
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})
import Cart from '@/components/organisms/Cart'
import { persistor, store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${manrope.variable}`}>
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <Header />
                    <Cart />
                    <Component {...pageProps} />
                    <Footer />
                </PersistGate>
            </Provider>
        </main>
    )
}

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google'
import BestGear from '@/components/molecules/BestGear'
import { Provider } from 'react-redux'
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})
import { store } from '@/store'
import Cart from '@/components/organisms/Cart'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${manrope.variable}`}>
            <Provider store={store}>
                <Header />
                <Cart />
                <Component {...pageProps} />
                <BestGear />
                <Footer />
            </Provider>
        </main>
    )
}

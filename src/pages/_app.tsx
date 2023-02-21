import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google'
import BestGear from '@/components/molecules/BestGear'

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${manrope.variable}`}>
            <Header />
            <Component {...pageProps} />
            <BestGear />
            <Footer />
        </main>
    )
}

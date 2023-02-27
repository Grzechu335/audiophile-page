import CheckoutModal from '@/components/organisms/CheckoutModal'
import CheckoutPage from '@/components/templates/CheckoutPage'
import { modalStatus } from '@/store/ModalSlice'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Checkout = (props: Props) => {
    const modal = useSelector(modalStatus)
    return (
        <>
            <Head>
                <title>Audiophile - checkout</title>
            </Head>
            <main>
                <CheckoutPage />
                {modal && <CheckoutModal />}
            </main>
        </>
    )
}

export default Checkout

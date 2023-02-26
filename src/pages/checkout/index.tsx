import GoBackButton from '@/components/atoms/GoBackButton'
import Radio from '@/components/atoms/Radio'
import FormField from '@/components/molecules/FromField'
import CheckoutSummary from '@/components/organisms/CheckoutSummary'
import { useState } from 'react'
import CashOnDeliveryIcon from 'public/images/checkout/icon-cash-on-delivery.svg'
import Image from 'next/image'
const radioOptions = [
    {
        id: 0,
        label: 'e-money',
        gridArea: 'first',
    },
    {
        id: 1,
        label: 'cash on delivery',
        gridArea: 'second',
    },
]
const Checkout = () => {
    const [selectedRadio, setSelectedRadio] = useState(radioOptions[0].label)
    const changeRadioValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedRadio(e.target.value)
        console.log(e.target.value)
    }
    console.log(selectedRadio)

    return (
        <div className="w-full bg-color-gray-dark ">
            <div className="max-w-screen-xl mx-auto main-padding">
                <GoBackButton />
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-[30px] xl:gap-[30px]">
                    <div className="col-span-2 rounded-lg bg-color-white p-[48px]">
                        <form action="">
                            <h1 className="mb-[41px]">Checkout</h1>
                            <fieldset className="mb-[53px]">
                                <h6 className="font-extrabold custom-sub-title text-color-orange-dark mb-[16px]">
                                    Billing details
                                </h6>
                                <div className="grid md:grid-cols-2 gap-[16px]">
                                    <FormField
                                        label="Name"
                                        placeholder="Alexei Ward"
                                    />
                                    <FormField
                                        label="Email address"
                                        placeholder="alexeiward@mail.com"
                                        type="email"
                                    />
                                    <FormField
                                        label="Phone number"
                                        placeholder="+1 202-555-0136"
                                        type="tel"
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="mb-[53px]">
                                <h6 className="font-extrabold custom-sub-title text-color-orange-dark mb-[16px]">
                                    Shipping info
                                </h6>
                                <div className="grid md:grid-cols-2 gap-[16px]">
                                    <FormField
                                        label="Address"
                                        placeholder="2137 Williams Avenue"
                                        full
                                    />
                                    <FormField
                                        label="ZIP Code"
                                        placeholder="10001"
                                    />
                                    <FormField
                                        label="City"
                                        placeholder="New York"
                                    />
                                    <FormField
                                        label="Country"
                                        placeholder="United States"
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <h6 className="font-extrabold custom-sub-title text-color-orange-dark mb-[16px]">
                                    Payments Details
                                </h6>
                                <div className="grid grid-cols-checkout-layout-slim md:grid-cols-checkout-layout-wide grid-areas-checkout-layout-slim md:grid-areas-checkout-layout-wide gap-[16px] mb-[24px]">
                                    <div className="w-full grid-in-label checkout-description">
                                        <p>Payments methods</p>
                                    </div>
                                    {radioOptions.map(
                                        ({ gridArea, id, label }) => (
                                            <div
                                                key={id}
                                                className={`grid-in-${gridArea}`}
                                            >
                                                <Radio
                                                    label={label}
                                                    setRadioValue={
                                                        changeRadioValue
                                                    }
                                                    checked={
                                                        label === selectedRadio
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="grid md:grid-cols-2 gap-[18px]">
                                    {selectedRadio === 'e-money' ? (
                                        <>
                                            <FormField
                                                type="number"
                                                label="e-Money Number"
                                                placeholder="238521993"
                                            />
                                            <FormField
                                                type="number"
                                                label="e-Money PIN"
                                                placeholder="6891"
                                            />
                                        </>
                                    ) : (
                                        <div className="col-span-full flex items-center space-x-[32px] text-color-black/50">
                                            <div className="min-w-[48px] h-[48px] relative">
                                                <Image
                                                    alt="cash on delivery icon"
                                                    src={CashOnDeliveryIcon}
                                                />
                                            </div>
                                            <p>
                                                The &apos;Cash on Delivery&apos;
                                                option enables you to pay in
                                                cash when our delivery courier
                                                arrives at your residence. Just
                                                make sure your address is
                                                correct so that your order will
                                                not be cancelled.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <CheckoutSummary />
                </div>
            </div>
        </div>
    )
}

export default Checkout

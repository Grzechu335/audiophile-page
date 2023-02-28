import GoBackButton from '@/components/atoms/GoBackButton'
import Radio from '@/components/atoms/Radio'
import FormField from '@/components/molecules/FromField'
import CheckoutSummary from '@/components/organisms/CheckoutSummary'
import { useAppDispatch } from '@/hooks/redux'
import useCheckoutTotals from '@/hooks/useCheckoutTotals'
import Inputs from '@/shared/types/Inputs'
import { cartItems } from '@/store/CartSlice'
import { setModal } from '@/store/ModalSlice'
import Image from 'next/image'
import CashOnDeliveryIcon from 'public/images/checkout/icon-cash-on-delivery.svg'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
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
const CheckoutPage = () => {
    const dispatch = useAppDispatch()
    const allItems = useSelector(cartItems)
    const { grandTotal } = useCheckoutTotals()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    // const onSubmit: SubmitHandler<Inputs> = (data) => {}
    const [selectedRadio, setSelectedRadio] = useState(radioOptions[0].label)
    const changeRadioValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedRadio(e.target.value)
    }

    const submitFunction: SubmitHandler<Inputs> = async (data) => {
        dispatch(setModal(true))
        const dataToSend = {
            items: allItems,
            customerData: data,
            totalPrice: grandTotal,
        }
        const response = await fetch('/api/mailsender', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
        }).then((res) => res.json())
        console.log(response)
    }
    return (
        <div className="w-full bg-color-gray-dark pb-[141px]">
            <div className="max-w-screen-xl mx-auto main-padding">
                <GoBackButton />
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-[30px] xl:gap-[30px]">
                    <div className="col-span-2 rounded-lg bg-color-white p-[48px]">
                        <form
                            onSubmit={handleSubmit(submitFunction)}
                            id="checkoutform"
                        >
                            <h1 className="mb-[41px]">Checkout</h1>
                            <fieldset className="mb-[53px]">
                                <h6 className="font-extrabold custom-sub-title text-color-orange-dark mb-[16px]">
                                    Billing details
                                </h6>
                                <div className="grid md:grid-cols-2 gap-[16px]">
                                    <FormField
                                        label="Name"
                                        placeholder="Alexei Ward"
                                        {...register('name', {
                                            required: 'Field cannot be empty',
                                        })}
                                        errors={errors.name}
                                    />
                                    <FormField
                                        label="Email address"
                                        placeholder="alexeiward@mail.com"
                                        type="email"
                                        {...register('email', {
                                            required: 'Field cannot be empty',
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message: 'Wrong format',
                                            },
                                        })}
                                        errors={errors.email}
                                    />
                                    <FormField
                                        label="Phone number"
                                        placeholder="+1 202-555-0136"
                                        type="tel"
                                        {...register('phoneNumber', {
                                            required: 'Field cannot be empty',
                                        })}
                                        errors={errors.phoneNumber}
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
                                        {...register('address', {
                                            required: 'Field cannot be empty',
                                        })}
                                        errors={errors.address}
                                    />
                                    <FormField
                                        label="ZIP Code"
                                        placeholder="10001"
                                        {...register('zipCode', {
                                            required: 'Field cannot be empty',
                                            pattern: {
                                                value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                                                message: 'Wrong format',
                                            },
                                        })}
                                        errors={errors.zipCode}
                                    />
                                    <FormField
                                        label="City"
                                        placeholder="New York"
                                        {...register('city', {
                                            required: 'Field cannot be empty',
                                        })}
                                        errors={errors.city}
                                    />
                                    <FormField
                                        label="Country"
                                        placeholder="United States"
                                        {...register('country', {
                                            required: 'Field cannot be empty',
                                        })}
                                        errors={errors.country}
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
                                                {...register('eMoneyNumber', {
                                                    required:
                                                        'Field cannot be empty',
                                                    pattern: {
                                                        value: /^[0-9]{4}$/,
                                                        message: 'Wrong format',
                                                    },
                                                })}
                                                errors={errors.eMoneyNumber}
                                            />
                                            <FormField
                                                type="number"
                                                label="e-Money PIN"
                                                placeholder="6891"
                                                {...register('eMonyPin', {
                                                    required:
                                                        'Field cannot be empty',
                                                })}
                                                errors={errors.eMonyPin}
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

export default CheckoutPage

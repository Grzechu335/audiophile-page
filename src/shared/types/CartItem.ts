import { StaticImageData } from 'next/image'
interface CartItemProps {
    id: number
    shortName: string
    image: StaticImageData
    quantity: number
    price: number
}

export default CartItemProps

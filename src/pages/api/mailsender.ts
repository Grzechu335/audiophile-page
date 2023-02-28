import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'
import nodemailer from 'nodemailer'

interface CartItem {
    id: number
    shortName: string
    image: StaticImageData
    quantity: number
    price: number
}

interface Inputs {
    name: string
    email: string
    phoneNumber: number
    address: string
    zipCode: number
    city: string
    country: string
    eMoneyNumber: number
    eMonyPin: number
}

interface Data {
    items: CartItem[]
    customerData: Inputs
    totalPrice: string
}

export default async function mailSender(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === '!POST') res.status(400).send('Invalid request')
    const data: Data = JSON.parse(req.body)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_APP_LOGIN,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    })

    const htmlText = `
        <h2>Hi, my name is Grzegorz. Thanks for checking out my site</h2>
        <h3>You have ordered the following items:</h3>
        <ul>
        ${data.items.map(
            ({ shortName, quantity, price }) =>
                `<li>
                    Product: ${shortName},<br/> Quantity: x${quantity}, </br> Price: $${price}
                </li>`
        )}
        </ul>
        <h3>The amount to be paid is: ${data.totalPrice}</h3>

    `

    let info = await transporter.sendMail({
        from: 'Gregory Developer <gregdeveloper96@gmail.com>', // sender address
        to: `${data.customerData.email}`, // list of receivers
        subject: 'Hello ' + data.customerData.name, // Subject line
        text: '', // plain text body
        html: htmlText,
    })
    res.status(200)
}

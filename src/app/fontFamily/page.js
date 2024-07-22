import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
})

export default function FontFamily() {
    return (
        <div>
            <h1>Font Optimization in Next.js</h1>
            <h1 className={roboto.className}>Font with link tag in Next.js</h1>
        </div>
    )
}
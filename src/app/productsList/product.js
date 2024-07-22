"use client"
import { Button } from "react-bootstrap"

export default function Product(props) {
    console.log(props);
    return (
        <div>
            <Button onClick={() => alert(props.propsData)}>Click Me</Button>
        </div>
    )
}
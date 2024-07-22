import Image from "next/image"
import carImage from "../../../public/car-image.webp"

export default function Images() {
    return (
        <div>
            <Image 
            src={carImage}
            width={600}
            height={400}
            alt={"car image"}
            />
        </div>
    )
}
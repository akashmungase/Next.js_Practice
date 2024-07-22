import Link from "next/link";

export default function() {
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href={'studentList/1'}>Akash</Link>
                </li>
                <li>
                    <Link href={'studentList/2'}>Peter</Link>
                </li>
                <li>
                    <Link href={'studentList/3'}>Sam</Link>
                </li>
                <li>
                    <Link href={'studentList/4'}>Bruce</Link>
                </li>
            </ul>
        </div>
    )
}
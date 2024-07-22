"use client"
import Link from "next/link";
import style from "./login.module.css"
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    return (
        <div>
            {/* <h1>Common Layout for login</h1> */}
            {
                pathName != "/login/student-login" ?
                    <ul className={style.loginManu}>
                        <li>
                            <h4>Login NavBar</h4>
                        </li>
                        <li>
                            <Link href={'/login'}>Main Login </Link>
                        </li>
                        <li>
                            <Link href={'/login/student-login'}>Student Login</Link>
                        </li>
                        <li>
                            <Link href={'/login/teacher-login'}> Teacher Login</Link>
                        </li>
                    </ul>
                    : null
            }
            {children}
        </div>
    )
}
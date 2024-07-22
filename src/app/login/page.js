'use client'
import { useRouter } from "next/navigation";

const login = () => {
    const router = useRouter()

    const navigate = (page) => {
        router.push(`/login${page}`)
    }
    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <button onClick={() => router.push('/')}>go to home</button>
            <br />
            <br />
            <button onClick={() => navigate('/student-login')}>go to student login</button>
            <br />
            <br />
            <button onClick={() => navigate('/teacher-login')}>go to teacher login</button>
        </div>
    )
}

export default login;
'use client'
import { useState } from "react"

export default function pageLogin() {
    const [email, setEmail] = useState("phi@gmail.com")
    return <div>lOGIN page: {email}</div>
}
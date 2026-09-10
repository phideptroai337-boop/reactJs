'use client'
import { useState } from "react"
import "./card.css"
import custom from "./custom.module.css"
import clsx from "clsx"

export default function Card() {
    const [expadding, setExpadding] = useState(true)
 return (
    <div className={clsx('card', {
        [custom.card]:expadding
    })}>Card</div>
 )
}
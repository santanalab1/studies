'use client'
import { useEffect } from "react"

export default function Scrape(){
    useEffect(() => {
        fetch('/api/scrape')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return(
        <></>
    )
}
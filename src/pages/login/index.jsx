"use client"

import Link from "next/link"
//import { useEffect } from "react"

export default function login(){
    
    

    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const igToken = process.env.IG_TOKEN
    const redirectUrl = 'https://conte-labs.vercel.app/metapage'
    const scope = 'user_profile'
    const state = '1'
    const url = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=code&state=${state}`
    

    return(
        <>
            <div>
                <Link href={url}>Login</Link>
            </div>
        </>
    )
}
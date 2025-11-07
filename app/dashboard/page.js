'use client'

import { useContext, useEffect } from "react"
import { SiteContext } from "../context/MyContext"
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();
    const { currentUser } = useContext(SiteContext);

    useEffect(() => {
        if (!currentUser) {
            router.push('/login');
        }
    }, [currentUser, router]);


    if (!currentUser) {
        return <div>loading...</div>
    }

    return (
        <div>
            dashboard
        </div>
    )
}

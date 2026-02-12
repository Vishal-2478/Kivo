"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { UserDetail, UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs';

function Provider({ children }: { children: React.ReactNode }) {

    const { user, isLoaded } = useUser();
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

    useEffect(() => {
        if (!isLoaded || !user) return;

        const createNewUser = async () => {
            try {
                const result = await axios.post("/api/user");
                setUserDetail(result.data);
                // console.log(result.data);
            } catch (err) {
                console.error("Failed to sync user", err);
            }
        };

        createNewUser();
    }, [user, isLoaded]);

    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                {children}
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider
import { createContext } from "react";

export interface UserDetail {
    email: string;
    name: string;
    credits?: number;
}

export interface UserDetailContextType {
    userDetail: UserDetail | null;
    setUserDetail: React.Dispatch<React.SetStateAction<UserDetail | null>>;
}

export const UserDetailContext = createContext<UserDetailContextType | null>(null);
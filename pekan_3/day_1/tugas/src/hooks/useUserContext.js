import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function useUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext harus digunakan dalam <UserProvider>");
    }

    return context;
}
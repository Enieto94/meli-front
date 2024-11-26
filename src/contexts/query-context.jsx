import { Children } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const queryContext = createContext()

export function QueryProvider({ children }) {
    const [query, setQuery] = useState('')

    return (
        <queryContext.Provider value={{
            query,
            setQuery
        }}>
            {children}
        </queryContext.Provider>
    )
}
import { useContext } from "react";
import { queryContext } from "../contexts/query-context";

export function useQuery() {
    const context = useContext(queryContext)

    if (!context) {
        throw new Error('To use the queryContext you must wrap your component into a provider!.')
    }

    return context
}
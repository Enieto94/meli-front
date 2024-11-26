import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function SearchForm() {
    const { query, setQuery } = useQuery()
    const navigate = useNavigate()

    function handleChange(event) {
        setQuery(event.target.value)
    }

    function handleSubmit() {
        navigate(`/items?search=${query}`)
    }


    return (
        <form className='search-bar-form' onSubmit={(event) => {
            event.preventDefault();
            handleSubmit()
        }} >
            <input type="text" name="" id="" onChange={(handleChange)} value={query} placeholder="Nunca dejes de buscar" />
            <button className="search-c">
                <img src="/images/search-icon.png" alt="" />
            </button>
        </form>
    )
}
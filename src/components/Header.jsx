import React from 'react'
import { SearchForm } from './search-form'

export function Header() {
    return (
        <header className=''>
            <img src="/images/Logo_ML.png" alt="Meli Logo" />

            <SearchForm />
        </header>
    )
}
import './search-bar.module.css'

import { ISearchBarProps } from './types'

function SearchBar({ onSubmit }: ISearchBarProps) {
  return <form onSubmit={(e) => {
    e.preventDefault()
    if (e.target instanceof HTMLFormElement) {
      onSubmit(e.target.filter.value as string)
    }
  }}>
    <input type='text' name="filter" />
    <input type='submit' />
  </form>

}

export default SearchBar
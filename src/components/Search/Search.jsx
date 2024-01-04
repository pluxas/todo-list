import React from 'react'
import './Search.scss'

import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'

const Search = ({handleCloseSearch, search, setSearch, handleBackSearch}) => {

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='search'>
      <div onClick={handleBackSearch} className='search__arrow'>
        <GlobalSvgIcons id='arrow'/>
      </div>
      <input onChange={handleSearch} value={search} type="text" placeholder='Поиск...'/>
      <div onClick={handleCloseSearch} className="search__close">
        <GlobalSvgIcons id='close'/>
      </div>
    </div>
  )
}

export default Search
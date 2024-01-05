import React from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Search from '../Search/Search'

import './Header.scss'

const Header = ({openSearch, setOpenSearch, search, setSearch}) => {

  const handleOpenSearch = () => {
    setOpenSearch(true)
  }

  const handleCloseSearch = () => {
    setOpenSearch(false)
    setSearch('')
  }

  const handleBackSearch = () => {
    setOpenSearch(false)
  }

  return openSearch ? (
    <Search 
      handleCloseSearch={handleCloseSearch}
      search={search} 
      setSearch={setSearch}
      handleBackSearch={handleBackSearch}
    />
  ) : (
    <div className='header'>
        <h1>Заметки</h1>
        <div onClick={handleOpenSearch} className="icon">
            <button className="todoHeader__switcher">RU</button>
            <GlobalSvgIcons id='search'/>
        </div>
    </div>
  )
}

export default Header
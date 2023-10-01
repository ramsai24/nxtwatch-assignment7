import {AiOutlineSearch} from 'react-icons/ai'

import {SearchInput, SearchBtn, Div} from './styledComponent'

const SearchComponent = props => {
  const {onSearchValue, onSearch} = props

  const onSearchValuePass = event => {
    onSearchValue(event.target.value)
  }

  return (
    <Div>
      <SearchInput type="search" onChange={onSearchValuePass} />
      <SearchBtn type="button" onClick={onSearch}>
        <AiOutlineSearch />
      </SearchBtn>
    </Div>
  )
}

export default SearchComponent

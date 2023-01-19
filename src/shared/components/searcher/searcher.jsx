import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useDebounce } from '../../hooks/useDebounce';
import './searcher.scss';

export const Searcher = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (event) => setSearchText(event.target.value);

  useEffect(() => {
    const navigateParams = 
      searchText.trim().length === 0 ? '' : `/?q=${searchText}`;

      if(pathname !== '/' && navigateParams === '') return;

      navigate(navigateParams);
  }, [debouncedValue])

  return (
    <>
      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          className="search__input-text"
          placeholder="Search"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

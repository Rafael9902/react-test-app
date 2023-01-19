import { NavLink } from "react-router-dom";
import { headerData } from "./utils/headerData";
import './header.scss';
import { Searcher } from "../searcher/searcher";

export const Header = () => {
  return (
    <section className='header'>
      <h1 className='header__title'>ELC</h1>

      <ul className='header__list'>
        {headerData.map(({ info, to }) => {
          return (
            <li key={info} className='header__list-item'>
              <NavLink className='header__list-item--link' to={to}>{info}</NavLink>
            </li>
          );
        })}

        <Searcher  />
      </ul>
    </section>
  );
};

import { Header } from './shared/components/header/header';
import { Outlet } from 'react-router-dom';

import './App.scss';

export const App = () => {
  return (
   <>
    <nav> <Header /> </nav>
    <main> <Outlet /></main>
   </>
  )
}


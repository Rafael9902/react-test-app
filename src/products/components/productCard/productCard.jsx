import { useNavigate } from 'react-router-dom';

import './productCard.scss';

export const ProductCard = ({ _id, name, picture }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    _id && navigate(`/product/${_id}`)
  }

  return (
    <>
      <section className='card'>
        <div className='card__container animate__animated animate__fadeIn' onClick={handleClick}>
          <div className='card__container--top'>
            <img className='card__container__img' src={`/src/assets/${picture}`} alt={name}/>
          </div>

          <div className='card__container--bottom'>
            {name}
          </div>  
        </div>
      </section>
    </>
  )
}

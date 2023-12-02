import './Promo.css'
import NavTab from './../NavTab/NavTab';

function Promo() {
  return (
      <section className='promo'>
          <h1 className='promo__title'>Фуллстек проект-портфолио с поиском и сохранением фильмов на аккаунт.</h1>
          <NavTab />
      </section>
  );
}

export default Promo;
import React from 'react'
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({items}) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={(name) => console.log('click ', name)} items={[
          'Мясные',
          'Вегетарианские',
          'Гриль',
          'Острые',
          'Закрытые',
        ]} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

export default Home
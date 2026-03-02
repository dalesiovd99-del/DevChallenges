
import { useEffect, useState } from 'react'
import './App.scss'
import type { Card } from './JsonExtractor';
import JsonExtractor from './JsonExtractor';
import CoffeeCard from './CoffeeCard';
import cafèAsset from './assets/bg-cafe.jpg'
import backGroundImage from './assets/vector.svg'
function App() {

  const [coffees, setCoffee] = useState<Card[]>([]);
  const [filteredCoffee, setFilteredCoffee] = useState<Card[]>([])
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('allAvailable');
  useEffect(() => {
    JsonExtractor().then((data) => {
      setCoffee(data);
      setFilteredCoffee(data)
    });
  }, [])
  useEffect(() => {
    console.log('I DATI ESTRATTI SONO I SEGUENTI:', coffees);
  }, [coffees])

  const handleOnClickAllAvailable = () => {
    setButtonClicked('allAvailable')
    setFilteredCoffee(coffees);
  }

  const handleOnClickAvailableNow = () => {
    setButtonClicked('availableNow')
    const filteredCoffees = coffees.filter((coffee: Card) => { return coffee.available; })
    setFilteredCoffee(filteredCoffees);

  }
  return (<div className='pageContainer'>
    <img className='cafèImage' src={cafèAsset}></img>
    <div className='CoffeesInfoContainer'>
      <img src={backGroundImage} className='backgroundImg'></img>
      <div className='SectionInfosContainer'>
        <h1>Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches and
          shipped fresh weekly.</p>
        <div className='ButtonsContainer'>
          <button onClick={handleOnClickAllAvailable} className={buttonClicked === 'allAvailable' ? 'isClicked' : ''}>All Products</button>
          <button onClick={handleOnClickAvailableNow} className={buttonClicked === 'availableNow' ? 'isClicked' : ''}>Available Now</button>
        </div>
      </div>
      <div className='CoffeesGrid'>
        {filteredCoffee.map((card: Card) => {
          return <CoffeeCard key={card.id} card={card}>
          </CoffeeCard>
        })}
      </div>
    </div>
  </div>
  )
}

export default App

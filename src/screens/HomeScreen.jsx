import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/cardComponent/Card.jsx'

const HomeScreen = () => {
  const [cards, setCards] = useState([])

  const getData = () => {
    axios
      .get('/api/allCards')
      .then((res) => {
        console.log(res.data)
        setCards(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const cardDisplay = cards.map((card, index) => {
    return <Card card={card} />
  })

  return (
    <div className="main-page">
    <div className="card-container">
        {cardDisplay}
    </div>
</div>
  )
}

export default HomeScreen
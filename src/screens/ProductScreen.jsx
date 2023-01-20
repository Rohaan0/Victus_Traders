import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ProductScreen = () => {
  const [card, setCard] = useState({})
  const [image, setImage] = useState("")
  const {id} = useParams()

const getData = () => {
    axios
      .get(`/api/card/${id}`)
      .then((res) => {
        console.log(res.data)
        setCard(res.data)
        let primaryPhoto = res.data.photos.filter((img) => {
          return img.primaryPhoto === true
        })
        setImage(primaryPhoto[0].url)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="product-page">
        <img src={image} className="product-image" />
        <div className='product-details'>
          <div>
            <h4 className='card-name'>{card.name}</h4>
            <h4 className='card-types'>{card.types}</h4>
          </div>
          <h3 className='card-price'>${card.price}</h3>
        </div>
        <div className='description-container'><p className='card-description'>
            <h4 className='card-text'>{card.cardText}</h4>
            <h4 className='card-flavorText'>{card.flavorText}</h4>
        </p></div>

    </div>
  )
}

export default ProductScreen
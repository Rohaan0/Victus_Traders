import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.css'

const Card = ({card}) => {

    const primaryPhoto = card.photos.filter((img) => {
        return img.primaryPhoto === true
    })

  return (
    <div className={styles.card}>
        <img src={primaryPhoto[0].url} />
        <h4 className={styles.card_name}>{card.name}</h4>
        <h4>Type: {card.types}</h4>
        <h3 className={styles.card_price}>${card.price}</h3>
        <Link to={`/product/${card.id}`}>
            <button className={styles.card_btn}>Buy Now</button>
        </Link>
    </div>
  )
}

export default Card
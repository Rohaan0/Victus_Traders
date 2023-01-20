import React, {useState, useEffect} from 'react'
import {useParams, useSelector} from 'react-router-dom'
import axios from 'axios'
import { Formik } from "formik"

const CustomScreen = () => {
  const {user} = useParams()

  const initialValues = {
    name: "",
    manaCost: 0,
    types: "",
    cardText: "",
    flavorText: "",
    pt: "",
    expansion: "",
    rarity: "",
    artist: "",
    rating: 0,
    price: 0,
    url: "",
    primaryPhoto: true,
    cardId: 0
  }


  const onSubmit = (values) => {
    console.log(values)
    getPostData(values)

  }

  const getPostData = (values) => {
    axios
    .post(`/createCard/${user}`, values)
    .then((res) => {
      console.log(res.data)
      res.status(200).send(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }

 

  return (
    <div className="main-page">
      <section className="create-card-container">
        <h1>Create a new Card</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <form className="input-form">
                  <div className="input-container1">
                    <input className='custom-input' placeholder='name' 
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    />
                    <input className='custom-input' 
                    placeholder='Image URL'
                    value={values.url}
                    onChange={handleChange}
                    name="imageURL"
                    />
                    <input className='custom-input'     placeholder='types'
                    value={values.types}
                    onChange={handleChange}
                    name="types"
                    />
                    </div>
                    <div className="input-container2">
                    <input className='custom-input' placeholder='artist' 
                    value={values.artist}
                    onChange={handleChange}
                    name="artist"
                    />
                    <input className='custom-input'
                    placeholder='PT'
                    value={values.pt}
                    onChange={handleChange}
                    name="pt"
                    />
                    <input className='custom-input'
                    placeholder='rarity'
                    value={values.rarity}
                    onChange={handleChange}
                    name="rarity"
                    />
                  </div>
                  <div className="input-container3">
                    <label htmlFor="manaCost">ManaCost: </label>
                    <input className='custom-input' type="number" 
                    placeholder='Mana Cost' 
                    name="manaCost" 
                    value={values.manaCost} 
                    onChange={handleChange}
                    />
                    <label htmlFor="rating">Rating: </label>
                    <input className='custom-input' type="number" 
                    placeholder='Rating' 
                    name="rating" 
                    value={values.rating} 
                    onChange={handleChange}
                    />
                    <label htmlFor="price">Price: </label>
                    <input className='custom-input' type="number"  step="0.01"
                    placeholder='price' 
                    name="price" 
                    value={values.price} 
                    onChange={handleChange}
                    />
                    <label htmlFor="cardId">Card Id: </label>
                    <input className='custom-input' type="number" 
                    placeholder='card id' 
                    name="card id" 
                    value={values.cardId} 
                    onChange={handleChange}
                    />
                  </div>
                  <div className="textarea-container">
                    <textarea name="cardText"
                    placeHolder="Card Text"
                    value={values.cardText}
                    onChange={handleChange}
                    rows={5} 
                    className="cardText" />

                    <textarea name="flavorText"
                    placeHolder="Flavor Text"
                    value={values.flavorText}
                    onChange={handleChange}
                    rows={5} 
                    className="cardText" />
                  </div>
                  <button className="save-btn" type='submit'>Save</button>


                </form>
            </form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default CustomScreen
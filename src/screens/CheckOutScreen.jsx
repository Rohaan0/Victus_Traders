import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const CheckOutScreen = () => {
  const {user} = useParams()

  return (
    <div className="main-page">
        <section className="new-card-section">
          <h1>CheckOut here</h1>
        </section>
    </div>
  )
}

export default CheckOutScreen
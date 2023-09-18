import React from 'react'
import './Sidbar.css'
import Category from './Categoryy/Category'
import { Price } from './price/Price'
import Color from './colors/Color'

const Sidbar = () => {
  return (
    <div>

<section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
<div>

<Category/>
<Price/>
   <Color/>
</div>
      </section>
    </div>
  )
}

export default Sidbar
import React from 'react'
import './Sidbar.css'
import Category from './Categoryy/Category'

const Sidbar = () => {
  return (
    <div>

<section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
<div>

<Category/>
  <h1> Price</h1>
       <h2>Colors</h2>
</div>
      </section>
    </div>
  )
}

export default Sidbar
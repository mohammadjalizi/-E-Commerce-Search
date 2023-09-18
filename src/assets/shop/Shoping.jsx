import React from 'react'
import { useGetproductByNameQuery } from '../../redux/ProductApi'

const Shoping = () => {
  const { data, error, isLoading } = useGetproductByNameQuery('bulbasaur')
  console.log(data)
  return (
    <div>
   if (data) {
 

<>

<h1>fjskfjskfsfkjs</h1>
</>

 
   }
 
    </div>
  )
}

export default Shoping
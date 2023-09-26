import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PickingList = () => {
  const [pickingList, setPickingList] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5001/api/picking-list').then(response => {
      setPickingList(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Picking List</h2>
      <ul>
        {Object.entries(pickingList)
          ? Object.entries(pickingList).map(([product, quantity]) => (
              <li key={product}>
                {product}: {quantity}
              </li>
            ))
          : 'No List available'}
      </ul>
    </div>
  )
}

export default PickingList

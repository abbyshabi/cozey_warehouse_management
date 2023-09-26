import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllPackingLists = () => {
  const [packingLists, setPackingLists] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5001/api/packing-list').then(response => {
      setPackingLists(response.data)
    })
  }, [])

  return (
    <div>
      <h2>All Packing Lists</h2>
      {packingLists.length > 0
        ? packingLists?.map((packingList, index) => (
            <div key={index}>
              <h3>Order #{packingList?.orderNumber}</h3>
              <ul>
                {packingList?.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item?.boxName}:
                    <ul>
                      {item?.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {subItem?.name}: {subItem?.quantity}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : 'Unable to generate list'}
    </div>
  )
}

export default AllPackingLists

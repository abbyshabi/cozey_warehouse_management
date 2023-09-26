import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PackingListByID = ({ orderId }) => {
  const [packingList, setPackingList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/packing-list/${orderId}`).then((response) => {
      setPackingList(response.data);
      setLoading(false);
    });
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        !orderId ? `Unable to generate list of order ${orderId}` : 
        <div>
            <h2>Packing List for Order #{orderId}</h2>
        <ul>
          {packingList?.items.map((item, index) => (
            <div key={index}>
              <h3>{item?.boxName}</h3>
              <ul>
                {item?.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    {subItem?.name}: {subItem?.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        </div>
      }
    </div>
  );
};

export default PackingListByID;

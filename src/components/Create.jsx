import React, { useState } from 'react';
import { db } from '../firebase';



const Create = () => {
  const [itemProducts, setItemProducts] = useState('');

  const addProducts = () => {
    db.ref('Products').push({
      String: itemProducts
    });
    setItemProducts('');
  };
  return (
    <div>
      <input
        type="string"
        value={itemProducts}
        onChange={(e) => setItemProducts(e.target.value)}
      />
      <button onClick={addProducts}>Add Product</button>
    </div>
  )
}

export default Create

// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import { collection, getDocs, getDoc, deleteDoc } from 'firebase/firestore'
// import { db } from '../firebaseConfig/firebase'

// import  swal  from 'sweetalert2'
// // import witReactContent from 'sweetalert2-react-content'
// // import Swal from 'sweetalert2'
// // const MySwal = witReactContent(Swal)

// // const Show = () => {
// //     // configuracion hooks (ganchos / estados de los componentes tipos funcion)
// //     const [Products, setProducts] = useState( [] )

// //     // refereciamos la DB firestore
// //     const productsCollection = collection(db, "products")

// //     // funcion para mostrar los docs
// //     const getProducts = async () => {
// //         const data = await getDocs(productsCollection)
// //         // console.log(data.docs)
// //         setProducts(
// //             data.docs.map( (doc) => ({...doc.data(),id:doc.id}))
// //         )
// //         console.log(Products)
// //     }

// //     // funcion para eliminar doc
// //     const deleteProduct = async (id) => {
// //         const ProductDoc = doc(db, "products", id)
// //         deleteDoc(ProductDoc)
// //         getProducts()
// //     }

// //     // funcion confirmacion de sweet alert 2

// //     // useEffect
// //     useEffect( () => {
// //         getProducts()
// //     })

// //     // vista del componente
// //     return (
// //         <>
// //         <div className='container'>
// //             <div className='row'>
// //                 <div className='col'>
// //                     <div className='d-grid gap-2'>
// //                         {/* <Link to="/Create" className='btn btn-secondary mt-2 mb-2'>Create</Link> */}
// //                     </div>
// //                     <table className='table table-dark table-hover'>
// //                         <thead>
// //                             <tr>
// //                                 <th>Description</th>
// //                                 <th>Stock</th>
// //                                 <th>Actions</th>
// //                             </tr>
// //                         </thead>

// //                         <tbody>
// //                             { Products.map( (Products) => (
// //                                 <tr key={Products.id}>
// //                                     <td>{Products.Description}</td>
// //                                     <td>{Products.Stock}</td>
// //                                     <td>
// //                                         <Link to={`/edit/${Products.id}`} className='btn btn-light'><i className="fa-solid fa-pencil"></i></Link>
// //                                         <button onClick={() => {deleteProduct(Products.id)}} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
// //                                     </td>
// //                                 </tr>
// //                             ) ) }
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
        
// //         </div>
// //         </>
// //     )
// // }
// // export default Show


import React from 'react'

const Show = () => {
  return (
    <div>
      
    </div>
  )
}

export default Show

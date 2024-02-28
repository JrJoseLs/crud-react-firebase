import './App.css'

//importar componentes
import Show from './Show'
import Edit from './Edit'
import Create from './Create'

// importar router
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
    return (
        <>
            <div className='App'>
            <h1>CRUD FIREBASE</h1>
            </div>
        </>
    )
}

export default App

// export function App () {
//     return (
//         <section className='App'>
//             <BrowserRouter>
//             <Routes path='/' element={<Show />} />
//             {/* <Routes path='/Create' element={<Create />} />
//             <Routes path='/edit/:id' element={<Edit />} /> */}
            
//             </BrowserRouter>
//         </section>
        
//     )
// }
// export default App

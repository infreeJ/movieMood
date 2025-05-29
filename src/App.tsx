
// https://pedia.watcha.com/ko-KR

import { Route, Routes } from 'react-router-dom'
import './App.css'

// 컴포넌트트
import Navigate from './Component/Navigate'


// 페이지
import HomePage from './Pages/HomePage'


function App() {


  return (
    <>
    <Navigate/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>


    </>
  )
}

export default App

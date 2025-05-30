
// https://pedia.watcha.com/ko-KR

import { Route, Routes } from 'react-router-dom'
import './App.css'

import MoviePage from './Pages/MoviePage'
import LoginTab from './Component/LoginTab'

// 컴포넌트
import NavBar from './Component/NavBar'


// 페이지
import HomePage from './Pages/HomePage'
import { useState } from 'react'
import Overlay from './Component/Overlay'

// 훅
import LockScroll from './Hooks/LockScroll'


function App() {
  // 로그인 모달 창 조작
  const [loginModal, setLoginModal] = useState(false);

  // 모달창 스크롤 방지
  LockScroll(loginModal);


  return (
    <>
    {loginModal && <LoginTab/>}
    {loginModal && <Overlay setLoginModal={setLoginModal}/>}
    <NavBar setLoginModal={setLoginModal}/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/movie' element={<MoviePage/>}></Route>
    </Routes>
    
    </>
  )
}

export default App


// https://pedia.watcha.com/ko-KR

import { Route, Routes } from 'react-router-dom'
import './App.css'

import MoviePage from './Pages/MoviePage'
import LoginTab from './Component/LoginTab'

// 컴포넌트
import NavBar from './Component/NavBar'


// 페이지
import HomePage from './Pages/HomePage'
import MovieProfilePage from './Pages/MovieProfilePage'
import { useState } from 'react'
import Overlay from './Component/Overlay'

// 훅
import LockScroll from './Hooks/LockScroll'
import JoinTab from './Component/JoinTab'


function App() {
  // 로그인 모달 창 조작
  const [loginModal, setLoginModal] = useState(false);
  
  // 회원가입 모달 창 조작
  const [joinModal, setJoinModal] = useState(false);

  // 모달창 스크롤 방지
  LockScroll(loginModal, joinModal);



  
  

  return (
    <>
    <div>
      {loginModal && <Overlay setLoginModal={setLoginModal}/>}
      {loginModal && <LoginTab/>}
      {joinModal && <Overlay setLoginModal={setJoinModal}/>}
      {joinModal && <JoinTab/>}
    </div>
    
    <NavBar setLoginModal={setLoginModal} setJoinModal={setJoinModal}/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/movie' element={<MoviePage/>}></Route>
      <Route path='/NewContent/:id' element={<MovieProfilePage/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
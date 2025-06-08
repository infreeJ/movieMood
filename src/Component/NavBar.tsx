import { useNavigate } from "react-router-dom"
import SuggestionDropdown from "./SuggestionDropdown";
import { useState } from "react";

interface Props {
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    setJoinModal: React.Dispatch<React.SetStateAction<boolean>>;
}



function NavBar({ setLoginModal, setJoinModal}: Props) {

    const nav = useNavigate();


    // 추천 검색어 드롭다운 포커스 값
    const [isFocus, setIsFocus] = useState(false)



    return (
        <>
            <div className="nav-wrapper">
                <div className="nav">
                    <div className="nav-left">
                        <div className="nav-logo">
                            <span style={{fontSize: '20px', cursor: 'pointer', fontWeight: '600'}}>MOVIE MOOD</span>
                        </div>
                        <div className="nav-category">
                            <span className="nav-category-home" onClick={() => { nav("/") }}>홈</span>
                            <span className="nav-category-movie" onClick={() => { nav("/movie") }}>영화</span>
                            <span className="nav-category-series" onClick={() => { nav("/series") }}>시리즈</span>
                            <span className="nav-category-book" onClick={() => { nav('/book') }}>책</span>
                            <span className="nav-category-webtoon" onClick={() => { nav('/webtoon') }}>웹툰</span>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="nav-search" onFocus={() => { setIsFocus(true) }} onBlur={() => { setIsFocus(false) }}>
                            <span className="nav-search-icon"></span>
                            <input className="nav-search-text" type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저, 매거진 검색" />
                            {isFocus && <SuggestionDropdown />}
                        </div>
                        <div className="nav-login">
                            <button className="nav-login-logbtn" onClick={() => { setLoginModal(true) }}>로그인</button>
                            <button className="nav-login-membtn" onClick={() => { setJoinModal(true) }}>회원가입</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar
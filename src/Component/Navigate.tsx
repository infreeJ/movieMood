
function Navigate () {
    return (
        <>
        <div className="nav-wrapper">
            <div className="nav">
                <div className="nav-left">
                    <div className="nav-logo">
                        <span style={{fontSize: '20px', cursor: 'pointer', fontWeight: '600'}}>MOVIE MOOD</span>
                    </div>
                    <div className="nav-category">
                        <span className="nav-category-home">홈</span>
                        <span className="nav-category-movie">영화</span>
                        <span className="nav-category-series">시리즈</span>
                        <span className="nav-category-book">책</span>
                        <span className="nav-category-webtoon">웹툰</span>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="nav-search">
                        <span className="nav-search-icon"></span>
                        <input className="nav-search-text" type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저, 매거진 검색" />
                    </div>
                    <div className="nav-login">
                        <button className="nav-login-logbtn">로그인</button>
                        <button className="nav-login-membtn">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navigate
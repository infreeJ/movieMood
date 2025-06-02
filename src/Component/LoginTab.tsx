




function LoginTab () {
    return(
        <>
        <div className='loginTab-wrapper'>
            <div className="loginTab">
            <span style={{fontSize: "1.7rem", fontWeight: "700", marginTop:"30px"}}>MOVIE MODD</span>
            <span style={{fontSize: "1.4rem", fontWeight: "600", marginTop: "20px", marginBottom:"10px"}}>로그인</span>
            <input className="loginTab-input" type="text" placeholder="이메일"/>
            <input className="loginTab-input" type="text" placeholder="비밀번호"/>
            <button className="loginTab-button">로그인</button>
            <span className="loginTab-forget">비밀번호를 잊어버리셨나요?</span>
            <p className="loginTab-join">계정이 없으신가요? <span className="loginTab-forget">회원가입</span></p>

            {/* <div className="orLine-wrapper">
                <div className="orLine-line"></div>
                <span className="orLine-or">OR</span>
                <div className="orLine-line"></div>
            </div> */}

            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </div>
        </>
    )
}

export default LoginTab
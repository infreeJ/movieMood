

function NewContent () {
    
    const NewContentName = [
        {
            img : "../public/Imgs/newContent/브링허백.jpg",
            topic : "AD",
            title : "브링 허 백",
            desc : "6월 6일 CGV 대개봉"
        },

        {
            img : "../public/Imgs/newContent/미션임파서블.jpg",
            topic : "인기 아티클",
            title : "매번 세계를 구한 '에단 헌트'의 미션 연대기",
            desc : "한눈에 보는 <미션 임파서블> 시리즈의 역대급 작전 리포트"
        },

        {
            img : "../public/Imgs/newContent/미지의서울.jpg",
            topic : "지금 가장 핫한 작품",
            title : "미지의 서울",
            desc : "평균★4.2 ● tvN ● 로맨스"
        }
    ]

    return(
        <>
        <div className="NewContent-Wrapper">
        {NewContentName.map((content, index) => (
            <div className="NewContent" key={index} style={{backgroundImage: `URL(${content.img})`}}>
            <div className="NewContent-text">
                <span className="NewContent-text-topic">{content.topic}</span>
                <div className="NewContent-text-wrapper">
                    <span className="NewContent-text-title">{content.title}</span>
                    <span className="NewContent-text-desc">{content.desc}</span>
                </div>
                
            </div>
        </div>
        ))}
        </div>
        
        </>
    )
}
export default NewContent
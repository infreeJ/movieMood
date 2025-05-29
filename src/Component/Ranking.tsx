

function Ranking() {

    const rankingContent = [
        {
            img : "../public/Imgs/ranking/미지의서울.jpg",
            num : "1",
            title : "미지의 서울",
            score : "평균 ★ 4.2"
        },
        {
            img : "../public/Imgs/ranking/나인퍼즐.jpg",
            num : "2",
            title : "나인 퍼즐",
            score : "평균 ★ 3.3"
        },
        {
            img : "../public/Imgs/ranking/미션임파서블.jpg",
            num : "3",
            title : "미션 임파서블: 파이널 레코딩",
            score : "평균 ★ 3.7"
        },
        {
            img : "../public/Imgs/ranking/당신의맛.jpg",
            num : "4",
            title : "당신의 맛",
            score : "평균 ★ 2.8"
        },
        {
            img : "../public/Imgs/ranking/천국보다아름다운.jpg",
            num : "5",
            title : "천국보다 아름다운",
            score : "평균 ★ 2.5"
        }
    ]



    return (
        <>
        {rankingContent.map((content, index) => (
            <div className="ranking" key={index}>
                <div className="ranking-img" style={{backgroundImage: `URL(${content.img})`}}>
                    <span className="ranking-img-num">{content.num}</span>
                </div>
                <div className="ranking-text">
                    <div className="ranking-text-title">{content.title}</div>
                    <div className="ranking-text-score">{content.score}</div>
                </div>
            </div>
        ))}

        </>
    )
}

export default Ranking
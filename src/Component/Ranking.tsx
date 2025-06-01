import { useState } from "react"
import useCardSlider from "../Hooks/useCardSlider";

function Ranking() {

    const rankingContent = [
        {
            img: "../public/Imgs/ranking/미지의서울.jpg",
            num: "1",
            title: "미지의 서울",
            score: "평균 ★ 4.2"
        },
        {
            img: "../public/Imgs/ranking/나인퍼즐.jpg",
            num: "2",
            title: "나인 퍼즐",
            score: "평균 ★ 3.3"
        },
        {
            img: "../public/Imgs/ranking/하이파이브.jpg",
            num: "3",
            title: "하이파이브",
            score: "평균 ★ 3.2"
        },
        {
            img: "../public/Imgs/ranking/미션임파서블.jpg",
            num: "4",
            title: "미션 임파서블: 파이널 레코딩",
            score: "평균 ★ 3.7"
        },
        {
            img: "../public/Imgs/ranking/소주전쟁.jpg",
            num: "5",
            title: "소주전쟁",
            score: "평균 ★ 2.7"
        },
        {
            img: "../public/Imgs/ranking/씨너스.jpg",
            num: "6",
            title: "씨너스",
            score: "평균 ★ 3.7"
        },
        {
            img: "../public/Imgs/ranking/노무사노무진.jpg",
            num: "7",
            title: "노무사노무진",
            score: "평균 ★ 3.0"
        },
        {
            img: "../public/Imgs/ranking/페니키안스킴.jpg",
            num: "8",
            title: "페니키안스킴",
            score: "평균 ★ 3.5"
        },
        {
            img: "../public/Imgs/ranking/당신의맛.jpg",
            num: "9",
            title: "당신의 맛",
            score: "평균 ★ 2.8"
        },
        {
            img: "../public/Imgs/ranking/데블스플랜.jpg",
            num: "10",
            title: "데블스플랜",
            score: "평균 ★ 2.2"
        },
        {
            img: "../public/Imgs/ranking/천국보다아름다운.jpg",
            num: "11",
            title: "천국보다아름다운",
            score: "평균 ★ 2.5"
        },
        {
            img: "../public/Imgs/ranking/탄금.jpg",
            num: "12",
            title: "탄금",
            score: "평균 ★ 2.6"
        },
        {
            img: "../public/Imgs/ranking/월드오브스트릿우먼파이터.jpg",
            num: "13",
            title: "월드오브스트릿우먼파이터",
            score: "평균 ★ 3.6"
        },
        {
            img: "../public/Imgs/ranking/해피엔드.jpg",
            num: "14",
            title: "해피엔드",
            score: "평균 ★ 3.9"
        },
        {
            img: "",
            num: "15",
            title: "",
            score: ""
        }
    ]


    const [cardNum, setCardNum] = useState(0);
    const fiveContent = rankingContent.slice(cardNum, cardNum + 5)

    const pageNum = Math.ceil(rankingContent.length / 5);

    const { cardSlideUp, cardSlideDown } = useCardSlider(cardNum, setCardNum, pageNum)




    return (
        <>
            <div className="ranking-wrapper">
                <button className="NewContent-btn-left" onClick={() => { cardSlideDown(5) }}>⬅</button>
                <button className="NewContent-btn-right" onClick={() => { cardSlideUp(5, 3) }}>➡</button>

                {fiveContent.map((content, index) => (
                    <div className="ranking" key={index}>
                        <div className="ranking-img" style={{ backgroundImage: `URL(${content.img})` }}>
                            <span className="ranking-img-num">{content.num}</span>
                        </div>
                        <div className="ranking-text">
                            <div className="ranking-text-title">{content.title}</div>
                            <div className="ranking-text-score">{content.score}</div>
                        </div>
                    </div>
                ))}</div>

        </>
    )
}

export default Ranking
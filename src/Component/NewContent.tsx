import { useState } from "react";
import useCardSlider from "../Hooks/useCardSlider";


function NewContent() {

    const NewContentName = [
        {
            img: "../public/Imgs/newContent/브링허백.jpg",
            topic: "AD",
            title: "브링 허 백",
            desc: "6월 6일 CGV 대개봉"
        },

        {
            img: "../public/Imgs/newContent/미션임파서블.jpg",
            topic: "인기 아티클",
            title: "매번 세계를 구한 '에단 헌트'의 미션 연대기",
            desc: "한눈에 보는 <미션 임파서블> 시리즈의 역대급 작전 리포트"
        },

        {
            img: "../public/Imgs/newContent/미지의서울.jpg",
            topic: "지금 가장 핫한 작품",
            title: "미지의 서울",
            desc: "평균★4.2 ● tvN ● 로맨스"
        },

        {
            img: "../public/Imgs/newContent/히치콕.jpg",
            topic: "인기 아티클",
            title: "영화의 탄생부터 히치콕까지",
            desc: "교과서에 나오는 고전 영화 훑어보기"
        },
        {
            img: "../public/Imgs/newContent/씨너스.jpg",
            topic: "미국 파묘라고요?",
            title: "씨너스: 죄인들",
            desc: "드라마 ● 미국"
        },
        {
            img: "../public/Imgs/newContent/쇼생크탈출.jpg",
            topic: "내 인생 최고의 영화",
            title: "쇼생크탈출",
            desc: "평균★4.4"
        },
    ]


    // const [cardNum, setCardNum] = useState(0)
    // const threeContent = NewContentName.slice(cardNum, cardNum + 3);

    // const pageNum = Math.ceil(NewContentName.length / 3)

    // const { cardSlideUp, cardSlideDown } = useCardSlider(cardNum, setCardNum, pageNum);


    const [slideWidth, setSlideWidth] = useState(0);
    const [pageNum, setPageNum] = useState(0)
    const {cardMoveLeft, cardMoveRight} = useCardSlider(slideWidth, setSlideWidth, pageNum, setPageNum)
    const maxPage = Math.floor(NewContentName.length / 3) - 1


    return (
        <>
            <div className="NewContent-Wrapper">
                
                <button disabled={pageNum === 0} className="NewContent-btn-left" onClick={ () => {cardMoveLeft()}}>⬅</button>
                <button disabled={pageNum == maxPage} className="NewContent-btn-right" onClick={ () => {cardMoveRight(maxPage)}}>➡</button>
                <div className="NewContent-inner" style={{transform: `translateX(${slideWidth}%)`}}>
                {NewContentName.map((content, index) => (
                    <div className="NewContent" key={index} style={{ backgroundImage: `URL(${content.img})`}}>
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
            </div>

        </>
    )
}
export default NewContent
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function MovieProfilePage() {
    const { id } = useParams();
    

    const profileArray = [
        {
            id: "1",
            coverImg: "브링허백",
            title: "브링 허 백",
            engTitle: "Bring Her Back",
            category: "2025 · 공포 · 호주, 미국",
            time: "1시간 39분 · 청불",
            ranking: "예매 순위 6위 5.3% · 개봉 2일전 · 누적 관객 2,648명",
            postImg: "브링허백포스터",
            score: 3.1,
            people: "평균별점 (2,177명)",
            mainText: "비밀 하나 알려줄게, 너희가 이 집에 온 이유",
            detailText: "아빠의 죽음 후 새엄마에게 입양된 남매 앤디와 파이퍼. 평화로운 집, 따뜻한 보금자리에서의 안식도 잠시 새엄마는 두 남매 사이를 갈라놓으며 앤디와 파이퍼를 혼란에 빠트린다. 고립된 집, 집 안 곳곳에서 발견되는 정체를 알 수 없는 의식의 흔적들, 새엄마가 숨긴 끔찍한 비밀이 드러나면서 남매를 극한의 공포 상황으로 몰아붙이기 시작하는데… 보지 말아야 할 것을 본 두 사람은 과연 살아남을 수 있을까!"
        },
        {
            id: "2",
            coverImg: "미션임파서블",
            title: "미션 임파서블: 파이널 레코닝",
            engTitle: "Mission: Impossible - The Final Reckoning",
            category: "2025 · 액션/모험/스릴러/미스터리 · 미국",
            time: "2시간 49분 · 15세",
            ranking: "예매 순위 3위(13%) · 개봉 23일째 · 누적 관객 293.6만명",
            postImg: "미션임파서블포스터",
            score: 3.7,
            people: "평균별점 (2.5만명)",
            mainText: "모든 선택이 향하는 단 하나의 미션!",
            detailText: "디지털상의 모든 정보를 통제할 수 있는 사상 초유의 무기로 인해 전 세계 국가와 조직의 기능이 마비되고, 인류 전체가 위협받는 절체절명의 위기가 찾아온다. 이를 막을 수 있는 건 오직 존재 자체가 기밀인 ‘에단 헌트’와 그가 소속된 IMF(Impossible Mission Force)뿐이다. 무기를 무력화하는 데 반드시 필요한 키를 손에 쥔 ‘에단 헌트’. 오랜 동료 ‘루터’와 ‘벤지’, 그리고 새로운 팀원이 된 ‘그레이스’, ‘파리’, ‘드가’와 함께 지금껏 경험했던 그 어떤 상대보다도 강력한 적에 맞서 모두의 운명을 건 불가능한 미션에 뛰어든다!"
        },
        {
            id: "3",
            coverImg: "미지의서울",
            title: "미지의 서울",
            engTitle: "미지의 서울",
            category: "2025 · tvN · 로맨스/TV드라마",
            time: "한국 · 15세",
            ranking: "한국 시리즈 인기 순위 4위",
            postImg: "미지의서울포스터",
            score: 4.3,
            people: "평균별점 (1,470명)",
            mainText: "얼굴 빼고 모든 게 다른 쌍둥이 자매가 인생을 맞바꾸는 거짓말로 진짜 사랑과 인생을 찾아가는 로맨틱 성장 드라마",
            detailText: ""
        }
    ]

    const movie = profileArray.find((p) => p.id === id)

    if(!movie) {
        return <p>해당 영화 정보를 찾을 수 없습니다.</p>
    }


    return (
        <>
            <div className="mainImg" style={{ backgroundImage: `URL(../public/Imgs/MovieProfile/${movie.coverImg}.jpg)`}}>
                <div className="mainImg-textWrapper">
                    <h1 style={{ fontSize: '2.3rem' }}>{movie.title}</h1>
                    <span>{movie.engTitle}</span>
                    <span>{movie.category}</span>
                    <span>{movie.time}</span>
                    <span>{movie.ranking}</span>
                </div>
            </div>
            
            <div className="Home-wrapper">
                <div className="home">
                    <div className="movieDetail">
                        <div className="movieDetail-img" style={{ backgroundImage: `URL(../public/Imgs/MovieProfile/${movie.postImg}.jpg)` }}></div>
                        <div className="MovieDetail-overView">
                            <div className="MovieDetail-overView-tab">
                                <div className="MovieDetail-overView-tab-rating">
                                    <div className="star-icon" style={{backgroundImage: "URL(../public/Imgs/icon/star.png"}}></div>
                                    <div className="star-icon" style={{backgroundImage: "URL(../public/Imgs/icon/star.png"}}></div>
                                    <div className="star-icon" style={{backgroundImage: "URL(../public/Imgs/icon/star.png"}}></div>
                                    <div className="star-icon" style={{backgroundImage: "URL(../public/Imgs/icon/star.png"}}></div>
                                    <div className="star-icon" style={{backgroundImage: "URL(../public/Imgs/icon/star.png"}}></div>
                                </div>
                                <div className="MovieDetail-overView-tab-score" >
                                    <span style={{fontSize: "2rem", fontWeight: "500", color: "#585858"}}>{movie.score}</span>
                                    <span style={{fontSize: "0.7rem", fontWeight: "400", color: "#585858"}}>{movie.people}</span>
                                </div>
                                <div className="MovieDetail-overView-tab-btn">
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <div className="icon-img-plus"
                                        style={{backgroundImage: "URL(../public/Imgs/icon/plus.png"}}></div>
                                        <span className="icon-text">보고싶어요</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span className="icon-img" style={{backgroundImage: "URL(../public/Imgs/icon/pencil.png"}}></span>
                                        <span className="icon-text">코멘트</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span className="icon-img" style={{backgroundImage: "URL(../public/Imgs/icon/eye.png"}}></span>
                                        <span className="icon-text">보는 중</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span className="icon-img" style={{backgroundImage: "URL(../public/Imgs/icon/dots.png"}}></span>
                                        <span className="icon-text">더보기</span>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginBottom: '40px' }} />
                            <div className="MovieDetail-overView-text">
                                <span className="MovieDetail-overView-text-main">{movie.mainText}</span>
                                <br></br>
                                <span>{movie.detailText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieProfilePage
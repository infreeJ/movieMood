import { useEffect, useState } from "react";




function MovieProfilePage() {



    return (
        <>
            <div className="mainImg" style={{ backgroundImage: 'URL(../public/Imgs/MovieProfile/브링허백.jpg)' }}>
                <div className="mainImg-textWrapper">
                    <h1 style={{ fontSize: '2.3rem' }}>브링 허 백</h1>
                    <span>Bring Her Back</span>
                    <span>2025 · 공포 · 호주, 미국</span>
                    <span>1시간 39분 · 청불</span>
                    <span>예매 순위 6위 5.3% · 개봉 2일전 · 누적 관객 2,648명</span>
                </div>

            </div>
            <div className="Home-wrapper">
                <div className="home">
                    <div className="movieDetail">
                        <div className="movieDetail-img" style={{ backgroundImage: 'URL(../public/Imgs/MovieProfile/브링허백포스터.jpg)' }}></div>
                        <div className="MovieDetail-overView">
                            <div className="MovieDetail-overView-tab">
                                <div className="MovieDetail-overView-tab-rating">★★★★★</div>
                                <div className="MovieDetail-overView-tab-btn">
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span>아이콘</span>
                                        <span>보고싶어요</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span>아이콘</span>
                                        <span>코멘트</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span>아이콘</span>
                                        <span>보는 중</span>
                                    </div>
                                    <div className="MovieDetail-overView-tab-btn-set">
                                        <span>아이콘</span>
                                        <span>더보기</span>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginBottom: '40px' }} />
                            <div className="MovieDetail-overView-text">
                                <span className="MovieDetail-overView-text-main">"비밀 하나 알려줄게, 너희가 이 집에 온 이유"</span>
                                <br></br>
                                <span>아빠의 죽음 후 새엄마에게 입양된 남매 앤디와 파이퍼.
                                    평화로운 집, 따뜻한 보금자리에서의 안식도 잠시 새엄마는
                                    두 남매 사이를 갈라놓으며 앤디와 파이퍼를 혼란에 빠트린다.
                                    고립된 집, 집 안 곳곳에서 발견되는 정체를 알 수 없는 의식의 흔적들,
                                    새엄마가 숨긴 끔찍한 비밀이 드러나면서 남매를 극한의 공포 상황으로 몰아붙이기 시작하는데…
                                    보지 말아야 할 것을 본 두 사람은 과연 살아남을 수 있을까!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieProfilePage
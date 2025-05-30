import Ranking from "../Component/Ranking"

function MoviePage() {
    return (
        <>
            <div className="Home-wrapper">
                <div className="home">
                    <span style={{fontSize: "1.2rem", fontWeight: "600", marginBottom: "20px"}}>박스오피스 순위</span>
                    <Ranking />
                </div>
            </div>
        </>
    )
}

export default MoviePage
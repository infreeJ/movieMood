import SubBtn from "../Component/SubBtn"
import NewContent from "../Component/NewContent"
import Ranking from "../Component/Ranking"

function HomePage () {

    return (
        <>
        <div className="Home-wrapper">
            <div className="home">

                    <NewContent/>

                    <SubBtn/>

                <div className="topic">
                    =<span style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px'}}>왓챠피디아 HOT 랭킹</span>
                </div>

                    <Ranking/>
                    
            </div>
        </div>
        </>
    )
}

export default HomePage
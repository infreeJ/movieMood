

function SubBtn () {

    const subBtnName = ['매거진', '이벤트', '캘린더', '취향분석', '추천']
    
    return (
        <>
        {subBtnName.map((content, index) => (
        <div className="subBtn" key={index}>
            <span className="subBtn-magazine">{content}</span>
        </div>
        ))}
        </>
    )
}
export default SubBtn
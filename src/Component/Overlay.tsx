interface Props {
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}


function Overlay ({setLoginModal} : Props) {
    return(
        <>
        <div className="overlay" onClick={ () => {setLoginModal(false)}}></div>
        </>
    )
}
export default Overlay
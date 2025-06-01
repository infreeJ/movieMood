

function useCardSlider(
    cardNum: number,
    setCardNum: React.Dispatch<React.SetStateAction<number>>,
    contentLength: number
) {
    function cardSlideUp(i: number): void {
        if (cardNum < contentLength - i) {
            setCardNum(cardNum + 1)
        }
    }

    function cardSlideDown() {
        if (cardNum > 0) {
            setCardNum(cardNum - 1)
        }
    }
    return {
        cardSlideUp, cardSlideDown
    }
}


export default useCardSlider
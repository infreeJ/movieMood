

function useCardSlider(
    cardNum: number,
    setCardNum: React.Dispatch<React.SetStateAction<number>>,
    pageNum: number
) {
    function cardSlideUp(i: number, j: number): void {
        if (cardNum < pageNum * j) {
            setCardNum(cardNum + i)
        }
    }

    function cardSlideDown(i: number): void {
        if (cardNum > 0) {
            setCardNum(cardNum - i)
        }
    }
    return {
        cardSlideUp, cardSlideDown
    }
}

export default useCardSlider
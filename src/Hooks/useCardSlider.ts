

// function useCardSlider(
//     cardNum: number,
//     setCardNum: React.Dispatch<React.SetStateAction<number>>,
//     pageNum: number
// ) {
//     function cardSlideUp(i: number, j: number): void {
//         if (cardNum < pageNum * j) {
//             setCardNum(cardNum + i)
//         }
//     }

//     function cardSlideDown(i: number): void {
//         if (cardNum > 0) {
//             setCardNum(cardNum - i)
//         }
//     }
//     return {
//         cardSlideUp, cardSlideDown
//     }
// }

// export default useCardSlider


function useCardSlider (
    slideWidth : number,
    setSlideWidth : React.Dispatch<React.SetStateAction<number>>,
    pageNum : number,
    setPageNum : React.Dispatch<React.SetStateAction<number>>
) {
        function cardMoveLeft() {
        if (pageNum > 0) {
            setSlideWidth(slideWidth + 100)
            setPageNum(pageNum - 1)
        }
    }


    function cardMoveRight(i: number) {
        if (pageNum < i) {
            setSlideWidth(slideWidth - 100)
            setPageNum(pageNum + 1)
        }
    }
    return {cardMoveLeft, cardMoveRight}
}
export default useCardSlider
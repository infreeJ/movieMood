import { useEffect } from "react"


function LockScroll (loginModal: boolean, joinModal: boolean) {
    useEffect( () => {
        if (!loginModal && !joinModal) return;

        const original = document.body.style.overflow
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = original;
        };
    }, [loginModal, joinModal])

}
export default LockScroll
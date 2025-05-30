import { useEffect } from "react"


function LockScroll (loginModal: boolean) {
    useEffect( () => {
        if (!loginModal) return;

        const original = document.body.style.overflow
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = original;
        };
    }, [loginModal])




}
export default LockScroll
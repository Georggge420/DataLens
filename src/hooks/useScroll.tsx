import { use, useCallback, useEffect, useState } from "react";

useCallback
useEffect
useState

export default function useScroll(threshold:number) {
    const[scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    //check on firts load
    useEffect(() => {    
        onScroll();
    }, [onScroll]);

    return scrolled;
}
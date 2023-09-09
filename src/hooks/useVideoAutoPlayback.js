import { useRef, useEffect } from 'react';

const useVideoAutoPlayback = options => {
    const parentRef = useRef(null);
    const videoRef = useRef(null);

    const cb = entries => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            videoRef.current.play();
        } else {
            videoRef.current?.pause();
        }
    };

    useEffect(() => {
        // checks if IntersectionObserver is support, if not return empty clean up function
        if (IntersectionObserver === null || IntersectionObserver === undefined)
            return () => {};

        const observer = new IntersectionObserver(cb, options);
        const current = parentRef.current;

        if (parentRef.current) {
            observer.observe(parentRef.current);
        } 
        
        // return clean up function
        return () => {
            if (current) observer.unobserve(current);
        };
    }, [parentRef, videoRef]);

    return [parentRef, videoRef];
};

export { useVideoAutoPlayback };
import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Sadece bir kez tetiklensin
                }
            },
            options
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options]);

    return [ref, inView] as const;
}

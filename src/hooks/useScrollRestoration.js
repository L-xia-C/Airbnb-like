import { useEffect } from 'react'; // 引入 useLayoutEffect
import { useLocation } from 'react-router-dom'
export default function useScrollRestoration(key) {
    const location = useLocation();
    useEffect(() => {
        const saved = sessionStorage.getItem(key);
        if (saved) {
            requestAnimationFrame(() => {
                document.documentElement.scrollTop = parseInt(saved)
                sessionStorage.removeItem(key);
            }
            )
        }
    }, [key, location.pathname]);
}
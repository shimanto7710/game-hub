// hooks/useInfiniteScroll.ts
import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  onScrollEnd: () => void,
  isLoading: boolean,
  hasMore: boolean
) => {
  const debounceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    // const handleScroll = () => {
    //   if (debounceTimer.current !== null) {
    //     window.clearTimeout(debounceTimer.current);
    //   }

    //   debounceTimer.current = window.setTimeout(() => {
    //     const { scrollTop, clientHeight, scrollHeight } = 
    //       document.documentElement;
        
    //     // Load more when 500px from bottom
    //     if (scrollTop + clientHeight >= scrollHeight - 500) {
    //       onScrollEnd();
    //     }
    //   }, 200);
    // };

    const handleScroll = () => {
        // Use document.body for better cross-browser compatibility
        const scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        
        // 300px from bottom threshold
        if (scrollTop + clientHeight >= scrollHeight - 300) {
          onScrollEnd();
        }
      };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimer.current !== null) {
        window.clearTimeout(debounceTimer.current);
      }
    };
  }, [isLoading, hasMore, onScrollEnd]);
};

export default useInfiniteScroll;
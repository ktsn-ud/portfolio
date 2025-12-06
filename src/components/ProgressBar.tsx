import { useEffect } from 'react';

export function ProgressBar() {
    // スクロール位置に応じて進捗バーの高さを更新
    useEffect(() => {
        const progressBar = document.getElementById('progress-bar');
        const handleScroll = () => {
            if (progressBar) {
                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollPercent =
                    (scrollTop / (documentHeight - windowHeight)) * 100;
                progressBar.style.height = `${scrollPercent}%`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // 初期表示時に高さを設定
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id="progress-bar"
            className="hidden lg:block fixed left-[297px] top-0 bg-gray-800 h-full w-[6px]"
        ></div>
    );
}

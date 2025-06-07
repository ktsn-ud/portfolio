import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Opening() {
    const [showOpening, setShowOpening] = useState(true);

    // 2秒後にオープニングを非表示にする
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowOpening(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    // オープニングを表示中はスクロールを無効化
    useEffect(() => {
        if (showOpening) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [showOpening]);

    return (
        <AnimatePresence>
            {showOpening && (
                <>
                    <motion.div
                        id="opening-bg"
                        className="absolute fixed h-full bottom-0 w-full bg-gray-700 z-50"
                        initial={{ maxHeight: "100%" }}
                        animate={{ maxHeight: "100%" }}
                        exit={{ maxHeight: 0 }}
                        transition={{ duration: .5, ease: "easeInOut" }}
                    />
                    <div className="absolute fixed flex items-center justify-center h-full w-full z-50">
                        <motion.img
                            id="philosophy-en"
                            src="/src/assets/img/philosophy_en.svg"
                            className="w-[20%] z-100 pointer-events-none"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: .4, ease: "easeOut" }}
                        />
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
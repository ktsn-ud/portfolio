import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import philosophyEn from '/src/assets/img/philosophy_en.svg';

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
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showOpening]);

    return (
        <AnimatePresence>
            {showOpening && (
                <>
                    <motion.div
                        id="opening-bg"
                        className="fixed h-full bottom-0 w-full bg-gray-700 z-50"
                        initial={{ maxHeight: '100%' }}
                        animate={{ maxHeight: '100%' }}
                        exit={{ maxHeight: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                    <div className="fixed flex items-center justify-center h-full w-full z-50">
                        <motion.img
                            id="philosophy-en"
                            src={philosophyEn}
                            width={1471}
                            height={281}
                            className="w-[60%] lg:w-[20%] z-100 pointer-events-none"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

import React from 'react';
import { useEffect, useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';
import _ from 'lodash'
import type { SectionsType } from '../types/sections';
import profileIcon from '/src/assets/img/profile_icon.webp';

export const Sidebar = React.memo(function Sidebar({ sections }: { sections: SectionsType }) {
    return (
        <div className="relative lg:fixed lg:left-0 lg:top-0 h-[600px] lg:h-full w-full lg:w-[300px] px-7 py-10 bg-gray-700 text-white">
            <div>
                <Profile></Profile>
                <hr className="w-[100%] my-6" />
                <Table sections={sections}></Table>
            </div>
            <a
                href="https://github.com/ktsn-ud"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoGithub className="w-8 h-8 absolute bottom-5 left-5"></IoLogoGithub>
            </a>
        </div>
    );
});

function Profile() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <img
                    src={profileIcon}
                    alt=""
                    className="w-[130px] h-[130px] rounded-full object-cover"
                />
                <p className="my-4 font-bold">きつねうどん</p>
            </div>
            <p className="text-[0.8em] mx-3">
                千葉大学
                <br />
                理学部 数学・情報数理学科
                <br />
                （情報数理学コース）
            </p>
        </div>
    );
}

// 目次
function Table({ sections }: { sections: SectionsType }) {
    const [active, setActive] = useState('About');

    // スクロールに連動してstateを更新
    useEffect(() => {
        const handleScroll = _.throttle(() => {
            let current = sections[0].label;
            for (let item of sections) {
                const el = document.getElementById(item.link);
                if (el) {
                    const parent = el.parentElement; // section
                    if (parent) {
                        const rect = parent.getBoundingClientRect();
                        if (
                            rect.top <= 100 || // セクション上端がウィンドウ上から100px以内
                            (rect.top >= 0 && rect.bottom <= window.innerHeight) // セクションがウィンドウ内に完全に収まっている
                        ) {
                            current = item.label;
                        }
                    }
                }
            }
            setActive(current);
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            handleScroll.cancel();
        };
    }, []);

    // 目次の項目をクリックしたときにスクロール
    const handleClick = (link: string) => {
        const el = document.getElementById(link);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // 目次の各項目
    const items = sections.map((item) => (
        <button
            key={item.label}
            onClick={() => handleClick(item.link)}
            className={`w-[100%] h-[40px] px-5 cursor-pointer text-right
                ${
                    active === item.label
                        ? 'lg:bg-gray-800 lg:text-[1.1em] lg:font-bold'
                        : 'bg-gray-700 hover:bg-gray-600 text-[0.9em]'
                }`}
        >
            {item.label}
        </button>
    ));
    return <div>{items}</div>;
}

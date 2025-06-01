import { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';

type SidebarProps = {
    contents: { label: string; link: string }[];
};

export function Sidebar({ contents }: SidebarProps) {
    return (
        <div className="fixed left-0 top-0 h-full w-[300px] px-7 py-10 bg-gray-700 text-white">
            <div>
                <Profile></Profile>
                <hr className="w-[100%] my-6" />
                <Table contents={contents}></Table>
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
}

function Profile() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <img
                    src="/src/assets/img/profile_icon.jpg"
                    alt=""
                    className="w-[130px] h-[130px] rounded-full object-cover m"
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

function Table({ contents }: SidebarProps) {
    const [active, setActive] = useState('About');
    const items = contents.map((item) => (
        <button
            key={item.label}
            onClick={() => {
                setActive(item.label);
                document.getElementById(item.label)?.scrollIntoView();
            }}
            className={`w-[100%] h-[40px] px-5 cursor-pointer text-right
                ${
                    active === item.label
                        ? 'bg-gray-800 text-[1.1em] font-bold'
                        : 'bg-gray-700 hover:bg-gray-600 text-[0.9em]'
                }`}
        >
            {item.label}
        </button>
    ));
    return <div>{items}</div>;
}

import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import skillsList from './skills.json';
import { FaRegCheckSquare } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { HiOutlineExternalLink } from 'react-icons/hi';

export function Skills({ section }: { section: SectionItemType }) {
    const skills = skillsList.map((skill, index) => {
        // 各項目内、リンク部分
        const links = (
            linkArr: { label: string; url: string }[],
            outerIndex: number,
        ) => {
            if (!linkArr) return null;
            return linkArr.reduce<React.ReactNode[]>(
                (acc, link, innerIndex) => {
                    if (innerIndex > 0 && window.innerWidth >= 1024) {
                        acc.push(
                            <span
                                key={`sep-${outerIndex}-${innerIndex}`}
                                className="mx-1 text-gray-400 select-none"
                            >
                                ｜
                            </span>,
                        );
                    }
                    acc.push(
                        <a
                            href={link.url}
                            key={`link-${outerIndex}-${innerIndex}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-60 block lg:inline"
                        >
                            {link.label}
                            <HiOutlineExternalLink className="inline ml-1" />
                        </a>,
                    );
                    return acc;
                },
                [],
            );
        };

        // 各分野内、項目
        const details = skill.items.map((item, innerIndex) => {
            return (
                <ul key={`skill-${index}-${innerIndex}`} className="pl-[2.5em]">
                    <li className="my-5">
                        <div className="relative font-bold mr-2">
                            <FaRegCheckSquare className="absolute -left-[1.5em] top-[3px]" />
                            {item.title}:
                        </div>
                        <div className="lg:pl-[1.5em] leading-6 text-sm">
                            {item.description}
                            {item.links && (
                                <div className="my-1">
                                    <span className="border inline-block p-1 mr-2">
                                        <HiOutlineLink className="inline mr-1" />
                                        関連リンク
                                    </span>
                                    {links(item.links, index)}
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            );
        });

        return (
            // 各分野見出し
            <div key={`skill-field-${index}`} className="my-10">
                <h3 className="font-bold text-xl pl-3 my-4 border-b-2">
                    {skill.field}
                </h3>
                {details}
            </div>
        );
    });
    return (
        <section>
            <Heading section={section}></Heading>
            {skills}
        </section>
    );
}

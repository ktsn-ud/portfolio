import type React from 'react';
import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import skills from './skills.json';
import { FaRegCheckSquare } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { HiOutlineExternalLink } from 'react-icons/hi';

type LinkType = { label: string; url: string };
type SkillItemType = {
    title: string;
    description: string;
    links: LinkType[] | null;
};

function Links({
    links,
    parentKey,
}: {
    links: LinkType[] | null;
    parentKey: string;
}) {
    let linksElements;
    if (!links) {
        linksElements = null;
    } else {
        linksElements = links.reduce<React.ReactNode[]>(
            (acc, link, linkIdx) => {
                if (linkIdx > 0 && window.innerWidth >= 1024) {
                    acc.push(
                        <span
                            key={`skill-link-${parentKey}-sep-${linkIdx}`}
                            className="mx-1 text-gray-400 select-none"
                        >
                            ｜
                        </span>,
                    );
                }
                acc.push(
                    <a
                        href={link.url}
                        key={`skill-link-${parentKey}-${linkIdx}-${link.label}`}
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
    }

    return (
        <div className="my-1">
            <span className="border inline-block p-1 mr-2">
                <HiOutlineLink className="inline mr-1" />
                関連リンク
            </span>
            {linksElements}
        </div>
    );
}

function SkillItem({
    title,
    description,
    links,
    id,
    parentKey,
}: {
    title: string;
    description: string;
    links: LinkType[] | null;
    id: number;
    parentKey: string;
}) {
    return (
        <ul key={`skill-${parentKey}-${id}`} className="pl-[2.5em]">
            <li className="my-5" key={`skill-li-${parentKey}-${id}`}>
                {' '}
                {/* key追加 */}
                <div className="relative font-bold mr-2">
                    <FaRegCheckSquare className="absolute -left-[1.5em] top-[3px]" />
                    {title}
                </div>
                <div className="lg:pl-[1.5em] leading-6 text-sm">
                    {description}
                    {links && (
                        <Links
                            links={links}
                            parentKey={`skill-${parentKey}-${id}`}
                        />
                    )}
                </div>
            </li>
        </ul>
    );
}

function Field({
    field,
    items,
    id,
}: {
    field: string;
    items: SkillItemType[];
    id: number;
}) {
    const skillItemsElements = items.map((item, itemIdx) => (
        <SkillItem
            title={item.title}
            description={item.description}
            links={item.links}
            id={itemIdx}
            parentKey={`skill-field-${id}`}
            key={`skillitem-${id}-${itemIdx}-${item.title}`}
        />
    ));
    return (
        <div key={`skill-field-${id}`} className="my-10">
            <h3 className="font-bold text-xl pl-3 my-4 border-b-2">{field}</h3>
            {skillItemsElements}
        </div>
    );
}

export function Skills({ section }: { section: SectionItemType }) {
    const skillElements = skills.map((skill, skillIdx) => (
        <Field
            field={skill.field}
            items={skill.items}
            id={skillIdx}
            key={`field-${skillIdx}-${skill.field}`}
        />
    ));
    return (
        <section>
            <Heading section={section} />
            {skillElements}
        </section>
    );
}

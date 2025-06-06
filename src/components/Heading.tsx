import type { SectionItemType } from '../types/sections';

export function Heading({ section }: { section: SectionItemType }) {
    return (
        <h2 id={section.link} className="block relative my-10">
            <div className="relative font-extrabold text-5xl text-gray-300 select-none">
                {section.label}
                <div className="absolute font-extrabold text-4xl top-7 left-8 text-gray-800 tracking-wider select-text">
                    {section.label_ja}
                </div>
            </div>
        </h2>
    );
}

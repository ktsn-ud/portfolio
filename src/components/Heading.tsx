import type { ContentItemType } from '../types/contents';

export function Heading({ content }: { content: ContentItemType }) {
    return (
        <h1 id={content.link} className='block relative mb-10'>
                {/* <div className='absolute font-extrabold text-5xl text-gray-300 pointer-events-none'>{content.label}</div>
                <div className='absolute font-extrabold text-4xl top-7 left-8 text-gray-800 tracking-wider'>{content.label_ja}</div> */}

                <div className='relative font-extrabold text-5xl text-gray-300 select-none'>
                    {content.label}
                    <div className='absolute font-extrabold text-4xl top-7 left-8 text-gray-800 tracking-wider select-text'>{content.label_ja}</div>
                </div>
        </h1>
    );
}

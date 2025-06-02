import type { ContentItemType } from '../types/contents';
import { Heading } from './Heading';

export function Contact({ content }: { content: ContentItemType }) {
    return (
        <>
            <Heading content={content}></Heading>
        </>
    );
}

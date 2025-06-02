import type { ContentItemType } from '../types/contents';
import { Heading } from './Heading';

export function Skills({ content }: { content: ContentItemType }) {
    return (
        <>
            <Heading content={content}></Heading>
        </>
    );
}

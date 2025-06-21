import React from 'react';
import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import Iframe from 'react-iframe';

export const Contact = React.memo(function Contact({ section }: { section: SectionItemType }) {
    return (
        <section>
            <Heading section={section}></Heading>
            <Iframe
                url="https://docs.google.com/forms/d/e/1FAIpQLSdiqMqA88Z5WZsyke0uXx6jr0zhaawLTajeRGuPCY8OblCzJg/viewform?embedded=true"
                className="w-full h-[1050px]"
            />
        </section>
    );
});

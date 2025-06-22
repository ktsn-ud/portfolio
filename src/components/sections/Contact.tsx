import React from 'react';
import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import { SiGoogleforms } from 'react-icons/si';

function ContactButton() {
    return (
        <div className='my-4'>
            <a
                className='w-80 h-15 rounded-full bg-gray-800 text-[white] flex items-center justify-center mx-auto mb-2 lg:hover:scale-105 lg:transition transition-500'
                href='https://docs.google.com/forms/d/e/1FAIpQLSdiqMqA88Z5WZsyke0uXx6jr0zhaawLTajeRGuPCY8OblCzJg/viewform?usp=dialog'
                target='_blank'
                rel='noopener noreferrer'
            >
                <SiGoogleforms className='w-8 h-8 mr-2'></SiGoogleforms>
                お問い合わせフォーム
            </a>
            <p className='text-center text-gray-500 text-sm'>※Googleフォームに遷移します</p>
        </div>
    )
}

export const Contact = React.memo(function Contact({ section }: { section: SectionItemType }) {
    return (
        <section>
            <Heading section={section}></Heading>
            <p>本サイトを御覧いただきありがとうございました。</p>
            <p>ポートフォリオに関するご意見・ご質問・ご連絡がございましたら、以下のリンクからお問い合わせください。</p>
            <ContactButton />
        </section>
    );
});

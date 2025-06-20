import { Opening } from './components/Opening';
import { Sidebar } from './components/Sidebar';
import { ProgressBar } from './components/ProgressBar';
import { About } from './components/sections/About';
import { History } from './components/sections/History';
import { Skills } from './components/sections/Skills';
import { Roadmap } from './components/sections/Roadmap';
import { Strengths } from './components/sections/Strengths';
import { Contact } from './components/sections/Contact';
import type { SectionsType } from './types/sections';

function App() {
    const sections: SectionsType = [
        { label: 'About', label_ja: '自己紹介', link: 'about' },
        { label: 'History', label_ja: '経歴', link: 'history' },
        { label: 'Skills', label_ja: 'スキル', link: 'skills' },
        { label: 'Roadmap', label_ja: '今後の取り組み', link: 'roadmap' },
        { label: 'Strengths', label_ja: '強み', link: 'strengths' },
        { label: 'Contact', label_ja: 'お問い合わせ', link: 'contact' },
    ];
    return (
        <>
            <Opening />
            <Sidebar sections={sections} />
            <div className="lg:ml-[300px]">
                <div className="p-8 lg:max-w-[800px] mx-auto">
                    <About section={sections[0]} />
                    <History section={sections[1]} />
                    <Skills section={sections[2]} />
                    <Roadmap section={sections[3]} />
                    <Strengths section={sections[4]} />
                    <Contact section={sections[5]} />
                </div>
            </div>
            <div className="lg:ml-[300px] text-center text-gray-500 text-sm pb-5">
                &copy; ktsn-ud 2025 All rights reserved.
            </div>
            <ProgressBar />
        </>
    );
}

export default App;

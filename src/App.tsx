import { Sidebar } from './components/Sidebar';
import { ProgressBar } from './components/ProgressBar';
import { About } from './components/sections/About';
import { History } from './components/sections/History';
import { Skills } from './components/sections/Skills';
import { Strengths } from './components/sections/Strengths';
import { Contact } from './components/sections/Contact';
import type { SectionsType } from './types/sections';

function App() {
    const sections: SectionsType = [
        { label: 'About', label_ja: '自己紹介', link: '#about' },
        { label: 'History', label_ja: '経歴', link: '#history' },
        { label: 'Skills', label_ja: 'スキル', link: '#skills' },
        { label: 'Strengths', label_ja: '強み', link: '#strengths' },
        { label: 'Contact', label_ja: 'お問い合わせ', link: '#contact' },
    ];
    return (
        <>
            <Sidebar sections={sections}></Sidebar>
            <div className="ml-[300px] mr-[20px]">
                <div className='p-8 max-w-[800px] mx-auto'>
                    <About section={sections[0]}></About>
                    <History section={sections[1]}></History>
                    <Skills section={sections[2]}></Skills>
                    <Strengths section={sections[3]}></Strengths>
                    <Contact section={sections[4]}></Contact>
                </div>
            </div>
            <ProgressBar />
        </>
    );
}

export default App;

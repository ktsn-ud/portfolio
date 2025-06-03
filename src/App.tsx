import { Sidebar } from './components/Sidebar';
import { About } from './components/sections/About';
import { History } from './components/sections/History';
import { Skills } from './components/sections/Skills';
import { Strengths } from './components/sections/Strengths';
import { Contact } from './components/sections/Contact';
import type { ContentsType } from './types/contents';

function App() {
    const contents: ContentsType = [
        { label: 'About', label_ja: '自己紹介', link: '#about' },
        { label: 'History', label_ja: '経歴', link: '#history' },
        { label: 'Skills', label_ja: 'スキル', link: '#skills' },
        { label: 'Strengths', label_ja: '強み', link: '#strengths' },
        { label: 'Contact', label_ja: 'お問い合わせ', link: '#contact' },
    ];
    return (
        <>
            <Sidebar contents={contents}></Sidebar>
            <div className="ml-[300px]">
                <div className='p-8 max-w-[800px] mx-auto'>
                    <About content={contents[0]}></About>
                    <History content={contents[1]}></History>
                    <Skills content={contents[2]}></Skills>
                    <Strengths content={contents[3]}></Strengths>
                    <Contact content={contents[4]}></Contact>
                </div>
            </div>
        </>
    );
}

export default App;

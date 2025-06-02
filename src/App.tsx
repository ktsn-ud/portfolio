import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { History } from './components/History';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import type { ContentsType } from './types/contents';

function App() {
    const contents: ContentsType = [
        { label: 'About', label_ja: '自己紹介', link: '#about' },
        { label: 'History', label_ja: '経歴', link: '#history' },
        { label: 'Skills', label_ja: 'スキル', link: '#skills' },
        { label: 'Contact', label_ja: 'お問い合わせ', link: '#contact' },
    ];
    return (
        <>
            <Sidebar contents={contents}></Sidebar>
            <div className="ml-[300px] p-12">
                <About content={contents[0]}></About>
                <History content={contents[1]}></History>
                <Skills content={contents[2]}></Skills>
                <Contact content={contents[3]}></Contact>
            </div>
        </>
    );
}

export default App;

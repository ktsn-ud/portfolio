import { Sidebar } from './components/Sidebar';
import type { ContentsType } from './types/contents';

function App() {
    const contents: ContentsType = [
        { label: 'About', label_ja: '自己紹介', link: '#about' },
        { label: 'History', label_ja: '経歴', link: 'history' },
        { label: 'Skills', label_ja: 'スキル', link: 'skills' },
        { label: 'Contact', label_ja: '連絡先', link: 'contact' },
    ];
    return (
        <>
            <Sidebar contents={contents}></Sidebar>
        </>
    );
}

export default App;

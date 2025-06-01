import { Sidebar } from './components/Sidebar';

function App() {
    const contents = [
        { label: 'About', link: '#about' },
        { label: 'History', link: 'history' },
        { label: 'Skills', link: 'skills' },
        { label: 'Contact', link: 'contact' },
    ];
    return (
        <>
            <Sidebar contents={contents}></Sidebar>
        </>
    );
}

export default App;

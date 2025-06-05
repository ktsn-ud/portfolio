import type { ContentItemType } from '../../types/contents';
import { Heading } from '../Heading';
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineLink } from "react-icons/hi";

export function History({ content }: { content: ContentItemType }) {
    const history = [
        {
            date: '2023.04',
            title: '千葉大学理学部数学・情報数理学科 入学',
            description: `
            初めてプログラミング（Python）に触れる。
            問題演習でプログラミングの楽しさを感じる。
            `,
            link: null,
        },
        {
            date: '2023.09',
            title: '競技プログラミングを始める',
            description: `
            大学で学んだプログラミングのアウトプットとして、AtCoderに挑戦。
            `,
            link: {
                label: 'AtCoderユーザーページ',
                url: 'https://atcoder.jp/users/ktsn_ud',
            },
        },
        {
            date: '2023.12',
            title: '新歓企画・千葉大祭実行委員会事務局 広報部長に就任',
            description: `
            2024年3月の新歓企画および2024年11月の千葉大祭に向けて、
            広報部各分野の主担当を積極的に支援。2024年11月まで。
            `,
            link: null,
        },
        {
            date: '2024.02',
            title: '大学祭のHPリニューアルに着手',
            description: `
            大学祭全体のブランディング向上とユーザーの情報アクセスのしやすさを目指し、
            リニューアルを提案・実行。
            `,
            link: {
                label: '千葉大祭公式HP',
                url: 'https://chibafes.com/',
            },
        },
        {
            date: '2024.09',
            title: 'University of Calgary（カナダ）にて2週間の留学',
            description: `
            数学・情報数理学科の留学プログラム。「Data Analytics with Python」の
            授業で簡単なデータ分析を体験。
            `,
            link: null,
        },
        {
            date: '2024.10',
            title: 'GCI 2024 Winter 受講',
            description: `
            東京大学グローバル消費インテリジェンス寄付講座にて、
            データ分析・機械学習・マーケティングの基礎を習得。2025年3月修了。
            `,
            link: {
                label: 'GCI 2024 Winter',
                url: 'https://gci2.t.u-tokyo.ac.jp/archives/course/gci-2024-winter',
            }
        },
        {
            date: '2024.12',
            title: '新歓企画・千葉大祭実行委員会事務局 新歓企画期局長に就任',
            description: `
            事務局の長として運営を統括するとともに、支援型リーダーシップで後輩の成長を支援。
            2025年4月まで。
            `,
            link: null,
        },
        {
            date: '2025.04',
            title: '情報数理学コースに配属',
            description: `
            数学・情報数理学科の情報数理学コースに配属され、
            専門的な情報数理学の授業を多く履修。
            `,
            link: null,
        },
        {
            date: '2025.04',
            title: '基本情報技術者試験 合格',
            description: `
            情報工学系ではない自身のバックグラウンドを踏まえ、
            ITの基礎を固める必要性を感じ、資格を取得。受験は3月。
            `,
            link: null,
        },
        {
            date: '2025.05',
            title: 'Reactの学習を開始',
            description: `
            将来的にWebアプリケーション開発に携わりたいと考える。Reactの独学を開始し、
            ポートフォリオサイトの作成に着手。
            `,
            link: null,
        },
    ];

    const items = history.map((item, index) => {
        return (
            <div id={`history-${index}`} className='my-5 relative'>
                <div className='absolute -left-[150px] text-right font-bold'>{item.date}</div>
                <div className='absolute -left-[47px] top-[5px] h-3 w-3 bg-gray-50 border-2 border-gray-800 rounded-full'></div>
                <div className='font-bold my-1'>{item.title}</div>
                <div className='text-xs ml-5'>{item.description}</div>
                {item.link && (
                    <div className='text-xs my-2 ml-5'>
                        <span className='border inline-block p-1 mr-2'><HiOutlineLink className='inline mr-1'/>関連リンク</span>
                        <a href={item.link.url} className='hover:opacity-60' target='_blank' rel='noopener noreferrer'>
                            {item.link.label}
                            <HiOutlineExternalLink className='inline ml-1' />
                        </a>
                    </div>
                )}
            </div>
        )
    });

    return (
        <section>
            <Heading content={content}></Heading>
            <div className='ml-[150px] pl-[40px] py-2 border-l-2 border-gray-800 w-[500px]'>
                {items}
            </div>
        </section>
    );
}

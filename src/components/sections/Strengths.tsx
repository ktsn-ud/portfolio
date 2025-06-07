import { useState } from "react";

import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';

import { VscTriangleDown } from "react-icons/vsc";

export function Strengths({ section }: { section: SectionItemType }) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const onClick1 = () => setIsOpen1((prev) => !prev);
    const onClick2 = () => setIsOpen2((prev) => !prev);
    const onClick3 = () => setIsOpen3((prev) => !prev);

    const strengths = [
        {
            title: '強み①｜論理的思考力と課題解決力',
            description: (
                <>
                    <p className="my-2">
                        数学・情報数理学を専門とする学習を通じて培った精密な思考力と論理構築へのこだわりが、私の問題解決の基盤となっています。
                    </p>
                    <p className="my-2">
                        技術的な問題解決力では、AtCoderなどの競技プログラミングを通じて、計算量や処理効率を意識したアルゴリズム設計力を身につけました。
                        大学ではPythonを用いたプログラミングやデータ構造・アルゴリズムの授業で最高評価を獲得し、問題の本質を見抜いて適切な手法に落とし込む力を実証しています。
                    </p>
                    <p className="my-2">
                        ユーザー視点での課題解決にも強い意欲を持っており、千葉大祭のホームページリニューアルでは、ユーザーが情報にアクセスしやすい構成と動線を設計しました。
                        技術を手段として捉え、ユーザー課題の解決や労働生産性向上に繋がるプロダクト開発を目指しています。
                    </p>
                </>
            ),
            isOpen: isOpen1,
            onClick: onClick1,
        },
        {
            title: '強み②｜高い自走力と学習意欲',
            description: (
                <>
                    <p className="my-2">
                        基礎から固める堅実な学習スタイルが私の特徴です。
                        情報工学系ではない環境で基本情報技術者試験に合格し、技術書を活用してGit/GitHubを独学で習得するなど、着実な積み上げ型の学習を実践しています。
                    </p>
                    <p className="my-2">
                        Webエンジニアへの興味からReactの学習を開始し、ポートフォリオサイトの作成に取り組むなど、自ら積極的に技術を習得し、形にする姿勢を持っています。
                    </p>
                    <p className="my-2">
                        現在の技術レベルを客観視し、学ぶべきことを見極めて行動する現実的な判断力があります。「知らないことは知らない」と素直に認める謙虚さを持ちながら、
                        インターンシップを通じて実践的な開発プロセスを学び、自身の成長ポイントを明確化したいという強い意欲があります。
                    </p>
                </>
            ),
            isOpen: isOpen2,
            onClick: onClick2,
        },
        {
            title: '強み③｜チーム貢献力と支援型リーダーシップ',
            description: (
                <>
                    <p className="my-2">
                        メンバーの力を引き出し、チーム全体を支える協調性が私の強みです。
                        新歓企画・千葉大祭実行委員会の広報部長や新歓企画期局長として、支援型リーダーシップを発揮してきました。
                    </p>
                    <p className="my-2">
                        各担当リーダーと個別対話を重ね、課題やアイデアを詳細に聞き取った上で、必要なスキルを持つメンバーとの橋渡しや、具体的なステップの整理をサポートしています。
                        広報部会ではファシリテーターとして異なる専門分野を持つメンバー間の交流を促進し、「三人寄れば文殊の知恵」を活かしてチーム全体の知見を集める工夫を行いました。
                    </p>
                    <p className="my-2">
                        意見対立が生じた際は、言い負かすのではなく合意形成を重視し、相手の主張を丁寧に聞き取って自分の意見との融合点を模索します。
                        困難な状況では一人で抱え込まず、信頼できる人に相談して複数の知恵を借りることで解決策を見出しており、これがチーム内の信頼関係構築に大きく貢献しています。
                    </p>
                </>
            ),
            isOpen: isOpen3,
            onClick: onClick3,
        }
    ]
    return (
        <section>
            <Heading section={section}></Heading>
            <img src="/src/assets/img/strength_venn.svg" alt="強みのベン図" className='w-[400px] mx-auto pointer-events-none' />
            {
                strengths.map((strength, index) => (
                    <StrengthItem
                        key={index}
                        title={strength.title}
                        description={strength.description}
                        isOpen={strength.isOpen}
                        onClick={strength.onClick}
                    />
                ))
            }

        </section>
    );
}

function StrengthItem({ title, description, isOpen, onClick }: { title: string, description: React.ReactNode, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="my-4">
            <div onClick={onClick} className="cursor-pointer text-lg font-bold p-3 border-2">
                <VscTriangleDown className={`inline mr-2 transition-all duration-600 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                {title}
            </div>
            <div className={`transition-all duration-600 overflow-hidden bg-gray-200 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className="p-5 leading-6 text-sm">
                    {description}
                </div>
            </div>
        </div>
    )
}
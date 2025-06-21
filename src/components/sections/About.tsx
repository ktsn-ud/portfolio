import React from 'react';
import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const About = React.memo(function About({ section }: { section: SectionItemType }) {
    const copyStyle =
        'block w-fit text-2xl lg:text-4xl text-gray-50 bg-gray-800 my-2 lg:my-4';
    const tableRowStyle = 'border-b border-gray-300';
    const handleClick = (link: string) => {
        const el = document.getElementById(link);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    return (
        <section>
            <Heading section={section}></Heading>
            <div className="flex flex-col lg:flex-row section-center justify-center items-center">
                <div className="text-2xl font-bold text-gray-800 my-2">
                    Philosophy
                </div>
                <div className="lg:mx-15 font-bold">
                    <span className={copyStyle}>課題を自分ごと化し、</span>
                    <span className={copyStyle}>チームと共に価値を</span>
                    <span className={copyStyle}>創造するエンジニアへ</span>
                </div>
            </div>
            <table className="table-auto w-full border-collapse border-gray-300 mt-8 text-sm lg:text-base">
                <tbody className="border-t border-gray-300">
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">ニックネーム</td>
                        <td className="p-3">
                            きつねうどん（@ktsn-ud）
                            <span className="text-xs">
                                ※受験生時代にたくさん食べたから
                            </span>
                        </td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">所属</td>
                        <td className="p-3">
                            千葉大学 理学部 数学・情報数理学科 情報数理学コース
                        </td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">卒業年度</td>
                        <td className="p-3">2027年3月 卒業見込み</td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">スキル</td>
                        <td className="p-3 lg:flex">
                            <div>Python / React / Tailwind CSS など</div>
                            <div
                                className="lg:ml-5 flex items-center cursor-pointer hover:opacity-60"
                                onClick={() => handleClick('skills')}
                            >
                                <FaArrowAltCircleDown className="inline" />
                                <div className="inline-block ml-1">詳細</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">現在の関心分野</td>
                        <td className="p-3">Webアプリ開発、SaaS系プロダクト</td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">強み</td>
                        <td className="p-3 lg:flex items-end">
                            <ul>
                                <li>論理的思考力と課題解決力</li>
                                <li>高い自走力と学習意欲</li>
                                <li>チーム貢献力と支援型リーダーシップ</li>
                            </ul>
                            <div
                                className="lg:ml-5 flex items-center cursor-pointer hover:opacity-60"
                                onClick={() => handleClick('strengths')}
                            >
                                <FaArrowAltCircleDown className="inline" />
                                <div className="inline-block ml-1">詳細</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={tableRowStyle}>
                        <td className="p-3 font-bold">趣味</td>
                        <td className="p-3">
                            アニメを見ること
                            <br />
                            <span className="text-xs">
                                ※キャラクターの心の動きに共感したり、関係性の変化を楽しむのが好きです。
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
});

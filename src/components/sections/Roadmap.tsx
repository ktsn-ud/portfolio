import React, { useMemo, useState } from 'react';
import { parse, format } from 'date-fns';
import type { SectionItemType } from '../../types/sections';
import { Heading } from '../Heading';
import roadmapList from './tasks.json';

function SortToggleSwitch({
    viewMode,
    setViewMode,
}: {
    viewMode: 'byField' | 'byDeadline';
    setViewMode: React.Dispatch<React.SetStateAction<'byField' | 'byDeadline'>>;
}) {
    function fontColor(elementViewMode: 'byField' | 'byDeadline') {
        if (elementViewMode === viewMode) {
            return 'text-[white]';
        } else {
            return 'text-gray-800';
        }
    }

    function position() {
        switch (viewMode) {
            case 'byField':
                return 'top-[3px] left-[3px]';
            case 'byDeadline':
                return 'top-[3px] left-[108px]';
        }
    }

    function hoverStyle(elementViewMode: 'byField' | 'byDeadline') {
        if (elementViewMode === viewMode) {
            return '';
        } else {
            return 'lg:hover:bg-gray-200 cursor-pointer';
        }
    }

    const commonStyle =
        'absolute top-[3px] w-[100px] h-[30px] flex items-center justify-center rounded-full transition-all select-none text-sm';

    return (
        <div className="relative w-[215px] h-[40px] rounded-full border-2 border-gray-800">
            <div
                className={`absolute transition-all ${position()} w-[100px] h-[30px] rounded-full bg-gray-800`}
            ></div>
            <button
                onClick={() => setViewMode('byField')}
                className={`left-[3px] ${commonStyle} ${hoverStyle('byField')} ${fontColor('byField')}`}
            >
                ジャンル別
            </button>
            <button
                onClick={() => setViewMode('byDeadline')}
                className={`left-[108px] ${commonStyle} ${hoverStyle('byDeadline')} ${fontColor('byDeadline')}`}
            >
                期限順
            </button>
        </div>
    );
}

function RoadmapCard({
    name,
    deadline,
    status,
    id,
    parentKey,
}: {
    name: string;
    deadline: Date;
    status: string;
    id: number;
    parentKey: string;
}) {
    const statusMap: {
        [key: string]: { base: string; accent: string; text: string };
    } = {
        todo: { base: 'bg-blue-50', accent: 'bg-blue-800', text: 'Todo' },
        ongoing: {
            base: 'bg-yellow-50',
            accent: 'bg-yellow-800',
            text: 'In Progress',
        },
        done: { base: 'bg-green-50', accent: 'bg-green-800', text: 'Done!' },
        default: { base: 'bg-gray-50', accent: 'bg-gray-800', text: 'Unknown' },
    };

    const { base, accent, text } = statusMap[status] || statusMap.default;
    return (
        <div
            key={`roadmap-todo-${parentKey}-${id}`}
            className={`w-full min-h-20 ${base} relative lg:ml-5 my-3 px-4 pt-6 pb-2`}
        >
            <div className={`absolute h-full w-1 left-0 top-0 ${accent}`}></div>
            <div
                className={`absolute left-0 top-1 inline-block text-xs ${accent} text-[white] w-30 text-center rounded-r-full`}
            >
                {text}
            </div>
            <div className="font-bold my-1">{name}</div>
            <div className="text-xs">
                Due: {format(deadline, 'yyyy年M月dd日')}
            </div>
        </div>
    );
}

type TodoType = { name: string; deadline: string; status: string };

function Tasks({
    theme,
    todo,
    id,
    parentKey,
}: {
    theme: string;
    todo: TodoType[];
    id: number;
    parentKey: string;
}) {
    const todos = todo.map((todo, todoIdx) => {
        const deadlineDate = parse(todo.deadline, 'yyyy-M-d', new Date());
        return (
            <li key={`roadmap-todo-li-${parentKey}-${id}-${todoIdx}`}>
                <RoadmapCard
                    name={todo.name}
                    deadline={deadlineDate}
                    status={todo.status}
                    id={todoIdx}
                    parentKey={`${parentKey}-${id}`}
                />
            </li>
        );
    });

    return (
        <li key={`task-${parentKey}-${id}`} className="my-4">
            <div className='font-bold text-lg before:content-["■"] before:mr-1'>
                {theme}
            </div>
            <ul>{todos}</ul>
        </li>
    );
}

type TaskType = { theme: string; todo: TodoType[] };

function Field({
    field,
    description,
    tasks,
    id,
}: {
    field: string;
    description: string;
    tasks: TaskType[];
    id: number;
}) {
    const tasksElements = tasks.map((task: TaskType, taskIdx: number) => {
        return (
            <Tasks
                theme={task.theme}
                todo={task.todo}
                id={taskIdx}
                parentKey={`field-${id}`}
                key={`tasks-${id}-${taskIdx}`}
            />
        );
    });

    return (
        <div key={`roadmap-field-${id}`} className="my-5">
            <h3 className="font-bold text-xl pl-3 my-4 border-b-2">{field}</h3>
            <p>{description}</p>
            <ul>{tasksElements}</ul>
        </div>
    );
}

export const Roadmap = React.memo(function Roadmap({
    section,
}: {
    section: SectionItemType;
}) {
    const [viewMode, setViewMode] = useState<'byField' | 'byDeadline'>(
        'byField',
    );

    const sortedTodos = useMemo(() => {
        // フラット化
        const allTodos: TodoType[] = [];
        roadmapList.forEach((field) => {
            field.tasks.forEach((task) => {
                task.todo.forEach((todo) => {
                    allTodos.push({ ...todo });
                });
            });
        });

        // 期限順にソート
        allTodos.sort((a, b) => {
            const dateA = parse(a.deadline, 'yyyy-M-d', new Date());
            const dateB = parse(b.deadline, 'yyyy-M-d', new Date());
            return dateA.getTime() - dateB.getTime();
        });

        return allTodos;
    }, [roadmapList]);

    const roadmapElements = useMemo(
        () =>
            roadmapList.map((field, fieldIdx) => (
                <Field
                    field={field.field}
                    description={field.description}
                    tasks={field.tasks}
                    id={fieldIdx}
                />
            )),
        [roadmapList],
    );

    const flattedRoadmapElements = useMemo(
        () => (
            <ul>
                {sortedTodos.map((todo, todoIdx) => (
                    <li key={`roadmap-todo-flat-${todoIdx}`}>
                        <RoadmapCard
                            name={todo.name}
                            deadline={parse(
                                todo.deadline,
                                'yyyy-M-d',
                                new Date(),
                            )}
                            status={todo.status}
                            id={todoIdx}
                            parentKey="flat"
                        />
                    </li>
                ))}
            </ul>
        ),
        [roadmapList, sortedTodos],
    );

    return (
        <section>
            <Heading section={section}></Heading>
            <div className="border-l-3 border-gray-300 pl-4 my-5 py-1 text-sm">
                <p className="my-2">
                    とある企業の面接を通して、Web開発の土台となる技術（ネットワークやブラウザの仕組みなど）に対する理解が、自分にはまだ足りていないことを痛感しました。
                    これまでは「プログラミング言語」といった、いわば“表層的”な部分に目が向きがちでしたが、Webのしくみそのものに対する理解が浅いことに気づかされました。
                </p>
                <p className="my-2">
                    今後は、こうした基礎をしっかりと身につけたうえで、ReactやGoといった実践的な技術にも取り組み、Webアプリケーションをより深く理解しながら開発していきたいと考えています。
                </p>
                <p className="my-2">
                    面接の中で気づきをくださった担当者の方に、心より感謝申し上げます。
                </p>
                <p className="my-2 text-right">2025年6月20日</p>
            </div>
            <p className="text-sm text-gray-500">
                このロードマップは、2025年6月23日に更新されました。
            </p>
            <div className="flex justify-end my-2">
                {
                    <SortToggleSwitch
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                    />
                }
            </div>
            {viewMode === 'byField' ? roadmapElements : flattedRoadmapElements}
        </section>
    );
});

import React from 'react';
import BoxPanel from '../components/BoxPanel';

const Activesprint = () => {
    const todoItems: string[] = ['Task 1', 'Task 2', 'Task 3'];
    const inProgressItems: string[] = ['Task 4', 'Task 5', 'Task 6'];
    const inReviewItems: string[] = ['Task 7', 'Task 8', 'Task 9'];
    const doneItems: string[] = ['Task 10', 'Task 11', 'Task 12'];

    return (
        < div className='p-4 flex flex-col'>
            <h1 className='text-3xl pb-4 font-extrabold '>Board</h1>
            <div className='flex h-full'>

                <div className="flex space-x-2 w-full h-full items-center p-4">
                    <BoxPanel title="To-Do" items={todoItems} />
                    <BoxPanel title="In Progress" items={inProgressItems} />
                    <BoxPanel title="In Review" items={inReviewItems} />
                    <BoxPanel title="Done" items={doneItems} />
                </div>
            </div>
        </div>
    );
};

export default Activesprint;

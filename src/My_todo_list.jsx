import React, { useState } from 'react';

const My_todo_list = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAdd = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]); // Adds the new task to the array
            setNewTask(""); // Clears the input field
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Removes the task by index
        setTasks(updatedTasks); // Updates the task list
    };

    const handleChange = (e) => {
        setNewTask(e.target.value); // Captures user input in the state
    };

    return (
        <div className="mx-auto max-w-lg my-5 rounded p-5 bg-violet-500 min-h-[80vh] flex-col space-y-4">
            <h1 className="text-white text-center font-bold p-5">Make your to-do list</h1>
            <div className="flex gap-2">
                <input
                    onChange={handleChange}
                    value={newTask}
                    className="border rounded w-full text-black px-4 py-2"
                    type="text"
                    placeholder="Enter a new task"
                />
                <button
                    onClick={handleAdd}
                    className="bg-violet-600 text-white px-4 py-2 rounded border-2 solid hover:bg-violet-700"
                >
                    Add
                </button>
            </div>
            <div className="todos_items">
                {tasks.length === 0 && (
                    <p className="text-white text-center">No tasks yet! Add your first task.</p>
                )}
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="flex justify-between text-white border rounded p-3 hover:bg-violet-600"
                    >
                        <p>{task}</p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleDelete(index)}
                                className="border rounded p-1 hover:bg-violet-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default My_todo_list;

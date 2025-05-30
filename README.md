# React To-Do List App 📝

A clean and interactive to-do list built with **React**. It allows users to add, remove, and mark tasks as completed. Tasks are saved in `localStorage` for persistence. Also includes sorting and filtering features.

## 🚀 Features

- ✅ Add and delete tasks
- ✔️ Mark tasks as completed/incomplete
- 🔍 Filter tasks by status: All / Active / Completed
- ↕️ Sort tasks alphabetically (ascending/descending)
- 💾 Persistent storage via `localStorage`
- 🎨 Clean UI with modular CSS

## 🛠️ Tech Stack

- React (Functional Components + Hooks)
- CSS (Scoped to each component)
- [Lucide React](https://lucide.dev) for icons

## 📁 Project Structure
react-todo-app/
├── public/
│ └── index.html
├── src/
│ ├── App.jsx
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ └── components/
│ ├── TodoApp.jsx
│ ├── TodoApp.css
│ ├── TaskInput.jsx
│ ├── TaskInput.css
│ ├── TaskList.jsx
│ ├── TaskList.css
│ ├── TaskItem.jsx
│ └── TaskItem.css
├── package.json
└── README.md

🧪 Testing (Manual)
To verify that everything works:

Add a task with valid text

Try submitting an empty task (should show an alert)

Mark a task completed and then unmark it

Delete a task

Change filter (Active/Completed/All)

Click the Sort button to toggle alphabetical order

Refresh the page — tasks should persist!
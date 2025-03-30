'use client'

import { useEffect, useState } from 'react'

type Task = {
  id: number
  title: string
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err))
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Mis Tareas</h2>
      <ul className="list-disc list-inside">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

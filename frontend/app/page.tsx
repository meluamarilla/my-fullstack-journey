import TaskList from './components/TaskList'

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TaskList />
    </main>
  )
}

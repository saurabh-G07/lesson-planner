import LessonPlanner from "../../components/LessonPlanner"

export default function LessonPlannerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 bg-cover bg-center">
      <h1 className="text-4xl font-bold text-white mb-8">AI-Powered Lesson Planner</h1>
      <LessonPlanner />
    </main>
  )
}

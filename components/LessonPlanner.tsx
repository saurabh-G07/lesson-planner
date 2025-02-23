'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { jsPDF } from "jspdf"
import { generateContent } from "@/lib/geminiApi"

export default function LessonPlanner() {
  const [formData, setFormData] = useState({
    topic: "",
    gradeLevel: "",
    mainConcept: "",
    subtopics: "",
    materialsNeeded: "",
    learningObjectives: "",
    lessonOutline: "",
    assessment: "",
  })
  const [generatedContent, setGeneratedContent] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const content = await generateContent(formData)
      setGeneratedContent(content)
    } catch (error) {
      alert("Failed to generate lesson plan. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF()
    doc.text("Lesson Plan", 10, 10)
    doc.text(`Topic: ${formData.topic}`, 10, 20)
    doc.text(`Grade Level: ${formData.gradeLevel}`, 10, 30)
    doc.text(`Generated Content:\n${generatedContent}`, 10, 40)
    doc.save("lesson-plan.pdf")
  }

  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Left Column: Form */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">AI-Powered Lesson Planner</h1>
        <div className="grid gap-4">
          <Input
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
          />
          <Input
            name="gradeLevel"
            placeholder="Grade Level"
            value={formData.gradeLevel}
            onChange={handleChange}
          />
          <Textarea
            name="mainConcept"
            placeholder="Main Concept"
            value={formData.mainConcept}
            onChange={handleChange}
          />
          <Textarea
            name="subtopics"
            placeholder="Subtopics"
            value={formData.subtopics}
            onChange={handleChange}
          />
          <Textarea
            name="materialsNeeded"
            placeholder="Materials Needed"
            value={formData.materialsNeeded}
            onChange={handleChange}
          />
          <Textarea
            name="learningObjectives"
            placeholder="Learning Objectives"
            value={formData.learningObjectives}
            onChange={handleChange}
          />
          <Textarea
            name="lessonOutline"
            placeholder="Lesson Outline"
            value={formData.lessonOutline}
            onChange={handleChange}
          />
          <Textarea
            name="assessment"
            placeholder="Assessment Questions"
            value={formData.assessment}
            onChange={handleChange}
          />

          {/* Generate Button */}
          <Button
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Lesson Plan"}
          </Button>
        </div>
      </div>

      {/* Right Column: Generated Content */}
      <div className="flex-1 p-8 bg-white shadow-lg rounded-l-lg overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-purple-700 text-center">Generated Lesson Plan</h2>

        {/* Loading Skeleton */}
        {loading && (
          <Skeleton className="h-24 w-full bg-gray-200 rounded-md animate-pulse" />
        )}

        {/* Generated Content */}
        {!loading && generatedContent && (
          <Card>
            <Accordion>
              <div>
                <p className="text-gray-700 whitespace-pre-wrap">{generatedContent}</p>
              </div>
            </Accordion>
            
            {/* Download PDF Button */}
            <Button
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </Button>
          </Card>
        )}

        {!loading && !generatedContent && (
          <p className="text-gray-500 text-center mt-8">No lesson plan generated yet. Fill out the form and click "Generate Lesson Plan".</p>
        )}
      </div>
    </div>
  )
}

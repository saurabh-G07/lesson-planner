// Define the structure of the data parameter using a TypeScript interface
interface LessonPlanData {
    topic: string;
    gradeLevel: string;
    mainConcept: string;
    materialsNeeded: string;
    learningObjectives: string;
    lessonOutline: string;
    assessment: string;
  }
  
  // The function to generate content using the Google Gemini API
  export const generateContent = async (data: LessonPlanData): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
    if (!apiKey) {
      throw new Error("API key is missing. Please set NEXT_PUBLIC_GEMINI_API_KEY in your .env.local file.");
    }
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: {
              text: `
                Create a detailed lesson plan:
                Topic: ${data.topic}
                Grade Level: ${data.gradeLevel}
                Main Concept & Subtopics: ${data.mainConcept}
                Materials Needed: ${data.materialsNeeded}
                Learning Objectives: ${data.learningObjectives}
                Lesson Outline: ${data.lessonOutline}
                Assessment Questions: ${data.assessment}.
              `,
            },
          }),
        }
      );
  
      // Check if the response is not OK
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to fetch lesson plan. Details: ${errorDetails}`);
      }
  
      // Parse the response JSON
      const result = await response.json();
  
      // Extract and return the generated content
      return result.candidates[0].output; // Adjust this based on the actual API response structure
    } catch (error) {
      console.error("Error fetching data from Google Gemini API:", error);
      throw error; // Re-throw the error for handling in the caller function
    }
  };
  
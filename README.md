AI-Powered Lesson Planner
=========================

AI-Powered Lesson Planner is a web application designed to simplify the process of creating detailed and professional lesson plans. Leveraging AI, this tool allows educators to input key lesson details and generate structured plans in seconds. The application also provides the ability to download the generated lesson plans as a PDF.

## Features
- **User-Friendly Login**: A simple login page with dummy credentials (Email: demouser, Password: demopass) for access.
- **AI-Generated Lesson Plans**: Automatically generate detailed and structured lesson plans using AI.
- **Customizable Input Fields**: Input fields for topic, grade level, main concepts, materials needed, learning objectives, lesson outline, and assessments.
- **PDF Download**: Download the generated lesson plan as a PDF for offline use.
- **Responsive Design**: Fully responsive layout with a professional and modern UI.
- **Splash Screen**: A visually appealing splash screen with animations and progress tracking.

## Technologies Used
- **Frontend Framework**: React.js (with Next.js)
- **State Management**: React Hooks
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Framer Motion animations
- **PDF Generation**: jsPDF
- **AI Integration**: Google Gemini API (Text-Bison)

## Project Structure
```
src/
├── app/
│   ├── page.tsx                # Splash screen
│   ├── login/
│   │   ├── page.tsx            # Login page
│   ├── lesson-planner/
│   │   ├── page.tsx            # Lesson planner page
├── components/
│   ├── LoginForm.tsx           # Login form component
│   ├── LessonPlanner.tsx       # Main lesson planner component
│   ├── ui/                     # Reusable UI components
│   │   ├── input.tsx           # Input field component
│   │   ├── textarea.tsx        # Textarea component
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── accordion.tsx       # Accordion component
│   │   ├── skeleton.tsx        # Skeleton loader component
├── lib/
│   ├── geminiApi.ts            # Google Gemini API integration
├── public/
│   ├── logo.png                # Placeholder logo (optional)
├── styles/
│   ├── globals.css             # Global styles
├── .env.local                  # Environment variables (API key)
```

## Installation and Setup
### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or later)
- npm or yarn

### Steps to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/saurabh-G07/lesson-planner
   cd lesson-planner
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your Google Gemini API key to the file:
     ```text
     NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key_here
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

## Usage
### 1. Login Page
Use the following dummy credentials to log in:
- Email: **demouser**
- Password: **demopass**

### 2. Lesson Planner Page
- Fill out the form fields on the left side of the page (e.g., topic, grade level, etc.).
- Click the **"Generate Lesson Plan"** button to create a detailed plan using AI.
- View the generated content on the right side of the page.
- Click **"Download PDF"** to save the lesson plan as a PDF.

## License
This project is licensed under the MIT License.

## Author
Created by Saurabh Ghundre. Feel free to reach out at saurabhghundre@gmail.com for questions or suggestions.


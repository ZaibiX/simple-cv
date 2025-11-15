import './App.css'
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import sampleData from "./data/sampleData";

function App() {

  const { profile, education, experience, skills } = sampleData;

  return (
    <>
      <div className="cv-container">
        <header className="cv-header">Resume</header>

        <section className="cv-left">
          <Profile profile={profile} />
        </section>

        <section className="cv-right">
          <Education education={education} />
          <Experience experience={experience} />
          <Skills skills={skills} />
        </section>
      </div>
    </>
  )
}

export default App

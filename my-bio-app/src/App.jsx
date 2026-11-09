import { projects } from './projectsData';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>My Project Portfolio</h1>
      </header>

      {/* parent maps data */}
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
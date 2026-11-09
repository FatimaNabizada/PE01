function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
import ProjectCard from './projectCard/ProjectCard';
import classes from './Projects.module.css';

function Project() {
  return (
    <div className={classes.projectContainer}>
      <div className={classes.projectTitle}>PROJECTS</div>
      <div className={classes.projectBox}>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;

import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import dragons from '../../assets/dragons.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Drum KIt"
          p="Drum App"

        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TinDog"
          p="Tinder for Dogs"
        />
        <ProjectCard
          src={dragons}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="RPG-Dragon-Repeller"
          p="Game"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Myfy"
          p="Music App"
        />
      </div>
    </section>
  );
}

export default Projects;

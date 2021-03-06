import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

import classes from './ProjectCard.module.css';

const ProjectCard = () => {
  return (
    <>
      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>NewsTagApp</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>React</div>
          <div className={classes.projectSkill}>Firebase</div>
          <div className={classes.projectSkill}>REST API</div>
          <div className={classes.projectSkill}>Authentification</div>
          <div className={classes.projectSkill}>Loading</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/NewsTagApp.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>
            This is a web app that you can check some news in each country, and
            what's more add bookmark the article you like after sign in!
          </p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='https://github.com/k-e-r/NewsTagApp'
            target='_blank'
            rel='noopener noreferrer'
          >
            CODE <AiOutlineGithub />
          </a>
          <a
            href='https://www.kestudies.com/categories/breaking-news/us'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>

      <hr className={classes.hrDesign} />

      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>AutoScheduler</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>React</div>
          <div className={classes.projectSkill}>Node.js</div>
          <div className={classes.projectSkill}>MongoDB</div>
          <div className={classes.projectSkill}>Mongoose</div>
          <div className={classes.projectSkill}>Authentification</div>
          <div className={classes.projectSkill}>Heroku</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/AutoScheduler.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>
            This is a web app that you can set the schedule of the task you have
            to do, and what's more automatically add some schedule for
            remembering along the forgetting curve.
          </p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='https://github.com/k-e-r/AutoScheduler'
            target='_blank'
            rel='noopener noreferrer'
          >
            CODE <AiOutlineGithub />
          </a>
          <a
            href='https://polar-lowlands-18778.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>

      <hr className={classes.hrDesign} />

      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>HODIE</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>HTML</div>
          <div className={classes.projectSkill}>JavaScript</div>
          <div className={classes.projectSkill}>Sass</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/HODIE.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>This is an e-commerce web app for testing cart function.</p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='https://github.com/k-e-r/HODIE'
            target='_blank'
            rel='noopener noreferrer'
          >
            CODE <AiOutlineGithub />
          </a>
          <a
            href='https://www.kestudies.com/st/hodie/ecomm/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>

      <hr className={classes.hrDesign} />

      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>COEUS</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>HTML</div>
          <div className={classes.projectSkill}>JavaScript</div>
          <div className={classes.projectSkill}>CSS</div>
          <div className={classes.projectSkill}>Haiku Animation</div>
          <div className={classes.projectSkill}>PHP</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/COEUS.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>This is a website for a company I made with a team.</p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='http://www.coeustechs.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>

      <hr className={classes.hrDesign} />

      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>Book Info</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>HTML</div>
          <div className={classes.projectSkill}>JavaScript</div>
          <div className={classes.projectSkill}>CSS</div>
          <div className={classes.projectSkill}>REST API</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/BookInfo.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>
            You can search anime, book and game with this demo site and you can
            purchase via it.
          </p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='https://github.com/k-e-r/MidTermProject-HTML'
            target='_blank'
            rel='noopener noreferrer'
          >
            CODE <AiOutlineGithub />
          </a>
          <a
            href='https://www.kestudies.com/st/bookinfo/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>

      <hr className={classes.hrDesign} />

      <div className={classes.projectCard}>
        <div className={classes.projectTitle}>Portfolio</div>
        <div className={classes.projectSkillBox}>
          <div className={classes.projectSkill}>React</div>
          <div className={classes.projectSkill}>CSS</div>
        </div>
        <div className={classes.projectMovieBox}>
          <video
            className={classes.projectMovie}
            src='https://www.kestudies.com/assets/movies/Portfolio.mp4'
            type='video/mp4'
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
        <div className={classes.projectExplanation}>
          <p>This is a website of my portfolio.</p>
        </div>
        <div className={classes.projectURL}>
          <a
            href='https://github.com/k-e-r/portfolio'
            target='_blank'
            rel='noopener noreferrer'
          >
            CODE <AiOutlineGithub />
          </a>
          <a
            href='https://www.kestudies.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WEBSITE <CgWebsite />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

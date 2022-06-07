import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaNode, FaBootstrap } from 'react-icons/fa';
import {
  SiMongodb,
  SiGimp,
  SiHeroku,
  SiFirebase,
  SiGit,
  SiBitbucket,
  SiEspressif,
  SiArduino,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiHandlebarsdotjs,
  SiMocha,
  SiJest,
  SiAngular,
  SiLinux,
} from 'react-icons/si';
import { BiMicrochip } from 'react-icons/bi';
import { FiEdit, FiBookmark } from 'react-icons/fi';

import classes from './SkillBox.module.css';

const SkillBox = () => {
  return (
    <div className={classes.skillContainer}>
      <div className={classes.skillTitle}>SKILL</div>
      <div className={classes.skillBox}>
        <div className={classes.skillItem}>
          <AiOutlineHtml5 />
          <p>HTML</p>
        </div>
        <div className={classes.skillItem}>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div className={classes.skillItem}>
          <DiSass />
          <p>Sass</p>
        </div>
        <div className={classes.skillItem}>
          <IoLogoJavascript />
          <p>JavaScript</p>
        </div>
        <div className={classes.skillItem}>
          <DiReact />
          <p>React</p>
        </div>
        <div className={classes.skillItem}>
          <FaNode />
          <p>Node</p>
        </div>
        <div className={classes.skillItem}>
          <SiHandlebarsdotjs />
          <p>Handlebars</p>
        </div>
        <div className={classes.skillItem}>
          <FaBootstrap />
          <p>Bootstrap</p>
        </div>
        <div className={classes.skillItem}>
          <SiMongodb />
          <p>Mongodb</p>
        </div>
        <div className={classes.skillItem}>
          <SiGimp />
          <p>Gimp</p>
        </div>
        <div className={classes.skillItem}>
          <SiHeroku />
          <p>Heroku</p>
        </div>
        <div className={classes.skillItem}>
          <SiFirebase />
          <p>Firebase</p>
        </div>
        <div className={classes.skillItem}>
          <AiOutlineGithub />
          <p>Github</p>
        </div>
        <div className={classes.skillItem}>
          <SiGit />
          <p>Git</p>
        </div>
        <div className={classes.skillItem}>
          <SiBitbucket />
          <p>Bitbucket</p>
        </div>
        <div className={classes.skillItem}>
          <SiEspressif />
          <p>
            ESP series
            <br />
            by Espressif
          </p>
        </div>
        <div className={classes.skillItem}>
          <SiArduino />
          <p>Arduino</p>
        </div>
        <div className={classes.skillItem}>
          <BiMicrochip />
          <p>PIC and so on</p>
        </div>
        <div className={classes.skillItem}>
          <SiLinux />
          <p>Linux</p>
        </div>
      </div>

      <div className={classes.skillTitle}>
        <FiEdit className={classes.titleIcon} /> I'm learning them
      </div>
      <div className={classes.skillBox}>
        <div className={classes.skillItem}>
          <SiNextdotjs />
          <p>Next.js</p>
        </div>
        <div className={classes.skillItem}>
          <SiMocha />
          <p>Mocha</p>
        </div>
      </div>

      <div className={classes.skillTitle}>
        <FiBookmark className={classes.titleIcon} /> I'll learn them
      </div>
      <div className={classes.skillBox}>
        <div className={classes.skillItem}>
          <SiTailwindcss />
          <p>Tailwind CSS</p>
        </div>
        <div className={classes.skillItem}>
          <SiNuxtdotjs />
          <p>Nuxt.js</p>
        </div>
        <div className={classes.skillItem}>
          <SiJest />
          <p>Jest</p>
        </div>
        <div className={classes.skillItem}>
          <SiAngular />
          <p>Angular</p>
        </div>
        {/*
        <p class='skill__box__icon'>mongoose</p> */}
      </div>
    </div>
  );
};

export default SkillBox;

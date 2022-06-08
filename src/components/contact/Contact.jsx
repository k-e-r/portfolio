import { AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

import classes from './Contact.module.css';

function Contact() {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactTitle}>Thank you for reading :)</div>
      <div className={classes.contactBox}>
        <a href='tel:12368781394' target='_blank' rel='noopener noreferrer'>
          +1 (236) 878 1394
        </a>
        <a
          href='mailto:kestudyforemail@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          kestudyforemail@gmail.com
        </a>
        <div className={classes.contactIconBox}>
          <a
            href='https://www.linkedin.com/in/kaori-era-244028203/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin />
          </a>
          <a
            href='https://github.com/k-e-r'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare />
          </a>
          <a
            href='https://medium.com/@damajonboua'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillMediumSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

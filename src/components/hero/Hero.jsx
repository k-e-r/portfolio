import classes from './Hero.module.css';

import HeroImage from '../../assets/images/hero-img.jpg';

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <img className={classes.heroImage} src={HeroImage} alt='hero image'></img>
      <p className={classes.heroMessage}>
        A Front-end Developer based in Vancouver
      </p>
      <div className={classes.heroGuide}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='0.288889in'
          height='0.8in'
          viewBox='0 0 26 72'
        >
          <path
            className={classes.guideArrow}
            strokeWidth='1'
            d='M 13.00,0.00
              C 13.00,0.00 13.00,70.00 13.00,70.00
                13.00,70.00 3.00,40.00 3.00,40.00
                3.00,40.00 23.00,40.00 23.00,40.00'
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import classes from './Hero.module.css';

import images from '../../lib/images.json';

let imageIdx = 0,
  animeFlg = false;
const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  console.log('heroImages', heroImages);

  useEffect(() => {
    // init
    setHeroImages([
      '../../assets/images/hero/' + images[imageIdx].name,
      '../../assets/images/hero/' + images[imageIdx + 1].name,
    ]);
    imageIdx++;
    animeFlg = !animeFlg;

    const interval = setInterval(() => {
      if (images.length > imageIdx + 1) {
        setHeroImages([
          '../../assets/images/hero/' + images[imageIdx].name,
          '../../assets/images/hero/' + images[imageIdx + 1].name,
        ]);
        imageIdx++;
        animeFlg = !animeFlg;
      } else {
        setHeroImages([
          '../../assets/images/hero/' + images[imageIdx].name,
          '../../assets/images/hero/' + images[0].name,
        ]);
        imageIdx = 0;
        animeFlg = !animeFlg;
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroImageBox}>
        {[...Array(4)].map((x, idx) => (
          <div key={idx} className={classes.heroImage}>
            {heroImages.map((image, key) => (
              <img
                key={key}
                className={
                  animeFlg === true ? `${classes.anime1}` : `${classes.anime2}`
                }
                src={`${image}${idx + 1}.jpg`}
                alt='introduction of myself'
              />
            ))}
          </div>
        ))}
      </div>
      <div className={classes.heroMessage}>
        <h2>A Front-end Developer based in Vancouver</h2>
        <p>
          A front-end developer who has a hardware background of 9+ years and
          loves building creative websites and applications that make life
          easier. A hard worker who has the experience to make products as both
          an engineer and a PL. I have developed several websites and
          applications using HTML, CSS, Sass, JavaScript, React, and so on. I
          also love eating tasty food, going for walks, and doing handicrafts :)
        </p>
      </div>
    </div>
  );
};

export default Hero;

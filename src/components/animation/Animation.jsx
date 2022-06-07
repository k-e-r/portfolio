import classes from './Animation.module.css';

const Animation = () => {
  return (
    <div className={classes.nameAnimationHide}>
      <div className={classes.nameAnimationContainer}>
        <div className={classes.nameAnimationCover}>
          <div className={classes.nameAnimationContent}></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;

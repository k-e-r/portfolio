import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.headerName}>KAORI ERA</div>
      <div className={classes.headerResume}>RESUME</div>
    </header>
  );
};

export default Header;

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <a href='/' className={classes.headerName}>
        KAORI ERA
      </a>

      <a href='/' className={classes.headerResume}>
        RESUME
      </a>
    </header>
  );
};

export default Header;

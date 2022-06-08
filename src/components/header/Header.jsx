import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <a href='/' className={classes.headerName}>
        KAORI ERA
      </a>

      <a
        href='../../assets/KaoriEraResume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className={classes.headerResume}
      >
        RESUME
      </a>
    </header>
  );
};

export default Header;

import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div>
      <div className={classes.spinner}></div>
      <div className="loading">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;

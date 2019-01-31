import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
    },
    marginRight: 'auto',
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
  
class Home extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Assesment Test
          </Typography>
          <form className={classes.form}>
            <Link to="/case1">
                <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Case 1
              </Button>
            </Link>
            <Link to="/case2">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
                >
                Case 2
              </Button>
            </Link>
            <Link to="/case3">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
                >
                Case 3
              </Button>
            </Link>
          </form>
        </Paper>
      </main>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
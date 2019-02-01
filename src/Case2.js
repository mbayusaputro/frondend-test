import React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  FormControl,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
  group: {
    display: 'flex',
    flexDirection: 'row'
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Case2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8&nat=us')
      .then(results => results.json())
      .then(data => {
        const users = data.results;
        this.setState({ users });
      })
      .catch(err => console.log(err))
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Case 2
          </Typography>
          <Typography component="p">
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component. <a target="blank" href="https://reactjs.org/docs/higher-order-components.html">Docs React</a>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h5">
            This Example
          </Typography>
          <br></br>
          <form className={classes.form}>

            <Typography component="h1" variant="h5">
              Connect React Redux
            </Typography>
            <Typography component="h1" variant="h5">
              &
            </Typography>
            <List className={classes.root}>
              {this.state.users.map((user, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText primary={user.name.first} secondary={user.gender} />
                  </ListItem>
                );
              })}
            </List>
            <Typography component="p">
              <a target="blank" href="https://reactjs.org/docs/higher-order-components.html">More Example in Docs React</a>
            </Typography>

          </form>
        </Paper>
      </main>
    );
  }
}

Case2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Case2);
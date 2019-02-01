import React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  FormControl,
  Paper,
  List,
  Typography,
  withStyles
} from '@material-ui/core';
import axios from 'axios';
import Vlist from './Listen';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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

  state = { 
    themeext: [],
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res=>{
        this.setState({text: res.data});
        console.log(this.state.text)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Case 2
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <List>
                {this.state.text.map((text,key)=> <Vlist key={key} text={text}/>)}
              </List>
            </FormControl>
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
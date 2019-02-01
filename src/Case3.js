import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
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
  
class Case3 extends React.Component {

  state = { 
    input: '',
    status: '',
    kondisi: false,
    open: false
  };

  handleClose = () => {
    this.setState({
        open: false,
    });
  };


checkBrackets(str){
    // depth of the parenthesis
    // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
    var depth = 0;
    // for each char in the string : 2 cases
    for(var i in str){   
        if(str[i] == '('){
            // if the char is an opening parenthesis then we increase the depth
            depth ++;
        } else if(str[i] == ')') {
            // if the char is an closing parenthesis then we decrease the depth
            depth --;
        }  
        //  if the depth is negative we have a closing parenthesis 
        //  before any matching opening parenthesis
        if (depth < 0) return false;
    }
    // If the depth is not null then a closing parenthesis is missing
    if(depth > 0) return false;
    // OK !
    return true;
}

  handleSubmit = () => {

    let inputText = this.checkBrackets(document.getElementById("input_text").value)

    if(inputText === true){
      this.setState({open:true,status:'VALID'})
    } else {
      this.setState({open:true,status:'NOT VALID'})
    }
  };

  render(){
    const { classes } = this.props;
    const {open} = this.state;
    return (
      <main className={classes.main}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Result validation!</DialogTitle>
          <DialogContent>
            <DialogContentText>{this.state.status}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Case 3
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="input_text">Input Text Here</InputLabel>
              <Input id="input_text" name="input_text" autoComplete="input_text" autoFocus
                onChange={(text)=>this.setState({input:text})}
              />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Validate
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Case3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Case3);
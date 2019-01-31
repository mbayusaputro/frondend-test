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
  FormControlLabel,
  Radio,
  RadioGroup,
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
  
class Case1 extends React.Component {

  state = { 
    value: 'person',
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    phone: '',
    status: '',
    open: false
  };

  handleChange = event => {
    this.setState({
      value:event.target.value
    });
  }

  handleClose = () => {
    this.setState({
        open: false,
    });
  };

  handleSubmit = () => {
    if(this.state.value === 'person'){
      let validateForm = /[a-zA-Z]+/
      let validateEmail = /[a-zA-Z0-9.]{1,64}@[a-zA-Z.]{1,64}$/
      let resultFirstName = validateForm.test(this.state.first_name)
      let resultLastName = validateForm.test(this.state.last_name)
      let resultEmail = validateEmail.test(this.state.email)
    
      if(resultFirstName === true && resultLastName === true && resultEmail === true){
        this.setState({open:true, status:'VALID!'});
      } else {
        this.setState({open:true, status:'NOT VALID!'});
      }
    } else if(this.state.value === 'company'){
      let validateCompany = /(.)+/
      let validatePhone = /^[\d]{3}-[\d]{3}-[\d]{3}$/
      let resultCompany = validateCompany.test(this.state.company_name)
      let resultPhone = validatePhone.test(this.state.phone)
      console.log(resultPhone)

      if(resultCompany === true && resultPhone === true){
        this.setState({open:true, status:'VALID!'});
      } else {
        this.setState({open:true, status:'NOT VALID!'});
      }
    }
  }

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
            Case 1
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="first_name">First Name</InputLabel>
              <Input autoComplete="first_name" autoFocus
                onChange={(text)=>this.setState({first_name:text})}
                />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <Input id="last_name" name="last_name" autoComplete="last_name" autoFocus
                onChange={(text)=>this.setState({last_name:text})}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus
                onChange={(text)=>this.setState({email:text})}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="company_name">Company Name</InputLabel>
              <Input id="company_name" name="company_name" autoComplete="company_name" autoFocus
                onChange={(text)=>this.setState({company_name:text})}
              />
              </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <Input id="phone" name="phone" autoComplete="phone" autoFocus
                onChange={(text)=>this.setState({phone:text})}
              />
              </FormControl>
            <FormControl>
              <RadioGroup
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel value="person" control={<Radio />} label="Person" />
                <FormControlLabel value="company" control={<Radio />} label="Company" />
              </RadioGroup>
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

Case1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Case1);
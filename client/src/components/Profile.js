import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import {Paper, withStyles, Grid, TextField, Button, Container} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing.unit,
  },
});


class Profile extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };
  render() {
    const {values} = this.props;
    const {classes} = this.props; 
    return(
    <Paper elevation={1} style = {{textAlign : "center" }} className={classes.padding}>
      <Card>
        <CardHeader title="Personal Details" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems = "center">
        <Grid item md={6} sm={12} xs={12} lg={6}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            name ="firstname"
            label="First Name"
            style={{width: '80%'}}
            required
            value={values.firstname}
            onChange={this.props.handleChange}

          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Last Name"
            style={{width: '80%'}}
            required
            name ="lastname"
            value={values.lastname}
            onChange={this.props.handleChange}

          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Email"
            style={{width: '80%'}}
            required
            name ="email"
            value={values.email}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}

          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Phone Number"
            style={{width: '80%'}}
            required
            name ="phone"
            value={values.phone}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}

          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="GitHub"
            style={{width: '80%'}}
            name ="github"
            value={values.github}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}

          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Your Website"
            style={{width: '80%'}}
            name ="linkedin"
            value={values.linkedin}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              ),
            }}
            
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Linked In"
            style={{width: '80%'}}
            name ="socialmedia"
            value={values.socialmedia}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon />
                </InputAdornment>
              ),
            }}

          />

        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Any other social media handle"
            style={{width: '80%'}}
            name ="website"
            value={values.website}
            onChange={this.props.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon />
                </InputAdornment>
              ),
            }}
            
          />
          
        </Grid>
      </Grid>
      <Container className={classes.margin}>
              <Row>
                <Col lg={3} xs={0} />
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.continue}
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                </Col>
                <Col lg={3} xs={1} />
              </Row>
            </Container>

      
      </CardContent>
      <p className="text-center text-muted">Page 1</p>
    </Paper>
    );
  } 
}

export default withStyles (styles) (Profile);

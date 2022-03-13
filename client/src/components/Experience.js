import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from '@material-ui/core/InputAdornment';
import { render } from 'express/lib/response';
import React, {Component} from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});


class Experience extends Component {
  render() {
    const {values} = this.props;
    const {classes} = this.props;
    return(
    <Paper elevation={1} style = {{textAlign : "center" }} className={classes.padding}>
      <Card>
        <CardHeader title="Experirence Details" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems="center" >
        <Grid item md={12} sm={12} xs={12} lg={12} >
          <h4 >
            <CheckCircleIcon />
            Experience 1
          </h4>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Institue/Organisation"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Position"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Duration"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '94%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Grid container spacing={2} alignItems="center" >
        <Grid item md={12} sm={12} xs={12} lg={12} >
          <h4 >
            <CheckCircleIcon />
            Experience 2
          </h4>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Institue/Organisation"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Position"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Duration"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '94%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      </CardContent>


      <Card>
        <CardHeader title="Positions of Responsibilities" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems="center" >
        <Grid item md={12} sm={12} xs={12} lg={12} >
          <h4 >
            <CheckCircleIcon />
            POR 1
          </h4>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Club/Board"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Position"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Duration"
            style={{width: '80%'}}  
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Grid container spacing={2} alignItems="center" >
        <Grid item md={12} sm={12} xs={12} lg={12} >
          <h4 >
            <CheckCircleIcon />
            POR 2
          </h4>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Club/Board"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Position"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Duration"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Grid container spacing={2} alignItems="center" >
        <Grid item md={12} sm={12} xs={12} lg={12} >
          <h4 >
            <CheckCircleIcon />
            POR 3
          </h4>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Club/Board"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Position"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Duration"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      </CardContent>
      <p className="text-center text-muted">Page 5</p>
    </Paper>
    );
  }
}

export default withStyles (styles) (Experience);

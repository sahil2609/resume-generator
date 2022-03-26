import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from '@material-ui/core/InputAdornment';  
import React, {Component} from 'react';


const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing.unit,
  },
});


class Experience extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };
  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };
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
            name ="head1"
            value={values.head1}
            onChange={this.props.handleChange}
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
            name ="pos1"
            value={values.pos1}
            onChange={this.props.handleChange}
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
            name ="exduration1"
            value={values.exduration1}
            onChange={this.props.handleChange}
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
            name ="expdesc1"
            value={values.expdesc1}
            onChange={this.props.handleChange}
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
            name ="head2"
            value={values.head2}
            onChange={this.props.handleChange}
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
            name ="pos2"
            value={values.pos2}
            onChange={this.props.handleChange}
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
            name ="exduration2"
            value={values.exduration2}
            onChange={this.props.handleChange}
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
            name ="expdesc2"
            value={values.expdesc2}
            onChange={this.props.handleChange}
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
        <CardHeader title="Positions of Responsibility" style = {{textAlign : "center" }}/>
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
            name ="club1"
            value={values.club1}
            onChange={this.props.handleChange}
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
            name ="por1"
            value={values.por1}
            onChange={this.props.handleChange}
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
            name ="porduration1"
            value={values.porduration1}
            onChange={this.props.handleChange}
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
            name ="club2"
            value={values.club2}
            onChange={this.props.handleChange}
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
            name ="por2"
            value={values.por2}
            onChange={this.props.handleChange}
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
            name ="porduration2"
            value={values.porduration2}
            onChange={this.props.handleChange}
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
            name ="club3"
            value={values.club3}
            onChange={this.props.handleChange}
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
            name ="por3"
            value={values.por3}
            onChange={this.props.handleChange}
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
            name ="porduration3"
            value={values.porduration3}
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Container className={classes.margin}>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
      </CardContent>
      <p className="text-center text-muted">Page 5</p>
    </Paper>
    );
  }
}

export default withStyles (styles) (Experience);

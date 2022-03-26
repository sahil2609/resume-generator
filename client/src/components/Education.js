import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
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



class Education extends Component {
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
        <CardHeader title="Education Details" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems = "center">
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="College/University"
            style={{width: '80%'}}
            name ="college"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            value={values.college}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            name ="from1"
            value={values.from1}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            name ="to1"
            value={values.to1}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            name ="qualification1"
            value={values.qualification1}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Department"
            style={{width: '80%'}}
            name ="department"
            value={values.department}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            style={{width: '80%'}}
            name ="description1"
            value={values.description1}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider/>
      <br />
      <br />

      <Grid container spacing={2} alignItems = "center">
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="School (Secondary)"
            style={{width: '80%'}}
            name ="school"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            value={values.school}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            name ="from2"
            value={values.from2}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            name ="to2"
            value={values.to2}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            name ="qualification2"
            value={values.qualification2}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            style={{width: '90%'}}
            name ="description2"
            value={values.description2}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider/>
      <br />
      <br />

      <Grid container spacing={2} alignItems = "center">
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="School (Senior Secondary)"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            style={{width: '80%'}}
            name ="school2"
            value={values.school2}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            name ="from3"
            value={values.from3}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            style={{width: '80%'}}
            name ="to3"
            value={values.to3}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            name ="qualification3"
            value={values.qualification3}
            required
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            name ="description3"
            value={values.description3}
            style={{width: '90%'}}
            required
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
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
      <p className="text-center text-muted">Page 2</p>
    </Paper>
    );
  }
}

export default withStyles (styles) (Education);

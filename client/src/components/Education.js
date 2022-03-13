import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
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



class Education extends Component {
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
            required
          />
          <SchoolIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            required
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Department"
            style={{width: '80%'}}
            required
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            style={{width: '80%'}}
            required
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
            required
          />
          <SchoolIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            required
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            style={{width: '90%'}}
            required
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
            style={{width: '80%'}}
            required
          />
          <SchoolIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="From Year"
            type="date"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            type="date"
            label="To Year"
            style={{width: '80%'}}
            required
          />
          <DateRangeIcon style={{position: 'absolute', right: 180, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Qualification"
            style={{width: '80%'}}
            required
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="CGPA/Percentage"
            style={{width: '90%'}}
            required
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

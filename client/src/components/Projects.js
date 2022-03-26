import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import React, {Component} from 'react';
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



class Projects extends Component{
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
        <CardHeader title="Projects Developed" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <h5>Project 1</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Title"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}  
            name ="title1"
            value={values.title1}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            name ="link1"
            value={values.link1}
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="desc1"
            value={values.desc1}
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Grid container spacing={2} alignItems="center">
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <h5>Project 2</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Title"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
            name ="title2"
            value={values.title2}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            name ="link2"
            value={values.link2}
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="desc2"
            value={values.desc2}
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
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <h5>Project 3</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Title"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
            name ="title3"
            value={values.title3}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            name ="link3"
            value={values.link3}
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField style ={{ width: '80%'}}
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="desc3"
            value={values.desc3}
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
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <h5>Project 4</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Title"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon/>
                </InputAdornment>
              ),
            }}
            name ="title4"
            value={values.title4}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            name ="link4"
            value={values.link4}
            onChange={this.props.handleChange}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField style ={{width: '80%'}}
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="desc4"
            value={values.desc4}
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
      <p className="text-center text-muted">Page 3</p>
    </Paper>
    );
  }
}

export default withStyles (styles) (Projects);

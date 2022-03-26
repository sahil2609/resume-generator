import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
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



class Skills extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };
  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };
  render(){
    const {values} = this.props;
    const {classes} = this.props;
    return(
    <Paper elevation={1} style = {{textAlign : "center" }} className={classes.padding}>
      <Card>
        <CardHeader title="Skills" style = {{textAlign : "center" }}/>
      </Card>
      <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 1"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead1"
            value={values.skillhead1}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="skilldesc1"
            value={values.skilldesc1}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 2"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead2"
            value={values.skillhead2}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="skilldesc2"
            value={values.skilldesc2}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 3"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead3"
            value={values.skillhead3}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="skilldesc3"
            value={values.skilldesc3}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 4"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead4"
            value={values.skillhead4}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon/>
                </InputAdornment>
              ),
            }}
            name ="skilldesc4"
            value={values.skilldesc4}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 5"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead5"
            value={values.skillhead5}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            name ="skilldesc5"
            value={values.skilldesc5}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 6"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AssessmentIcon />
                </InputAdornment>
              ),
            }}
            name ="skillhead6"
            value={values.skillhead6}
            onChange={this.props.handleChange}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon/>
                </InputAdornment>
              ),
            }}
            name ="skilldesc6"
            value={values.skilldesc6}
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
      <p className="text-center text-muted">Page 4</p>
    </Paper>
    );
  }
}
export default withStyles (styles) (Skills);

import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
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



class Projects extends Component{
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
          />
          <TitleIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            required
          />
          <LinkIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '80%'}}
            required
          />
          <DescriptionIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
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
          />
          <TitleIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
            required
          />
          <LinkIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
            style={{width: '80%'}}
            required
          />
          <DescriptionIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
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
          />
          <TitleIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
          />
          <LinkIcon  style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField style ={{ width: '80%'}}
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
          />
          <DescriptionIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
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
          />
          <TitleIcon style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Link"
            style={{width: '80%'}}
          />
          <LinkIcon  style={{position: 'absolute', right: 320, top: 25, width: 20, height: 20}}/>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12} style ={{position: 'relative'}}>
          <TextField style ={{width: '80%'}}
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description"
          />
          <DescriptionIcon style={{position: 'absolute',right: 320, top: 25, width: 20, height: 20}}/>
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

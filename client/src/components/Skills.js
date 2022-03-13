import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
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



class Skills extends Component {
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
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            required
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 2"
            style={{width: '80%'}}
            required
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
            required
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 3"
            style={{width: '80%'}}
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 4"
            style={{width: '80%'}}
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 5"
            style={{width: '80%'}}
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
        <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Skill 6"
            style={{width: '80%'}}
          />
          <AssessmentIcon style={{position: 'absolute', right: 90, top: 25, width: 20, height: 20}}/>
        </Grid>
        <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
          <TextField
            id="outlined-basic"  variant="outlined"
            margin="dense"
            label="Description/Technologies"
            style={{width: '80%'}}
          />
          <DescriptionIcon style={{position: 'absolute', right: 130, top: 25, width: 20, height: 20}}/>
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

import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import {Paper, withStyles, Grid, TextField, Button, Container,Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import DescriptionIcon from '@material-ui/icons/Description';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {saveAs} from 'file-saver';
import InputAdornment from '@material-ui/core/InputAdornment';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const styles = theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    padding: {
      padding: theme.spacing.unit,
    },
  });
  


  class Extras extends Component {
    continue = e => {
        e.preventDefault ();
        this.props.nextStep ();
    };
    back = e => {
        e.preventDefault ();
        this.props.prevStep ();
    };
    createAndDownloadPDF = () => {
        axios
        .post ('/create-pdf', this.props.values)
        .then (() => {
        axios
        .get ('fetch-pdf', {responseType: 'arraybuffer'})
        .then (res => {
        const pdfBlob = new Blob ([res.data], {type:
        'application/pdf'});
        saveAs (pdfBlob, `${this.props.values.firstname}'s
        Resume.pdf`);
        })
        .catch (err => {
            console.log (err);
        });
        })
        .catch (err => {
            
        });
    };
    render(){
        const {values} = this.props;
        const {classes} = this.props;
        return (
        <Paper elevation={1} style = {{textAlign : "center" }} className={classes.padding}>
        <Card>
            <CardHeader title="Extracurriculars and Achievements" style = {{textAlign : "center" }}/>
        </Card>
        <CardContent>
        <div className={classes.margin}>
        <Grid container spacing={2} alignItems="center" >
            <Grid item md={12} sm={12} xs={12} lg={12} >
            <h4 >
                <CheckCircleIcon />
                Achievement/Extracurricular 1
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach1"
                value={values.ach1}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc1"
                value={values.achdesc1}
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
                Achievement/Extracurricular 2
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach2"
                value={values.ach2}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc2"
                value={values.achdesc2}
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
                Achievement/Extracurricular 3
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach3"
                value={values.ach3}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc3"
                value={values.achdesc3}
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
                Achievement/Extracurricular 4
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach4"
                value={values.ach4}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc4"
                value={values.achdesc4}
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
                Achievement/Extracurricular 5
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach5"
                value={values.ach5}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc5"
                value={values.achdesc5}
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
                Achievement/Extracurricular 6
            </h4>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4} style ={{position: 'relative'}}>
            <TextField
                id="outlined-basic"  variant="outlined"
                margin="dense"
                label="Title"
                style={{width: '80%'}}
                name ="ach6"
                value={values.ach6}
                onChange={this.props.handleChange}
            />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8} style ={{position: 'relative'}}>
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
                name ="achdesc6"
                value={values.achdesc6}
                onChange={this.props.handleChange}
            />
            </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        </div>
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
                disabled
                color="secondary"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
          <br/>
          <Button
                variant="contained"
                color="primary"
                onClick={this.createAndDownloadPDF}
                endIcon={<GetAppIcon />}
              >
                Download Resume
              </Button>
        </Container>

        </CardContent>
        <p className="text-center text-muted">Page 6</p>
        </Paper>

        );

    
    
    }
}

export default withStyles (styles) (Extras);

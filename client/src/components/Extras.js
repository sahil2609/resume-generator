import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
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

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 1,
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
            />
            </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        </div>
        </CardContent>
        <p className="text-center text-muted">Page 6</p>
        </Paper>

        );

    
    
    }
}

export default withStyles (styles) (Extras);

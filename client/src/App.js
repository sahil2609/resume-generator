import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./components/Resume";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export function App() {
  const classes = useStyles();
  return (
    
    <div className="App">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Resume Builder</Typography>
            </Toolbar>
        </AppBar>
        <Resume/>
        </div>
  );
}

export default App;

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: "#f44336"
    }
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#212121"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#212121"
    }
  }
});

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  subtext: {
    paddingBottom: "2%"
  },
  text: {
    paddingTop: "3%",
    paddingBottom: "3%"
  },
  email: {
    color: "#212121"
  }
});

class LoginPage extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    dataInvalid: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = e => {
    console.log("object");
    var compare = false;
    const users = [
      {
        email: "prashantraj18198@gmail.com",
        password: "123"
      },
      {
        email: "kevin@notawesome.com",
        password: "kevinnotawesome"
      }
    ];
    for (var i = 0; i < users.length; i++) {
      // console.log(users[i]['email']);
      if (users[i]["email"] == this.state.email) {
        if (users[i]["password"] == this.state.password) {
          console.log("valid user");
          compare = true;
          this.state.dataInvalid = false;
        } else {
          console.log("invalid");
          compare = false;
          this.state.dataInvalid = true;
        }
      }
    }
    var functionRan = false;
    if (compare) {
      functionRan = this.handleClose();
    }
  };

  handleChange = e => {
    /* console.log(e.target.id);
    console.log(e.target.value); */
    this.setState(
      {
        [e.target.id]: e.target.value
      },
      () => {
        console.log(this.state.email, this.state.password);
      }
    );
  };

  render() {
    const { classes } = this.props;
    const InvalidUserMessage = null;
    if (this.state.dataInvalid) {
      InvalidUserMessage = (
        <Typography error>
          No user found with the same email and password. Please try again!
        </Typography>
      );
    }

    return (
      <div>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={this.handleClickOpen}
        >
          Start Learning
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography variant="h5" component="h5">
              Login
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.subtext}>
              To resume your journey login here
              {InvalidUserMessage}
            </DialogContentText>
            {/* <InputLabel
              htmlFor="custom-css-standard-input"
              classes={{
                root: classes.cssLabel,
                focused: classes.cssFocused
              }}
            >
              Custom CSS
            </InputLabel>
            <Input
              id="custom-css-standard-input"
              classes={{
                underline: classes.cssUnderline
              }}
            /> */}
            <MuiThemeProvider theme={theme}>
              <TextField
                className={[classes.margin, classes.text].join(" ")}
                label="Email"
                id="email"
                autoFocus
                fullWidth
                type="email"
                onChange={this.handleChange}
              />
              <TextField
                className={[classes.margin, classes.text].join(" ")}
                label="Password"
                id="password"
                type="password"
                autoFocus
                fullWidth
                onChange={this.handleChange}
              />
            </MuiThemeProvider>
            {/* <TextField
              autoFocus
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  underline: classes.cssUnderline
                }
              }}
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button
              // onClick={this.handleClose}
              color="default"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);

/* import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import color from "@material-ui/core/colors/pink";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10
  },
  logininfo: {
    ...theme.mixins.gutters(),
    width: 100,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "#eeeeee",
    height: "auto"
  },
  form: {
    ...theme.mixins.gutters(),
    width: 100,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false
    }
  });
}

function PaperSheet(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={typographyV1Theme}>
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container className="" justify="center" spacing={0}>
              <Grid
                item
                key={0}
                style={{
                  paddingTop: "8%"
                }}
              >
                <Paper className={classes.logininfo} elevation={0}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ color: "#757575" }}
                  >
                    Login
                  </Typography>
                  <Typography component="p" style={{ color: "#757575" }}>
                    To get started Login here
                  </Typography>
                </Paper>
              </Grid>
              <Grid item key={1}>
                <Paper
                  className={classes.form}
                  elevation={1}
                  style={{
                    backgroundColor: "#212121",
                    position: "relative"
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    style={{ color: "#fff" }}
                  >
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
 */

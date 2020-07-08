import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookLogin from 'react-facebook-login';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchUser()
  }, [])

  const loginWithFacebook = async data => {
    if (data && data.accessToken) {
      console.log(data.accessToken)
      const res = await fetch(
        `http://localhost:5000/auth/login/facebook?token=${data.accessToken}`
      )
      if (res.ok) {
        const dt = await res.json()
        console.log(dt)
        const user = dt.data;
        const token = dt.token;
        setUser(user);
        localStorage.setItem("token", token);
      } else {
        console.log(res);
      }
    }
  }
  const loginWithEmail = async (email, pw) => {
    if (!email || !pw) {
      console.log("need email and password");
      return
    }
    const res = await fetch(`http://localhost:5000/auth/login`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password: pw })
    });

    if (res.ok) {
      const dt = await res.json();
      console.log(dt);
      const user = dt.data.user;
      const token = dt.data.token;
      setUser(user);
      localStorage.setItem("token", token);
    } else {
      console.log(res);
    }
  }

  const fetchUser = async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      setLoaded(true)
      return
    }
    const res = await fetch(`http://localhost:5000/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      const dt = await res.json();
      setUser(dt.data)
    } else {
      localStorage.removeItem("token")
    }
    setLoaded(true)
  }

  const logout = async () => {
    const res = await fetch(`http://localhost:5000/auth/logout`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    if (res.ok) {
      localStorage.removeItem("token");
      setUser(null)
    } else {
      console.log("dont mess with my app")
    }
  }


  if (!loaded) return <h1> loading .... </h1>


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
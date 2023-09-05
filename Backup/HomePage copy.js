import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Navbar from '../front_end/src/Navbar';
import Dropdown from '../front_end/src/Dropdown';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';


function Home() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="rgba(0, 0, 0, 1)" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Project 3: Team 1
      </Link>{' SDI#18 '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const signIn = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8085/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();

  //       console.log('Authentication successful', userData);

  //     } else {
  //       console.log('Authentication failed');

  //     }
  //   } catch (error) {
  //     console.error('An error occurred', error);

  //   }
  // };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   signIn();
  // };

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/originals/9d/73/af/9d73af36e486def0f4c81aa372b8655c.gif)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{
            bgcolor: 'rgba(0, 0, 0, 0.5)',
          }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >Satellite Solutions
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Achieving and Sustaining Space Superiority: Your Mission is Our Commitment.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Dropdown
                label='Mission Type'
                url='http://localhost:8085/assets'
                dataType={'mission_type'}
              />
              <Dropdown
                label='Orbital Regime'
                url='http://localhost:8085/assets'
                dataType={'orbital_regime'}
              />
            </Stack> */}
            {/* <Satellite Cards> */}
            {/* </Container>
        </Box> */}
            {/* <Box sx={{
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          backgroundImage: 'url(https://cdn.wallpapersafari.com/88/66/Uowyg0.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          py: 8
        }}>
          <Container
            sx={{
              py: 8
            }}
            maxWidth="lg">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/03/Webp.net-resizeimage-51.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sat 1-10
                      </Typography>
                      <Typography>
                        Sat details
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid> */}
            {/* <Satellite Cards> */}

            {/* <Sign-in> */}
            {/* <SignIn handledSubmit={handleSubmit} /> */}
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'white',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {/* <form onSubmit={handleSubmit} noValidate className="form"> */}
                <Box>
                  <TextField
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: '#2196f3',
                          borderWidth: 4,
                        },
                        '&:hover fieldset': {
                          borderColor: '#2196f3',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1d72db',
                          borderWidth: 4,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                    }}
                    // style={{
                    //   backgroundColor: '#2196f3',
                    //   color: 'white',
                    // }}
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    variant="outlined"
                    size='medium'

                  />
                  <TextField
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: '#2196f3',
                          borderWidth: 4,
                        },
                        '&:hover fieldset': {
                          borderColor: '#2196f3',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1d72db',
                          borderWidth: 4,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                    }}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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
                </Box>
                {/* </form> */}
              </Box>
            </Container>
            {/* <Sign-In> */}
          </Container>
        </Box >
      </main >
      {/* Footer */}
      < Box sx={{
        bgcolor: 'primary.main',
        pt: 8,
        pb: 6,
      }
      }
        component="footer" >
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
        </Typography>
        <Home />
      </Box >
      {/* End footer */}
    </>
  );
}

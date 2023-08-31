import * as React from 'react';
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
import Navbar from './Navbar';

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
            bgcolor: 'red',
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
            >PACKAGES
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Achieving and Sustaining Space Superiority: Your Mission is Our Commitment.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">This needs to be a drop down</Button>
              <Button variant="outlined">This needs to be a drop down</Button>
            </Stack>
          </Container>
        </Box>
        <Box sx={{
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

          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{
        bgcolor: 'primary.main',
        pt: 8,
        pb: 6,
      }}
        component="footer">
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
      </Box>
      {/* End footer */}
    </>
  );
}
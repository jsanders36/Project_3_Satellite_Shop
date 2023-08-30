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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';

function Home() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Project 3: Team 1
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
      <Navbar />
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            backgroundImage: 'url(https://www.geospatialworld.net/wp-content/uploads/2023/05/catagory_satellite_banner.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" bgcolor= 'rgba(0, 0, 0, 0.7)'>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >MISSION STATEMENT
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
Achieving and Sustaining Space Superiority: Your Mission is Our Commitment.
<br></br>
<br></br>
<br></br>
Welcome to "Satellite Solutions" , the trusted choice for defense and security agencies aiming to maintain tactical and strategic advantages in the domain of space. We understand that in today's ever-evolving landscape of national security, space superiority is not an option but a necessity.
Our mission is to equip you with robust, mission-critical satellite assets tailored to serve your specific operational requirements. Through our advanced and secure platform, we enable you to efficiently build, optimize, and deploy mission packages that address various objectives — from surveillance and reconnaissance to communications and beyond.
<br></br>
<br></br>
<br></br>
Our Commitments:
<br></br>
</Typography>
<Typography variant="h5" align="left" color="white" paragraph>
Tailored Solutions: Customize your mission packages using our comprehensive inventory of military-grade satellite assets.
<br></br>
<br></br>
Operational Integrity: Meet and exceed the most demanding operational requirements through state-of-the-art technology and high reliability.
<br></br>
<br></br>
Secure Interface: Plan and execute your missions with peace of mind, assured by our military-grade encryption and cybersecurity measures.
<br></br>
<br></br>
Interoperability: Seamlessly integrate with existing platforms and systems, ensuring that your space assets are a force multiplier, not a bottleneck.
<br></br>
Customer Support: Access 24/7 assistance from our team of space and defense experts, ready to guide you at every step from mission conception to execution.
<br></br>
<br></br>
Global Reach: Leverage our worldwide network of partners and suppliers to receive the very best in technology, logistics, and mission support.
<br></br>
<br></br>
<br></br>
</Typography>
<Typography variant="h5" align="center" color="white" paragraph>
Your mission is critical; the stakes are high. Choose "Satellite Solutions" to ensure that you have the assets you need to achieve and sustain space superiority, today and into the future.
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
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
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'purple', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Home />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
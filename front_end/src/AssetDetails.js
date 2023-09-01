import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navbar from './Navbar';
import AssetFetch from './AssetFetch';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import { useAssetContext } from './addToPackage';

function Home() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Project 3: Team 1
      </Link>
      {' SDI#18 '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function AssetDetails() {
  const { id } = useParams();
  const [currentAsset, setCurrentAsset] = useState(null);
  const { assetData, error } = AssetFetch();
  const { addAsset, setAddAsset } = useAssetContext();
  const navigate = useNavigate();

  useEffect(() => {
    const asset = assetData.find((asset) => asset.id === Number(id));
    if (asset) {
      setCurrentAsset(asset);
    }
  }, [assetData, id]);

  const addToPackage = (asset) => {
    setAddAsset((prevAddAsset) => [...prevAddAsset, asset]);
  };

  // rest of your code...

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          backgroundImage:
            'url(https://cdn.wallpapersafari.com/88/66/Uowyg0.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          py: 8,
        }}>
          <Typography
  component='h1'
  variant='h2'
  align='center'
  color='white'
  gutterBottom
>
  {currentAsset ? currentAsset.name : 'Loading...'}
</Typography>
          <Container sx={{ py: 8 }} maxWidth="lg">
            {currentAsset ? (
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #2196f3',
                boxShadow: '0 0 20px rgba(33, 150, 243, 0.9)',
              }}>
                <CardMedia component="img" image={currentAsset.image} alt={currentAsset.id} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {currentAsset.name}
                  </Typography>
                  <Typography>
                    <ul>
                      <li>Mission Type: {currentAsset.mission_type}</li>
                      <li>Orbital Regime: {currentAsset.orbital_regime}</li>
                      <li>Description: {currentAsset.description}</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={RouterLink} to={`/asset_list`} variant='contained' color='primary'>
                    Return to Asset List
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => addToPackage(currentAsset)}>
                    Add to Package
                  </Button>
                </CardActions>
              </Card>
            ) : (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
                <img src="https://www.memesmonkey.com/images/memesmonkey/f3/f330a0f60e1041e070960b144a7f1464.jpeg" alt="No asset found" />
              </div>
            )}
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'primary.main', pt: 8, pb: 6 }} component="footer">
        <Home />
      </Box>
    </>
  );
}

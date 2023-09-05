import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Navbar from './Navbar';
import { useAssetContext } from './addToPackage';
import { useNavigate } from 'react-router-dom';

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

export default function Packages() {
  const { addAsset, setAddAsset } = useAssetContext();
  const navigate = useNavigate();

  const [packageDescriptionInput, setPackageDescriptionInput] = useState('');
  const [packageNameInput, setPackageNameInput] = useState('');

  const packageDatabase = 'http://localhost:8085/packages';
  const joinTableDatabase = 'http://localhost:8085/assets_packages';

  const handleDescriptionChange = (e) => {
    setPackageDescriptionInput(e.target.value);
  }

  const handleNameChange = (e) => {
    setPackageNameInput(e.target.value);
  }

  const packageSubmission = async () => {
    let numPackagesInDb;

    await fetch(packageDatabase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: packageNameInput,
        mission_description: packageDescriptionInput,
        approval_status: false,
        users_id: 1,
      }),
    }).then((response) => response.json());

    await fetch(packageDatabase)
      .then((response) => response.json())
      .then((packageDbLength) => (numPackagesInDb = packageDbLength.length));

    let numSatsToSend = addAsset.length;
    for (let i = 0; i < numSatsToSend; i++) {
      await fetch(joinTableDatabase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assets_id: addAsset[i].id,
          packages_id: numPackagesInDb,
        }),
      }).then((response) => response.json());
    }
  };

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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            backgroundImage: 'url(https://i.pinimg.com/originals/9d/73/af/9d73af36e486def0f4c81aa372b8655c.gif)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pt: 8,
            pb: 6,
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px',
            bgcolor: 'transparent',
            marginTop: '-500px',

          }}>
            <Container
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                mb: 10,
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
              >
                PACKAGES
              </Typography>
              <Typography variant="h5" align="center" color="white" paragraph></Typography>
              <Typography variant="h5" align="center" color="white" paragraph>
                Achieving and Sustaining Space Superiority: Your Mission is Our Commitment.
              </Typography>
            </Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'top',
                alignItems: 'center',
                border: '1px solid #2196f3',
                boxShadow: '0 0 20px rgba(33, 150, 243, 0.9)',
                padding: '40px',
                maxHeight: '200px',
                overflowY: 'scroll',
                bgcolor: 'white',
                width: '75%',
              }}
            >
              <Typography variant="h4">Package Loadout:</Typography>
              <form>
                <ul>
                  {addAsset.map((asset) => (
                    <li key={asset?.id}>
                      {asset?.name}{' ----- '}
                      <Button
                        padding="10px"
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          const releasedAsset = addAsset.filter((element) => element?.id !== asset?.id);
                          setAddAsset(releasedAsset);
                          navigate('/packages');
                        }}
                      >
                        Remove Asset From Package
                      </Button>
                    </li>
                  ))}
                </ul>
                <label htmlFor="mission_description"> Mission Description:
                  <input
                    type="text"
                    id="mission_descriptions"
                    placeholder="Add a mission description"
                    onChange={handleDescriptionChange}
                    value={packageDescriptionInput}
                  />
                  <br></br>
                  Name:
                  <input
                    type="text"
                    id="package_name"
                    placeholder="Name your package..."
                    onChange={handleNameChange}
                    value={packageNameInput}
                  />
                  <br></br>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      packageSubmission();
                    }}
                  >
                    Submit Package Request
                  </button>
                </label>
              </form>
            </Box>
          </Box>
        </Box>
      </main>
      <Box
        sx={{
          bgcolor: 'primary.main',
          pt: 8,
          pb: 6,
        }}
        component="footer"
      >
        <Typography variant="subtitle1" align="center" color="white" component="p">
          {/* ... */}
        </Typography>
        <Home />
      </Box>
    </>
  );
}

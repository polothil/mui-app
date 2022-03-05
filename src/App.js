import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';
import SearchAppBar from './components/AppBar';

function App() {
  return (
    <div className='App'>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;

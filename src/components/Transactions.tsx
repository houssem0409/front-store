import { Grid, Container } from '@mui/material';
import { Typography, Button } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

export default function Transactions() {
  return (
    <div style={{  width : "100%" , height : 800}}>

  
        {/* @ts-ignore */}
       
        <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
         these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create transaction
        </Button>
      </Grid>
    </Grid>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
    
       
    </div>
  );
}


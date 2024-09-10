import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white text-center site-footer' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3,my:10 }}>


      <Grid className='pt-2' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Perfect Collection. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by {' '}
          <Link href="https://www.linkedin.com/in/the-paras-kaushik/" color="inherit" underline="always">
            Paras Kaushik
          </Link>{' '}
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Footer;

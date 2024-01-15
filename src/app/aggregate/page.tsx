'use client';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import BedIcon from '@mui/icons-material/Bed';
import SquareCard from '@/components/aggregate/SquareCard';
import Headline from '@/components/aggregate/Headline';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Grid container spacing={4}>
            <Grid xs={4}>
              <Typography variant="h5">SquareCard</Typography>
            </Grid>
            <Grid xs={8}>
              <SquareCard title="lorem">
                <BedIcon color="primary" sx={{ fontSize: 24 }} />
              </SquareCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container spacing={4}>
            <Grid xs={4}>
              <Typography variant="h5">Headline</Typography>
            </Grid>
            <Grid xs={8}>
              <Headline title="loremlorem" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

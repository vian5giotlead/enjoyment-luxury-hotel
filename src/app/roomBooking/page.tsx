'use client';

import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import BedIcon from '@mui/icons-material/Bed';
import SquareCard from '@/components/aggregate/SquareCard';
import Headline from '@/components/aggregate/Headline';

export default function RoomBooking() {
  return (
    <>
      <Box className="container" width="1024px" margin="0 auto">
        <div>RoomBooking header</div>
        <h2>確認訂房資訊</h2>
        <Box width="100%" display="flex" flexDirection="row" justifyContent="center">
          <div className="wrap left-box" style={{ width: '80%' }}>
            <section>
              <h3>訂房資訊</h3>
              <Headline title="選擇房型" />
              <Headline title="訂房日期" />
              <Headline title="房客人數" />
            </section>
            <hr />
            <section>
              <h3>訂房人資訊</h3>
              <div>Form: 姓名、手機、郵件、信箱</div>
            </section>
            <hr />
            <section>
              <h3>房間資訊</h3>
              <Headline title="房型基本資訊" />
              <Grid container spacing={2}>
                <Grid xs={2}>
                  <SquareCard title="lorem">
                    <BedIcon color="primary" sx={{ fontSize: 24 }} />
                  </SquareCard>
                </Grid>
                <Grid xs={2}>
                  <SquareCard title="lorem">
                    <BedIcon color="primary" sx={{ fontSize: 24 }} />
                  </SquareCard>
                </Grid>
                <Grid xs={2}>
                  <SquareCard title="lorem">
                    <BedIcon color="primary" sx={{ fontSize: 24 }} />
                  </SquareCard>
                </Grid>
              </Grid>
              <Headline title="房間格局" />
              <Headline title="房內設備" />
              <Headline title="備品提供" />
            </section>
          </div>
          <div className="wrap right-box" style={{ width: '20%' }}>
            <h3>價格詳情</h3>
          </div>
        </Box>
        <div>RoomBooking footer</div>
      </Box>
    </>
  );
}
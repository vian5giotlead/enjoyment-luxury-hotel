//mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
// others
import TitleBox from '@/app/c.titleBox';
import MapImage from '@/assets/images/map.png';

export default function Transportation() {
  return (
    <Box
      component="section"
      sx={{ padding: { sm: '80px 12px 40px 12px', md: '120px 0px 90px 0px' }, margin: '0 auto', maxWidth: '1296px' }}>
      <TitleBox txt1="交通" txt2="方式" color="primary" />
      <Typography color="white" sx={{ marginBottom: '16px' }}>
        台灣高雄市新興區六角路123號
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1295px',
          height: '360px',
          marginBottom: { sm: '24px', md: '40px' },
          backgroundImage: `url(${MapImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></Box>

      <Stack spacing={3} direction={{ sm: 'column', md: 'row' }}>
        <Box>
          <DirectionsCarIcon
            color="primary"
            sx={{
              width: { sm: '48px', md: '80px' },
              height: { sm: '48px', md: '80px' },
              marginBottom: { sm: '8px', md: '16px' },
            }}
          />
          <Typography color="white" sx={{ fontSize: { sm: '16px', md: '24px', marginBottom: '8px' } }}>
            自行開車
          </Typography>
          <Typography color="white" sx={{ fontSize: { sm: '14px', md: '16px' } }}>
            如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
          </Typography>
        </Box>
        <Box>
          <DirectionsSubwayIcon
            color="primary"
            sx={{
              width: { sm: '48px', md: '80px' },
              height: { sm: '48px', md: '80px' },
              marginBottom: { sm: '8px', md: '16px' },
            }}
          />
          <Typography color="white" sx={{ fontSize: { sm: '16px', md: '24px', marginBottom: '8px' } }}>
            高鐵/火車
          </Typography>
          <Typography color="white" sx={{ fontSize: { sm: '14px', md: '16px' } }}>
            如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。{' '}
          </Typography>
        </Box>
        <Box>
          <AirportShuttleIcon
            color="primary"
            sx={{
              width: { sm: '48px', md: '80px' },
              height: { sm: '48px', md: '80px' },
              marginBottom: { sm: '8px', md: '16px' },
            }}
          />
          <Typography color="white" sx={{ fontSize: { sm: '16px', md: '24px', marginBottom: '8px' } }}>
            禮賓車服務
          </Typography>
          <Typography color="white" sx={{ fontSize: { sm: '14px', md: '16px' } }}>
            承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567{' '}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

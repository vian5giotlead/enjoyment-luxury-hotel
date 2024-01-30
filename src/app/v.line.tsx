import Box from '@mui/material/Box';
import Line4Image from '@/assets/images/line4.png';
import Liin5Image from '@/assets/images/line5.png';

export default function Line() {
  return (
    <Box
      sx={{
        height: { sm: '84px', md: '187px' },
        backgroundImage: { sm: `url(${Liin5Image.src})`, md: `url(${Line4Image.src})` },
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></Box>
  );
}

import Box from '@mui/material/Box';

import Title, { TitleSchema } from '@/app/c.title';

export default function TitleBox({ txt1, txt2, color }: TitleSchema) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: { sm: '40px' } }}>
      <Title txt1={txt1} txt2={txt2} color={color} />
      <Box
        sx={{
          width: { sm: '200px', md: '167px' },
          height: '2px',
          background: 'linear-gradient(90deg, #BE9C7C 0%, #FFF 100%)',
        }}></Box>
    </Box>
  );
}

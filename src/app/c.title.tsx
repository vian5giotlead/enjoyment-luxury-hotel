import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type TitleSchema = { txt1: string; txt2: string; color: string };

export default function Title({ txt1, txt2, color }: TitleSchema) {
  return (
    <Box>
      <Typography
        color={color}
        sx={{
          paddingRight: '40px',
          whiteSpace: 'nowrap',
          fontSize: { sm: '32px', md: '48px' },
          fontWeight: { sm: 'bold', md: 'bold' },
        }}>
        {txt1}
      </Typography>
      <Typography
        color={color}
        sx={{
          paddingRight: '40px',
          whiteSpace: 'nowrap',
          fontSize: { sm: '32px', md: '48px' },
          fontWeight: { sm: 'bold', md: 'bold' },
        }}>
        {txt2}
      </Typography>
    </Box>
  );
}

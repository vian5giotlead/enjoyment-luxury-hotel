import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

interface SquareCardProps {
  title: string;
  children: React.ReactNode;
}

function SquareCard(props: SquareCardProps) {
  const { title, children } = props;

  return (
    <>
      <Box
        width={97}
        height={97}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          p: 2,
          borderRadius: '8px',
          border: '1px solid ',
          borderColor: 'primary.light',
        }}>
        {children}
        <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      </Box>
    </>
  );
}

export default SquareCard;

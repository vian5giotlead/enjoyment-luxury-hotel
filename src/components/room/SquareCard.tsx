import { Box, IconButton, Typography } from '@mui/material';

interface SquareCardProps {
  title?: string | number;
  children: React.ReactNode;
}

export type { SquareCardProps };

function SquareCard(props: SquareCardProps) {
  const { title, children } = props;

  return (
    <>
      <Box
        width={97}
        height={97}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          p: '20.5px 16px',
          borderRadius: '8px',
          border: '1px solid ',
          borderColor: 'primary.light',
        }}>
        <IconButton color="primary" size="large" sx={{ p: 0, cursor: 'auto', '&:hover': 'none' }}>
          {children}
        </IconButton>
        <Typography variant="title" mt={1}>
          {title}
        </Typography>
      </Box>
    </>
  );
}

export default SquareCard;

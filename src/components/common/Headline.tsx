import { Box, Stack, Typography, TypographyProps } from '@mui/material';

interface HeadlineProps extends TypographyProps {
  title: string;
  secondary?: boolean;
}

export default function Headline(props: HeadlineProps) {
  const { title, secondary = false, variant = 'h5' } = props;
  return (
    <Box display="flex" alignItems="center">
      <Stack
        sx={{
          width: '4px',
          height: '24px',
          mr: '12px',
          bgcolor: secondary ? '#909090' : 'primary.main',
          borderRadius: '10px',
        }}
      />
      <Typography variant={variant}>{title}</Typography>
    </Box>
  );
}

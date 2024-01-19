import { Stack, Typography, styled } from '@mui/material';

type TitleTextProps = {
  title: string;
  content: string;
};

const Text = styled(Typography)(({ theme }) => ({
  '& .MuiTypography': {
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.down('md')]: { fontSize: '0.875rem' },
    [theme.breakpoints.up('md')]: { fontSize: '1rem' },
  },
}));

function TitleText({ title, content }: TitleTextProps) {
  return (
    <Stack direction={'column'} spacing={0.5}>
      <Text fontWeight={500}>{title}</Text>
      <Text fontWeight={700}>{content}</Text>
    </Stack>
  );
}

export { TitleText };

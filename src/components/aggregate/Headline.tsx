import { Box, Stack, Typography } from '@mui/material';

interface HeadlineProps {
  title: string
}

/**
 * 
 * TODO
 * Stack 圓弧樣式
 */

function Headline(props: HeadlineProps) {
  const { title } = props
  return (
    <Box display='flex' alignItems='center'>
      <Stack sx={{
        width: '4px',
        height: '24px',
        mr: '12px',
        bgcolor: 'primary.main'
      }} />
      <Typography sx={{
        fontSize: { sm: '24px' },
        fontWeight: 700,
      }}>
        {title}
      </Typography>
    </Box>
  )
}

export default Headline
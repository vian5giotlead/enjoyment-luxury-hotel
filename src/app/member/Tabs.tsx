import BaseTabs from '@mui/material/Tabs';
import BaseTab from '@mui/material/Tab';
import { styled } from '@mui/material';
import theme from '@/theme';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const Tabs = styled((props: StyledTabsProps) => (
  <BaseTabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: '0.25rem',
    borderRadius: '0.625rem',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    maxWidth: '2rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.625rem',
  },
});

const Tab = styled((props: StyledTabProps) => <BaseTab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#fff',
  '&:hover': {
    color: theme.palette.primary.main,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default Tabs;
export { Tab };

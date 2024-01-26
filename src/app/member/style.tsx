'use client';
import {
  Stack,
  Typography,
  styled,
  Tabs as BaseTabs,
  Tab as BaseTab,
  Container as BaseContainer,
  ContainerTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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

const Form = styled('form', { shouldForwardProp: () => true })(({ theme }) => ({
  '& .MuiInputBase-root': {
    width: '100%',
  },
}));

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
))(({ theme }) => ({
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
}));

const Tab = styled((props: StyledTabProps) => <BaseTab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
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

const Container = styled(
  ({ props, children }: { props?: OverridableComponent<ContainerTypeMap>; children: React.ReactNode }) => (
    <BaseContainer {...props}>{children}</BaseContainer>
  ),
)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(15),
  },
}));

export { TitleText, Form, Tabs, Tab, Container };

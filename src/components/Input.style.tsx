import { FormControl, FormHelperText, InputBase, InputLabel, styled } from '@mui/material';

const StyleInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#ececec' : '#2D3843',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `0 0 0 0.25rem rgba(190, 156, 124, 0.1)`,
      borderColor: theme.palette.primary.main,
    },
    '&:invalid': {
      borderColor: theme.palette.error.main,
    },
  },
}));

type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
};

export default function Input({
  label,
  type,
  name,
  placeholder,
  fullWidth = true,
  helperText,
  error = false,
}: InputProps) {
  return (
    <FormControl fullWidth={fullWidth} variant="standard">
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <StyleInput
        type={type}
        fullWidth={fullWidth}
        id={name}
        error={error}
        placeholder={placeholder}
        inputProps={{ 'aria-label': name }}
        aria-describedby={`${name}-helper-text`}
      />
      <FormHelperText id={`${name}-helper-text`} error={error}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}

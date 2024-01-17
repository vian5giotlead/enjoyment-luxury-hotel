import { FormControl, FormHelperText, InputBase, styled } from '@mui/material';
import { forwardRef } from 'react';

const StyleInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#ececec',
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

const Label = styled('label')(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.0175rem;
  `,
);

/**
 * @param {string} label - The label of the input.
 * @param {string} type - The type of the input.
 * @param {string} name - The name of the input.
 * @param {string} placeholder - The placeholder of the input.
 * @param {boolean} fullWidth - The fullWidth of the input.
 * @param {string} helperText - The helperText of the input.
 * @param {boolean} error - The error of the input.
 * @returns {JSX.Element} - The Input component.
 * @description - The Input component.
 */
const Input = forwardRef<HTMLElement, InputProps>(function Input(
  { label, type, name, placeholder, fullWidth = true, helperText, error = false },
  ref,
) {
  return (
    <FormControl fullWidth={fullWidth} variant="standard">
      <Label htmlFor={name}>{label}</Label>
      <StyleInput
        type={type}
        fullWidth={fullWidth}
        id={name}
        name={name}
        error={error}
        placeholder={placeholder}
        inputProps={{ 'aria-label': name }}
        aria-describedby={`${name}-helper-text`}
        ref={ref}
      />
      <FormHelperText id={`${name}-helper-text`} error={error}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
});

Input.displayName = 'Input';

export default Input;

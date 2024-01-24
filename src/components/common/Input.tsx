import { ForwardedRef, forwardRef } from 'react';
import { FormControl, FormHelperText, styled } from '@mui/material';
import { Input as BaseInput } from '@mui/base/Input';
import { UseFormRegister } from 'react-hook-form';

const InputEl = forwardRef(function CustomInput(props: InputProps, ref: ForwardedRef<HTMLDivElement>) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const InputElement = styled('input')(({ theme }) => ({
  '&.MuiInput-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#ececec',
    width: '100%',
    [theme.breakpoints.down('md')]: { fontSize: '0.875rem' },
    [theme.breakpoints.up('md')]: { fontSize: '1rem' },
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `0 0 0 0.25rem rgba(190, 156, 124, 0.1)`,
      borderColor: theme.palette.primary.main,
    },
    '&:focus-visible': {
      outline: 0,
    },
    '&.MuiInput-input::-webkit-input-placeholder': {
      color: '#909090',
    },
    '.Mui-error > &': {
      borderColor: theme.palette.error.main,
    },
  },
}));

type InputProps = {
  id?: string;
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  isDirty?: boolean;
  'aria-describedby'?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
 * @param {boolean} isDirty - The isDirty of the input.
 * @returns {JSX.Element} - The Input component.
 * @description - The Input component.
 */
const Input = forwardRef<HTMLElement, InputProps>(function Input(
  { label, type, name, placeholder, fullWidth = true, helperText, error = false, isDirty, onChange },
  ref,
) {
  return (
    <FormControl fullWidth={fullWidth} variant="standard">
      <Label htmlFor={name}>{label}</Label>
      <InputEl
        type={type}
        id={name}
        name={name}
        error={error}
        placeholder={placeholder}
        aria-describedby={`${name}-helper-text`}
        onChange={onChange}
      />
      <FormHelperText id={`${name}-helper-text`} error={error || isDirty} sx={{ paddingTop: '0.5rem' }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
});

Input.displayName = 'Input';

export default Input;

import { InputHTMLAttributes, forwardRef } from 'react';
import { FormControl, FormHelperText, styled } from '@mui/material';
import { Input as BaseInput } from '@mui/base/Input';

const Input = forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const InputElement = styled('input')(({ theme }) => ({
  '&': {
    borderRadius: '0.5rem',
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#ececec',
    width: '100%',
    [theme.breakpoints.down('md')]: { fontSize: '0.875rem' },
    [theme.breakpoints.up('md')]: { fontSize: '1rem' },
    padding: '1rem',
    lineHeight: 1.5,
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `0 0 0 0.25rem rgba(190, 156, 124, 0.1)`,
      borderColor: theme.palette.primary.main,
    },
    '&:focus-visible': {
      outline: 0,
    },
    '&::-webkit-input-placeholder': {
      color: '#909090',
    },
    '.Mui-error > &': {
      borderColor: theme.palette.error.main,
    },
  },
}));

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

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  isDirty?: boolean;
};
/**
 * @param {string} label - The label of the input.
 * @param {boolean} fullWidth - The fullWidth of the input.
 * @param {string} helperText - The helperText of the input.
 * @param {boolean} error - The error of the input.
 * @param {boolean} isDirty - The isDirty of the input.
 * @returns {JSX.Element} - The Input component.
 * @description - The Input component.
 */
const InputFelid = forwardRef<HTMLInputElement, InputProps>(function CustomInput(
  { label, fullWidth = true, helperText, error = false, isDirty, ...props },
  ref,
) {
  return (
    <FormControl fullWidth={fullWidth} variant="standard">
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Input id={props.name} {...props} ref={ref} />
      {error && (
        <FormHelperText id={`${props.name}-helper-text`} error={error || isDirty}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

InputFelid.displayName = 'Input';

export default InputFelid;

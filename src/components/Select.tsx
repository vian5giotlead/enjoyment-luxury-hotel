import { ForwardedRef, forwardRef, RefAttributes, useRef } from 'react';
import { FormControl, InputLabel, styled, FormHelperText } from '@mui/material';

import { Select as BaseSelect, selectClasses, SelectProps, SelectRootSlotProps } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Select = forwardRef(function Select<TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const slots: SelectProps<TValue, Multiple>['slots'] = {
    root: CustomButton,
    listbox: Listbox,
    popper: Popper,
    ...props.slots,
  };
  return <BaseSelect {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple> & RefAttributes<HTMLButtonElement>,
) => JSX.Element;

const CustomButton = forwardRef(function CustomButton<TValue extends {}, Multiple extends boolean>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, ...other } = props;

  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <KeyboardArrowDownOutlinedIcon />
    </StyledButton>
  );
});

const StyledButton = styled('button', { shouldForwardProp: () => true })(
  ({ theme }) => `
  position: relative;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: #fff;
  border: 1px solid #ececec;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    border-color: ${theme.palette.primary.main};
  }


  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${theme.palette.primary.dark};
    box-shadow: 0 0 0 3px ${theme.palette.primary.light};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
    origin: 50% 50%;
    transition: transform 0.3s ease;
  }
  &[aria-expanded="true"] {
    border-color: ${theme.palette.primary.main};
    box-shadow: 0 0 0 0.25rem rgba(190, 156, 124, 0.1);
  & > svg {
      transform: rotate(180deg);
    }
  }
  &[aria-expanded="false"] > svg {
    transform: rotate(0deg);
  }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  max-height: 240px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: #fff;
  border: 1px solid ${theme.palette.primary.light};
  color: ${theme.palette.primary.main};
  box-shadow: 0px 2px 4px ${'rgba(0,0,0, 0.05)'};
  `,
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.primary.dark};
  }

  &.${optionClasses.highlighted} {
    border: 1px solid ${theme.palette.primary.main};
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.primary.dark};
  }

  &:focus-visible {
    outline: 3px solid ${theme.palette.primary.main};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.primary.dark};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.primary.light};
  }

  &:hover:not(.${optionClasses.disabled}) {
    outline: 1px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
  }
  `,
);

const Popper = styled(BasePopper)`
  z-index: 1;
`;

type Props = {
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
};

const StyleSelect = forwardRef<HTMLSelectElement, Props>(
  ({ label, name, options, placeholder, fullWidth = true, helperText, error = false, disabled = false }, ref) => {
    return (
      <FormControl fullWidth={fullWidth} variant="standard" error={error}>
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
        <Select id={name} name={name} defaultValue="" disabled={disabled}>
          <Option disabled value="">
            <em>{placeholder}</em>
          </Option>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  },
);

StyleSelect.displayName = 'Select';

export default StyleSelect;

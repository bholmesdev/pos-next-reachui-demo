import * as React from "react";
import styled from "styled-components";
import { Listbox, ListboxOption } from "@reach/listbox";
import { useId } from "@reach/auto-id";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";

const StyledListbox = styled(Listbox)`
  [data-reach-listbox-button] {
    border: 1px solid #666;
    padding: 0;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
  }

  [data-reach-listbox-arrow] {
    border-left: 1px solid #666;
    line-height: 0;
    padding: 10px 8px;
    margin-left: 20px;
  }
`;

const StyledListboxOption = styled(ListboxOption)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[aria-selected="true"] {
    background: ${(props) => props.theme.black};
  }
`;

type Props = {
  id: string;
  name: string;
  onChange: (value: string | number) => void;
};

type OptionProps = {
  value: string | number;
  key?: string;
  label?: string;
  disabled?: boolean;
};

export const SelectBoxOption: React.FC<OptionProps> = ({
  children,
  ...props
}) => {
  return <StyledListboxOption {...props}>{children}</StyledListboxOption>;
};

export const SelectBox: React.FC<Props> = ({
  id,
  name,
  onChange,
  children,
}) => {
  return (
    <StyledListbox
      aria-labelledby={`${id}--${useId()}`}
      name={name}
      onChange={onChange}
      arrow={<ArrowIcon size={26} />}
    >
      {children}
    </StyledListbox>
  );
};

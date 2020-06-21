import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";
import { Listbox, ListboxOption } from "@reach/listbox";
import VisuallyHidden from "@reach/visually-hidden";
import { useId } from "@reach/auto-id";
import QuantityTag from "./QuantityTag";
import { headerText } from "../../shared/styles";

type Props = {
  price: number;
  sizing: Array<any>;
};

type Inputs = {
  size: string;
  quantity: number;
};

const PurchaseSection = styled.section`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Price = styled.p`
  font-size: 40px;
  ${headerText}
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  row-gap: 30px;

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

const QuantityInputLabel = styled.label`
  display: flex;
  align-items: center;

  input {
    font-family: inherit;
    font-size: inherit;
    margin-left: auto;
    padding: 10px;
    width: 40px;
  }
`;

const StyledOption = styled(ListboxOption)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[aria-selected="true"] {
    background: ${(props) => props.theme.black};
  }
`;

const SubmitButton = styled.button`
  ${headerText}
  padding: 10px 15px;
  background: ${(props) => props.theme.primaryRed};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: inherit;
`;

const formatCurrency = (num) => {
  return (num / 100).toFixed(2);
};

const PurchaseForm: React.FC<Props> = ({ price, sizing }) => {
  const labelIds = {
    size: "size-label--" + useId(),
    quantity: "quantity-label--" + useId(),
  };
  const onSubmit = (data) => console.log(data);
  const setSizeValue = (value: string) => {
    console.log(value);
    setValue("size", value);
  };
  const { register, handleSubmit, watch, errors, setValue } = useForm<Inputs>();
  React.useEffect(() => {
    register({ name: "size" });
  }, [register]);

  return (
    <PurchaseSection>
      <Price>${formatCurrency(price)}</Price>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <VisuallyHidden id={labelIds.size}>Size</VisuallyHidden>
        <Listbox
          aria-labelledby={labelIds.size}
          name="size"
          arrow={<ArrowIcon size={26} />}
          onChange={setSizeValue}
        >
          <StyledOption value="default">Choose a size</StyledOption>
          {sizing.map((size) => (
            <StyledOption
              key={size.abbreviation}
              label={size.abbreviation}
              value={size.abbreviation}
              disabled={size.amtInStock === 0}
            >
              {size.abbreviation}
              <QuantityTag amtInStock={size.amtInStock} />
            </StyledOption>
          ))}
        </Listbox>
        {errors.size && <span>This field is required!</span>}
        <QuantityInputLabel htmlFor={labelIds.quantity}>
          Quantity
          <input
            name="quantity"
            id={labelIds.quantity}
            type="number"
            ref={register({ required: true })}
          />
        </QuantityInputLabel>
        {errors.quantity && <span>This field is required!</span>}
        <SubmitButton type="submit">Buy it!</SubmitButton>
      </Form>
    </PurchaseSection>
  );
};

export default PurchaseForm;

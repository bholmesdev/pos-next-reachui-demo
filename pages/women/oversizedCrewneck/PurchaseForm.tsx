import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import VisuallyHidden from "@reach/visually-hidden";
import { useId } from "@reach/auto-id";
import QuantityTag from "./QuantityTag";
import { headerText } from "../../shared/styles";
import { SelectBox, SelectBoxOption } from "../../shared/SelectBox";
import { AlertQueueContext } from "../../shared/Alert";

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
    size: "size-label",
    quantity: "quantity-label--" + useId(),
  };
  const { addMessage } = React.useContext(AlertQueueContext);
  const onSubmit = (data: Inputs) =>
    addMessage(`Added ${data.quantity} in size ${data.size} to cart`);
  const setSizeValue = (value: string) => {
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
        <SelectBox id={labelIds.size} name="size" onChange={setSizeValue}>
          <SelectBoxOption value="default">Choose a size</SelectBoxOption>
          {sizing.map((size) => (
            <SelectBoxOption
              key={size.abbreviation}
              label={size.abbreviation}
              value={size.abbreviation}
              disabled={size.amtInStock === 0}
            >
              {size.abbreviation}
              <QuantityTag amtInStock={size.amtInStock} />
            </SelectBoxOption>
          ))}
        </SelectBox>
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

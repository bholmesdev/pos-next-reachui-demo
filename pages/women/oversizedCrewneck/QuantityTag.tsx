import * as React from "react";
import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  background: ${(props) => props.theme[props.color]};
  color: white;
  margin-left: auto;
  padding: 2px 10px;
  border-radius: 5px;
  font-family: ${(props) => props.theme.headerFont};
  text-transform: uppercase;
`;

export type Props = {
  amtInStock: Number;
};

const QuantityTag: React.FC<Props> = ({ amtInStock }) => {
  if (amtInStock === 0) {
    var color = "grayDark";
    var soldOut = true;
  } else if (amtInStock < 3) {
    var color = "danger";
  } else if (amtInStock < 6) {
    var color = "warning";
  } else {
    var color = "success";
  }

  return <Tag color={color}>{soldOut ? "Sold Out" : amtInStock}</Tag>;
};

export default QuantityTag;

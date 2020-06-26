import * as React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import styled from "styled-components";
import { IoIosClose as CloseIcon } from "react-icons/io";

type Props = {
  imageSrc: string;
  imageAlt: string;
  show: boolean;
  close: () => void;
};

const StyledOverlay = styled(DialogOverlay)`
  background: hsla(0, 0, 0, 0.9);
`;

const StyledModal = styled(DialogContent)`
  box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
  background: ${(props) => props.theme.black};
  position: relative;
  border-radius: 10px;
  padding-top: 50px;
  width: 1000px;
  max-width: 90vw;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
`;

const ImageModal: React.FC<Props> = ({ imageSrc, imageAlt, show, close }) => {
  return (
    <StyledOverlay allowPinchZoom={true} isOpen={show} onDismiss={close}>
      <StyledModal aria-labelledby={imageAlt}>
        <CloseButton onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <CloseIcon size={44} />
        </CloseButton>
        <Image src={imageSrc} alt={imageAlt} />
      </StyledModal>
    </StyledOverlay>
  );
};

export default ImageModal;

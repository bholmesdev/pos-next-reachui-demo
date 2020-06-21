import * as React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import ImageModal from "./ImageModal";
import PurchaseForm from "./PurchaseForm";

const Product = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.hgroup`
  grid-column: 1 / -1;

  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 20px;
    font-weight: normal;
  }
`;

const Photos = styled.div`
  grid-row: 2 / span 2;

  img {
    width: 100%;
  }
`;

const ClickablePhoto = styled.button`
  border: none;
  background: ${(props) => props.theme.black};
  padding: 0;
  cursor: pointer;
`;

const OversizedCrewneck: React.FC<Props> = ({ itemInfo }: Props) => {
  const [photoModalShowing, setPhotoModalShowing] = React.useState(false);
  const [photoModalImage, setPhotoModalImage] = React.useState({
    src: "",
    alt: "",
  });

  const showPhotoModal = (imageSrc, imageAlt) => {
    setPhotoModalShowing(true);
    setPhotoModalImage({ src: imageSrc, alt: imageAlt });
  };

  return (
    <Product>
      <Header>
        <h1>{itemInfo.name}</h1>
        <h2>{itemInfo.brand}</h2>
      </Header>
      <Photos>
        {itemInfo.images.map(({ src, alt }) => (
          <ClickablePhoto onClick={() => showPhotoModal(src, alt)}>
            <img src={src} alt={alt} />
          </ClickablePhoto>
        ))}
      </Photos>
      <div>
        <PurchaseForm price={itemInfo.price} sizing={itemInfo.sizing} />
        <section
          dangerouslySetInnerHTML={{ __html: itemInfo.description }}
        ></section>
        <ImageModal
          imageSrc={photoModalImage.src}
          imageAlt={photoModalImage.alt}
          show={photoModalShowing}
          close={() => setPhotoModalShowing(false)}
        />
      </div>
    </Product>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch("http://localhost:3000/api/women");
  const itemInfo = await res.json();

  return { props: { itemInfo } };
};

export default OversizedCrewneck;
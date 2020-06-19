import Head from "next/head";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { headerText } from "./shared/styles";

const ShopCategories = styled.section`
  display: grid;
  gap: 20px;
  margin: auto;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  a {
    ${headerText}
    height: 200px;
    position: relative;
    text-decoration: none;
    color: white;
    overflow: hidden;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: -1;
      transition: transform 0.2s, opacity 0.2s;
    }

    :hover > img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Collections</title>
      </Head>
      <h1>Shop</h1>

      <ShopCategories>
        <Link href="/women">
          <a>
            Women
            <img
              src="/images/women.jpg"
              alt="Woman wearing Peloton fitness bra"
            />
          </a>
        </Link>
        <Link href="/men">
          <a>
            Men
            <img
              src="/images/men.jpg"
              alt="Man with gray Peloton sports shirt"
            />
          </a>
        </Link>
        <Link href="/accessories">
          <a>
            Accessories
            <img
              src="/images/accessories.jpg"
              alt="Woman wearing blue Peloton backpack"
            />
          </a>
        </Link>
      </ShopCategories>
      <p>Hi!</p>
    </main>
  );
};

export default Home;

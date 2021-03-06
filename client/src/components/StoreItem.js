import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
const StoreItem = ({ item, company }) => {
    const {
        _id,
        name,
        price,
        bodyLocation,
        category,
        imageSrc,
        numInStock,
        companyId,
    } = item;

    const { _id: companyIdNum, name: companyName, url, country } = company;
    

    return (
        <Wrapper>
        <ItemContent>
            <ImageWrapper>
            <Image alt="item" src={imageSrc} />
            </ImageWrapper>
            <StyledNavLink exact to={`/products/${_id}`}>{name}</StyledNavLink>
            <Title>{companyName}</Title>
            <Price>{price}</Price>
            <p style={{ color: "black", margin: 0 }}>Category: {category}</p>
            {numInStock === 0 ? (
            <>
                <Stock>Out of stock</Stock>
                <BtnWrapper>
                <Add
                    disabled
                
                >
                    Out of stock
                </Add>
                </BtnWrapper>
            </>
            ) : (
            <>
                <Stock>{numInStock} left in stock</Stock>
                <BtnWrapper>
                <ButtonLink to={`/products/${_id}`}>
                    More info
                </ButtonLink>
                
                </BtnWrapper>
            </>
            )}
        </ItemContent>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    padding: 10px;
    background: #fff;
    box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
        3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
        3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
        3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    text-align: center;
    /* height: fit-content; */
    display: flex;
    flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
 cursor: pointer;
 text-decoration: underline;
 color: black;
 `;
const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ButtonLink = styled(Link)`
position: relative;
    display: block;
    width: 100%;
    border-radius: 4px;
    background: #0046be;
    color: white;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    :hover {
        background-color: #001e73;
    }
`;

const ImageWrapper = styled.div`
    border-radius: 12px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    padding: 2px;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    align-self: center;
    height: auto;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: black;
`;

const Price = styled.h2`
    margin: 0;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 18px;
    font-weight: 600;
    color: black;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Stock = styled.p`
    margin: 0;
`;

//sold out button
const Add = styled.button`
    position: relative;
    display: block;
    width: 100%;
    border-radius: 4px;
    background: black;
    color: white;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    :hover {
        background-color: #808080;
        opacity: 0.7;
    }
`;

export default StoreItem;
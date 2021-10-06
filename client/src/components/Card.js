import React from 'react'
import styled from 'styled-components'

const Card = ({post}) => {
    return (
        <CardContainer>
            <Title>{post.title}</Title>
            <Author>{post.author}</Author>
            <Body>{post.body}</Body>
        </CardContainer>
    )
}

const CardContainer = styled.div`
width: 300px;
text-align: center;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
background-color: #fff;
padding: 1rem;
margin-left: 1rem;
margin-bottom: 1rem;
`;

const Title = styled.div`
font-size: 1rem;
font-weight: 700;
margin-bottom: 1rem;
`;

const Author = styled.div`
font-size: 0.7rem;
margin-bottom: 1rem;
`;

const Body = styled.div`
font-size: 0.9rem;
`;

export default Card

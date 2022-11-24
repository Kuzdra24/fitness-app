import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 10rem;   
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    margin-top: 35px;
    .wrapper-info{
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 7;
        align-items: align-start;
        ul{
            margin: 20px;
        }
        h3{
            margin-bottom: 20px;
        }
        
    }
`

const BackgroundElement = styled.div`
    background-color: ${({bg}) => bg};
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
    border-radius: 30px 0 0 30px;
    padding: 20px; 
    transition: 0.5s ease-out;
 
    &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    transform: translateX(1em) scaleX(1.4) ;

  }
`

export const Workout = ({name,target,exercises,bg}) => {
  return (
    <Wrapper>
        <BackgroundElement bg={bg}>
            <h2>{name}</h2>
        </BackgroundElement>
        <div className='wrapper-info'>
            <h3>{target}</h3>
            <ul>{exercises}</ul>
        </div>
        
    </Wrapper>
  )
}

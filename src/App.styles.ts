import styled from "styled-components";

export const Container = styled.div`
    background-color: #17181f;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Area = styled.div`
    margin: auto;
    padding: 10px;
    width: 35%;
    max-height: 80%;
    position: fixed;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    overflow: hidden;
    z-index: 10;
    backdrop-filter: blur(35px);
    border-top: 1px solid rgba(255, 255, 255, 0.02);
    border-left: 1px solid rgba(255, 255, 255, 0.02);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
`;

export const AreaT = styled.div`
    overflow: auto;
    padding: .5rem;
    border-radius: 1rem;
    min-height: 15%;
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ball = styled.div`
    content: '';
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(#633974,#1B4F72);
    clip-path: circle(22% at 30% 20%);
    animation: anime 5s linear infinite;
`;

export const Header = styled.h2`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
`;

export const ContainerBotton = styled.div`
    margin: 5px 0;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Bottons = styled.span`
    margin: 0 ;
    padding: .1rem 1.5rem;
    color: tomato;
    background: transparente;
    border: .1rem solid tomato;
    border-radius: .5rem;

    &:hover {
        background: tomato;
        color: #000;
    }
`;
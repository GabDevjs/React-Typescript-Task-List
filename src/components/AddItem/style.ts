import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;

    .text {
        i {
            margin-right: 1rem;
            font-size: 20px;
            color: rgba(255, 255, 255, 0.8);
            z-index: -1;
        }
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        width: 100%;
    }
`;
import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(`
    display: flex;
    background-color: rgba(255, 255, 255, 0.09);
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;

    label{
        color: rgba(255, 255, 255, 0.8);
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input{
        width: 25px;
        height: 25px;
        margin-right: .5rem;

        &::focus {
            color: red;
        }
    }
`));
    
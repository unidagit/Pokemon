import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.white.lighter};
  flex-wrap: wrap;
  gap: 1em;
`;

export const CardItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  padding: 20px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.black.darker};
  min-height: 200px;
  flex-grow: 1;
`;

export const CardInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemNumber = styled.li`
  font-size: 2em;
  font-weight: bold;
`;

export const ItemName = styled.li`
  font-size: 1.9em;
  font-weight: bold;
  color: ${(props) => props.theme.yellow.basic};
`;

export const ItemImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12em;
  filter: grayscale(100%);
  &:hover {
    cursor: pointer;
    filter: grayscale(0);
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

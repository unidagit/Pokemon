import styled from "styled-components";

function TopButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContainer>
      <ScrollTopButton onClick={scrollTop} type="button">
        Top
      </ScrollTopButton>
    </ScrollContainer>
  );
}

export default TopButton;

const ScrollContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;

const ScrollTopButton = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: ${(props) => props.theme.red.basic};
  color: ${(props) => props.theme.white.darker};
  border: 2px solid ${(props) => props.theme.white.darker};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.yellow.basic};
    background-color: ${(props) => props.theme.black.darker};
  }
`;

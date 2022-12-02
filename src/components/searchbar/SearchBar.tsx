import styled from "styled-components";
import { ISearch } from "../../interfaces/interface";

function SearchBar({ onChange, value, onSubmit, onReset }: ISearch) {
  const searchOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    onReset();
  };

  return (
    <Container onSubmit={searchOnSubmit}>
      <SearchInput
        type="text"
        onChange={onChange}
        value={value}
        placeholder="포켓몬 이름 또는 번호를 검색해보세요."
      />
      <SearchButton type="submit" onClick={onSubmit}>
        Search
      </SearchButton>
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  display: flex;
  align-items: center;
  margin: 10px 0 50px 0;
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 5rem;
  border: 3px solid ${(props) => props.theme.black.darker};
  height: 50px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0.8rem;
`;

const SearchButton = styled.button`
  padding: 0.8rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.black.darker};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.yellow.basic};
  }
`;

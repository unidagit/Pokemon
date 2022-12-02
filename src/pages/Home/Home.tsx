import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getSearchPokemon } from "../../apis/api";
import SearchBar from "../../components/searchbar/SearchBar";
import { IDetailPokemon } from "../../interfaces/interface";

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [value, setValue] = useState("");

  //검색하면 나오는 데이터
  const { data: pokeSearchData } = useQuery<IDetailPokemon>(
    ["pokemon", pokemonName],
    () => getSearchPokemon(`${pokemonName}`)
  );
  console.log(pokeSearchData);

  const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const searchOnSubmit = () => {
    setPokemonName(value);
  };

  const onReset = () => {
    setValue("");
  };

  return (
    <Wrapper>
      <Container>
        <SearchBar
          onChange={searchOnChange}
          value={value}
          onReset={onReset}
          onSubmit={searchOnSubmit}
        />
      </Container>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  min-width: 550px;
  max-width: 850px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px;
`;

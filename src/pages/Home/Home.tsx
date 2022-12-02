import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getPokemon, getSearchPokemon } from "../../apis/api";
import PokemonList from "../../components/pokemonList/PokemonList";
import SearchBar from "../../components/searchbar/SearchBar";
import { IDetailPokemon, IListPokemon } from "../../interfaces/interface";
import PokemonSearchCard from "../../components/pokemonSearchCard/PokemonSearchCard";

function Home() {
  const [pokemonName, setPokemonName] = useState(""); //서버에 보낼 이름
  const [value, setValue] = useState(""); //검색창에 적히는 문자

  //검색하면 나오는 데이터
  const { data: pokeSearchData, isLoading: isSearchLoading } =
    useQuery<IDetailPokemon>(["pokemon", pokemonName], () =>
      getSearchPokemon(`${pokemonName}`)
    );

  //포켓몬 홈 리스트
  const { data: pokeListData, isLoading: isListLoading } =
    useQuery<IListPokemon>("pokemonList", getPokemon);

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
        {isListLoading || isSearchLoading ? (
          <Loader>포켓몬 찾는중...</Loader>
        ) : pokeSearchData === undefined ? (
          <Loader>{pokemonName}에 대한 검색 결과가 없습니다.</Loader>
        ) : (
          <SearchResult>
            {pokeSearchData.id ? (
              <PokemonSearchCard
                id={pokeSearchData.id}
                name={pokeSearchData.name}
                image={pokeSearchData.sprites?.front_default}
              />
            ) : (
              <>
                {pokeListData && //포켓몬리스트를 만들고 홈에서 리스트를 호출?? 리스트 안에 카드 아이템만들기
                  pokeListData?.results?.map((pokemon: any) => (
                    <PokemonList key={pokemon.name} name={pokemon.name} />
                  ))}
              </>
            )}
          </SearchResult>
        )}
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

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const SearchResult = styled.div``;

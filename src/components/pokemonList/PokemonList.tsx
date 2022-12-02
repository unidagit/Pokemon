import { useQuery } from "react-query";
import { getPokemonImg } from "../../apis/api";
import { IDetailPokemon } from "../../interfaces/interface";
import {
  CardContainer,
  CardInfo,
  CardItem,
  ItemImg,
  ItemName,
  ItemNumber,
} from "../../styles/commonStyle";

interface IListName {
  name: string;
  key: string;
}

function PokemonList({ name }: IListName) {
  //리스트화면에 띄울 데이터
  const { data: pokeListImgData } = useQuery<IDetailPokemon>(
    ["pokemonListImg", name],
    () => getPokemonImg(`${name}`)
  );

  return (
    <CardContainer>
      <CardItem>
        <CardInfo>
          <ItemNumber>{name}</ItemNumber>
          <ItemName># {pokeListImgData?.id}</ItemName>
        </CardInfo>
        <ItemImg src={pokeListImgData?.sprites.front_default} alt={name} />
      </CardItem>
    </CardContainer>
  );
}

export default PokemonList;

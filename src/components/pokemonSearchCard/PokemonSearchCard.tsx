import {
  CardContainer,
  CardInfo,
  CardItem,
  ItemImg,
  ItemName,
  ItemNumber,
} from "../../styles/commonStyle";

interface IPokemon {
  id: number;
  name: string;
  image: string;
}

function PokemonSearchCard({ name, id, image }: IPokemon) {
  return (
    <CardContainer>
      <CardItem>
        <CardInfo>
          <ItemNumber>{name}</ItemNumber>
          <ItemName># {id}</ItemName>
        </CardInfo>
        <ItemImg src={image} alt={name} />
      </CardItem>
    </CardContainer>
  );
}

export default PokemonSearchCard;

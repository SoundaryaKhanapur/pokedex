import './Pokecard.css';

interface Pokecard {
    spritUrl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;

}

const Pokecard = ({ spritUrl, name, onPokemonClick }: Pokecard) => {
    return (
        <div onClick={() => onPokemonClick(name)} className="pokecard">
            {/* image here */}
            <img className="pokemon-sprite" alt="pokemon" src={spritUrl} />
            <p>{name}</p>
        </div>
    )
}

export default Pokecard;
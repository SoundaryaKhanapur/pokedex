import { PokemonSchema } from '../../types/PokemonSchema';
import Pokecard from '../Pokecard/Pokecard';
import './Pokelist.css';

interface Pokelist {
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}
const Pokelist = ({ searchedPokemons, onPokemonClick }: Pokelist) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) => {
                    return (
                        pokemon.name && (
                            <Pokecard
                                onPokemonClick={onPokemonClick}
                                key={pokemon.id}
                                name={pokemon.name}
                                spritUrl={pokemon.sprites.normal}
                            />
                        )

                    )


                })
            }
        </div>
    )
}

export default Pokelist;
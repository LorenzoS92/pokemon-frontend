import React from "react";

function PokemonInfoBox(props) {
    return (
        <div role="main" className="pokemon-info-box">
            <img role="figure" className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={props.pokemonData.sprite}
                 alt="Pokemon sprite"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.pokemonData.name}
                        </p>
                        <p className="text-gray-500 font-medium">
                            {props.pokemonData.description}
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default PokemonInfoBox;
import logo from '../pokemon_logo.svg';
import Button from "./Base/button";
import Input from "./Base/input";

function PokemonSearch() {
    return React.createElement(
        "div",
        { className: "flex flex-col items-center space-y-10 pt-20 space-x-4" },
        React.createElement("img", { alt: "Pokemon logo", src: logo }),
        React.createElement(
            "div",
            null,
            React.createElement(Input, {
                ariaLabel: "Type a Pokemon",
                styles: "input-search-rounded p-6",
                type: "search",
                name: "search",
                placeholder: "Type a Pokemon"
            }),
            React.createElement(Button, {
                styles: "btn btn-blue btn-search-rounded ml-3 p-3",
                onClick: function onClick() {
                    return searchPokemon();
                },
                children: "Search"
            })
        )
    );
}

function searchPokemon() {
    alert('hi');
}

export default PokemonSearch;
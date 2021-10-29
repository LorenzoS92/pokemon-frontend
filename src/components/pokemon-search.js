import logo from '../pokemon_logo.svg';
import React from "react";
import PokemonSearchForm from "./pokemon-search-form";
import PokemonInfoBox from "./pokemon-info-box";

class PokemonSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', apiError: null};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleApiCallback = (data, error) => {
        if (error != null) {
            this.setState({apiError: error.message});
        } else {
            this.setState({pokemonData: data});
            this.setState({apiError: null});
        }
    }

    render() {
        return <div className="pokemon-search">
            <img alt="Pokemon logo" src={logo}/>
            <PokemonSearchForm apiCallback={this.handleApiCallback}/>
            {this.state.apiError !== null && (
                <div className="red-alert" role="alert">
                    <strong className="font-bold">Something bad happened</strong>
                    <span className="sm:inline">API error: {this.state.apiError}</span>
                </div>
            )}

            {this.state.pokemonData != null && this.state.apiError === null && (
                <PokemonInfoBox
                    pokemonData={this.state.pokemonData}
                />
            )
            }
        </div>
    }
}

export default PokemonSearch;

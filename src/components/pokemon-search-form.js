import Button from "./Base/button";
import React from "react";

class PokemonSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', loading: false};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchPokemon()
        }
    }

    updateLoading = (status) => {
        this.setState({loading: status});
    }

    searchPokemon = () => {
        this.updateLoading(true);
        let endpoint = process.env.REACT_APP_POKEMON_API_BACKEND_ENDPOINT + this.state.value;
        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Pokemon not found from API");
                }
                return response.json()
            }).then((data) => {
                if (data === null) {
                    throw new Error("Pokemon not found from API");
                }
                this.props.apiCallback(data, null)
            }
        ).catch((error) => {
            this.props.apiCallback(null, error)
            return Promise.reject()
        }).finally(() => {
            this.updateLoading(false);
        });
    }

    render() {
        return <div className="items-center">
            <input role="searchbox"
                   aria-label="Type a Pokemon"
                   value={this.state.value}
                   name="search"
                   onKeyPress={this.handleKeyPress}
                   type="search"
                   placeholder="E.g. Pikachu"
                   onChange={this.handleChange}
                   className="input-search-rounded p-6"/>
            <Button role="button"
                    styles="btn btn-blue btn-search-rounded ml-3 p-3 inline-flex"
                    onClick={() => this.searchPokemon()}
                    children="Search"
                    loading={this.state.loading}
            />
        </div>
    }
}

export default PokemonSearchForm;

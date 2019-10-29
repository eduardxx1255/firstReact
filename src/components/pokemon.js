import React from "react";


class Pokemon extends React.Component {
    state = {
        inputText: "",
        pokemon: null,
    };

    getApi = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.inputText}`)
            .then(response => response.json())
            .then(json => this.setState({
                pokemon: json,
            }));
    };

    inputHandler = (e) => this.setState({ inputText: e.target.value });

    render() {
        console.log(this.state)
        return (
            <div class="poke">
                <h2>Introduce un número</h2>
                <input class="numeropkm" type="text" onChange={this.inputHandler}></input>
                <button type="button" onClick={this.getApi} style={{ margin: "20px" }}>
                    Show me the pokemon
                </button>
                {this.state.pokemon && <section id="datospkm">
                    <h3>Este es tu pokemon </h3>

                    {<p>Pokemon #{this.state.pokemon && this.state.pokemon.id}</p>}
                    {<p>Nombre: {this.state.pokemon && this.state.pokemon.name}</p>}
                    {<img src={this.state.pokemon && this.state.pokemon.sprites.front_default} alt=""></img>}
                </section>}
            </div>
        )
    }
}

export default Pokemon;

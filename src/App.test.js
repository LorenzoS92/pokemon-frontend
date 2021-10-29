import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    rest.get('http://localhost/api/pokemon/pikachu', (req, res, ctx) => {
        return res(ctx.json({
            "name": "Pikachu",
            "description": "Likes to relax",
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders all elements', () => {
    render(<App/>);
    const pokemonLogo = screen.getByAltText(/Pokemon logo/i);
    const searchboxPokemon = screen.getByRole('searchbox');
    const buttonSearchPokemon = screen.getByRole("button");

    expect(pokemonLogo).toBeInTheDocument();
    expect(searchboxPokemon).toBeInTheDocument();
    expect(buttonSearchPokemon).toBeInTheDocument();
});

test('search for a Pokemon by pressing in button', async () => {
    render(<App/>);

    const searchboxPokemon = screen.getByRole('searchbox');
    const buttonSearchPokemon = screen.getByRole("button");

    fireEvent.change(searchboxPokemon, {target: {value: 'pikachu'}})
    fireEvent.click(buttonSearchPokemon)

    await waitFor(() => screen.getByRole('main'))

    expect(screen.getByRole('main')).toHaveTextContent('Pikachu')
    expect(screen.getByRole('main')).toHaveTextContent('Likes to relax')
    expect(screen.getByRole('figure')).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')
});

test('search for a Pokemon by pressing enter (accessibility)', async () => {
    render(<App/>);

    const searchboxPokemon = screen.getByRole('searchbox');

    fireEvent.change(searchboxPokemon, {target: {value: 'pikachu'}})
    fireEvent.keyPress(searchboxPokemon, { key: "Enter", code: 13, charCode: 13 });

    await waitFor(() => screen.getByRole('main'))

    expect(screen.getByRole('main')).toHaveTextContent('Pikachu')
    expect(screen.getByRole('main')).toHaveTextContent('Likes to relax')
    expect(screen.getByRole('figure')).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')
});
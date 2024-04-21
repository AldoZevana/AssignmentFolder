const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const pokémonDivisibleBy3 = pokémon.filter(pokemon => pokemon.id % 3 === 0).map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types
    }));
        console.log(pokémonDivisibleBy3);
    const pokémonFireType = pokémon.filter(pokemon => pokemon.types.includes("fire"));
        console.log(pokémonFireType);
    const pokémonWithMultipleTypes = pokémon.filter(pokemon => pokemon.types.length > 1);
        console.log(pokémonWithMultipleTypes);
    const pokémonNames = pokémon.map(pokemon=>({
        names:pokemon.name
    }));
        console.log(pokémonNames);
    const pokémonGreat99 = pokémon.filter(pokemon => pokemon.id >99 );
        console.log(pokémonGreat99);
    const pokémonPoisonType = pokémon.filter(pokemon => pokemon.types==("poison"));
        console.log(pokémonPoisonType);
    const pokémonSecondFlying = pokémon.filter(pokemon => pokemon.types[1]==("flying"));
        console.log(pokémonSecondFlying);
    const pokémonCount = pokémon.filter(pokemon=> pokemon.types.includes("normal")).length;
        console.log(pokémonCount);
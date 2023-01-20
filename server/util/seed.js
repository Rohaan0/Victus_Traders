let cards = [
    {
        name: "Spike Colony",
        manaCost: 5,
        types: "Creature --- Spike",
        cardText: "Colony enters the battlefield with four +1/+1 counters on it. 2, Remove a +1/+1 counter from a Spike Colony: Put a +1/+1 counter on target creature.",
        flavorText: "",
        pt: '0/0',
        expansion: 'Stronghold',
        rarity: 'common',
        artist: "douglas shuler",
        rating: 3,
        price: 0.25
    },
    {
        name: 'Sandstone Oracle',
        manaCost: 7,
        types: 'Artifact Creature --- Sphinx',
        cardText: 'Flying When Sandstone Oracle enters the battlefield, choose an opponent. If that player has more cards in hand than you, draw cards equal to the difference.',
        flavorText: "",
        pt: '4/4',
        expansion: 'Iconic Masters',
        rarity: 'Uncommon',
        artist: 'Izzy',
        rating: 5,
        price: 0.75
    },
    {
        name: 'Mox Ruby',
        manaCost: 0,
        types: 'Artifact',
        cardText: 'Add 1 red mana to your mana pool. Tapping this artifact can be played as an interrupt',
        flavorText: "",
        pt: "",
        expansion: 'Unlimited Edition',
        rarity: 'Rare',
        artist: 'Dan Frazier',
        rating: 5,
        price: 1.00
    },
    {
        name: "Elminister's Simulacrum",
        manaCost: 6,
        types: 'Instant',
        cardText: "For each opponent you create a token that's a copy of up to one target creature that player controls.",
        flavorText: "",
        pt: "",
        expansion: "Commander Legends: Battler for Baldur's Gate",
        rarity: 'Mythic Rare',
        artist: 'Irina Nordsol',
        rating: 5,
        price: 10.50
    },
    {
        name: "Blightsoil Druid",
        manaCost: 2,
        types: "Creature --- Elf Druid",
        cardText: "->, Pay 1 life: Add land to your mana pool.",
        flavorText: "See the beauty in death: the clean white bones lying in the fertile soil and the brightly colored moonglove sprouting from the fell earth.",
        pt: '1/2',
        expansion: 'Eternal Masters',
        rarity: 'Common',
        artist: 'Nils Hamm',
        rating: 5,
        price: 0.75
    },
    {
        name: "Rally to Battle",
        manaCost: 4,
        types: 'instant',
        cardText: "Creatures you control get +1/+3 until end of turn. Untap them.",
        flavorText: "The guildmasters loom large in the political sphere, but in the end, the rulers of Ravnica are its people.",
        pt: '',
        expansion: "Ravnica Allegiance",
        rarity: "Uncommon",
        artist: "Ben Wooten",
        rating: 5,
        price: 1.00
    },
    {
        name: "Godless Shrine",
        types: "Land --- Plains Swamp",
        cardText: "As Godless Shrine enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.",
        pt: '',
        expansion: "Zendikar Expeditions",
        rarity: "Mythic Rare",
        artist: "Noah Bradley",
        rating: 5,
        price: 25.00
    },
    {
        name: "Black Vise",
        types: "Artifact",
         cardText: "As Black Vise enters the battlefield, choose an opponent. At the beginning of the chosen player's upkeep, Black Vise deals X damage to that player, where X is the number of cards in their hand minus 4.",
        pt: '',
        expansion: "MasterPiece Series: Kaladesh Interventions",
        rarity: "Special",
        artist: "Igor Kieryluk",
        rating: 5,
        price: 48.00
    }

]



let photos = [
    {
        cardId: 1,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=5238&type=card",
        primaryPhoto: true
    },
    {
        cardId: 2,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=497856&type=card",
        primaryPhoto: true
    },
    {
        cardId: 3,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=632&type=card",
        primaryPhoto: true
    },
    {
        cardId: 4,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=569976",
        primaryPhoto: true
    },
    {
        cardId: 5,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413622&type=card",
        primaryPhoto: true
    },
    {
        cardId: 6,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457162&type=card",
        primaryPhoto: true
    },
    {
        cardId: 7,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405099&type=card",
        primaryPhoto: true
    },
    {
        cardId: 8,
        url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=425803&type=card",
        primaryPhoto: true
    }
]






const seed = async () => {
    const {Card, Photo} = require('./models')
    await Card.bulkCreate(cards)
    await Photo.bulkCreate(photos)
    console.log('------Seed Complete------')
}

module.exports = seed
let smashlist = document.getElementById("smashlist")
let factionName = document.getElementById('factionName')
let mainDiv = document.getElementById('mainDiv')

let cardData = [
    {
        cardName: "Ancient Curse",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a Minion. You May Remove a +1 power counter from it. Ongoing: This Minion has -2 power.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2,
        owned: true,
        favorite: false,
        cardSet: "Oops, You did it again" 
    },

    {
        cardName: "Angry Mob",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions. Place any number of cards from your hand on the bottom of your deack. For each card you placed there, place +1 power counter on that minion.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Archmage",
        cardPower: 4,
        cardType: "Action",
        cardText: "Ongoing: You may play an extra action on each of your turns.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Argonaut",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Trigger all abilities that would trigger from you planning an action. Special: Any time you can play an action, you can play this card instead.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 4,
        owned: false,
        favorite: false,
        cardSet: "It's your fault"
    },

    {
        cardName: "Armor Stego",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Ongoing: Has +2 power during other player's turns.",
        cardFaction: "Dinosaurs",
        numberInFaction: 3,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Augmentation",
        cardPower: 0,
        cardType: "Action",
        cardText: "One Minion gains +4 power until the end of your turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Blessing of Anubis",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, your minions here each gain +2 power until the end of the turn.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, You did it again"
    },

    {
        cardName: "Blitzed",
        cardPower: 0,
        cardType: "Action",
        cardText: "Remove any number of +1 power counters from your minions. Destroy a minion with power less than or equal to the number of counters you removed.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Body Shop",
        cardPower: 0,
        cardType: "Action",
        cardText: "Destroy one of your minions. Place a number of +1 power counters equal to that minion's power, split any way you choose, on your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Bring Down the Walls",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: Before this base Scores, you may play a minion here.",
        cardFaction: "Dragons",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Burn it Down",
        cardPower: 0,
        cardType: "Action",
        cardText: "Destroy a base and any actions played on it. Replace it with the top card of the base deck or a base from the discard pile. All minions from the original base remain.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Chronomage",
        cardPower: 3,
        cardType: "Minion",
        cardText: "You may play an extra action this turn.",
        cardFaction: "Wizards",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Dangerous Ground",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: Other Players must discard a card to playa minion here.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Dragon Lands",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: Your minions here have +1 power. Special: Before a base scores, you may play this card there.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Enchantress",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Draw a card.",
        cardFaction: "Wizards",
        numberInFaction: 3,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Favor of Aphrodite",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play an extra minion.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1, 
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Apollo",
        cardPower: 0,
        cardType: "Action",
        cardText: "Draw a card and play an extra action",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Athena",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reveal the top 5 cards of your deck. You may place one of the revealed actions into your hand, and return the rest to the top of your deck in any order.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Ares",
        cardPower: 0,
        cardType: "Action",
        cardText: "One of your minions gains +3 power until the end of the turn",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Dionysus",
        cardPower: 0,
        cardType: "Action",
        cardText: "One of your minions gains +1 power until the end of the turn. Play an extra action. You may place this card on top of your deck instead of the discard pile.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Hades",
        cardPower: 0,
        cardType: "Action",
        cardText: "Place an action card from your discard pile into your hand.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Hera",
        cardPower: 0,
        cardType: "Action",
        cardText: "Place a +1 counter on up to two of your minions.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Hermes",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play two extra actions",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Posideon",
        cardPower: 0,
        cardType: "Action",
        cardText: "Shuffle up to three cards from you discard pile into your deck.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Favor of Zeus",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reduce the breakpoint by 5 until the end of the turn.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Flank Attack",
        cardPower: 0,
        cardType: "Minion",
        cardText: "Search your deck and/or discard pile for an action that can be played on a base and play it as an extra action. Shuffle your deck if you searched it.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "German Engineering",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on base. Ongoing: After you play a minion here, place a +1 power counter on it.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Grave Situation",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: After one of your minions is destroyed here, place it into your hand instead of the discard pile.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Great Wyrm",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Ongoing: Other players here are awarded 1 less VP from this base when it scores.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Hatchling",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Ongoing: After another player plays or moves a minion here, it gets -1 power until the end of turn.",
        cardFaction: "Dragons",
        numberInFaction: 4,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Heracles",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Ongoing: After any player plays an action, this minion gains +1 power until the end of turn.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Herr Doctor",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Talent: Place a +1 power counter on another one of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Howl",
        cardPower: 0,
        cardType: "Action",
        cardText: "Each of your Minions gains +1 until the end of the your turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Igor",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Ongoing: After this minion is destroyed or discarded, place a +1 counter on one of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 4,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Imperial Dragon",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Ongoing: After another player plays or moves a minion here, draw a card.",
        cardFaction: "Dragons",
        numberInFaction: 3,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Intimidating Presence",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: Other players' minions here have -1 power. Special: Before a base scores, you may play this card there.",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "It's Alive",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play an extra minion. Place +1 power counter on it.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Jason",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Ongoing: After the first time you play an action each turn, choose a base. All of your minions there gain +1 power until the end of the turn.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,

    },

    {
        cardName: "Jolt",
        cardPower: 0,
        cardType: "Action",
        cardText: "Place a +1 power counter on each of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "King Rex",
        cardPower: 7,
        cardType: "Minion",
        cardText: "",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Lab Assistant",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Place +1 power counter on another one of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 3,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Lasertops",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Destroy a minion of power 2 on this base.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Lost Knowledge",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury a card from your hand OR uncover one of your buried cards. Special: You may play this card before a base scores.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Mass Enchantment",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reveal the top card of each other player's deck. Play one revealed action as an extra action. Return unused cards to the top of their decks.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Mystic Studies",
        cardPower: 0,
        cardType: "Action",
        cardText: "Draw two cards",
        cardFaction: "Wizards",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Mummy",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Ongoing: After this base scores, you may bury this minion on another base.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 4,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Mummy Strength",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions. If there is a card buried on its base, it gains +3 power until the end of the turn, otherwise it gains +2 power until the end of the turn.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Natural Selection",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions on a base. Destroy a minion there with less power than yours.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Neophyte",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Reveal the top card of your deck. If it is an action, you may place it in your hand or play it as an extra action. Otherwise, return it to the top of your deck.",
        cardFaction: "Wizards",
        numberInFaction: 4,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Odysseus",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Ongoing: After you play an action, place a +1 power counter on one of your minions.",
        cardFaction: "Mythic Greeks",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Pharaoh",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Ongoing: After another buried card is uncovered, draw a card. Special: Before this base scores, you may uncover one of your buried cards here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Plague of Locusts",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose a base. All other player's minions there get -1 power until the end of the turn. Special: You may play this before a base scores.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Portal",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reveal the top five cards of your deck. Place any number of minions revealed into your hand. Return the other cards to the top of your deck in any order.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Priest of Anubis",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Ongoing: This minion has +2 if you have a card buried here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Pyramid Engineer",
        cardPower: 3,
        cardType: "Minion",
        cardText: "You may uncover one of your buried cards here. Talent: Bury a card from your hand here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 3,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Rampage",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reduce the breakpoint of a base by the power of your minions on that base until the end of the turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Raze",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: This base's ability is cancelled",
        cardFaction: "Dragons",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Ruins",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: Other players here are awarded 1 less VP from when it scores.",
        cardFaction: "Dragons",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "Sacrifice",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose on of your minions. Draw cards equal to its power. Destroy that minion.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Scry",
        cardPower: 0,
        cardType: "Action",
        cardText: "Search your deck for an action and reveal it to all players. Place it into your hand and shuffle your deck.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Seal the Tomb",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury up to two cards from your hand on the same base OR uncover up to two of your buried cards on the same base.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Spartan",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Ongoing: Place a +1 power counter on this minion after the first time that you play an action on your turn",
        cardFaction: "Mythic Greeks",
        numberInFaction: 3,
        owned: false,
        favorite: false,
        cardSet: "It's your Fault"
    },

    {
        cardName: "Summon",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play an extra Minion",
        cardFaction: "Wizards",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Survival of the Fittest",
        cardPower: 0,
        cardType: "Action",
        cardText: "Destroy the lowest-power minion (youchoose in case of a tie) on each base with a higher-power minion.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "The Monster",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Talent: Remove a +1 power counter from this minion to play an extra minion.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Time Loop",
        cardpower: 0,
        cardType: "Action",
        cardText: "Play two extra Actions",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Tomb Trap",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, you may destroy a minion of power 4 or less here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    },

    {
        cardName: "Tooth and Claw... and Guns",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: If an ability would affect this minion, destroy this card and the ability does not affect this minion.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Uberserum",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: At the start of your turn, place a +1 power counter on this minion. This minion cannot be destroyed.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2,
        owned: false,
        favorite: false,
        cardSet: "Monster Smash"
    },

    {
        cardName: "Upgrade",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: This minion has +2 power.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "War Raptor",
        cardPower: 2,
        cardType: "Action",
        cardText: "Ongoing: Gains +1 power for each War Raptor on this base (including this one).",
        cardFaction: "Dinosaurs",
        numberInFaction: 4,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Wildlife Preserve",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: You minions here are not affected by other player's actions.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1,
        owned: true,
        favorite: true,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Winds of Change",
        cardPower: 0,
        cardType: "Action",
        cardText: "Shuffle your hand into your deck and draw five cards. You may play an extra action.",
        cardFaction: "Wizards",
        numberInFaction: 1,
        owned: false,
        favorite: false,
        cardSet: "Core Smash Up"
    },

    {
        cardName: "Wyvern",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Destroy a minion here of power 3 or less. Talent: Reduce the breakpoint of this base by 3 until the end of the turn.",
        cardFaction: "Dragons",
        numberInFaction: 2,
        owned: true,
        favorite: true,
        cardSet: "It's Your Fault"
    },

    {
        cardName: "You can take it with you.",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, draw three cards.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1,
        owned: true,
        favorite: false,
        cardSet: "Oops, you did it again"
    }
]

let factions = []
let chosenFaction = "Ancient Egyptians"
let chosenFaction2 = "Dinosaurs"

function getFactions() {
    cardData.forEach(function(card) {
        console.log(card.cardFaction);
        if (factions.includes(card.cardFaction) == false) {
            factions.push(card.cardFaction)
        }
    })
    console.log(factions)
}

getFactions()

function smashItUp() {
    factionName.textContent = `${chosenFaction} and ${chosenFaction2}`
    smashlist.innerHTML = null;
    cardData.forEach(function(card) {
        console.log(card);
        if (card.cardFaction == chosenFaction || card.cardFaction == chosenFaction2) {
        let newFaction = document.createElement('li')
        newFaction.textContent = card.cardName
        smashlist.appendChild(newFaction)
        } else {
            console.log('Not in the Smash up!')
        }
    })
}

// smashItUp();

function factionSort() {
        factionName.textContent = chosenFaction;
        smashlist.innerHTML = null;
        cardData.forEach(function(card) {
        console.log(card);
        if (card.cardFaction == chosenFaction) {
        let newFaction = document.createElement('li')
        newFaction.textContent = card.cardName
        smashlist.appendChild(newFaction)
        } else {
            console.log('Not in the Smash up!')
        }
    })
}

// factionSort()

function favoriteSort() {
    factionName.textContent = "Favorites"
    smashlist.innerHTML = null;
    let favoriteFactions = [];
    cardData.forEach(function(card) {
        console.log(card.cardFaction);
        if (favoriteFactions.includes(card.cardFaction) == false && card.favorite == true) {
            console.log(card.cardFaction)
            favoriteFactions.push(card.cardFaction)
            let newFaction = document.createElement('li')
            newFaction.textContent = card.cardFaction
            smashlist.appendChild(newFaction)
        }
        
    })
}

// favoriteSort()

function displayOwned() {
    console.log(cardData);
    factionName.textContent = "Collection"
    smashlist.innerHTML = null;
    cardData.forEach(function(card) {
        if (card.owned == true) {
        let newCard = document.createElement('li')
        newCard.textContent = card.cardName
        smashlist.appendChild(newCard)
        }
    })
}

function displayFaction() {
    factionName.textContent = "Factions"
    smashlist.innerHTML = null;
    factions.forEach(function(faction) {
        console.log(faction);
        let newFaction = document.createElement('li')
        newFaction.textContent = faction
        smashlist.appendChild(newFaction)
    })
}

// displayFaction()

function smashList() {
    displayFaction()
    factionName.textContent = "Make a Smash!"
    let smashButton = document.createElement('button')
    smashButton.textContent = "Smash It Up!"
    mainDiv.appendChild(smashButton)
}

smashList()
let cardData = [
    {
        cardName: "Ancient Curse",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a Minion. You May Remove a +1 power counter from it. Ongoing: This Minion has -2 power.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2
    },

    {
        cardName: "Angry Mob",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions. Place any number of cards from your hand on the bottom of your deack. For each card you placed there, place +1 power counter on that minion.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Archmage",
        cardPower: 4,
        cardType: "Action",
        cardText: "Ongoing: You may play an extra action on each of your turns.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Armor Stego",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Ongoing: Has +2 power during other player's turns.",
        cardFaction: "Dinosaurs",
        numberInFaction: 3
    },

    {
        cardName: "Augmentation",
        cardPower: 0,
        cardType: "Action",
        cardText: "One Minion gains +4 power until the end of your turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2
    },

    {
        cardName: "Blessing of Anubis",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, your minions here each gain +2 power until the end of the turn.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    },

    {
        cardName: "Blitzed",
        cardPower: 0,
        cardType: "Action",
        cardText: "Remove any number of +1 power counters from your minions. Destroy a minion with power less than or equal to the number of counters you removed.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Body Shop",
        cardPower: 0,
        cardType: "Action",
        cardText: "Destroy one of your minions. Place a number of +1 power counters equal to that minion's power, split any way you choose, on your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Chronomage",
        cardPower: 3,
        cardType: "Minion",
        cardText: "You may play an extra action this turn.",
        cardFaction: "Wizards",
        numberInFaction: 2
    },

    {
        cardName: "Enchantress",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Draw a card.",
        cardFaction: "Wizards"
    },

    {
        cardName: "German Engineering",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on base. Ongoing: After you play a minion here, place a +1 power counter on it.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Grave Situation",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: After one of your minions is destroyed here, place it into your hand instead of the discard pile.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Herr Doctor",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Talent: Place a +1 power counter on another one of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "Howl",
        cardPower: 0,
        cardType: "Action",
        cardText: "Each of your Minions gains +1 until the end of the your turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2
    },

    {
        cardName: "Igor",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Ongoing: After this minion is destroyed or discarded, place a +1 counter on one of your minions.",
        cardFaction: "Mad Scientist",
        numberInFaction: 4
    },

    {
        cardName: "It's Alive",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play an extra minion. Place +1 power counter on it.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2
    },

    {
        cardName: "Jolt",
        cardPower: 0,
        cardType: "Action",
        cardText: "Place a +1 power counter on each of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 1
    },

    {
        cardName: "King Rex",
        cardPower: 7,
        cardType: "Minion",
        cardText: "",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "Lab Assistant",
        cardPower: 3,
        cardType: "Minion",
        cardText: "Place +1 power counter on another one of your minions.",
        cardFaction: "Mad Scientists",
        numberInFaction: 3
    },

    {
        cardName: "Lasertops",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Destroy a minion of power 2 on this base.",
        cardFaction: "Dinosaurs",
        numberInFaction: 2
    },

    {
        cardName: "Lost Knowledge",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury a card from your hand OR uncover one of your buried cards. Special: You may play this card before a base scores.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    },

    {
        cardName: "Mass Enchantment",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reveal the top card of each other player's deck. Play one revealed action as an extra action. Return unused cards to the top of their decks.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Mystic Studies",
        cardPower: 0,
        cardType: "Action",
        cardText: "Draw two cards",
        cardFaction: "Wizards",
        numberInFaction: 2
    },

    {
        cardName: "Mummy",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Ongoing: After this base scores, you may bury this minion on another base.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 4
    },

    {
        cardName: "Mummy Strength",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions. If there is a card buried on its base, it gains +3 power until the end of the turn, otherwise it gains +2 power until the end of the turn.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    },

    {
        cardName: "Natural Selection",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose one of your minions on a base. Destroy a minion there with less power than yours.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "Neophyte",
        cardPower: 2,
        cardType: "Minion",
        cardText: "Reveal the top card of your deck. If it is an action, you may place it in your hand or play it as an extra action. Otherwise, return it to the top of your deck.",
        cardFaction: "Wizards",
        numberInFaction: 4
    },

    {
        cardName: "Pharaoh",
        cardPower: 5,
        cardType: "Minion",
        cardText: "Ongoing: After another buried card is uncovered, draw a card. Special: Before this base scores, you may uncover one of your buried cards here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    },

    {
        cardName: "Plague of Locusts",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose a base. All other player's minions there get -1 power until the end of the turn. Special: You may play this before a base scores.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    },

    {
        cardName: "Portal",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reveal the top five cards of your deck. Place any number of minions revealed into your hand. Return the other cards to the top of your deck in any order.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Priest of Anubis",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Ongoing: This minion has +2 if you have a card buried here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2
    },

    {
        cardName: "Pyramid Engineer",
        cardPower: 3,
        cardType: "Minion",
        cardText: "You may uncover one of your buried cards here. Talent: Bury a card from your hand here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 3
    },

    {
        cardName: "Rampage",
        cardPower: 0,
        cardType: "Action",
        cardText: "Reduce the breakpoint of a base by the power of your minions on that base until the end of the turn.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "Sacrifice",
        cardPower: 0,
        cardType: "Action",
        cardText: "Choose on of your minions. Draw cards equal to its power. Destroy that minion.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Scry",
        cardPower: 0,
        cardType: "Action",
        cardText: "Search your deck for an action and reveal it to all players. Place it into your hand and shuffle your deck.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Seal the Tomb",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury up to two cards from your hand on the same base OR uncover up to two of your buried cards on the same base.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1

    },

    {
        cardName: "Summon",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play an extra Minion",
        cardFaction: "Wizards",
        numberInFaction: 2
    },

    {
        cardName: "Survival of the Fittest",
        cardPower: 0,
        cardType: "Action",
        cardText: "Destroy the lowest-power minion (youchoose in case of a tie) on each base with a higher-power minion.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "The Monster",
        cardPower: 4,
        cardType: "Minion",
        cardText: "Talent: Remove a +1 power counter from this minion to play an extra minion.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2
    },

    {
        cardName: "Time Loop",
        cardpower: 0,
        cardType: "Action",
        cardText: "Play two extra Actions",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "Tomb Trap",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, you may destroy a minion of power 4 or less here.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 2
    },

    {
        cardName: "Tooth and Claw... and Guns",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: If an ability would affect this minion, destroy this card and the ability does not affect this minion.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "Uberserum",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: At the start of your turn, place a +1 power counter on this minion. This minion cannot be destroyed.",
        cardFaction: "Mad Scientists",
        numberInFaction: 2
    },

    {
        cardName: "Upgrade",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a minion. Ongoing: This minion has +2 power.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "War Raptor",
        cardPower: 2,
        cardType: "Action",
        cardText: "Ongoing: Gains +1 power for each War Raptor on this base (including this one).",
        cardFaction: "Dinosaurs",
        numberInFaction: 4
    },

    {
        cardName: "Wildlife Preserve",
        cardPower: 0,
        cardType: "Action",
        cardText: "Play on a base. Ongoing: You minions here are not affected by other player's actions.",
        cardFaction: "Dinosaurs",
        numberInFaction: 1
    },

    {
        cardName: "Winds of Change",
        cardPower: 0,
        cardText: "Shuffle your hand into your deck and draw five cards. You may play an extra action.",
        cardFaction: "Wizards",
        numberInFaction: 1
    },

    {
        cardName: "You can take it with you.",
        cardPower: 0,
        cardType: "Action",
        cardText: "Bury this card. Special: When this card is uncovered, draw three cards.",
        cardFaction: "Ancient Egyptians",
        numberInFaction: 1
    }
]
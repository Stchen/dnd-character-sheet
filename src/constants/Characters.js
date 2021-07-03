export const Sigmund = {
    name: "Sigmund",
    level: 5,
    maxHealth: 48,
    delayedDamagePool: 10,
    damageResistance: 3,
    maneuvers: [
       //commented out maneuvers means I've chosen not to ready those maneuvers for this day
       {
           name:"Crusader's Strike",
           spellSchool:"Devoted Spirit(Strike)",
           level:"Crusader 1",
           castingTime:"1 standard action",
           range:"Melee attack",
           target:"One creature",
           description:"Divine energy surrounds your weapon as you strike. This power washes over you as your weapon finds its mark, mending your wounds and giving you the strength to fight on.\n\nAs part of initiating this strike, you must make a successful melee attack against an enemy whose alignment has at least one component different from yours. This foe must pose a threat to you or your allies in some direct, immediate way. If your attack hits, you or an ally within 10 feet of you heals 1d6 points of damage + 1 point per initiator level (maximum +5).",
           maneuverExpended: false,
       },
//       {
//           name:"Charging Minotaur",
//           spellSchool:"Stone Dragon(Strike)",
//           level:"Crusader 1",
//           castingTime:"1 full-round action",
//           range:"Melee attack",
//           target:"One creature",
//           description:"You charge at your foe, blasting him with such power that he stumbles back.\n\nAs part of this maneuver, you make a bull rush attack (PH 154) as part of a charge. Neither the movement nor the bull rush attack provokes attacks of opportunity. If your Strength check exceeds the opponent's result, you deal bludgeoning damage equal to 2d6 + your Str modifier in addition to pushing the target back as normal.\n\nBull Rush: First, you move into the defender’s space. You and the defender make opposed Strength checks. You each add a +4 bonus for each size category you are larger than Medium or a -4 penalty for each size category you are smaller than Medium. You get a +2 bonus if you are charging. Assuming your Strength check is high enough, you push your target back 5 feet. If you wish to move with the defender, you can push him back an additional 5 feet for each 5 points by which your check result is greater than the defender’s check result. Any attack of opportunity by anyone other than you against the defender has a 25% chance of accidentally targeting you.",
//           maneuverExpended: false,
//       },
       {
           name:"Stone Bones",
           spellSchool:"Stone Dragon",
           level:"Crusader 1",
           castingTime:"1 standard action",
           range:"Personal",
           target:"You",
           description:"You focus your energy to enhance your defenses, drawing on the power of your weapon's impact with a foe to toughen yourself against a counterattack.\n\nWhen you use this maneuver, you make a single melee attack. If this attack hits, you gain damage reduction 5/adamantine for 1 round.",
           maneuverExpended: false,
       },
//       {
//           name:"Douse the Flames",
//           spellSchool:"White Raven(Strike)",
//           level:"Crusader 1",
//           castingTime:"1 standard action",
//           range:"Melee attack",
//           target:"One creature",
//           description:"You strike your enemy with a resounding blow, capturing his attention. As he turns to look, you let loose with a string of oaths, challenges, and taunts that force him to focus his attention on you.\n\nAs part of this maneuver, you make a melee attack against a single target you threaten. If your attack hits, you deal normal melee damage, and the target creature can't make attacks of opportunity for 1 round. The opponent still threatens its normal area; it simply cannot make attacks of opportunity.",
//           maneuverExpended: false,
//       },
       {
           name:"Vanguard Strike",
           spellSchool:"Devoted Spirit",
           level:"Crusader 1",
           castingTime:"1 standard action",
           range:"Melee attack",
           target:"One creature",
           description:"You batter aside your foes defenses with a vicious, overwhelming attack, leaving him vulnerable to your allies' blows.\n\nAs part of this maneuver, you make a melee attack against an opponent you threaten. If this attack hits, all your allies gain a +4 bonus on ranged and melee attacks against that target until the start of your next turn.",
           maneuverExpended: false,
       },
       {
           name:"Mountain Hammer",
           spellSchool:"Stone Dragon(Strike)",
           level:"Crusader 2",
           castingTime:"1 standard action",
           range:"Melee attack",
           target:"One creature",
           description:"Like a falling avalanche, you strike with the weight and fury of the mountain.\n\nAs part of this maneuver, you make a single melee attack. This attack deals an extra 2d6 points of damage and automatically overcomes damage reduction and hardness.",
           maneuverExpended: false,
       },
       {
           name: "White Raven Tactics",
           spellSchool: "White Raven(Boost)",
           level: "Crusader 3",
           castingTime: "1 swift action",
           range: "10 ft.",
           target: "One ally",
           description: "When you use this maneuver, select an ally within range. Their initiative count immediately equals your initiative count-1! They then act on their new initiative count as normal. If they have already acted in the current round, they can act again. If this maneuver would not change your ally’s initiative count, it has no effect. If they have not yet acted during this round, their initiative count changes, and they acts on that count as normal. They do not act again on her original initiative count.",
           maneuverExpended: false,
       },
               ],
    feats:[
//        {
//            name: "Stand Still",
//            description: "When a foe's movement out of a square you threaten grants you an attack of opportunity, you can give up that attack and instead attempt to stop your foe in his tracks. Make your attack of opportunity normally. If you hit your foe, he must succeed on a Reflex save against a DC of 10 + your damage roll (the opponent does not actually take damage), or immediately halt as if he had used up his move actions for the round. Since you use the Stand Still feat in place of your attack of opportunity, you can do so only a number of times per round equal to the number of times per round you could make an attack of opportunity (normally just one).",
//        },
        {
            name: "Combat Reflexes",
            description: "When foes leave themselves open, you may make a number of additional attacks of opportunity equal to your Dexterity bonus. For example, a fighter with a Dexterity of 15 can make a total of three attacks of opportunity in 1 round--the one attack of opportunity any character is entitled to, plus two more because of his +2 Dexterity bonus. If four goblins move out of the character's threatened squares, he can make one attack of opportunity each against three of the four. You can still make only one attack of opportunity per opportunity. With this feat, you may also make attacks of opportunity while flat-footed.",
        },
        {
            name: "Extra Granted Maneuver",
            description: "You begin each encounter with one additional readied maneuver granted. This teat also applies when you determine a new set of granted maneuvers after recovering expended maneuvers. For example, if you are a 5th-level crusader, you normally begin an encounter or finish recovering expended maneuvers with two ofyour five readied maneuvers granted, and the remaining three maneuvers withheld. With this feat, three of your five readied maneuvers are granted, and only two are withheld. Naturally, this benefit provides you with a better array of maneuver options early in a battle.",
        },
        {
            name: "Combat Expertise",
            description: "When you use the attack action or the full attack action in melee, you can take a penalty of as much as -5 on your attack roll and add the same number (+5 or less) as a dodge bonus to your Armor Class. This number may not exceed your base attack bonus. The changes to attack rolls and Armor Class last until your next action."
        }
    ],
    abilities:[
        {
            name: "Zealous Surge (Ex)",
            description: "Once per day, you can opt to reroll a single saving throw. Must abide by the second roll. Doesn't require action. Can be after result of first roll but needs to be before DM tells you if it fails or suceeds."
        },
        {
            name: "Steely Resolve (Ex)",
            description: "You have a delayed damage pool of total 10 points of damage. It gets applied at end of next turn. Special effects like stun still go through. When you receive healing, you choose whether it affects your damage pool, your hit points, or both"
        },
        {
            name: "Furious Counterstrike (Ex)",
            description: "Gain a bonus on attack rolls and damage rolls equal to value of delay damage pool divided by 5(rounded down). Max bonus of +6 for now."
        },
        {
            name: "Indomitable soul",
            description: "You add your Charisma bonus (if any) as a bonus on Will saves"
        },
        // {
        //     name: "",
        //     description: ""
        // },
        // {
        //     name: "",
        //     description: ""
        // },
    ]
}
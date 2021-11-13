export const Sigmund = {
    name: "Sigmund",
    level: 7,
    maxHealth: 63,
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
       {
           name:"Shield Block",
           spellSchool:"Devoted Spirit (Counter)",
           level:"Crusader 2",
           castingTime:"1 immediate action",
           range:"Adjacent ally",
           target:"One creature",
           description:"As an immediate action, you can grant an AC bonus to an adjacent ally equal to your shield's AC bonus(2) + 4. You apply this bonus in response to a single melee or ranged attack that targets your ally. You can initiate this maneuver after an opponent makes his attack roll, but you must do so before you know whether the attack was a success or a failure.",
           maneuverExpended: false,
       },
       {
           name:"Defensive Rebuke",
           spellSchool:"Devoted Spirit",
           level:"Crusader 3",
           castingTime:"1 swift action",
           range:"Personal",
           target:"You",
           description:"Each enemy you strike after you initiate this maneuver becomes vulnerable to your further attacks. If such an opponent attacks anyone other than you in melee for the duration of the maneuver, that attack provokes an attack of opportunity from you (each separate attack a target makes provokes an attack of opportunity, making this boost especially lethal if you have Combat Reflexes). Enemies you strike become aware of the consequences of the maneuver.",
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
//       {
//           name:"Vanguard Strike",
//           spellSchool:"Devoted Spirit",
//           level:"Crusader 1",
//           castingTime:"1 standard action",
//           range:"Melee attack",
//           target:"One creature",
//           description:"You batter aside your foes defenses with a vicious, overwhelming attack, leaving him vulnerable to your allies' blows.\n\nAs part of this maneuver, you make a melee attack against an opponent you threaten. If this attack hits, all your allies gain a +4 bonus on ranged and melee attacks against that target until the start of your next turn.",
//           maneuverExpended: false,
//       },
//       {
//           name:"Mountain Hammer",
//           spellSchool:"Stone Dragon(Strike)",
//           level:"Crusader 2",
//           castingTime:"1 standard action",
//           range:"Melee attack",
//           target:"One creature",
//           description:"Like a falling avalanche, you strike with the weight and fury of the mountain.\n\nAs part of this maneuver, you make a single melee attack. This attack deals an extra 2d6 points of damage and automatically overcomes damage reduction and hardness.",
//           maneuverExpended: false,
//       },
        {
           name:"Divine Surge",
           spellSchool:"Devoted Spirit(Strike)",
           level:"Crusader 4",
           castingTime:"1 standard action",
           range:"Melee attack",
           target:"One creature",
           description:"Your body shakes and spasms as unfettered divine energy courses through it. This power sparks off your weapon and courses into your foe, devastating your enemy but leaving you drained.\n\nAs part of this maneuver, you make a single melee attack that deals an extra 8d8 points of damage.",
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
            description: "Gain a bonus on attack rolls and damage rolls equal to value of delay damage pool divided by 5(rounded down). Max bonus of +6."
        },
        {
            name: "Indomitable soul",
            description: "You add your Charisma bonus (if any) as a bonus on Will saves"
        },
        {
            name: "Smite (Ex)",
            description: "Driven by the courage of your convictions and the ironclad strength of your beliefs, you can strike back at those who dare stand against your cause. Starting at 6th level, once per day, you can concentrate all your anger, hatred, and determination into a single attack. On the next melee attack you make, you gain a bonus on your attack roll equal to your Charisma bonus (if any) and a bonus on damage equal to your crusader level. At 18th level, you gain an additional use of smite per day."
        },
        {
            name: "Riposte",
            description: "If you use Combat Expertise to increase your Armor Class, the first opponent to attack and miss you for that round provokes an attack of opportunity from you."
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
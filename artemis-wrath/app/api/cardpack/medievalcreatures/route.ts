import { NextResponse } from "next/server";

interface Card {
    id: number, 
    name: string, 
    description: string, 
    randomNumber: number
}


const cardSet: Card[] = [
    {
      id: 458,
      name: "Swordsworn Sparrow",
      description: "A small, agile sparrow wielding a tiny sword, known for its swift and precise strikes in aerial duels.",
      randomNumber: 654
    },
    {
      id: 372,
      name: "Battleaxe Badger",
      description: "A sturdy badger carrying a miniature battleaxe, often seen defending its burrow with unmatched ferocity.",
      randomNumber: 211
    },
    {
      id: 819,
      name: "Lancewielder Lemur",
      description: "A lemur brandishing a lance, leaping between treetops in medieval jungles as a guardian of the ancient canopy.",
      randomNumber: 899
    },
    {
      id: 147,
      name: "Warhammer Wolf",
      description: "A majestic wolf carrying a warhammer, leading a pack of armored wolves through medieval forests on moonlit patrols.",
      randomNumber: 742
    },
    {
      id: 583,
      name: "Halberd Hawk",
      description: "A hawk with a halberd in its talons, soaring above medieval landscapes as the aerial protector of castle realms.",
      randomNumber: 401
    },
    {
      id: 287,
      name: "Crossbow Cobra",
      description: "A sleek cobra holding a crossbow, its venomous bite coupled with deadly accuracy in ranged combat.",
      randomNumber: 865
    },
    {
      id: 726,
      name: "Mace Macaque",
      description: "A mischievous macaque wielding a mace, known for causing chaos in medieval marketplaces with its unexpected swings.",
      randomNumber: 173
    },
    {
      id: 931,
      name: "Flail Falcon",
      description: "A falcon with a flail attached to its talons, performing aerial acrobatics while defending its medieval territory.",
      randomNumber: 543
    },
    {
      id: 612,
      name: "Morningstar Mouse",
      description: "A tiny mouse gripping a morningstar, bravely standing against larger foes in the corners of medieval barns.",
      randomNumber: 998
    },
    {
      id: 208,
      name: "Spearfish Swordfish",
      description: "A swordfish using its sharp bill as a spear, patrolling the coastal waters of medieval kingdoms.",
      randomNumber: 300
    },
    {
      id: 475,
      name: "Daggered Dragonfly",
      description: "A dragonfly with miniature daggers attached to its wings, hovering over medieval ponds as a tiny aerial knight.",
      randomNumber: 756
    },
    {
      id: 639,
      name: "Javelin Jackal",
      description: "A jackal with a javelin, skillfully throwing it at approaching threats in the medieval deserts.",
      randomNumber: 432
    },
    {
      id: 784,
      name: "Warhorn Hornet",
      description: "A giant hornet sounding a warhorn, leading swarms into battle against medieval intruders.",
      randomNumber: 637
    },
    {
      id: 243,
      name: "Shieldbearer Shrew",
      description: "A shrew carrying a tiny shield, leading underground defenses against threats in medieval burrows.",
      randomNumber: 125
    },
    {
      id: 509,
      name: "Longbow Lynx",
      description: "A lynx with a longbow, blending into the shadows of medieval forests while expertly sniping distant foes.",
      randomNumber: 874
    },
    {
      id: 319,
      name: "Scepter Snail",
      description: "A snail with a small scepter, slowly making its way through medieval gardens as a dignified ruler of the miniature realm.",
      randomNumber: 502
    },
    {
      id: 680,
      name: "Pike Pika",
      description: "A pika holding a pike, standing sentinel in rocky crevices of medieval mountain ranges.",
      randomNumber: 256
    },
    {
      id: 158,
      name: "Whip Weasel",
      description: "A weasel with a tiny whip, agilely navigating through medieval castle corridors.",
      randomNumber: 789
    },
    {
      id: 796,
      name: "Broadsword Butterfly",
      description: "A butterfly with wings resembling broadswords, fluttering gracefully in medieval meadows.",
      randomNumber: 178
    },
    {
      id: 380,
      name: "Rapier Rabbit",
      description: "A swift rabbit with a rapier, showcasing dazzling swordplay in the open fields of medieval landscapes.",
      randomNumber: 632
    },
    {
      id: 271,
      name: "Glaive Gecko",
      description: "A gecko with a glaive, climbing medieval walls and striking from unexpected angles.",
      randomNumber: 901
    },
    {
      id: 607,
      name: "Morningstar Moth",
      description: "A moth with wings that unfold into morningstars, resting peacefully in medieval lantern-lit gardens.",
      randomNumber: 456
    },
    {
      id: 378,
      name: "Axe Anteater",
      description: "An anteater with a small battle axe, using its powerful claws and weapon to defend against medieval threats.",
      randomNumber: 783
    },
    {
      id: 911,
      name: "Flanged Falcon",
      description: "A falcon with a flanged mace, diving from the skies to strike with powerful blows in medieval skirmishes.",
      randomNumber: 234
    },
    {
      id: 568,
      name: "Scepter Seahorse",
      description: "A seahorse with a tiny scepter, patrolling the depths of medieval oceans as a regal guardian.",
      randomNumber: 618
    },
    {
      id: 796,
      name: "Cudgel Crow",
      description: "A crow wielding a cudgel, using its intelligence to outsmart opponents in medieval castle courtyards.",
      randomNumber: 371
    },
    {
      id: 194,
      name: "Staffed Stoat",
      description: "A stoat with a staff, leading other woodland creatures in medieval quests for justice.",
      randomNumber: 743
    },
    {
      id: 444,
      name: "Giant Crossbow Gecko",
      description: "A large gecko operating a giant crossbow, stationed on medieval castle walls to defend against aerial threats.",
      randomNumber: 522
    }, 
    {
        id: 873,
        name: "Coral Crested Griffin",
        description: "A griffin with feathers resembling vibrant coral, found perched on the cliffs overlooking medieval coastal kingdoms.",
        randomNumber: 567
      },
      {
        id: 512,
        name: "Balefire Bat",
        description: "A bat with wings that flicker like flames, dwelling in ancient caverns where magical fire deposits illuminate the darkness.",
        randomNumber: 879
      },
      {
        id: 162,
        name: "Ebon Eelhound",
        description: "A sleek aquatic creature with the body of an eel and the loyalty of a hound, patrolling underwater realms.",
        randomNumber: 324
      },
      {
        id: 749,
        name: "Glowshroom Gazelle",
        description: "A graceful gazelle with bioluminescent spots, grazing in mystical meadows filled with giant luminescent mushrooms.",
        randomNumber: 451
      },
      {
        id: 634,
        name: "Wispwing Wyrm",
        description: "A slender dragon with wings made of floating, glowing orbs, drifting through medieval skies like a constellation.",
        randomNumber: 732
      },
      {
        id: 198,
        name: "Gilded Gorgon Cobra",
        description: "A serpent with scales that turn creatures to gold with a gaze, said to guard the entrance to hidden treasure troves.",
        randomNumber: 110
      },
      {
        id: 423,
        name: "Quicksilver Quetzal",
        description: "A magnificent bird with iridescent feathers that mimic the appearance of liquid mercury, soaring through ancient jungles.",
        randomNumber: 635
      },
      {
        id: 896,
        name: "Topaz Tiger Beetle",
        description: "A large beetle with a carapace that gleams like golden topaz, scuttling through sunlit medieval gardens.",
        randomNumber: 269
      },
      {
        id: 347,
        name: "Venomous Vine Viper",
        description: "A snake with vines growing from its scales, camouflaging it within overgrown enchanted forests.",
        randomNumber: 802
      },
      {
        id: 598,
        name: "Astral Axolotl",
        description: "An aquatic creature with translucent skin, adorned with celestial patterns, swimming in sacred medieval lakes.",
        randomNumber: 168
      },
      {
        id: 785,
        name: "Moonlit Meridian Mantis",
        description: "A praying mantis with lunar patterns on its exoskeleton, known to meditate under the light of the moon.",
        randomNumber: 942
      },
      {
        id: 146,
        name: "Spectral Stag",
        description: "A ghostly stag with antlers that emit an otherworldly glow, appearing in mist-covered medieval woodlands.",
        randomNumber: 501
      },
      {
        id: 612,
        name: "Silvershade Sloth",
        description: "A slow-moving sloth with fur that shimmers like moonlight, often spotted hanging from ancient trees.",
        randomNumber: 787
      },
      {
        id: 278,
        name: "Ironbark Ibis",
        description: "A bird with wings made of living ironbark, nesting in the ancient branches of mystical trees.",
        randomNumber: 243
      },
      {
        id: 768,
        name: "Thunderhoof Toad",
        description: "A giant toad with thunderous croaks that echo through medieval valleys, heralding impending storms.",
        randomNumber: 376
      },
      {
        id: 431,
        name: "Crimson Claw Crab",
        description: "A crab with pincers that glow like rubies, scuttling along the shores of enchanted medieval beaches.",
        randomNumber: 912
      },
      {
        id: 596,
        name: "Quasar Quokka",
        description: "A small, adorable creature with fur that twinkles like distant quasars, hopping through magical meadows.",
        randomNumber: 724
      },
      {
        id: 155,
        name: "Lunar Lantern Lemur",
        description: "A lemur with a tail that glows softly like a lantern, guiding nocturnal travelers through medieval jungles.",
        randomNumber: 824
      },
      {
        id: 822,
        name: "Starshade Squirrel",
        description: "A squirrel with a tail that sparkles with the brilliance of distant stars, leaping between medieval treetops.",
        randomNumber: 399
      },
      {
        id: 507,
        name: "Frostbite Firefly Fox",
        description: "A fox with fur that mimics the luminescence of fireflies, flickering in the frosty air of ancient woodlands.",
        randomNumber: 655
      },
      {
        id: 189,
        name: "Nebula Nudibranch",
        description: "An ocean-dwelling creature with iridescent tendrils that mimic swirling nebulae, drifting through underwater kingdoms.",
        randomNumber: 177
      },
      {
        id: 877,
        name: "Thunderstrike Tarsier",
        description: "A small primate with eyes that flash with lightning, inhabiting the stormy reaches of medieval canopies.",
        randomNumber: 888
      },
      {
        id: 243,
        name: "Majestic Manticore",
        description: "A mythical creature with the body of a lion, wings of a dragon, and a tail ending in a cluster of venomous spikes.",
        randomNumber: 366
      },
      {
        id: 541,
        name: "Abyssal Albatross",
        description: "A giant bird with feathers that absorb light, soaring over medieval seas and disappearing into the dark abyss below.",
        randomNumber: 586
      },
      {
        id: 900,
        name: "Ethereal Elephant Eel",
        description: "A majestic aquatic creature with the body of an elephant and the tail of an eel, gliding through mysterious underwater realms.",
        randomNumber: 943
      },
      {
        id: 387,
        name: "Grove Guardian Gargoyle",
        description: "A stone gargoyle brought to life by ancient magic, protecting sacred groves and medieval monuments.",
        randomNumber: 111
      },
      {
        id: 654,
        name: "Luminous Liger",
        description: "A hybrid creature with the strength of a lion and the grace of a tiger, its fur radiating a gentle glow.",
        randomNumber: 455
      },
      {
        id: 328,
        name: "Sapphire Snail",
        description: "A slow-moving snail with a shell that glistens like precious sapphire, leaving a trail of magical luminescence.",
        randomNumber: 723
      },
      {
        id: 897,
        name: "Chrono Chameleon",
        description: "A chameleon with scales that shift through the colors of time, blending into the temporal fabric of medieval landscapes.",
        randomNumber: 567
      },
      {
        id: 444,
        name: "Frostfire Phoenix",
        description: "A phoenix with feathers that alternate between icy blue and fiery red, symbolizing the eternal dance of winter and summer.",
        randomNumber: 789
      },
      {
        id: 122,
        name: "Verdant Drake",
        description: "A dragon with scales that mimic the lush greenery of the forest, dwelling in hidden glades and protecting the woodland creatures.",
        randomNumber: 321
      },
      {
        id: 567,
        name: "Cerulean Wyvern",
        description: "A winged creature with scales that mirror the deep blue of the sky, soaring gracefully over medieval landscapes.",
        randomNumber: 645
      },
      {
        id: 934,
        name: "Moonshadow Lynx",
        description: "A stealthy lynx with fur that absorbs and reflects moonlight, becoming nearly invisible as it stalks its prey.",
        randomNumber: 456
      },
      {
        id: 789,
        name: "Nebula Nymph",
        description: "A small, ethereal creature with wings resembling swirling galaxies, bringing cosmic magic to enchanted gardens.",
        randomNumber: 823
      },
      {
        id: 312,
        name: "Amethyst Armadillo",
        description: "A mystical armadillo with a shell made of shimmering amethyst, rolling into a protective ball when threatened.",
        randomNumber: 134
      },
      {
        id: 576,
        name: "Stardust Seahorse",
        description: "A seahorse with a mane of stardust, swimming gracefully in celestial seas beneath a starlit sky.",
        randomNumber: 422
      },
      {
        id: 189,
        name: "Molten Gryphon",
        description: "A gryphon with feathers that resemble flowing lava, perched on the peaks of volcanoes as a guardian of the fiery realms.",
        randomNumber: 576
      },
      {
        id: 482,
        name: "Ironhide Rhino",
        description: "A massive rhinoceros with a hide as tough as iron, charging through medieval battlefields with unwavering strength.",
        randomNumber: 246
      },
      {
        id: 746,
        name: "Whimsical Woodpecker Warg",
        description: "A large, colorful woodpecker with the intelligence of a wolf, often tamed by woodland elves as loyal companions.",
        randomNumber: 853
      },
      {
        id: 645,
        name: "Eldritch Elk",
        description: "An elk with antlers that channel otherworldly energies, said to have the ability to open portals to distant realms.",
        randomNumber: 764
      },
      {
        id: 348,
        name: "Sable Shapeshifter Snake",
        description: "A serpent with the ability to transform into various shapes, rumored to be a guardian of ancient magical artifacts.",
        randomNumber: 512
      },
      {
        id: 901,
        name: "Iridescent Iguana",
        description: "A lizard with scales that shimmer in a myriad of colors, basking in the medieval sun on ancient castle walls.",
        randomNumber: 675
      },
      {
        id: 284,
        name: "Vortex Vulture",
        description: "A scavenger bird with wings that create miniature tornadoes, soaring above battlefields to pick at the remnants of war.",
        randomNumber: 931
      },
      {
        id: 577,
        name: "Mystic Mantis",
        description: "A giant mantis with eyes that glow with ancient knowledge, often sought by alchemists for its mystical properties.",
        randomNumber: 328
      },
      {
        id: 211,
        name: "Crimson Chimera",
        description: "A multi-headed beast with each head representing a different element, dwelling in caverns filled with molten lava.",
        randomNumber: 654
      },
      {
        id: 468,
        name: "Ephemeral Elephant",
        description: "An elephant with a transparent, ghostly appearance, said to be a manifestation of the spirits of the forest.",
        randomNumber: 299
      },
      {
        id: 722,
        name: "Celestial Cheetah",
        description: "A swift cheetah with fur that sparkles like stars, racing through the night under the gaze of the moon.",
        randomNumber: 415
      },
      {
        id: 874,
        name: "Frostbite Ferret",
        description: "A small ferret with fur that freezes anything it touches, often kept as a companion by ice sorcerers.",
        randomNumber: 567
      },
      {
        id: 156,
        name: "Starlight Stingray",
        description: "A graceful stingray with a pattern of glowing stars on its back, gliding through medieval rivers.",
        randomNumber: 789
      },
      {
        id: 633,
        name: "Aurora Armored Antelope",
        description: "An antelope with armor that reflects the colors of the aurora borealis, leaping through meadows with grace.",
        randomNumber: 823
      },
      {
        id: 357,
        name: "Harmonic Hummingbird",
        description: "A hummingbird with feathers that emit melodic tones, bringing music to enchanted gardens.",
        randomNumber: 134
      },
      {
        id: 588,
        name: "Obsidian Ocelot",
        description: "A sleek ocelot with fur as dark as obsidian, stalking silently through the shadows of ancient ruins.",
        randomNumber: 576
      },
      {
        id: 205,
        name: "Thunderstrike Tarantula",
        description: "A giant tarantula with legs that generate electric charges, dwelling in stormy caverns and guarding ancient artifacts.",
        randomNumber: 246
      },
      {
        id: 799,
        name: "Whisperwind Weasel",
        description: "A small weasel with fur that ripples like the wind, known for its elusive and playful nature.",
        randomNumber: 853
      },
  {
    id: 789,
    name: "Labyrinthine Minotaur Beetle",
    description: "A giant beetle with an intricate maze pattern on its shell, dwelling in ancient ruins and guarding hidden passages.",
    randomNumber: 543
    },
    {
        id: 321,
        name: "Sapphire Wyrm",
        description: "A serpent-like dragon covered in shimmering sapphire scales, known to slumber within the heart of a mystical blue cavern.",
        randomNumber: 876
    },
    {
        id: 645,
        name: "Enchanted Griffin Owlbear",
        description: "A hybrid creature with the body of a bear, wings of a griffin, and the wisdom of an owl, often sought as a companion by adventurers.",
        randomNumber: 321
    },
    {
        id: 456,
        name: "Silvershade Fox",
        description: "A silver fox with fur that blends seamlessly with moonlit shadows, rumored to guide lost travelers to safety.",
        randomNumber: 654
    },
    {
        id: 823,
        name: "Thunderclaw Roc",
        description: "A colossal bird with thunderstorm feathers, creating storms as it soars across the medieval skies.",
        randomNumber: 213
    },
    {
        id: 134,
        name: "Obsidian Direwolf",
        description: "A massive, jet-black wolf with eyes that gleam like polished obsidian, leading packs through the mystical forest.",
        randomNumber: 876
    },
    {
        id: 422,
        name: "Amberwinged Dragonfly",
        description: "A delicate dragonfly with wings resembling transparent amber, weaving through sunbeams and spreading a sense of tranquility.",
        randomNumber: 543
    },
    {
        id: 576,
        name: "Timeless Tortoise",
        description: "A wise tortoise with a shell that reflects the changing seasons, said to have witnessed centuries unfold.",
        randomNumber: 321
    },
    {
        id: 246,
        name: "Molten Salamander",
        description: "A fiery salamander that glides through rivers of molten lava, guarding the entrance to subterranean realms.",
        randomNumber: 654
    },
    {
        id: 853,
        name: "Eclipse Hare",
        description: "A magical hare with fur that changes color during solar and lunar eclipses, appearing in sacred groves.",
        randomNumber: 213
    },
    {
        id: 764,
        name: "Abyssal Leviathan",
        description: "A colossal sea serpent with bioluminescent patterns, lurking in the depths of a mysterious underwater abyss.",
        randomNumber: 876
    },
    {
        id: 512,
        name: "Thorned Basilisk",
        description: "A serpent with thorny scales and the ability to turn creatures to stone with a single gaze, inhabiting ancient gardens.",
        randomNumber: 543
    },
    {
        id: 675,
        name: "Whispering Wisp Wombat",
        description: "A small, furry creature with the ability to communicate through ethereal wisps, aiding those in need.",
        randomNumber: 321
    },
    {
        id: 931,
        name: "Aurora Elk",
        description: "A majestic elk with antlers that light up with the colors of the aurora borealis, roaming the northernmost realms.",
        randomNumber: 654
    },
    {
        id: 328,
        name: "Solar Seraphim Butterfly",
        description: "A radiant butterfly with wings that resemble stained glass, said to be messengers from the celestial realms.",
        randomNumber: 213
    },
    {
        id: 654,
        name: "Celestial Peryton",
        description: "A mythical creature with the body of a deer and wings of an angel, said to embody the union of earth and sky.",
        randomNumber: 876
    },
    {
        id: 299,
        name: "Chromatic Chameleon",
        description: "A chameleon with scales that shift in color to match its surroundings, blending seamlessly into the vibrant medieval landscapes.",
        randomNumber: 543
    },
    {
        id: 415,
        name: "Vorpal Viper",
        description: "A venomous snake with fangs so sharp they can cut through reality itself, often associated with ancient curses.",
        randomNumber: 321
    },
    {
        id: 567,
        name: "Wraithwing Raven",
        description: "A spectral raven with feathers that carry whispers of the afterlife, guiding lost souls to their eternal rest.",
        randomNumber: 654
    },
    {
        id: 789,
        name: "Lunar Lotus Tortoise",
        description: "A tranquil tortoise with a shell resembling a blooming lotus, often found in serene moonlit ponds.",
        randomNumber: 213
    },
    {
        id: 789,
        name: "Labyrinthine Minotaur Beetle",
        description: "A giant beetle with an intricate maze pattern on its shell, dwelling in ancient ruins and guarding hidden passages.",
        randomNumber: 543
    },
    {
        id: 321,
        name: "Sapphire Wyrm",
        description: "A serpent-like dragon covered in shimmering sapphire scales, known to slumber within the heart of a mystical blue cavern.",
        randomNumber: 876
    },
    {
        id: 645,
        name: "Enchanted Griffin Owlbear",
        description: "A hybrid creature with the body of a bear, wings of a griffin, and the wisdom of an owl, often sought as a companion by adventurers.",
        randomNumber: 321
    },
    {
        id: 456,
        name: "Silvershade Fox",
        description: "A silver fox with fur that blends seamlessly with moonlit shadows, rumored to guide lost travelers to safety.",
        randomNumber: 654
    },
    {
        id: 823,
        name: "Thunderclaw Roc",
        description: "A colossal bird with thunderstorm feathers, creating storms as it soars across the medieval skies.",
        randomNumber: 213
    },
    {
        id: 134,
        name: "Obsidian Direwolf",
        description: "A massive, jet-black wolf with eyes that gleam like polished obsidian, leading packs through the mystical forest.",
        randomNumber: 876
    },
    {
        id: 422,
        name: "Amberwinged Dragonfly",
        description: "A delicate dragonfly with wings resembling transparent amber, weaving through sunbeams and spreading a sense of tranquility.",
        randomNumber: 543
    },
    {
        id: 576,
        name: "Timeless Tortoise",
        description: "A wise tortoise with a shell that reflects the changing seasons, said to have witnessed centuries unfold.",
        randomNumber: 321
    },
    {
        id: 246,
        name: "Molten Salamander",
        description: "A fiery salamander that glides through rivers of molten lava, guarding the entrance to subterranean realms.",
        randomNumber: 654
    },
    {
        id: 853,
        name: "Eclipse Hare",
        description: "A magical hare with fur that changes color during solar and lunar eclipses, appearing in sacred groves.",
        randomNumber: 213
    },
    {
        id: 764,
        name: "Abyssal Leviathan",
        description: "A colossal sea serpent with bioluminescent patterns, lurking in the depths of a mysterious underwater abyss.",
        randomNumber: 876
    },
    {
        id: 512,
        name: "Thorned Basilisk",
        description: "A serpent with thorny scales and the ability to turn creatures to stone with a single gaze, inhabiting ancient gardens.",
        randomNumber: 543
    },
    {
        id: 675,
        name: "Whispering Wisp Wombat",
        description: "A small, furry creature with the ability to communicate through ethereal wisps, aiding those in need.",
        randomNumber: 321
    },
    {
        id: 931,
        name: "Aurora Elk",
        description: "A majestic elk with antlers that light up with the colors of the aurora borealis, roaming the northernmost realms.",
        randomNumber: 654
    },
    {
        id: 328,
        name: "Solar Seraphim Butterfly",
        description: "A radiant butterfly with wings that resemble stained glass, said to be messengers from the celestial realms.",
        randomNumber: 213
    },
    {
        id: 654,
        name: "Celestial Peryton",
        description: "A mythical creature with the body of a deer and wings of an angel, said to embody the union of earth and sky.",
        randomNumber: 876
    },
    {
        id: 299,
        name: "Chromatic Chameleon",
        description: "A chameleon with scales that shift in color to match its surroundings, blending seamlessly into the vibrant medieval landscapes.",
        randomNumber: 543
    },
    {
        id: 415,
        name: "Vorpal Viper",
        description: "A venomous snake with fangs so sharp they can cut through reality itself, often associated with ancient curses.",
        randomNumber: 321
    },
    {
        id: 567,
        name: "Wraithwing Raven",
        description: "A spectral raven with feathers that carry whispers of the afterlife, guiding lost souls to their eternal rest.",
        randomNumber: 654
    },
    {
        id: 789,
        name: "Lunar Lotus Tortoise",
        description: "A tranquil tortoise with a shell resembling a blooming lotus, often found in serene moonlit ponds.",
        randomNumber: 213
    }
]


export async function GET() {
    let randomCards: Card[] = []

    const getCards = () => {
        for(let i = 0;i< 10; i++){
            let randomNumber = Math.floor(Math.random() * 122)
            randomCards.push(cardSet[randomNumber])
        }

    }
    getCards()
    console.log(randomCards)
    return NextResponse.json(randomCards)
}
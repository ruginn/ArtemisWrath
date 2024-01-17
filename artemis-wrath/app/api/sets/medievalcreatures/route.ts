import { NextResponse } from 'next/server';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
}

const cardSet: Card[] = [
  {
    id: 1,
    name: 'Swordsworn Sparrow',
    description:
      'A small, agile sparrow wielding a tiny sword, known for its swift and precise strikes in aerial duels.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/5RhmnbV/A-small-agile-sparrow-wielding-a-tiny-sword-wit.png',
    inclination: 'Love',
  },
  {
    id: 2,
    name: 'Battleaxe Badger',
    description:
      'A sturdy badger carrying a miniature battleaxe, often seen defending its burrow with unmatched ferocity.',
    randomNumber: 211,
    image:
      'https://i.ibb.co/0jrpQLF/A-sturdy-badger-in-blue-armor-carrying-a-miniatu.png',
    inclination: 'Pride',
  },
  {
    id: 3,
    name: 'Lancewielder Lemur',
    description:
      'A lemur brandishing a lance, leaping between treetops in medieval jungles as a guardian of the ancient canopy.',
    randomNumber: 899,
    image:
      'https://i.ibb.co/PN7MymF/A-lemur-brandishing-a-lance-leaping-between-tre.png',
    inclination: 'Mischief',
  },
  {
    id: 4,
    name: 'Warhammer Wolf',
    description:
      'A majestic wolf carrying a warhammer, leading a pack of armored wolves through medieval forests on moonlit patrols.',
    randomNumber: 742,
    image:
      'https://i.ibb.co/VjLLd33/A-majestic-wolf-carrying-a-warhammer-leading-a.png',
    inclination: 'Pride',
  },
  {
    id: 5,
    name: 'Halberd Hawk',
    description:
      'A hawk with a halberd in its talons, soaring above medieval landscapes as the aerial protector of castle realms.',
    randomNumber: 401,
    image:
      'https://i.ibb.co/JKxxgyj/A-hawk-with-a-halberd-in-its-talons-soaring-abo.png',
    inclination: 'Mischief',
  },
  {
    id: 6,
    name: 'Crossbow Cobra',
    description:
      'A sleek cobra holding a crossbow, its venomous bite coupled with deadly accuracy in ranged combat.',
    randomNumber: 865,
    image:
      'https://i.ibb.co/ggvvv1s/A-sleek-cobra-holding-a-crossbow-its-venomous-b.png',
    inclination: 'Pride',
  },
  {
    id: 7,
    name: 'Mace Macaque',
    description:
      'A mischievous macaque wielding a mace, known for causing chaos in medieval marketplaces with its unexpected swings.',
    randomNumber: 173,
    image:
      'https://i.ibb.co/djFxfCp/A-mischievous-macaque-wielding-a-mace-known-for.png',
    inclination: 'Mischief',
  },
  {
    id: 8,
    name: 'Flail Falcon',
    description:
      'A falcon with a flail attached to its talons, performing aerial acrobatics while defending its medieval territory.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/rtJT614/A-falcon-with-a-flail-attached-to-its-talons-pe.png',
    inclination: 'Wrath',
  },
  {
    id: 9,
    name: 'Morningstar Mouse',
    description:
      'A tiny mouse gripping a morningstar, bravely standing against larger foes in the corners of medieval barns.',
    randomNumber: 998,
    image:
      'https://i.ibb.co/LJfbXvy/A-tiny-mouse-gripping-a-morningstar-bravely-sta.png',
    inclination: 'Love',
  },
  {
    id: 10,
    name: 'Spearfish Swordfish',
    description:
      'A swordfish using its sharp bill as a spear, patrolling the coastal waters of medieval kingdoms.',
    randomNumber: 300,
    image:
      'https://i.ibb.co/WKNZqdF/A-majestic-swordfish-in-gold-and-jewels-swimming.png',
    inclination: 'Pride',
  },
  {
    id: 11,
    name: 'Daggered Dragonfly',
    description:
      'A dragonfly with miniature daggers attached to its wings, hovering over medieval ponds as a tiny aerial knight.',
    randomNumber: 756,
    image:
      'https://i.ibb.co/PTZcs5k/A-dragonfly-with-miniature-daggers-attached-to-i.png',
    inclination: 'Wrath',
  },
  {
    id: 12,
    name: 'Javelin Jackal',
    description:
      'A jackal with a javelin, skillfully throwing it at approaching threats in the medieval deserts.',
    randomNumber: 432,
    image:
      'https://i.ibb.co/s903Mhw/A-jackal-with-a-long-javelin-attached-to-its-bac.png',
    inclination: 'Mischief',
  },
  {
    id: 13,
    name: 'Warhorn Hornet',
    description:
      'A giant hornet sounding a warhorn, leading swarms into battle against medieval intruders.',
    randomNumber: 637,
    image:
      'https://i.ibb.co/HKc9Nny/A-giant-hornet-sounding-a-warhorn-leading-swarm.png',
    inclination: 'Wrath',
  },
  {
    id: 14,
    name: 'Shieldbearer Shrew',
    description:
      'A shrew carrying a tiny shield, leading underground defenses against threats in medieval burrows.',
    randomNumber: 125,
    image:
      'https://i.ibb.co/fdt3fN9/A-shrew-carrying-a-tiny-shield-leading-undergro.png',
    inclination: 'Love',
  },
  {
    id: 15,
    name: 'Longbow Lynx',
    description:
      'A lynx with a longbow, blending into the shadows of medieval forests while expertly sniping distant foes.',
    randomNumber: 874,
    image:
      'https://i.ibb.co/r7kvD4X/A-lynx-with-a-longbow-blending-into-the-shadows.png',
    inclination: 'Pride',
  },
  {
    id: 16,
    name: 'Scepter Snail',
    description:
      'A snail with a small scepter, slowly making its way through medieval gardens as a dignified ruler of the miniature realm.',
    randomNumber: 502,
    image:
      'https://i.ibb.co/4pfF8xq/A-snail-with-a-small-scepter-slowly-making-its.png',
    inclination: 'Wisdom',
  },
  {
    id: 17,
    name: 'Pike Pika',
    description:
      'A pika holding a pike, standing sentinel in rocky crevices of medieval mountain ranges.',
    randomNumber: 256,
    image:
      'https://i.ibb.co/G0F68Mm/A-pika-holding-a-pike-standing-sentinel-in-rock.png',
    inclination: 'Pride',
  },
  {
    id: 18,
    name: 'Whip Weasel',
    description:
      'A weasel with a tiny whip, agilely navigating through medieval castle corridors.',
    randomNumber: 789,
    image:
      'https://i.ibb.co/4RN4VCh/A-weasel-with-a-tiny-whip-agile-and-cunning-in.png',
    inclination: 'Love',
  },
  {
    id: 19,
    name: 'Broadsword Butterfly',
    description:
      'A butterfly with wings resembling broadswords, fluttering gracefully in medieval meadows.',
    randomNumber: 178,
    image:
      'https://i.ibb.co/FnF8fmF/A-butterfly-with-wings-resembling-broadswords-f.png',
    inclination: 'Pride',
  },
  {
    id: 20,
    name: 'Rapier Rabbit',
    description:
      'A swift rabbit with a rapier, showcasing dazzling swordplay in the open fields of medieval landscapes.',
    randomNumber: 632,
    image:
      'https://i.ibb.co/4j6XzDT/A-swift-rabbit-with-a-rapier-showcasing-dazzlin.png',
    inclination: 'Wrath',
  },
  {
    id: 21,
    name: 'Glaive Gecko',
    description:
      'A gecko with a glaive, climbing medieval walls and striking from unexpected angles.',
    randomNumber: 901,
    image:
      'https://i.ibb.co/YT244Dt/A-gecko-with-a-glaive-climbing-medieval-walls-a.png',
    inclination: 'Mischief',
  },
  {
    id: 22,
    name: 'Morningstar Moth',
    description:
      'A moth with wings that unfold into morningstars, resting peacefully in medieval lantern-lit gardens.',
    randomNumber: 456,
    image:
      'https://i.ibb.co/JH4y9Bq/A-moth-with-wings-that-unfold-into-morningstars.png',
    inclination: 'Wisdom',
  },
  {
    id: 23,
    name: 'Axe Anteater',
    description:
      'An anteater with a small battle axe, using its powerful claws and weapon to defend against medieval threats.',
    randomNumber: 783,
    image:
      'https://i.ibb.co/fr9Px5P/an-giant-anteater-using-its-powerful-claws-to-d.png',
    inclination: 'Wrath',
  },
  {
    id: 24,
    name: 'Flanged Falcon',
    description:
      'A falcon with a flanged mace, diving from the skies to strike with powerful blows in medieval skirmishes.',
    randomNumber: 234,
    image:
      'https://i.ibb.co/gvMM9fy/A-falcon-with-a-flanged-mace-diving-from-the-sk.png',
    inclination: 'Wrath',
  },
  {
    id: 25,
    name: 'Scepter Seahorse',
    description:
      'A seahorse with a tiny scepter, patrolling the depths of medieval oceans as a regal guardian.',
    randomNumber: 618,
    image:
      'https://i.ibb.co/gPdW2S5/A-seahorse-with-a-tiny-scimitar-patrolling-the.png',
    inclination: 'Pride',
  },
  {
    id: 26,
    name: 'Cudgel Crow',
    description:
      'A crow wielding a cudgel, using its intelligence to outsmart opponents in medieval castle courtyards.',
    randomNumber: 371,
    image:
      'https://i.ibb.co/hB9PSv1/A-crow-carrying-a-stick-in-its-beak-with-jeweled.png',
    inclination: 'Wrath',
  },
  {
    id: 27,
    name: 'Staffed Stoat',
    description:
      'A stoat with a staff, leading other woodland creatures in medieval quests for justice.',
    randomNumber: 743,
    image:
      'https://i.ibb.co/w4s7Prf/A-stoat-with-a-staff-leading-other-woodland-cre.png',
    inclination: 'Love',
  },
  {
    id: 28,
    name: 'Giant Crossbow Gecko',
    description:
      'A large gecko operating a giant crossbow, stationed on medieval castle walls to defend against aerial threats.',
    randomNumber: 522,
    image:
      'https://i.ibb.co/ZzYK3s1/A-large-gecko-operating-a-giant-crossbow-statio.png',
    inclination: 'Mischief',
  },
  {
    id: 29,
    name: 'Coral Crested Griffin',
    description:
      'A griffin with feathers resembling vibrant coral, found perched on the cliffs overlooking medieval coastal kingdoms.',
    randomNumber: 567,
    image:
      'https://i.ibb.co/8DfFhH5/A-griffin-with-feathers-resembling-vibrant-coral.png',
    inclination: 'Wisdom',
  },
  {
    id: 30,
    name: 'Balefire Bat',
    description:
      'A bat with wings that flicker like flames, dwelling in ancient caverns where magical fire deposits illuminate the darkness.',
    randomNumber: 879,
    image:
      'https://i.ibb.co/236kQgd/A-giant-bat-with-purple-armor-and-wings-that-fli.png',
    inclination: 'Wrath',
  },
  {
    id: 31,
    name: 'Ebon Eelhound',
    description:
      'A sleek aquatic creature with the body of an eel and the loyalty of a hound, patrolling underwater realms.',
    randomNumber: 324,
    image:
      'https://i.ibb.co/9NQGt35/A-sleek-aquatic-creature-with-the-body-of-an-eel.png',
    inclination: 'Wisdom',
  },
  {
    id: 32,
    name: 'Glowshroom Gazelle',
    description:
      'A graceful gazelle with bioluminescent spots, grazing in mystical meadows filled with giant luminescent mushrooms.',
    randomNumber: 451,
    image:
      'https://i.ibb.co/h1StHQX/A-graceful-gazelle-with-bioluminescent-spots-gr.png',
    inclination: 'Wisdom',
  },
  {
    id: 33,
    name: 'Wispwing Wyrm',
    description:
      'A slender dragon with wings made of floating, glowing orbs, drifting through medieval skies like a constellation.',
    randomNumber: 732,
    image:
      'https://i.ibb.co/8g3BnvW/A-slender-dragon-with-wings-made-of-floating-gl.png',
    inclination: 'Mischief',
  },
  {
    id: 34,
    name: 'Gilded Gorgon Cobra',
    description:
      'A serpent with scales that turn creatures to gold with a gaze, said to guard the entrance to hidden treasure troves.',
    randomNumber: 110,
    image:
      'https://i.ibb.co/c8rr3wx/A-serpent-with-scales-that-turn-creatures-to-gol.png',
    inclination: 'Pride',
  },
  {
    id: 35,
    name: 'Quicksilver Quetzal',
    description:
      'A magnificent bird with iridescent feathers that mimic the appearance of liquid mercury, soaring through ancient jungles.',
    randomNumber: 635,
    image:
      'https://i.ibb.co/v1yRtzs/A-magnificent-bird-with-iridescent-feathers-that.png',
    inclination: 'Mischief',
  },
  {
    id: 36,
    name: 'Topaz Tiger Beetle',
    description:
      'A large beetle with a carapace that gleams like golden topaz, scuttling through sunlit medieval gardens.',
    randomNumber: 269,
    image:
      'https://i.ibb.co/QXvc73k/A-large-beetle-with-a-carapace-that-gleams-like.png',
    inclination: 'Pride',
  },
  {
    id: 37,
    name: 'Venomous Vine Viper',
    description:
      'A snake with vines growing from its scales, camouflaging it within overgrown enchanted forests.',
    randomNumber: 802,
    image:
      'https://i.ibb.co/LChDWLm/A-snake-with-vines-growing-from-its-scales-camo.png',
    inclination: 'Wisdom',
  },
  {
    id: 38,
    name: 'Astral Axolotl',
    description:
      'An aquatic creature with translucent skin, adorned with celestial patterns, swimming in sacred medieval lakes.',
    randomNumber: 168,
    image:
      'https://i.ibb.co/dgwMYXc/An-aquatic-creature-with-translucent-skin-adorn.png',
    inclination: 'Wisdom',
  },
  {
    id: 39,
    name: 'Moonlit Meridian Mantis',
    description:
      'A praying mantis with lunar patterns on its exoskeleton, known to meditate under the light of the moon.',
    randomNumber: 942,
    image:
      'https://i.ibb.co/MN26yZV/A-praying-mantis-with-lunar-patterns-on-its-exos.png',
    inclination: 'Pride',
  },
  {
    id: 40,
    name: 'Spectral Stag',
    description:
      'A ghostly stag with antlers that emit an otherworldly glow, appearing in mist-covered medieval woodlands.',
    randomNumber: 501,
    image:
      'https://i.ibb.co/h1StHQX/A-graceful-gazelle-with-bioluminescent-spots-gr.png',
    inclination: 'Love',
  },
  {
    id: 41,
    name: 'Silvershade Sloth',
    description:
      'A slow-moving sloth with fur that shimmers like moonlight, often spotted hanging from ancient trees.',
    randomNumber: 787,
    image:
      'https://i.ibb.co/gT6C8wz/A-slowmoving-sloth-with-fur-that-shimmers-like.png',
    inclination: 'Love',
  },
  {
    id: 42,
    name: 'Ironbark Ibis',
    description:
      'A bird with wings made of living ironbark, nesting in the ancient branches of mystical trees.',
    randomNumber: 243,
    image:
      'https://i.ibb.co/SwK9LZB/A-bird-with-wings-made-of-living-ironbark-nesti.png',
    inclination: 'Mischief',
  },
  {
    id: 43,
    name: 'Thunderhoof Toad',
    description:
      'A giant toad with thunderous croaks that echo through medieval valleys, heralding impending storms.',
    randomNumber: 376,
    image:
      'https://i.ibb.co/yFdwX7J/A-giant-toad-with-thunderous-croaks-that-echo-th.png',
    inclination: 'Pride',
  },
  {
    id: 44,
    name: 'Crimson Claw Crab',
    description:
      'A crab with pincers that glow like rubies, scuttling along the shores of enchanted medieval beaches.',
    randomNumber: 912,
    image:
      'https://i.ibb.co/f8bGn8q/A-crab-with-pincers-that-glow-like-rubies-scutt.png',
    inclination: 'Mischief',
  },
  {
    id: 45,
    name: 'Quasar Quokka',
    description:
      'A small, adorable creature with fur that twinkles like distant quasars, hopping through magical meadows.',
    randomNumber: 724,
    image:
      'https://i.ibb.co/0CtHxrn/A-small-adorable-creature-with-fur-that-twinkle.png',
    inclination: 'Love',
  },
  {
    id: 46,
    name: 'Lunar Lantern Lemur',
    description:
      'A lemur with a tail that glows softly like a lantern, guiding nocturnal travelers through medieval jungles.',
    randomNumber: 824,
    image:
      'https://i.ibb.co/DRHbnv7/A-lemur-with-a-tail-that-glows-softly-like-a-lan.png',
    inclination: 'Wisdom',
  },
  {
    id: 47,
    name: 'Starshade Squirrel',
    description:
      'A squirrel with a tail that sparkles with the brilliance of distant stars, leaping between medieval treetops.',
    randomNumber: 399,
    image:
      'https://i.ibb.co/ZfJPSW9/A-squirrel-with-a-tail-that-sparkles-with-the-br.png',
    inclination: 'Love',
  },
  {
    id: 48,
    name: 'Frostbite Firefly Fox',
    description:
      'A fox with fur that mimics the luminescence of fireflies, flickering in the frosty air of ancient woodlands.',
    randomNumber: 655,
    image:
      'https://i.ibb.co/5ncyjLf/A-fox-jumping-looking-away-with-fur-that-mimics.png',
    inclination: 'Wisdom',
  },
  {
    id: 49,
    name: 'Nebula Nudibranch',
    description:
      'An ocean-dwelling creature with iridescent tendrils that mimic swirling nebulae, drifting through underwater kingdoms.',
    randomNumber: 177,
    image:
      'https://i.ibb.co/YtNkwtz/An-oceandwelling-creature-with-iridescent-tendr.png',
    inclination: 'Wisdom',
  },
  {
    id: 50,
    name: 'Thunderstrike Tarsier',
    description:
      'A small primate with eyes that flash with lightning, inhabiting the stormy reaches of medieval canopies.',
    randomNumber: 888,
    image:
      'https://i.ibb.co/yVV34m5/A-small-primate-with-eyes-that-flash-with-lightn.png',
    inclination: 'Mischief',
  },
  {
    id: 51,
    name: 'Majestic Manticore',
    description:
      'A mythical creature with the body of a lion, wings of a dragon, and a tail ending in a cluster of venomous spikes.',
    randomNumber: 366,
    image:
      'https://i.ibb.co/0KKQ8w5/A-mythical-creature-with-the-body-of-a-lion-win-1.png',
    inclination: 'Wrath',
  },
  {
    id: 52,
    name: 'Abyssal Albatross',
    description:
      'A giant bird with feathers that absorb light, soaring over medieval seas and disappearing into the dark abyss below.',
    randomNumber: 586,
    image:
      'https://i.ibb.co/tXKDNSm/A-giant-bird-with-feathers-that-absorb-light-so.png',
    inclination: 'Wisdom',
  },
  {
    id: 53,
    name: 'Ethereal Elephant Eel',
    description:
      'A majestic aquatic creature with the body of an elephant and the tail of an eel, gliding through mysterious underwater realms.',
    randomNumber: 943,
    image:
      'https://i.ibb.co/DQxSt0F/A-majestic-aquatic-creature-with-the-body-of-an.png',
    inclination: 'Wisdom',
  },
  {
    id: 54,
    name: 'Grove Guardian Gargoyle',
    description:
      'A stone gargoyle brought to life by ancient magic, protecting sacred groves and medieval monuments.',
    randomNumber: 111,
    image:
      'https://i.ibb.co/2tkgG9F/A-stone-gargoyle-brought-to-life-by-ancient-magi.png',
    inclination: 'Wrath',
  },
  {
    id: 55,
    name: 'Luminous Liger',
    description:
      'A hybrid creature with the strength of a lion and the grace of a tiger, its fur radiating a gentle glow.',
    randomNumber: 455,
    image:
      'https://i.ibb.co/9HBSqZs/A-hybrid-creature-with-the-strength-of-a-lion-an.png',
    inclination: 'Pride',
  },
  {
    id: 56,
    name: 'Sapphire Snail',
    description:
      'A slow-moving snail with a shell that glistens like precious sapphire, leaving a trail of magical luminescence.',
    randomNumber: 723,
    image:
      'https://i.ibb.co/ggq2QXD/A-slowmoving-snail-with-a-shell-that-glistens-l.png',
    inclination: 'Wisdom',
  },
  {
    id: 57,
    name: 'Chrono Chameleon',
    description:
      'A chameleon with scales that shift through the colors of time, blending into the temporal fabric of medieval landscapes.',
    randomNumber: 567,
    image:
      'https://i.ibb.co/3m004k7/A-chameleon-with-scales-that-shift-through-the-c.png',
    inclination: 'Wisdom',
  },
  {
    id: 58,
    name: 'Frostfire Phoenix',
    description:
      'A phoenix with feathers that alternate between icy blue and fiery red, symbolizing the eternal dance of winter and summer.',
    randomNumber: 789,
    image:
      'https://i.ibb.co/jfFxrV4/A-phoenix-with-feathers-that-alternate-between-i.png',
  },
  {
    id: 59,
    name: 'Verdant Drake',
    description:
      'A dragon with scales that mimic the lush greenery of the forest, dwelling in hidden glades and protecting the woodland creatures.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/HXNyWY2/a-dragon-with-scales-that-mimic-the-lush-greener.png',
    inclination: 'Mischief',
  },
  {
    id: 60,
    name: 'Cerulean Wyvern',
    description:
      'A winged creature with scales that mirror the deep blue of the sky, soaring gracefully over medieval landscapes.',
    randomNumber: 645,
    image:
      'https://i.ibb.co/d53tjY6/A-winged-creature-with-scales-that-mirror-the-de.png',
    inclination: 'Wisdom',
  },
  {
    id: 61,
    name: 'Moonshadow Lynx',
    description:
      'A stealthy lynx with fur that absorbs and reflects moonlight, becoming nearly invisible as it stalks its prey.',
    randomNumber: 456,
    image:
      'https://i.ibb.co/NFv5TZc/A-stealthy-lynx-with-fur-that-absorbs-and-reflec-1.png',
    inclination: 'Mischief',
  },
  {
    id: 62,
    name: 'Nebula Nymph',
    description:
      'A small, ethereal creature with wings resembling swirling galaxies, bringing cosmic magic to enchanted gardens.',
    randomNumber: 823,
    image:
      'https://i.ibb.co/qCL5Tbd/A-small-ethereal-creature-with-wings-resembling.png',
    inclination: 'Love',
  },
  {
    id: 63,
    name: 'Amethyst Armadillo',
    description:
      'A mystical armadillo with a shell made of shimmering amethyst, rolling into a protective ball when threatened.',
    randomNumber: 134,
    image:
      'https://i.ibb.co/qRjMFVN/A-mystical-armadillo-with-a-shell-made-of-shimme.png',
    inclination: 'Wrath',
  },
  {
    id: 64,
    name: 'Stardust Seahorse',
    description:
      'A seahorse with a mane of stardust, swimming gracefully in celestial seas beneath a starlit sky.',
    randomNumber: 422,
    image:
      'https://i.ibb.co/d7bBwgw/A-seahorse-with-a-mane-of-stardust-swimming-gra.png',
    inclination: 'Wisdom',
  },
  {
    id: 65,
    name: 'Molten Gryphon',
    description:
      'A gryphon with feathers that resemble flowing lava, perched on the peaks of volcanoes as a guardian of the fiery realms.',
    randomNumber: 576,
    image:
      'https://i.ibb.co/QfbGkvj/A-gryphon-with-feathers-that-resemble-flowing-la.png',
    inclination: 'Wisdom',
  },
  {
    id: 66,
    name: 'Ironhide Rhino',
    description:
      'A massive rhinoceros with a hide as tough as iron, charging through medieval battlefields with unwavering strength.',
    randomNumber: 246,
    image:
      'https://i.ibb.co/mGhXx2k/A-massive-rhinoceros-with-a-hide-as-tough-as-iro.png',
    inclination: 'Pride',
  },
  {
    id: 67,
    name: 'Whimsical Woodpecker Warg',
    description:
      'A large, colorful woodpecker with the intelligence of a wolf, often tamed by woodland elves as loyal companions.',
    randomNumber: 853,
    image:
      'https://i.ibb.co/rtpy6M8/A-large-colorful-woodpecker-with-the-intelligen.png',
    inclination: 'Mischief',
  },
  {
    id: 68,
    name: 'Eldritch Elk',
    description:
      'An elk with antlers that channel otherworldly energies, said to have the ability to open portals to distant realms.',
    randomNumber: 764,
    image:
      'https://i.ibb.co/4ZJmxJM/An-elk-with-antlers-that-channel-otherworldly-en.png',
    inclination: 'Wisdom',
  },
  {
    id: 69,
    name: 'Sable Shapeshifter Snake',
    description:
      'A serpent with the ability to transform into various shapes, rumored to be a guardian of ancient magical artifacts.',
    randomNumber: 512,
    image:
      'https://i.ibb.co/g613kJF/A-serpent-with-the-ability-to-transform-into-var.png',
    inclination: 'Wisdom',
  },
  {
    id: 70,
    name: 'Iridescent Iguana',
    description:
      'A lizard with scales that shimmer in a myriad of colors, basking in the medieval sun on ancient castle walls.',
    randomNumber: 675,
    image:
      'https://i.ibb.co/SVZqd0S/A-lizard-with-scales-that-shimmer-in-a-myriad-of.png',
    inclination: 'Love',
  },
  {
    id: 71,
    name: 'Vortex Vulture',
    description:
      'A scavenger bird with wings that create miniature tornadoes, soaring above battlefields to pick at the remnants of war.',
    randomNumber: 931,
    image:
      'https://i.ibb.co/N7dbpHd/A-scavenger-bird-with-wings-that-create-miniatur.png',
    inclination: 'Mischief',
  },
  {
    id: 72,
    name: 'Mystic Mantis',
    description:
      'A giant mantis with eyes that glow with ancient knowledge, often sought by alchemists for its mystical properties.',
    randomNumber: 328,
    image:
      'https://i.ibb.co/Sm78BrL/A-giant-mantis-with-eyes-that-glow-with-ancient.png',
    inclination: 'Wrath',
  },
  {
    id: 73,
    name: 'Verdant Chimera',
    description:
      'A multi-headed beast with each head representing a different element, dwelling in caverns filled with molten lava.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/kX2WbRq/A-maroon-multiheaded-beast-in-green-armor-n-gre.png',
    inclination: 'Wrath',
  },
  {
    id: 74,
    name: 'Ephemeral Elephant',
    description:
      'An elephant with a transparent, ghostly appearance, said to be a manifestation of the spirits of the forest.',
    randomNumber: 299,
    image:
      'https://i.ibb.co/ncHJtz3/A-pale-white-elephant-with-a-transparent-ghostl.png',
    inclination: 'Wisdom',
  },
  {
    id: 75,
    name: 'Celestial Cheetah',
    description:
      'A swift cheetah with fur that sparkles like stars, racing through the night under the gaze of the moon.',
    randomNumber: 415,
    image:
      'https://i.ibb.co/qD7Bcgf/A-swift-cheetah-with-fur-that-sparkles-like-star.png',
    inclination: 'Pride',
  },
  {
    id: 76,
    name: 'Frostbite Ferret',
    description:
      'A small ferret with fur that freezes anything it touches, often kept as a companion by ice sorcerers.',
    randomNumber: 567,
    image:
      'https://i.ibb.co/8gHL9kq/A-small-ferret-with-fur-that-freezes-anything-it.png',
    inclination: 'Love',
  },
  {
    id: 77,
    name: 'Starlight Stingray',
    description:
      'A graceful stingray with a pattern of glowing stars on its back, gliding through medieval rivers.',
    randomNumber: 789,
    image:
      'https://i.ibb.co/sgL73NC/A-graceful-stingray-with-a-pattern-of-glowing-st.png',
    inclination: 'Wisdom',
  },
  {
    id: 78,
    name: 'Aurora Armored Antelope',
    description:
      'An antelope with armor that reflects the colors of the aurora borealis, leaping through meadows with grace.',
    randomNumber: 823,
    image:
      'https://i.ibb.co/T4KjnKD/An-antelope-with-armor-that-reflects-the-colors.png',
    inclination: 'Pride',
  },
  {
    id: 79,
    name: 'Harmonic Hummingbird',
    description:
      'A hummingbird with feathers that emit melodic tones, bringing music to enchanted gardens.',
    randomNumber: 134,
    image:
      'https://i.ibb.co/mb4x1mC/A-hummingbird-with-feathers-that-emit-melodic-to.png',
    inclination: 'Love',
  },
  {
    id: 80,
    name: 'Obsidian Ocelot',
    description:
      'A sleek ocelot with fur as dark as obsidian, stalking silently through the shadows of ancient ruins.',
    randomNumber: 576,
    image:
      'https://i.ibb.co/PT4j6bL/A-of-sleek-ocelot-with-fur-as-dark-as-obsidian-w.png',
    inclination: 'Pride',
  },
  {
    id: 81,
    name: 'Thunderstrike Tarantula',
    description:
      'A giant tarantula with legs that generate electric charges, dwelling in stormy caverns and guarding ancient artifacts.',
    randomNumber: 246,
    image:
      'https://i.ibb.co/7ypX5mF/A-giant-tarantula-with-legs-that-generate-electr.png',
    inclination: 'Wrath',
  },
  {
    id: 82,
    name: 'Whisperwind Weasel',
    description:
      'A small weasel with fur that ripples like the wind, known for its elusive and playful nature.',
    randomNumber: 853,
    image:
      'https://i.ibb.co/sw0N3b7/A-small-weasel-with-fur-that-ripples-like-the-wi-1.png',
    inclination: 'Love',
  },
  {
    id: 83,
    name: 'Labyrinthine Minotaur Beetle',
    description:
      'A giant beetle with an intricate maze pattern on its shell, dwelling in ancient ruins and guarding hidden passages.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/5hz69K2/A-giant-beetle-with-an-intricate-maze-pattern-on.png',
    inclination: 'Pride',
  },
  {
    id: 84,
    name: 'Sapphire Wyrm',
    description:
      'A serpent-like dragon covered in shimmering sapphire scales, known to slumber within the heart of a mystical blue cavern.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/BPWLDGT/A-serpentlike-dragon-covered-in-shimmering-sapp.png',
    inclination: 'Mischief',
  },
  {
    id: 85,
    name: 'Enchanted Griffin Owlbear',
    description:
      'A hybrid creature with the body of a bear, wings of a griffin, and the wisdom of an owl, often sought as a companion by adventurers.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/bbqnKbh/A-hybrid-creature-with-the-body-of-a-bear-wings.png',
    inclination: 'Pride',
  },
  {
    id: 86,
    name: 'Silvershade Fox',
    description:
      'A silver fox with fur that blends seamlessly with moonlit shadows, rumored to guide lost travelers to safety.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/Sc6fwbG/A-silver-fox-with-fur-that-blends-seamlessly-wit.png',
    inclination: 'Wrath',
  },
  {
    id: 87,
    name: 'Thunderclaw Roc',
    description:
      'A colossal bird with thunderstorm feathers, creating storms as it soars across the medieval skies.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/v16FVVc/A-colossal-bird-with-thunderstorm-feathers-crea.png',
    inclination: 'Wrath',
  },
  {
    id: 88,
    name: 'Obsidian Direwolf',
    description:
      'A massive, jet-black wolf with eyes that gleam like polished obsidian, leading packs through the mystical forest.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/0Yv0B9X/A-massive-jetblack-wolf-with-eyes-that-gleam-l.png',
    inclination: 'Mischief',
  },
  {
    id: 89,
    name: 'Amberwinged Dragonfly',
    description:
      'A delicate dragonfly with wings resembling transparent amber, weaving through sunbeams and spreading a sense of tranquility.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/YTbwmFd/A-delicate-dragonfly-with-wings-resembling-trans.png',
    inclination: 'Mischief',
  },
  {
    id: 90,
    name: 'Timeless Tortoise',
    description:
      'A wise tortoise with a shell that reflects the changing seasons, said to have witnessed centuries unfold.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/q7n2nK1/A-wise-tortoise-with-a-shell-that-reflects-the-c.png',
    inclination: 'Wisdom',
  },
  {
    id: 91,
    name: 'Molten Salamander',
    description:
      'A fiery salamander that glides through rivers of molten lava, guarding the entrance to subterranean realms.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/br42wP9/A-fiery-salamander-that-glides-through-rivers-of.png',
    inclination: 'Pride',
  },
  {
    id: 92,
    name: 'Eclipse Hare',
    description:
      'A magical hare with fur that changes color during solar and lunar eclipses, appearing in sacred groves.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/ZSXGZhk/A-magical-hare-with-fur-that-changes-color-durin.png',
    inclination: 'Mischief',
  },
  {
    id: 93,
    name: 'Abyssal Leviathan',
    description:
      'A colossal sea serpent with bioluminescent patterns, lurking in the depths of a mysterious underwater abyss.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/rb5DbLX/A-colossal-sea-serpent-with-bioluminescent-patte.png',
    inclination: 'Wrath',
  },
  {
    id: 94,
    name: 'Thorned Basilisk',
    description:
      'A serpent with thorny scales and the ability to turn creatures to stone with a single gaze, inhabiting ancient gardens.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/T1vXtT6/A-serpent-with-thorny-scales-and-the-ability-to.png',
    inclination: 'Wrath',
  },
  {
    id: 95,
    name: 'Whispering Wisp Wombat',
    description:
      'A small, furry creature with the ability to communicate through ethereal wisps, aiding those in need.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/jR39PvX/A-small-furry-creature-with-the-ability-to-comm.png',
    inclination: 'Love',
  },
  {
    id: 96,
    name: 'Aurora Elk',
    description:
      'A majestic elk with antlers that light up with the colors of the aurora borealis, roaming the northernmost realms.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/pR1T9vk/A-majestic-elk-with-antlers-that-light-up-with-t.png',
    inclination: 'Love',
  },
  {
    id: 97,
    name: 'Solar Seraphim Butterfly',
    description:
      'A radiant butterfly with wings that resemble stained glass, said to be messengers from the celestial realms.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/kGsCH4h/A-radiant-fuzzy-butterfly-with-wings-that-resemb.png',
    inclination: 'Love',
  },
  {
    id: 98,
    name: 'Celestial Peryton',
    description:
      'A mythical creature with the body of a deer and wings of an angel, said to embody the union of earth and sky.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/F8hTZXK/A-mythical-creature-with-the-body-of-a-deer-and.png',
    inclination: 'Wisdom',
  },
  {
    id: 99,
    name: 'Chromatic Chameleon',
    description:
      'A chameleon with scales that shift in color to match its surroundings, blending seamlessly into the vibrant medieval landscapes.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/c6P7MW0/A-chameleon-with-scales-that-shift-in-color-to-m.png',
    inclination: 'Pride',
  },
  {
    id: 100,
    name: 'Vorpal Viper',
    description:
      'A venomous snake with fangs so sharp they can cut through reality itself, often associated with ancient curses.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/ygLYvrK/A-venomous-snake-with-fangs-so-sharp-they-can-cu.png',
    inclination: 'Wrath',
  },
  {
    id: 101,
    name: 'Wraithwing Raven',
    description:
      'A spectral raven with feathers that carry whispers of the afterlife, guiding lost souls to their eternal rest.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/DKYBT9b/A-spectral-raven-with-feathers-that-carry-whispe.png',
    inclination: 'Wrath',
  },
  {
    id: 102,
    name: 'Lunar Lotus Tortoise',
    description:
      'A tranquil tortoise with a shell resembling a blooming lotus, often found in serene moonlit ponds.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/zxzV9Kd/A-tranquil-tortoise-with-a-shell-resembling-a-bl.png',
    inclination: 'Wisdom',
  },
  {
    id: 103,
    name: 'Chrono Chameleon',
    description:
      'A chameleon with scales that shift through the colors of time, blending into the temporal fabric of medieval landscapes.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/3m004k7/A-chameleon-with-scales-that-shift-through-the-c.png',
    inclination: 'Wisdom',
  },
  {
    id: 104,
    name: 'Lava Lizard Lynx',
    description:
      'A lynx adapted to volcanic landscapes, with fur resembling flowing lava and eyes that burn like molten rock.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/ZNQcBmP/A-leaping-lynx-wearing-leather-armor-adapted-to.png',
    inclination: 'Pride',
  },
  {
    id: 105,
    name: 'Frostfall Fennec Fox',
    description:
      'A small fox with fur that changes color with the seasons, blending seamlessly into snow-covered medieval landscapes.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/BfZzR71/A-small-white-fox-with-fur-that-changes-color-wi.png',
    inclination: 'Pride',
  },
  {
    id: 106,
    name: 'Aetherial Angelfish',
    description:
      'A celestial fish with iridescent scales, swimming in medieval ponds and bringing a sense of enchantment.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/Fwg6vwM/A-celestial-fish-with-iridescent-scales-swimmin.png',
    inclination: 'Wisdom',
  },
  {
    id: 107,
    name: 'Tempest Tortoise',
    description:
      'A giant tortoise with a shell that generates storms, creating swirling winds and rain as it travels through the medieval countryside.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/Bykfn5y/A-giant-tortoise-with-a-shell-that-generates-sto.png',
    inclination: 'Wrath',
  },
  {
    id: 108,
    name: 'Runebound Raven',
    description:
      'A raven with feathers inscribed with ancient runes, carrying messages between wizards in medieval realms.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/Xx4rXSY/A-raven-with-feathers-inscribed-with-ancient-run.png',
    inclination: 'Pride',
  },
  {
    id: 109,
    name: 'Mystic Mole',
    description:
      'A subterranean creature with fur that glows in the dark, navigating through medieval tunnels with unseen magical senses.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/FY9CyDq/A-mystic-mole-creature-with-fur-that-glows-in-th.png',
    inclination: 'Love',
  },
  {
    id: 110,
    name: 'Coral Crowned Crab',
    description:
      'A crab with a shell adorned with living coral, scuttling through the shallows of enchanted medieval shores.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/72DpgXs/A-crab-with-a-shell-adorned-with-living-coral-s.png',
    inclination: 'Pride',
  },
  {
    id: 111,
    name: 'Starwhisper Spider',
    description:
      'A spider with webs that echo the patterns of constellations, weaving ethereal traps in hidden corners of medieval castles.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/8PvY25S/A-spider-with-webs-that-echo-the-patterns-of-con.png',
    inclination: 'Wisdom',
  },
  {
    id: 112,
    name: 'Thunderstrike Thorny Toad',
    description:
      'A toad with thorns that crackle with electricity, lurking in medieval swamps and wetlands.',
    randomNumber: 213,
    image:
      'https://i.ibb.co/wzgSSCr/A-toad-with-thorns-that-crackle-with-electricity.png',
    inclination: 'Wrath',
  },
  {
    id: 113,
    name: 'Ebonwinged Echidna',
    description:
      'A spiky creature with wings as dark as night, said to be guardians of ancient subterranean treasures.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/JKgJVN0/a-dark-spiky-Echidna-with-giant-angel-like-wings.png',
    inclination: 'Love',
  },
  {
    id: 114,
    name: 'Stellar Skunk',
    description:
      'A small skunk with a tail that releases stardust, leaving behind a trail of celestial fragrance in medieval meadows.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/KhFzCmm/A-small-skunk-with-a-tail-that-releases-stardust.png',
    inclination: 'Love',
  },
  {
    id: 115,
    name: 'Mystical Moonlight Moth',
    description:
      'A majestic moth with wings that shimmer like moonlight, often spotted near enchanted meadows.',
    randomNumber: 789,
    image:
      'https://i.ibb.co/4ZGtky7/A-majestic-moth-in-armor-with-wings-that-shimmer-1.png',
    inclination: 'Wrath',
  },
  {
    id: 116,
    name: 'Lunar Griffin',
    description:
      'A graceful creature with the body of a lion and wings resembling a crescent moon, said to be guardians of ancient celestial secrets.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/PCs6JDt/A-graceful-creature-with-the-body-of-a-lion-and.png',
    inclination: 'Pride',
  },
  {
    id: 117,
    name: 'Stoneheart Stag',
    description:
      'A regal stag with antlers made of enchanted crystal, said to be the spirit of the forest itself.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/8m5sdhP/A-regal-stag-with-antlers-made-of-enchanted-crys.png',
    inclination: 'Wisdom',
  },
  {
    id: 118,
    name: 'Aetherial Serpent',
    description:
      'A serpent that glides through the air, leaving trails of sparkling stardust as it weaves through the clouds.',
    randomNumber: 987,
    image:
      'https://i.ibb.co/b7SdwdF/A-serpent-that-glides-through-the-air-leaving-t.png',
    inclination: 'Wrath',
  },
  {
    id: 119,
    name: 'Ember Phoenix',
    description:
      'A mythical bird with feathers that flicker like embers, said to rise from the ashes of great fires to bring both destruction and renewal.',
    randomNumber: 432,
    image:
      'https://i.ibb.co/R0Mdmc2/A-mythical-bird-with-feathers-that-flicker-like.png',
    inclination: 'Mischief',
  },
  {
    id: 120,
    name: 'Gilded Gryphon',
    description:
      'A gryphon adorned with golden feathers and a mane that glows like the sun, known to guard ancient treasures.',
    randomNumber: 765,
    image:
      'https://i.ibb.co/gZ7nkdw/A-gryphon-adorned-with-golden-feathers-and-a-man.png',
    inclination: 'Love',
  },
  {
    id: 121,
    name: 'Shadow Weaver Spider',
    description:
      'A giant spider with the ability to manipulate shadows, lurking in dark corners of forgotten castles.',
    randomNumber: 210,
    image:
      'https://i.ibb.co/fr00R41/A-giant-spider-with-the-ability-to-manipulate-sh.png',
    inclination: 'Wrath',
  },
  {
    id: 122,
    name: 'Frostbite Wyvern',
    description:
      'A fearsome dragon-like creature with icy breath, dwelling in the frosty peaks of a distant mountain range.',
    randomNumber: 543,
    image:
      'https://i.ibb.co/S6k9pZH/A-fearsome-dragonlike-creature-with-icy-breath.png',
    inclination: 'Wrath',
  },
  {
    id: 123,
    name: 'Silverhorn Unicorn',
    description:
      'A unicorn with a silver horn that radiates healing energy, often sought after for its mythical powers.',
    randomNumber: 876,
    image:
      'https://i.ibb.co/n6QskHx/A-unicorn-with-a-silver-horn-that-radiates-heali.png',
    inclination: 'Love',
  },
  {
    id: 124,
    name: 'Arcane Owl',
    description:
      'A wise owl with feathers that change colors based on the type of magic present in its surroundings.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/WDjyJpQ/A-wise-owl-with-feathers-that-change-colors-base.png',
    inclination: 'Wisdom',
  },
  {
    id: 125,
    name: 'Celestial Seahorse',
    description:
      'A seahorse that navigates the skies, trailing stardust in its wake, protecting sailors from mystical storms.',
    randomNumber: 654,
    image:
      'https://i.ibb.co/zrXL6Cp/A-seahorse-that-navigates-the-skies-trailing-st.png',
    inclination: 'Wisdom',
  },
  {
    id: 126,
    name: 'Stone Sentinel Tortoise',
    description:
      'A massive tortoise with a shell resembling ancient ruins, believed to carry the wisdom of the ages.',
    randomNumber: 987,
    image:
      'https://i.ibb.co/WtdjBXJ/A-massive-tortoise-with-a-shell-resembling-ancie.png',
    inclination: 'Wisdom',
  },
  {
    id: 127,
    name: 'Ebon Pegasus',
    description:
      'A majestic black-winged horse with a mane that flows like shadows, only appearing to those with pure hearts.',
    randomNumber: 432,
    image:
      'https://i.ibb.co/GPpxcPZ/A-majestic-blackwinged-horse-with-a-mane-that-f.png',
    inclination: 'Mischief',
  },
  {
    id: 128,
    name: 'Spectral Panther',
    description:
      'A phantom panther that prowls the haunted forests, its ghostly form camouflaging with the mist.',
    randomNumber: 765,
    image:
      'https://i.ibb.co/p15q56G/A-phantom-panther-wearing-black-armor-staring-in.png',
    inclination: 'Mischief',
  },
  {
    id: 129,
    name: 'Crimson Griffin',
    description:
      'A rare breed of griffin with fiery red plumage, associated with the legendary Phoenix and thought to bring good fortune.',
    randomNumber: 210,
    image:
      'https://i.ibb.co/swLC6C0/A-rare-breed-of-griffin-with-fiery-red-plumage.png',
    inclination: 'Pride',
  },
];

export async function GET(req: Request) {
  const listInclination = {
    Love: 0,
    Wisdom: 0,
    Wrath: 0,
    Mischief: 0,
    Pride: 0,
  };

  cardSet.map((card) => {
    if (card.inclination) {
      let inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief' =
        card.inclination;
      listInclination[inclination] += 1;
    }
  });
  console.log(listInclination);
  return NextResponse.json(cardSet);
}

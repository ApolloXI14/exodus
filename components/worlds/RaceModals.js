import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import styles from '../../less/Exodus.less';

export const WildkinModal = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
        <ModalBody className="race-modal-body wildkin-bg">
          <br />
          <hr className="bg-white" />
          <h1 className="text-center">Wildkin</h1>
          <hr className="bg-white" />
          <br />
          <h3 className="my-2">THE WILDKIN (Overview)</h3>
          <p>
            Wildkin are a beastial shapeshifting species that share traits with
            both humans and animals. They rule over Jiran, having established
            territories all across the region, and live lifestyles that echo
            their dual heritage. A wildkin is born in their natural beast form,
            and overtime learns to shift into a more humanoid state. The main
            Wildkin species divided by mammalian, reptilian, arthropodic, avian,
            and aquatic clades and each have had a significant impact on the land.
          </p>
          <p>
            Most wildkin live nomadic lives and do not often form anchored cities.
            They prefer to live among beasts of their kind, and nearly every
            wildkin clan has a totem ancestor that they draw power from. Their
            weapons and armor are formed from sturdy bones and Nydid weave
            (Nydid is an organic plant-like material that grows and changes
            structure to adapt to it’s host), and occasionally imbue elemental
            crystals into their gear. While they face harsh discrimination in
            Shadarrin and Baldeming (often treated like lesser people), in Jiran
            Wildkin reign supreme.
          </p>                  
          <p>
            And everything else is prey.
          </p>
          <br />
          <h3 className="my-2">A FORM IN FLUX (Morphology)</h3>
          <p>
            While wildkin appear to shift between either a more humanoid or
            more beast shape, their bodies are actually always subtly shifting.
            Claws and fangs grow and shrink, the skeleton restructures to support
            quadripedal or bipedal movement, ears subtly shift between man and
            beast. These things happen subconsciously for wildkin, the same way
            a human’s pupils dilate and hair stands up. Wildkin cannot cast
            spells, but it is theorized that their bodies naturally use magic
            in various ways, such as compensating for the mass loss when
            shapeshifting.
          </p>
          <p>
            In their human-shape, wildkin’s head, legs, and arms generally
            resemble a human’s proportions. They sacrifice size, strength, senses
            and form to gain various advantageous societal traits such as a
            voicebox, increased dexterity from human hands and feet, more
            stamina, and the ability to use equipment that wouldn’t otherwise
            be viable for them. This form is considered more “socially acceptable”
            in cities and allows wildkin to form better social connections
            with other races.
          </p>
          <p>
            Their natural state shares more in common with beasts then man.
            Everything but the torso and arms match their token animal, but
            with altered porportions that facilitate something inbetween bipedal
            and quadripedalism. In their natural form they can communicate
            with beasts of their kind (such as an bird wildkin being able to
            communicate with avian beasts). They can mate with other wildkin
            within similar classes (mammalian wildkin can mate with other
            mammals – reptiles with reptiles ) but rarely produce offspring
            with other races. Halfkin humans have traits of parent’s physiology
            but cannot shapeshift.
          </p>
          <br />
          <h3 className="my-2">AVATARS OF THE WILD (Culture)</h3>
          <p>
            Descended from the ancient Kymeer, wildkin are said to have
            originated on Jiran and there is an abundance of evidence to
            support that theory. While all beings are instinctively connected
            to nature, Wildkin seem to have special bonds with their ecosystems.
            They naturally understand the needs of the planet’s animals,
            dedicating themselves to the preservation of all creatures that
            share their like. While there is often animosity between
            carnivorous and herbivorous wildkin, both have a deep respect for
            one another and the circle of life.
          </p>
          <p>
            Wildkin in their natural habitats rarely revert to their humanoid
            form. They see little need for it if not to interact with other
            races. This is also important as a wildkin that spends too much
            time in their human form has trouble controlling their instincts
            when they revert to their natural shape. While they cannot cast
            spells and do not bother with the intricacies of magic, Wildkin
            are able to manipulate enchantments in weapons and armor.
            Additionally, many wildkin employ ashé paint to enhance their
            natural abilities with their prana.
          </p>
          <p>
            Long ago the Saurops (reptilekin) ruled over Jiran, rending most
            of the land as swamps and keeping other creatures at bay with poison
            mists. Overtime many of the other clades came together to overthrow
            the Saurops’ rule, creating a united wildkin kingdom in eastern
            Jiran. Currently the Felini (feline wildkin) clade rule at the top
            of the kingdom, and saurops are all but outlawed.
          </p>
          <p>
            Wildkin who cater more to their human form are generally looked
            down on among their peers, especially with those who cannot 
            control their instincts in their beast form. While many carniverous
            wildkin look down on humans and nom as prey, they tend to have
            positive relations with most other races, but have a strong dislike
            for the amiran who hunt them. Hunting wildkin for servants is a
            very lucrative business, and most wildkin in Shadarrin and Baldeming
            are descended from those who were taken captive from their homeland
            and brought across the world.
          </p>
          <br />
          <h3 className="my-2">FROM CUB TO ALPHA (Creating a Wildkin)</h3>
          <p>
            1) What class(species) of wildkin are you? <br/>
            Mammal – Reptile – Fish – Bird – Arthropod <br />
            <ul>
              <li>
                You gain +2 to 2 stats depending on your animal species as well
                as different biological abilities (ex: flight, burrowing, night
                vision, agility, water breathing)
              </li>
              <li>
                Shifting adds +2 to all stats but reduces KNO by 4.
                Cannot use normal weapons or communicate with words.
              </li>
            </ul>
          </p>
          <p>
            2) How were you raised? <br />
          </p>
          <p>
            Where do you live? Were you raised in the homeland of Jiran, or
            somewhere else? Do you prefer your human form or natural state? Do
            you have a pack or family? If not, what happened to them? Have you
            or anyone you known ever been hunted? (You may be entitled to
            compensation, dial 1-800…)
          </p>
          <p>
            3) Wildkin Tools & Weaponry <br />
          </p>
          <p>
            Wildkin generally prefer to fight with their teeth, claws, and
            other natural weapons. As a result, swords are uncommon in favor of
            wrist/ankle blades. Some wear elaborate bone armor stitched with
            Nydid – a biological material that grows with its host and develops
            natural defensive adaptions to their environment. Bone weapons
            passed down through generations often carry the prana of their
            ancestors, granting surprising abilities to the descendant. Wildkin
            also use ashé brands to enhance their abilities (such as allowing
            a lizard wildkin to shoot their spikes or have scales of diamond)
            and imbue elemental crystals into their gear.
          </p>
          <p>
            Common Items: <br />
            Wrist/Ankle blades(mammals), chakrams, slings,
            boomerangs & javelins, tail clubs/blades (reptiles)
          </p>
          <p>
            Examples of ashé brand effects: <br />
            An Aves(bird wildkin) wings
            being bladed and able to shoot feathers. A Felini (feline wildkin)
            with a roar that deflects projectiles. A Lupo (wolf) pack sharing
            a brand that makes them stronger and faster the more they are near
            eachother. A shark with lasers..
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export const LivriOluModal = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
        <ModalBody className="race-modal-body livri-olu-bg">
          <br />
          <hr className="bg-white" />
          <h1 className="text-center">The Liv'ri & The Olu</h1>
          <hr className="bg-white" />
          <br />
          <p>
            The Liv’ri and the Olu are plant and fungal species respectively.
            While they share many similarities and are often confused for one
            another, they are not the same race. The Liv’ri are the guardians
            and cultivators of Exodus’s plantlife, growing seeds out of their
            very hair to spread forests across the world. The Olu, subterranian
            fungal decomposers, are feared and hated across the world for their
            revelry in death and decay.
          </p>
          <p>
            Liv’ri are a passive people and prefer to cultivate and grow. As a
            result, they excel in the healing arts and grow the most nutritious
            food in all the world. Liv’ri communities are often secluded paradises
            that previous few people are blessed to discover. The Olu are more
            aggressive and invasive by nature. They utilize mind-control to
            encourage wars among other races and collect the corpses for
            necromantic purposes. Not all Olu are evil, and unlike the 
            "dirty” necromancy of other races, their magic usually has very
            beneficial effects for setting the stage for new life to grow where
            death once was.
          </p>
          <br />
          <h3 className="my-2">SYSNTHESIS & NECROSIS (Morphology)</h3>
          <p>
            Both Liv’ri and Olu have similar biological compositions, despite
            their bodies working very differently from eachother. On the surface,
            both have fey features, with sharp eyes, chins, and ears. They grow
            plant & fungal foliage from anywhere that a human would grow hair,
            while the hair on their head often produces consumable fruits, seeds,
            and spores. They both are capable of producing vine-like extensions
            from their hair, wrists, and ankles and begin to more closely
            resemble plants and fungi as they get older. Liv’ri and Olu can live
            up to 100,000 years, though few ever make it that far, and true
            “adulthood” is around 300 years of age.
          </p>
          <p>
            The sunkissed Liv’ri can, but do not have to eat to maintain
            photosynthesis. Almost all Liv’ri are capable of surviving off
            water and sunlight alone. Similar to plants, most Liv’ri are
            androgynous, though some do posess definitive sexes. As they
            grow, the seeds in their hair mature and fall out, creating new
            forests throughout their lifetime. (Occasionally, in the right
            conditions, some of these seeds will produce offspring.) After a
            certain age, Liv’ri feel a natural compulsion to travel and spread
            their forests across the world, eventually settling in a single
            location to form a sanctuary.
          </p>
          <p>
            The bioluminsescent Olu feast on the dead, which tends to leave a
            terrible first impression. As decomposers, Olu break down corpses
            and return the energy into the atmosphere for trees and plants to
            turn into ether. The Olu are naturally able to use their fungal
            abilities to turn a dead body into nutrients, but can also use their
            spores to affect living organisms. They naturally emit mind-bending
            pheromones that connect them with a host’s brain to cause illusions
            or send mental suggestions. The more a host has injested an Olu’s
            spores, the more control the Olu has over them.
          </p>
          <br />
          <h3 className="my-2">A LIFE OF LIFE & DEATH (Culture)</h3>
          <p>
            Liv’ri are some of the most beloved races across Exodus for their
            friendly and peaceful nature. They often get along with nearly all
            other races, especially wildkin and fae, but have a particular
            dislike towards humans, urul, kogg, and nom for how destructive
            their buildings can be. Urul especially enjoy raiding Liv’ri
            sanctuaries, having little trouble eventually tearing through their
            defenses with persistant aggression. For this reasion, liv’ri are
            often born into separate Cultivator and Defender castes. There are
            no known liv’ri sanctuaries in shadarrin outside of a couple
            districts. Liv’ri magic is almost entirely plant-based, though 
            they have been known to occasionally learn spells outside of their
            natural field.
          </p>
          <p>
            The Olu are derogatively called “Rotsuckers” for their natural
            attraction to the dead. Since the majority of their communities live
            underground, they are far more familiar with kogg, nom, and
            Earth-based scions than any of the surface-dwelling races. They
            prefer to live beneath large surface communities where death is
            plentiful and food is abundant, though they have no problem
            subsisting off of dead plant matter and do not actively hunt and
            kill their prey. Instead, they use subterfuge and intrigue to start
            great conflicts among people. Nearly all olu can sense when someone
            is near death, and exhibit greater control over weaker targets.
            Though it takes a lot of energy and a bit of training, many olu
            can use a portion of their own lifeforce to revive the recently
            deceased.
          </p>
          <p>
            While many liv’ri and olu communities do not get along, the few
            that do have some of the most successful societies all across Exodus.
          </p>
          <br />
          <h3 className="my-2">GROW & FLOURISH (Creating a liv’ri/olu)</h3>
          <p>
            1) Are you floral or fungal? <br/>
            What plants/fungi make up your composition? (Up to 3) <br />
            <ul>
              <li>
                Liv’ri gain bonuses to healing abilities & plant-based magic,
                Olu gain bonuses to lifestealing & ability to raise the recently
                dead as zombies.
              </li>
              <li>
                Abilities are based on whatever 3 combinations of plants/fungi
                make up your liv’ri/olu. (For example a cactus & rose liv’ri
                would have spikes. an aloe liv’ri is near fireproof. A yeast
                olu will get you drunk. You’re welcome.)
              </li>
            </ul>
          </p>
          <p>
            2) How were you raised? <br />
          </p>
          <p>
            Did you grow up in a community among your people? Was it a strict,
            xenophobic, and rigid structure or was there freedom to express?
            Are you naturally a cultivator or defender? Are you used to other
            races? What do you smell like, and are you poisonous? Have you
            created any woods in your journeys?
          </p>
          <p>
            3) Liv’ri/Olu defenses. <br />
          </p>
          <p>
            Liv’ri are generally defensive people who fight using blades,
            whips, and chemicals. The vines that grow from their hands and
            feet give them incredible mobility across a battlefield,
            especially as trees and fungal caps grow around them. Nearby
            plants awaken to their call, with grass sharpening to blades
            and branches and roots swinging to obstruct their enemies.
            Cultivator liv’ri are not the most advanced combatants, but
            Guardians live for battle. Because of the dexterity of their
            prehensile vines, it isn’t uncommon to see a liv’ri swordsman
            fighting with four blades at once. Their natural healing abilities
            make them very hard to kill.
          </p>
          <p>
            While many Olu prefer stealth, psychological warfare, and striking
            from shadows, the race as a whole have invented a powerful form of
            shield-based combat. Olu have created mushroom shields with various
            additional features such as elastic cords, blades, reactive spores
            and more. Olu wield these “shield-gauntlets” on both hands and
            generally prefer to engage in close-ranged combat so that their
            spores can infect and invade their opponent, allowing them to
            inflict psychoactive effects on their victims.
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
};
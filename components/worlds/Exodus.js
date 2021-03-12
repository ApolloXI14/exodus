import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap';
import { Link } from 'react-scroll';
import styles from '../../less/Exodus.less';
import { NavLink } from 'react-router-dom';

class Exodus extends Component {
  constructor(props) {
    super(props);
    this.map = this.map.bind(this);
    this.races = this.races.bind(this);
    this.magic = this.magic.bind(this);
    this.toggleShadarrin = this.toggleShadarrin.bind(this);
    this.toggleBaldeming = this.toggleBaldeming.bind(this);
    this.toggleJiran = this.toggleJiran.bind(this);
    this.toggleWildkin = this.toggleWildkin.bind(this);
    this.toggleLivriOlu = this.toggleLivriOlu.bind(this);
    this.state = {
      renderedPage: "",
      map: false,
      races: false,
      magic: false,
      shadarrinModal: false,
      baldemingModal: false,
      jiranModal: false,
      wildkinModal: false,
      livriOluModal: false
    };
  };

  map() {
    this.setState({
      renderedPage: "Map",
      map: true,
      races: false,
      magic: false
    });
  };

  races() {
    this.setState({
      renderedPage: "Races",
      map: false,
      races: true,
      magic: false
    });
  };

  magic() {
    this.setState({
      renderedPage: "Magic",
      map: false,
      races: false,
      magic: true
    });
  };

  toggleShadarrin(e) {
    e.preventDefault();
    this.setState({
      shadarrinModal: !this.state.shadarrinModal
    });
  };

  toggleBaldeming(e) {
    e.preventDefault();
    this.setState({
      baldemingModal: !this.state.baldemingModal
    });
  };

  toggleJiran(e) {
    e.preventDefault();
    this.setState({
      jiranModal: !this.state.jiranModal
    });
  };

  toggleWildkin(e) {
    e.preventDefault();
    this.setState({
      wildkinModal: !this.state.wildkinModal
    });
  };

  toggleLivriOlu(e) {
    e.preventDefault();
    this.setState({
      livriOluModal: !this.state.livriOluModal
    });
  };

  render() {
    return (
      <Container
        fluid
        className="pt-3 p-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../www/img/background/Exodus-world-concept.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        { this.state.renderedPage === "" || this.state.renderedPage === "Map" ? 
          <h1 className="text-white">THE WORLD OF EXODUS</h1>
          : null
        }
        { this.state.renderedPage === "Races" ? 
          <h1 className="text-white">THE PEOPLE OF EXODUS</h1>
          : null
        }
        { this.state.renderedPage === "Magic" ? 
          <h1 className="text-white">MAGIC IN EXODUS</h1>
          : null
        }

        <br />

        <div className="text-light-gray">
          <h5 className="mt-15">
            <Nav className="justify-content-center">
              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.renderedPage === "" || this.state.map ? "active-nav" : ""}
                  to="#"
                  onClick={this.map}
                >
                  Map
                </NavLink>
              </NavItem>

              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.races ? "active-nav" : ""}
                  to="#"
                  onClick={this.races}
                >
                  Races
                </NavLink>
              </NavItem>

              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.magic ? "active-nav" : ""}
                  to="#"
                  onClick={this.magic}
                >
                  Magic
                </NavLink>
              </NavItem>
            </Nav>
          </h5>

          {/* World Map */}
          { this.state.renderedPage === "" || this.state.renderedPage === "Map" ?
            <div>
              <br />
              <hr className="bg-white" />
              <hr className="bg-white" />
              <br />

              <p>
                The world of Exodus is much larger than Earth,
                and with so many different sentient races (some much more ancient than others)
                it isn’t uncommon for some parts of the world to seem from an entirely
                different time period than others. The charted parts of Exodus are divided
                into three regions; Shadarrin, Jiran, and Baldeming. Each of these continental
                masses have extremely unique cultures and technology.
              </p>

              <img src={"../../www/img/exodus-placeholder.jpg"} width="100%" usemap="#exodus-map" />

              <div className="my-4 region-buttons">
                <Button block color="info" onClick={this.toggleJiran}>JIRAN</Button>
                <Button block color="info" onClick={this.toggleShadarrin}>SHADARRIN</Button>
                <Button block color="info" onClick={this.toggleBaldeming}>BALDEMING</Button>
              </div>

              <map name="exodus-map">
                <area
                  shape="rect"
                  coords="500, 10, 1100, 170"
                  href="#"
                  onClick={this.toggleJiran}
                />
                <area
                  shape="circle"
                  coords="700, 400, 170"
                  href="#"
                  onClick={this.toggleShadarrin}
                />
                <area
                  shape="rect"
                  coords="700, 800, 1200, 600"
                  href="#"
                  onClick={this.toggleBaldeming}
                />
              </map>

              {/* Shadarrin */}
              <div>
                <Modal isOpen={this.state.shadarrinModal} toggle={this.toggleShadarrin}>
                  <ModalHeader toggle={this.toggleShadarrin} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
                  <ModalBody style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('../../www/img/shadarrin-placeholder.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                    <br />
                    <hr className="bg-white" />
                    <h1 className="text-center">SHADARRIN</h1>
                    <hr className="bg-white" />
                    <br />
                    <p>
                      Dust, smog, and ironworks are the staples of this sand-blasted region.
                      Shadarrin is an inhospitable land dominated by humankind.
                      It wasn’t always this way; once long ago Shadarrin was similar to Jiran,
                      but a mysterious catastrophe left the landscape plagued with unstable radiation.
                      Animals mutated into aberrents, the weather warped to create unpredictable
                      chemical storms, and many of the sentient races were forced underground.
                    </p>
                    <p>Yet humanity found a way. </p>                  
                    <p>
                      Embracing prosthetics, harnessing steam energy, and creating domed
                      sanctuaries called “Districts” allowed humanity to rule the region.
                      The districts divide Shadarrin into distinct territories, but those
                      outside in the wasteland are left to deal with the horrors of the Smog
                      and all the monstrosities that lurk within. While there is assumed to be
                      enough room in the safety of the districts, politics, greed, and other
                      types of corruption keep many from the districts’ protection.
                      These outsiders -often human but sometimes wildkin, dwarf, gnome, or orc-
                      live off scavenging and raiding District caravans for survival.
                    </p>
                    {/* <p>STYLE & CULTURE</p> */}
                    <p>
                      <span id="baldeming"></span>
                      Shadarrin clothes are meant to deal with the harshness of desert sands
                      and unrelenting sun but with a distinctly western aesthetic. Boots are
                      more popular than shoes or sandals, chaps often cover trousers and the
                      vests worn over shirts are adorned with all sorts of convenient tools.
                      With such a heavy steam-based clockwork culture, it isn’t uncommon to see
                      all sorts of adornments for vision (i.e. goggles or scopes) as well as
                      clockwork gear-styled prosthetics and accessories.
                    </p>
                  </ModalBody>
                </Modal>
              </div>

              {/* Baldeming */}
              <div>
                <Modal isOpen={this.state.baldemingModal} toggle={this.toggleBaldeming}>
                  <ModalHeader toggle={this.toggleBaldeming} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
                  <ModalBody style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('../../www/img/baldeming-placeholder.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                    <br />
                    <hr className="bg-white" />
                    <h1 className="text-center">BALDEMING</h1>
                    <hr className="bg-white" />
                    <br />
                    <p>
                      The region of Baldeming is characterized by the Mauratnaus Mountain that juts
                      right up through the middle of the continent. This mountain stands at
                      approximately 98,000 ft tall and is said to still be growing.
                      Unlike Shadarrin, humans have never been the dominant species on Baldeming.
                      The region is home to the “monster” races; various goblinkin, undead, and
                      gorgon dominate the landscape which forced humans to take refuge on the
                      mountain (that, for some reason, the monsters refuse to approach).
                    </p>
                    <p>
                      The mountain provided a sanctuary for humans to grow and flourish.
                      Baldeming is saturated with unusually high amounts of Ether and humans
                      are the only other race besides elves suited to taking advantage of that.
                      The surrounding landscape is not at all suistainable for human life,
                      so it is no surprise that Orcs are the predominant race.
                      <span id="jiran"></span> Orcish physiology allows for them to endure
                      more extreme environments and survive off much harsher sustenance.
                      An orc can eat rocks and gain nutrients and have very little qualms
                      about eating their own- or anything else nearby when hunger strikes.
                    </p>
                  </ModalBody>
                </Modal>
              </div>

              {/* Jiran */}
              <div>
                <Modal isOpen={this.state.jiranModal} toggle={this.toggleJiran}>
                  <ModalHeader toggle={this.toggleJiran} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
                  <ModalBody className="modal-body" style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('../../www/img/jiran-placeholder.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                    <br />
                    <hr className="bg-white" />
                    <h1 className="text-center">JIRAN</h1>
                    <hr className="bg-white" />
                    <br />
                    <p>
                      Jiran is absolutely dominated by nature, and every single day will remind
                      you of that fact. The region is a biological paradise: a thriving celebration
                      of flora and fauna. There are so many animals and plants that grow unique to
                      Jiran that it often feels like a world of its own. Most Jiranian residents
                      never leave the region, both because of the difficulty of travel and because
                      there is always something new to discover even around your own home.
                      Wildkin undisputedly rule Jiran and view most other races as lesser species.
                      Because of their strong connection to the primal land, wildkin often view
                      Humans, Dwarves, and Orcs as their natural enemies – those races are often
                      the most willing to destroy disproportionate amounts of landscape to create
                      their cities, tools, and weapons.
                    </p>

                    <p>
                      With every type of biome (and some never-before seen) existing in Jiran,
                      the region is often divided by what creatures can survive in which territories,
                      and most wildkin clans are either nomadic or do not rely on building structures
                      to survive. The exception is the massive kingdom ruled by king Jackumi,
                      covering 1/5th of the land in one massive metropolis.
                      While Wildkin are the predominant race, they are not the most powerful:
                      that honor belongs to the various types of Giants that roam the land,
                      seeking the smaller races for sustenance and servants.
                    </p>
                  </ModalBody>
                </Modal>
              </div>
            </div> : null
          }

          {/* Races */}
          { this.state.renderedPage === "Races" ?
            <div>
              <br />
              <div className="text-center">
                <p>
                  Unlike Earth, the world of Exodus is home to many different intelligent
                  creatures, each of them radically changing their environment to suit their
                  needs and culture. Humans are not yet the dominant species, and other races
                  such as Wildkin and Giantkin see them as food and pets. With so much of the
                  world still undiscovered, this list only covers the most common and
                  well-known species.
                </p>
                <p>
                  While the majority of the creatures on Exodus have a logical biological system,
                  there are some races who do not have “blood” in the normal sense at all. Instead,
                  a more magical, etheric substance sustains them. These races are known as
                  “Sangui’ji” or magic-blooded and live very differently from the normal races.
                  Also, not everyone who begins life as one race always stays that way.
                  The “Blighted” are those who are afflicted by what are often called ‘curses’
                  that have altered their physical bodies in impossible ways.
                </p>
              </div>

              <hr className="bg-white" />

              <div className="text-center">
                <p className="text-white mt-3"><b>BLOODED RACES</b></p>
                <Link to="human" smooth={true}>
                  <span className="scroll-btn">HUMAN</span>
                </Link> –
                <Link to="wildkin" smooth={true}>
                  <span className="scroll-btn"> WILDKIN</span>
                </Link> –
                <Link to="kogg" smooth={true}>
                  <span className="scroll-btn"> KOGG</span>
                </Link> –
                <Link to="urul" smooth={true}>
                  <span className="scroll-btn"> URUL</span>
                </Link> –
                <Link to="amiran" smooth={true}>
                  <span className="scroll-btn"> AMIRAN</span>
                </Link> –
                <Link to="nom" smooth={true}>
                  <span className="scroll-btn"> NOM</span>
                </Link> –
                <Link to="liv'ri-olu" smooth={true}>
                  <span className="scroll-btn"> LIV’RI / OLU</span>
                </Link>

                <p className="text-white mt-3"><b>SANGUI’JI</b></p>
                <Link to="d'jinn" smooth={true}>
                  <span className="scroll-btn">D’JINN</span>
                </Link> –
                <Link to="fae" smooth={true}>
                  <span className="scroll-btn"> FAE</span>
                </Link> –
                <Link to="scions" smooth={true}>
                  <span className="scroll-btn"> SCIONS</span>
                </Link> –
                <Link to="golem" smooth={true}>
                  <span className="scroll-btn"> GOLEMS</span>
                </Link>

                <p className="text-white mt-3"><span id="human"></span><b>BLIGHTED</b></p>
                <Link to="werebeasts" smooth={true}>
                  <span className="scroll-btn">WEREBEASTS</span>
                  {/* <span id="werebeasts"></span> */}
                </Link> –
                <Link to="akkad'ai" smooth={true}>
                  <span className="scroll-btn"> AKKAD’AI</span>
                  {/* <span id="akkad'ai"></span> */}
                </Link> –
                <Link to="netra-zazanta" smooth={true}>
                  <span className="scroll-btn"> NETRA-ZAZANTA</span>
                  {/* <span id="netra-zazanta"></span> */}
                </Link> –
                <Link to="the-fell" smooth={true}>
                  <span className="scroll-btn"> THE FELL</span>
                  {/* <span id="the-fell"></span> */}
                </Link>
              </div>

              <hr className="bg-white" />

              <p className="text-center"><b>HUMAN</b></p> 
              <div className="text-left">
                <p>
                  Humans are one of the few blooded races that are capable of manipulating
                  magic to such a fine degree that they can cast spells (the only other races
                  are Gnome & Giantkin). This has been an invaluable adaption in keeping the race
                  from extinction since humans tend to be one of the more physically vulnerable
                  species. Humans tend to fall under the jack-of-all-trades category for many
                  reasons. They are quick, but not the fastest. Smart, but not the smartest.
                  Adaptable, but not the best constitution.
                </p>
                <p>
                  <span id="wildkin"></span>
                  Humans are also beautiful, and such beauty is coveted. Orcs and giantkin love to
                  collect human eyes and faces for display. Nearly all humans place a value on art
                  and symbolism, and as a group their organizations often obsess over fine details.
                  Their dexterous fingers and natural creativity make them excellent weavers and
                  designers and their ability to weave magic spells make them high-value slaves –
                  even for other humans!
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>WILDKIN</b></p>
              <div>
                <a href="#" onClick={this.toggleWildkin}>
                  <img src={"../../www/img/wildkin.png"} width="200px" className="mb-4 race-image" />
                </a>

                <div>
                  <Modal isOpen={this.state.wildkinModal} toggle={this.toggleWildkin}>
                    <ModalHeader toggle={this.toggleWildkin} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
                    <ModalBody className="race-modal-body" style={{
                      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('../../www/img/wildkin.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundAttachment: "fixed"
                    }}>
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

                <p>
                  Known as “beasts wearing the form of men,” Wildkin resemble human-animal hybrids
                  capable of shapeshifting between forms. In their natural state, a Wildkin
                  resembles a bipedal were-version of their respective animal but all Wildkin
                  are capable of shifting into a more sapiens form. Unlike most species, their
                  bodies are constantly in flux and always shifting in reaction to their
                  environments. These visible changes are usually subtle: eyes, teeth,
                  claws, and hair being the most common. What isn’t often noticed are the
                  fine shifts in their muscles and bones, facilitating both human and animal
                  movements.
                </p>
                <p>
                  <span id="kogg"></span>
                  Wildkin exist all across the world, but their homeland is Jiran. In other
                  regions, Wildkin have adapted to their surrounding cultures. Wildkin have a
                  natural dislike of humans, dwarves, and giants as those races tend to have
                  the most devastating effect on nature with their inventions. The race
                  prefers natural tools and weaponry made of plant, stone, and bone and have a
                  strong spiritual connection to their ancestors. Wildkin weapons and armor are
                  unique in their biological nature, allowing their gear to shift along with them.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>KOGG</b></p>
              <div>
                <p>
                  Master craftsmen, undefeatable drinkers, unfathomable beards, and perpetuators
                  of all the best stereotypes, Kogg are some of the toughest folk on Exodus.
                  Honor and tradition dictate their society and is a large factor as to why their
                  culture has remained largely unchanged for thousands of years. Kogg are a
                  subterranean species with bodies nearly as tough as the stone they mine.
                  Their creations are by and far the most reliable, durable, and efficient
                  inventions on the planet, rivaled only by the Giants.<span id="urul"></span>
                </p>
                <p>
                  Kogg don’t normally have need or reason to interact with most of the other races
                  and keep largely to themselves. The exception to this are the Nom, who are also
                  subterranean and often work & trade with Kogg. Nom have a wild creativity that
                  Kogg lack, and Kogg have a commitment and focus that Nom lack; together, the
                  two races invent miracles of creation.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>URUL</b></p>
              <div>
                <p>
                  They say the first word an Urul child learns is “war.” Urul culture revolves
                  around violence and control, and nearly every orc finds themselves fighting
                  for their lives before the age of 10. The average lifespan for an Urul is
                  around 40 years, but most don’t live past 20; as a result, they breed
                  rapidly and passionately. Urul anatomy is far different from most of the other
                  races: their bones are much denser and heavier than normal (comparable to Kogg),
                  their bodies are very resistant to poison and can consume just about anything.
                  It isn’t uncommon for an Urul to conceal weapons or explosives inside their
                  guts for surprise attacks.
                </p>
                <p>
                  Everything about Urul seems adapted to fighting and consuming, and when pushed
                  to the brink of death an Urul will enter a bloodlusted state: their bodies swell,
                  their skin turns red, and they feel no pain. In this berserker state, the urul’s
                  strength is multiplied and they will fight tirelessly until their rage ends…<span id="amiran"></span>
                  and they die. Most humans, kogg, and many other races consider Urul to be one
                  of the “monster” species; an unnatural creature that throws off the balance of
                  nature and exists only for destruction, but 1 out of every 1000 Urul are born
                  “cursed” with a strong moral conscience that runs counter to their race’s nature.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>AMIRAN</b></p>
              <div>
                <p>
                  The Amiran giants are the kings and queens of the world.
                  At least, that’s what they would have you believe. Standing at an average
                  of 20 meters tall, Giants tower over every other race on the planet.
                  Their power is undeniable and their kingdoms are breathtaking, Amiran tend
                  to see every other existing race as there for them. They don’t take slaves,
                  they take “pets” and “cattle.”
                </p>
                <p>
                  Amiran live their life in metamorphic stages. Immature and adolescent giants
                  live the first 300 years of their life growing rapidly. After reaching around
                  9 feet, they can only temporarily grow to giant proportions for limited periods
                  of time. Once they reach maturity, they burrow deep into their environment to
                  fall into a deep sleep. After another century, they emerge as towering adults,<span id="nom"></span>
                  known as “Ascended Giants.” These Amiran no longer have normal flesh as their
                  bodies have merged with their ecosystem. Water giants have waterfalls and rocks
                  cascading across their bodies, desert giants are made of sand and stone, swamp
                  giants breathe poison and their “hair” falls in large leaf-like strands. Most
                  Amiran are found in Jiran, but have spread across the world.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>NOM</b></p>
              <div>
                <p>
                  Geniuses at birth, the Nom culture is built around imagination and innovation.
                  Nom are responsible for many of the technological advancements on Exodus that
                  other races also enjoy, but of course they keep their greatest secrets among
                  themselves. Nom societies thrive on inventions and their leaders tend to be the
                  greatest creators among them. Every nomish household of note has either invented
                  or improved upon a design in a way that the entire population could benefit.
                  Particularly, Magnecube gauntlets and the harnessing of elementals to power
                  their golems have allowed them to create entire civilizations that move
                  organically; a gnome’s house could also be his workshop, his sales booth,
                  his bodyguard, and his travel vehicle.
                </p>
                <p>
                  Nom don’t like people. In fact, most Nom don’t even like other Nom.<span id="liv'ri-olu"></span>
                  Despite that their society thrives on trade and communication, Nom are
                  notoriously arrogant. They are impatient with the slower races, judge
                  the dirty races, and cannot stand the arrogant prattling of each other.
                  As a result, Nom are a very personal race and value their privacy heavily,
                  but they value their friends dearly and need honest companionship to preserve
                  their sanity.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>LIV’RI / OLU</b></p>
              <div>
                <a href="#" onClick={this.toggleLivriOlu}>
                  <img src={"../../www/img/livri-olu.png"} width="200px" className="mb-4 race-image" />
                </a>
                <p>
                  The Liv’ri are the sentinels of all flora. They are humanoid but they
                  grow plantlife where humans would grow hair. Their weapons and clothing
                  are usually grown from their own body (such as a thorn rapier out of the
                  wrists) and the hair on their heads often grow fruits corresponding to the
                  plant they’re based on. (Such as vine-like braided locs that grew perfect
                  grapes) These seeds/fruits can grow entire forests where there were none.                     
                </p>
                <p>
                  They have a “dark elf” counterpart.
                  Olu are born from the fungal kingdom, and usually live underground.
                  (Some have aboveground mushroom villages) because of their naturally
                  symbiotic nature and deadly spores they tend to be hated by the other
                  races.<span id="d'jinn"></span>
                </p>
                <p>
                  Liv’ri and Olu can naturally command plant and fungal-life respectively.
                  Though they will often come into conflict with one another, they will
                  almost always unite to fend their forests against any invaders. In the
                  few communities where Liv’ri and Olu coexist peacefully, they create some
                  of the most fantastic and powerful alliances known to Exodus.
                </p>
              </div>

              <div>
                <Modal isOpen={this.state.livriOluModal} toggle={this.toggleLivriOlu}>
                  <ModalHeader toggle={this.toggleLivriOlu} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
                  <ModalBody className="race-modal-body" style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('../../www/img/livri-olu.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                  }}>
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

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>D’JINN</b></p>
              <div>
                <p>
                  Long ago before intelligence races had learned to weave magic into spells,
                  they wished upon the stars. Sometimes, those wishes would be granted,
                  so they wished some more. They didn’t realize that there was a cost,
                  that looking at the same star and wishing upon it forged a pact with
                  creatures living in the cosmos. The D’Jinn fed on the energy of the wishes,
                  or rather, the energy they took from their hosts.
                </p>
                <p>
                  With so many millions of wishes to grant, the D’Jinn ate well and lived
                  peacefully.. But over time as the races evolved and discovered how to
                  manipulate ether, the D’Jinn found themselves with less and less wishes to
                  grant.
                </p>
                <p><span id="fae"></span>
                  As always when precious resources are on the decline, the D’Jinn began
                  to war amongst themsleves. The most clever among them decided a different
                  approach and went down to the world -something most D’Jinn would consider
                  impossible since they do not have flesh bodies and would quickly
                  destabilize- to inhabit valuable objects and prey on whoever is
                  fortunate(and unfortunate) enough to find them.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>FAE</b></p>
              <div>
                <p>
                  When motes of lights swarm together to form one being, you know you are
                  in the presence of a Fae. The Fae (or Fey), also known as Faeries, live
                  two very different lives at any given moment. Their “cells” each are
                  miniaturized versions of themselves, and a Faerie can easily break
                  themselves apart into millions of little clones each sharing the same
                  vision and intelligence as one another as long as they are in relatively
                  close proximity.
                </p>
                <p>
                  … But what if one is separated?
                </p>
                <p><span id="scions"></span>
                  A Fae separated too long from its cluster will perish, along with
                  whatever knowledge and information it had gained inbetween the times
                  it had remerged. The Fae actually prefer to exist as a swarm, able to
                  experience and enjoy more of life that way before reforming to interact
                  with the larger races. As with most sangui’ji, little is known about their
                  civilizations and cultures and even less has been recorded.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>ELEMENTAL x SCIONS</b></p>
              <div>
                <p>
                  Not all storms are natural, not all fires are mindless, and lightning
                  is not always random. Magic, being a conscious thing, sometimes expresses
                  itself in the form of raw elemental power. The Elementals as a were not
                  originally a sentient race, but that began to chance once gnomes began
                  to capture them and use them to power their golems. Living caged in golems,
                  exposed to various types of magic, and learning a song-like language
                  created new desires in the trapped Elementals.
                </p>
                <p>
                  The few Elementals that broke free from their golem prisons could not
                  return to their old life of impulse and reaction. Instead, they became
                  the first precursors for intelligent Elementals: starting with teaching
                  the other Elementals the deeper concepts of “language.” Eventually,
                  Elementals would begin to seek out flesh-hosts to imbue their powers in
                  so that their resulting offspring would receive the elemental power and<span id="golem"></span>
                  knowledge. These elemental “scions” look consistent and unique, showing
                  only traces of whatever lineage they were born from. They have hair made
                  of their respective element, and glowing lines of energy running where
                  their veins should be. Scions are present more on Baldeming than anywhere
                  else in the world.
                </p>
              </div>

              <div className="scroll-to-top">
                <a href="#">Back to top</a>
              </div>
              <hr className="bg-white" />

              <p className="text-center"><b>GOLEMS</b></p>
              <div>
                <p>
                  Some say that Magic is just Science that hasn’t been explained yet.
                  While Liv’ri use magic naturally and Humans use it artistically, the
                  Nom use it mathematically. This has allowed them to master rune &
                  sigil-based magic and make magical “programs” with consistently
                  predictable results. This also allowed for their construction of
                  Golems controlled by their Magnecube gauntlets.
                </p>
                <p>
                  But symbols and mathematics are the religion of the Artificial
                  Intelligence, and eventually Golems with the capacity to reason and
                  rationalize were created. It wasn’t intentional, likely an experiment
                  gone awry – perhaps a nomish application of acquired USB or other
                  Earth-tech – but one Master Golem with the gift of free will had managed
                  to break free from its master and form it’s own society. Now all Golems
                  are outlawed at the risk of them becoming sentient.
                </p>
              </div>

              <div style={{textAlign:"center"}}>
                <a href="#">Back to top</a>
              </div>
            </div> : null
          }

          {/* Magic */}
          { this.state.renderedPage === "Magic" ?
          <div>
            <br />
            <hr className="bg-white" />

            <div className="text-center">
              <Link to="prime" smooth={true}>
                <span className="scroll-btn">PRIME MAGIC</span>
              </Link> –
              <Link to="soul" smooth={true}>
                <span className="scroll-btn"> SOUL MAGIC</span>
              </Link>
            </div>

            <hr className="bg-white" />
            <br />

            <div>
              <i>
                <p>
                  “It is said that all the water in the world has never changed.
                  There is never less or more of it, no matter how it may travel.
                  The same water that our ancestors drank now gives us life, and will continue
                  to pass that same lifeforce onwards beyond our deepest memories.
                  What, then, of the mage who, through force of will, creates water where
                  there once was none? They say if you jump from a high place you will always fall.
                  What, then, of the mage who flies without wings?
                </p>

                <p>
                  Do not be tricked by the mage’s seemingly godlike power!
                  They create nothing. They destroy nothing.
                  It is merely exchange.
                </p>

                <p>
                  Everything has a cost. Mages manipulate their own lifeforce – called mana –
                  and use it as currency to barter with the universe. Their mana becomes the water,
                  carries them through the skies, and – like all energy – must be replenished.
                  I’ve heard that casting a spell feels similar to sprinting, and indeed have
                  seen many mages out of breath after long periods of spellcasting.
                </p>

                <p>
                  If you ever see a mage with a staff, strange crystals, or other such tools
                  these are objects used to ease the burden of casting, but the voice and fingers
                  are equally important. The importance of freedom of movement is why they
                  prefer cloth robes to restrictive armor, the more stress on the body,
                  the harder the spell. Like a musician, a mage must preciesely intercept
                  the correct frequencies in order to distort the world as they need, and
                  that requires very specific movements.
                </p>
                
                <p>So, yes, they do think they are special.”</p>
              </i>

              <br />
              <hr className="bg-white" />
              <br />

              <p>
                “Magic” is a word used to describe the effects of conciously using “mana.”
                Mana, also known as prana, or chi/ki is a superconscious force – both internal
                and external – that connects us to the universe. Mana can be considered the
                absolute smallest, most fundamental building block of creation, and Magic is a
                superconscious way for us to interact with the world; a way to manipulate atoms
                beyond the limitations of our bodies. On Exodus, Magic is divided into 5 “colors,”
                but each branch tends to bleed into the others seamlessly.
                <span id="prime"></span>
                <p>
                  For example: To summon a fireball (element: Red) involves mental focus
                  (imagination: Yellow) and energy exchange (transference: Blue)
                </p>
              </p>

              <br/>
              <p className="text-center text-white"><b>PRIME MAGIC</b></p>
              <br/>

              <p>
                <b>RED</b> – Matter: Red mages, also known as Elementalists, are able to
                manipulate the elemental forces of the world. While neophytes can usually
                only control whatever sources of their elemental focus are nearby, over time
                Red mages attune their mana to their element and can freely project it.
                They spend their lives dedicated to the mastery of their chosen element,
                and the best practitioners barely need any somatic gestures or incantations
                to activate their spells.
              </p>

              <p>
                Fire, Water, Air, and Earth make up the four elements that create everything
                in this world, but Red Mages know that those simple terms are a bit misleading.
                For example: “Fire” is not an element so much as a chemical reaction, and as a
                result there are all types of different potential types of fire. (Electricity
                also falls within this category.) While everyone has a natural elemental affinity,
                determined by their birth and personality, Elementalists usually master up to
                two different elements. Some rare geniuses have managed to master three or even
                all four. Elementalists are likely to use Staves, Wands, and other wood-based
                focuses to help channel their spellcasting.
              </p>

              <br />

              <p>
                <b>BLUE</b> – Law: Blue mages have taken up the task of mastering the rules of
                time and space that govern the world. They many different professions:
                Alchemists, Enchanters, Artificers, Diviners and so much more and as such are
                considered the more “practical” type of spellcaster.
                Blue magic is divided into several categories, including Time, Transference,
                Probability, Vibration, Physics, and Absence(Void).
                Blue magic usually comes with a heavy cost.
                Whereas the elements are always readily available, to bend the laws of the world
                demands exchange. As a result, blue mages often use orbs or scepters made of
                crystal and charged with sun or moonlight to offset the costs of their abilities.
              </p>

              <p>
                Blue magic has had arguably the most impactful effect on human and nom society
                in Exodus. Glyphs, wards, and enchantments have become common in everyday life in
                Baldeming, and in Shadarrin most gear and equipment have runes etched into them.
                USB scholars marvel at the functional similarity of runes and glyphs to programs
                and microchips. As well as the fact that – like on Earth – many of the everyday
                population casually use sophosticated magical devices with absolutely no
                understanding as to how they work.
              </p>

              <br />

              <p>
                <b>YELLOW</b> – Mind: Known as Dreamwalkers, or Travelers, Mentalists do not
                always look how one would expect from a spellcaster.
                Devoted to exploring the universe within and how we are all connected mentally,
                most do not consider themselves to be “mages” at all.
                Those who explore the yellow spectrum of magic learn to extend their consciousness
                beyond their physical bodies. In doing so, they can see and manipulate the world
                and our understanding of it through force of will. No spells are necessary,
                though mantras often help. Those who seek mastery of the mind often become skilled
                martial artists, using physical training to help confront and overcome their own
                mental hurdles.
              </p>

              <p>
                <span id="soul"></span>
                Proficiency in the mental arts is very rare and often takes years of study even
                to begin. Of all spellcasters, these are by far the rarest. There is a legend that
                the original civilizations to pioneer enhanced mental capacity lived a purely
                psychic life, eventually transcending the need for physical bodies altogether.
              </p>

              <br/>
              <p className="text-center text-white"><b>SOUL MAGIC</b></p>
              <br/>

              <p>
                <b>WHITE & BLACK</b> – They say “what goes around, comes around” but a more
                accurate interpretation would be, “we attract the same things that we put out into
                the world.” The cruel, terrible things we do in the world will lead us to cruel
                and terrible people. The great and kind things will have likewise results. This
                simple theory gets tangled when one considers that few beings are pure good or
                pure evil, as even a kind act can be stained with foul intentions.
                Our souls are beacons to other disembodied spirits.
              </p>

              <p>
                Demons, angels, and all the other formless things desperate to affect the
                physical world whisper thoughts into our subconscious in hope of influencing us.
                Our karma is power, and the higher or lower it is the more “miracles” or “curses”
                can be enacted. Our “prayers” lend our energy to the spirits, good or bad, drawn
                to us and allow them to affect changes on the world. Spirit magic in and of itself
                is neither good nor evil, depending entirely on the inner compass of the person
                performing it. Spiritualists use their mana to give phyical bodies to the spirits
                that follow them, effectively “summoning” them into the living realm.
              </p>
            </div>

            <div style={{textAlign:"center"}}>
              <a href="#">Back to top</a>
            </div>

            {/* <Link to="top" smooth={true}>
              <span className="scroll-to-top">Back to top</span>
            </Link> */}
          </div> : null
          }
        </div>
      </Container>
    );
  };
};

export default Exodus;
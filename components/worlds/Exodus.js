import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody
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
    this.state = {
      renderedPage: "",
      map: false,
      races: false,
      magic: false,
      shadarrinModal: false,
      baldemingModal: false,
      jiranModal: false
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

  toggleShadarrin() {
    this.setState({
      shadarrinModal: !this.state.shadarrinModal
    });
  };

  toggleBaldeming() {
    this.setState({
      baldemingModal: !this.state.baldemingModal
    });
  };

  toggleJiran() {
    this.setState({
      jiranModal: !this.state.jiranModal
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
                  <ModalHeader toggle={this.toggleShadarrin}>SHADARRIN</ModalHeader>
                  <ModalBody>
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
                    <p>STYLE & CULTURE</p>
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
                  <ModalHeader toggle={this.toggleBaldeming}>BALDEMING</ModalHeader>
                  <ModalBody>
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
                  <ModalHeader toggle={this.toggleJiran}>JIRAN</ModalHeader>
                  <ModalBody>
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
              <hr className="bg-white" />
              <hr className="bg-white" />
              <br />

              <h1>Oh hello Clarce I mean races omglul</h1>
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
          </div> : null
          }
        </div>
      </Container>
    );
  };
};

export default Exodus;
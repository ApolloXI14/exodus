import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Exodus extends Component {
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
        <h1 className="text-white">THE WORLD OF EXODUS</h1>

        <br />

        <div className="text-light-gray">
          <h5 className="mt-15">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink disabled href="#">Races</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="#">Organizations</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="#">History</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="#">Magic</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="#">Creatures</NavLink>
              </NavItem>
            </Nav>
          </h5>

          <br />

          {/* Convert to Navlinks later (scroll-links) */}
          <h5 className="text-center">SHADARRIN – BALDEMING – JIRAN</h5>

          <br />

          <p>
            The world of Exodus is much larger than Earth,
            and with so many different sentient races (some much more ancient than others)
            it isn’t uncommon for some parts of the world to seem from an entirely
            different time period than others. The charted parts of Exodus are divided
            into three regions; Shadarrin, Jiran, and Baldeming. Each of these continental
            masses have extremely unique cultures and technology
          </p>

          <br />
          <hr className="bg-white" />
          <hr className="bg-white" />
          <br />
          
          <h5 className="text-center">SHADARRIN</h5>

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

          <p>STYLE & CULTURE</p>

          <p>
            Shadarrin clothes are meant to deal with the harshness of desert sands
            and unrelenting sun but with a distinctly western aesthetic.
            Boots are more popular than shoes or sandals, chaps often cover trousers
            and the vests worn over shirts are adorned with all sorts of convenient tools.
            With such a heavy steam-based clockwork culture, it isn’t uncommon to see
            all sorts of adornments for vision (i.e. goggles or scopes) as well as
            clockwork gear-styled prosthetics and accessories.
          </p>

          <hr className="bg-white" />

          <h5 className="text-center">BALDEMING</h5>

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
            Orcish physiology allows for them to endure more extreme environments
            and survive off much harsher sustenance. An orc can eat rocks and gain
            nutrients and have very little qualms about eating their own- or anything
            else nearby when hunger strikes.  
          </p>

          <hr className="bg-white" />

          <h5 className="text-center">JIRAN</h5>

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
        </div>
      </Container>
    );
  };
};

export default Exodus;
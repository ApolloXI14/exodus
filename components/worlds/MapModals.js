import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import styles from '../../less/Exodus.less';

export const ShadarrinModal = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
        <ModalBody className="modal-body map-background">
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
          <p>
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
  );
};

export const BaldemingModal = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
        <ModalBody className="modal-body" style={{
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
  );
};

export const JiranModal = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="mx-auto close-modal" style={{padding:'2px'}}></ModalHeader>
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
  );
};
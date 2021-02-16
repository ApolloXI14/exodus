import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from 'react-router-dom';

const planets = [
  {
    src: "../www/img/background/Earth-world-concept.jpg",
    caption: "Earth",
    altText: "Planet Earth",
    url: "/earth"
  },
  {
    src: "../www/img/background/Exodus-world-concept.jpg",
    caption: "Exodus",
    altText: "Planet Exodus",
    url: "/exodus"
  }
];

class World extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.state = {
      activeIndex: 0,
      animating: false
    };
  };

  nextSlide() {
    const { animating, activeIndex } = this.state;
    if(animating) return;
    const nextIndex = activeIndex === planets.length - 1 ? 0 : activeIndex + 1;    
    this.setState({
      activeIndex: nextIndex
    });
  };

  prevSlide() {
    const { animating, activeIndex } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? planets.length - 1 : activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  goToIndex(newIndex) {
    const { animating } = this.state;
    if (animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  render() {
    const slides = planets.map(planet => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={planet.src}
        > 
          <Link to={planet.url}>
            <img
              src={planet.src}
              alt={planet.altText}
              className="image"
            />
          </Link>
          <CarouselCaption captionHeader={planet.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="mt-10">
        <h1 className="text-center">Choose your Path</h1>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.nextSlide}
          previous={this.prevSlide}
        >
          <CarouselIndicators
            items={planets}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.prevSlide} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextSlide} />
        </Carousel>
      </div>
    );
  };
};

export default World;
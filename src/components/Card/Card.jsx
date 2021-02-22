import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import './styles.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ bgImage }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className="project-card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        // eslint-disable-next-line react/destructuring-assignment
        transform: props.xys.interpolate(trans),
        backgroundImage: `url(${bgImage})`,
      }}
    />
  );
};

Card.propTypes = {
  bgImage: PropTypes.string.isRequired,
  xys: PropTypes.arrayOf(PropTypes.number),
};

export default Card;

import React, { useState, useEffect } from 'react';

// Inspired by the Age counter from Ryo.lu, implemented with Hooks

const currentAge = () => {
  return ((Date.now() - 890744400000) / 31556952000).toFixed(20);
};

const Age = () => {
  const [age, setAge] = useState(currentAge());

  useEffect(() => {
    const countUp = setInterval(() => {
      setAge(currentAge());
    }, 20);
    return () => clearInterval(countUp);
  });
  return <p>{age}</p>;
};

export default Age;

import React, { useState, useEffect } from 'react';
const sentences = [
  'Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights.',
  'First, what is your Name ?',
];

export default function Home() {
  // on veut garder un oeil sur l'update de l'index (avec hook state)
  const [index, setIndex] = useState(0);
  //sub et reverse car on va avoir une sous-chaine de string et une inversion de la string
  const [subIndex, setSubIndex] = useState(0);
  // blink pour la barre de typing
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // autotype qui rerender quand reverse index subindex changent
  useEffect(() => {
    if (index === sentences.length) return;

    if (subIndex === sentences[index].length + 1 && index !== sentences.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  //blink avec setTimeout (useEffect pour update les values)
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
      // le blink s'effectue toutes les 500ms
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>{`${sentences[index].substring(0, subIndex)}${blink ? '|' : ' '}`}</h1>
    </>
  );
}

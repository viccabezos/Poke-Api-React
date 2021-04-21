import React from 'react';
import AutoType from './AutoType';
import StarterCarousel from './StarterCarousel';
import TrainerCarousel from './TrainerCarousel';
import ProfOak from '../prof.png';

export default function CharacterCreation() {
  return (
    <div className="font-Quantico">
      <section className="topPart flex m-2 ">
        <div className="w-1/2">
          <img src={ProfOak} alt="prof Oak" />
        </div>
        <div className=" info flex flex-col justify-between w-1/2 bg-gray-400 ">
          <p className="p-1">
            <AutoType />
          </p>
          <input
            className="justify-center w-full py-1.5 bg-blue-300 focus:bg-blue-100 text-current border-black border-solid border rounded"
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>
      </section>

      <div>
        <StarterCarousel />
      </div>

      <div>
        <TrainerCarousel />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-red-600 hover:bg-red-500 font-extrabold py-2 px-8 my-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md .shadow-2xl ">
          START !
        </button>
      </div>
    </div>
  );
}
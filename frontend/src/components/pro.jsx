import React from 'react';
import { PROJECTS } from '../benson-langford-assets-main/constants';

const Pro = () => {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-12 text-center text-3xl lg:text-5xl font-bold tracking-tighter hover:text-lime-600">Projects </h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8"
          >
            <div className="overflow-hidden rounded-lg bg-lime-300 hover:bg-lime-500 shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-9">
                <h3 className="text-3xl font-bold text-black">{project.title}</h3>
                <p className="text-sm mt-2 text-black">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Pro;

import React from 'react'

const EXPERIENCES = {
    company: "Tech Solutions Inc."
};

const CERTIFICATES = [
    {
        title: "React Developer",
        organization: "Coursera",
        year: "2023"
    },
    {
        title: "JavaScript Advanced",
        organization: "Udemy",
        year: "2022"
    },
    {
        title: "Web Design Fundamentals",
        organization: "edX",
        year: "2021"
    }
];

const Work = () => {
  return (
    <section id="certificates" className="px-4 py-8">
      
      {/* Work Experience
      <h2 className="my-8 text-center text-3xl lg:text-5xl font-bold">
        Work Experience
      </h2>
      <div className="mb-12 text-center">
        <h3 className="text-xl">{EXPERIENCES.company}</h3>
      </div> */}

      {/* Certificates Section */}
      <h2 className="my-8 text-center text-3xl lg:text-5xl font-bold">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 mb-12">
        {CERTIFICATES.map((cert, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-white">{cert.organization}</p>
            <p className="text-white">{cert.year}</p>
          </div>
          
        ))}
      </div>
    </section>
  )
}

export default Work

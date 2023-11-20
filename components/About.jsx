export const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          My journey in software engineering has been a fascinating ride. From
          contributing to projects in{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            tech consultancy{" "}
          </a>
          to finding my current groove in the transport sector. While my mom
          think I'm just a{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            very fast typist{" "}
          </a>
          , I create solutions that blend technology seamlessly with
          transportation needs. It's a realm where I get to tackle challenges
          like{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            optimizing logistics{" "}
          </a>
          and
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            user experiences{" "}
          </a>
          enhancing, making a tangible impact on the real world.
        </p>
        <p className="mb-4">
          Beyond coding, you'll often find me experimenting with different
          musical instruments, and finding joy in the creative process of making
          music. It's a delightful balance that adds a rhythm to both my
          professional and personal pursuits.
        </p>
      </div>
    </section>
  );
};

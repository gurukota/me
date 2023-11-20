export const Tech = (data) => {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {data.tech.map((tech, index) => (
        <li className="mr-1.5 mt-2" key={index}>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {tech}
          </div>
        </li>
      ))}
    </ul>
  );
};

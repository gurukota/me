import { MdArrowOutward } from "react-icons/md";
import { Tech } from "./Tech";

export const Card = ({ data }) => {
  return (
    <ol className="group/list">
      {data.map((experience, index) => (
        <li className="mb-12" key={index}>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="July to December 2017"
            >
              {experience.date}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Lead Engineer at Upstatement"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {experience.title + " ·"}
                      <span className="inline-block">
                        {experience.company}
                        <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {experience.description}
              </p>
              <Tech tech={experience.tech} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

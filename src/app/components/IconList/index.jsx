import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconList = ({icons}) => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-6 text-6xl md:items-center md:text-5xl mt-7 md:mt-2" data-aos="fade-up">
        {icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon.icon}
            className={`transition-all duration-300 ease-in-out cursor-pointer text-white/25 hover:${icon.hoverColor}`}
          />
        ))}
      </div>
    </>
  );
};

export default IconList;

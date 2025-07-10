import TagLine from "@/components/busniessAutomation/Tagline";

const Heading = ({
  className,
  title,
  text,
  tag,
}: {
  className: string;
  title: string;
  text: string;
  tag: string;
}) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="text-[3.2rem] leading-[1.1em] ">{title}</h2>}
      {text && (
        <p className=" text-[1rem] leading-[1.1em] mt-4 text-n-4">{text}</p>
      )}
    </div>
  );
};

export default Heading;

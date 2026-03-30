"use client";

type HeaderInfo = {
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { subtitle, description } = headerInfo;

  return (
    <div className="mx-auto text-center">
      <h2 className="mx-auto mb-4 text-3xl sm:text-4xl font-extrabold text-slate-900 md:w-4/5 xl:w-1/2">
        {subtitle}
      </h2>
      <p className="mx-auto text-slate-500 md:w-4/5 lg:w-3/5 xl:w-[46%]">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;

export default function StatsSection() {
  const stats = [
    {
      id: "01",
      value: "200+",
      label: "Executed Projects",
      description: "From initial concept sketches to monolith structural completion.",
    },
    {
      id: "02",
      value: "89%",
      label: "Client Retention",
      description: "Long-term architectural partnerships built on execution and trust.",
    },
    {
      id: "03",
      value: "30+",
      label: "Cities Covered",
      description: "Expanding our design footprint across international borders.",
    },
  ];

  return (
    <section className="w-full px-4  py-16 md:py-32 md:px-28">
     
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-8">
        <div>
          <span className="text-xs xl:text-sm  font-bold tracking-widest uppercase block mb-2 md:mb-3 opacity-80">
            Our results
          </span>
          <h2 className="text-3xl   lg:text-4xl xl:text-6xl font-extrabold tracking-tight uppercase leading-tight md:leading-none">
            REAL RESULTS WE ARE <br className="hidden sm:block" />
            PROUD TO SHARE
          </h2>
        </div>
        <p className="text-sm lg:text-lg xl:text-xl font-semibold max-w-md leading-relaxed md:leading-snug">
          Every figure represents spaces shaped, precision engineering, and lasting architectural identity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="col-span-12 md:col-span-4 border-l md:border-l-2 xl:border-l-3 pl-4  md:pl-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm md:text-base font-mono font-bold block mb-1 md:mb-2 opacity-80">
                [{stat.id}]
              </span>
              <p className="text-3xl   lg:text-5xl xl:text-7xl  font-black tracking-tighter leading-none mb-3 md:mb-4">
                {stat.value}
              </p>
              <p className="text-xl   lg:text-3xl font-bold tracking-wide uppercase mb-2 md:mb-3">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm md:text-lg font-semibold leading-relaxed">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
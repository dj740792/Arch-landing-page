import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/_data/projects";
import { Lato } from "next/font/google";

const numFont = Lato({ subsets: ["latin"], weight: "400" });

export default async function ProjectDetail({ params }) {
  const { workID } = await params;

  // Match the slug from URL with project data
  const project = projects.find((p) => p.slug === workID);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full min-h-screen pt-36 pb-24 px-4 md:px-8 text-[#361e13]">
      {/* BACK BUTTON */}
      <div className="mb-12">
        <Link
          href="/work"
          className="text-xs md:text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* HEADER METADATA */}
      <header className="grid grid-cols-12 gap-6 mb-16 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-60 mb-2">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="col-span-12 md:col-span-4 flex justify-between md:justify-end gap-12 border-t border-[#361e13]/20 pt-4 md:border-t-0 md:pt-0">
          <div>
            <span className="block text-xs uppercase opacity-50">Year</span>
            <span className={`text-lg font-semibold ${numFont.className}`}>
              {project.year}
            </span>
          </div>
          {project.location && (
            <div>
              <span className="block text-xs uppercase opacity-50">Location</span>
              <span className="text-lg font-semibold">{project.location}</span>
            </div>
          )}
        </div>
      </header>

      {/* MAIN HERO IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden mb-20">
        <Image
          src={project.src}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="grid grid-cols-12 gap-6 mb-24">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-lg font-semibold uppercase tracking-wider opacity-70">
            Project Overview
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-lg md:text-2xl leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="flex flex-col gap-10 border-t border-[#361e13]/10 pt-16">
          <h2 className="text-2xl font-semibold tracking-tight uppercase">
            Spatial Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-4/3 overflow-hidden"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} detail ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className=" h-screen flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
            Nous vous aidons à <br className="hidden md:block" /> manager votre{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 dark:to-teal-500">
              équipe
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            Manager vos équipes n'a jamais été aussi simple. Nous vous aidons à
            gérer vos équipes et à les rendre plus productives avec des outils
            simples et efficaces.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border   focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
            >
              {/* login svg */}
              Connectez-vous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

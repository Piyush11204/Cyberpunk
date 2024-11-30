import React from "react";
import { Play, Book, Tv } from "lucide-react";

const HomePage = () => {
  const animeLinks = [
    { name: "Cyberpunk: Edgerunners", link: "https://www.netflix.com/title/81054853" },
    { name: "Ghost in the Shell", link: "https://www.crunchyroll.com/" },
    { name: "Akira", link: "https://www.funimation.com/" },
  ];

  const bookLinks = [
    { name: "Neuromancer", link: "https://www.goodreads.com/book/show/22328.Neuromancer" },
    { name: "Do Androids Dream of Electric Sheep?", link: "https://www.goodreads.com/book/show/7082.Do_Androids_Dream_of_Electric_Sheep_" },
    { name: "Altered Carbon", link: "https://www.goodreads.com/book/show/40445.Alteration_Carbon" },
  ];

  const gameLinks = [
    { name: "Cyberpunk 2077", link: "https://www.cyberpunk.net/" },
    { name: "Deus Ex: Human Revolution", link: "https://www.eidosmontreal.com/games/deus-ex-human-revolution" },
    { name: "System Shock", link: "https://www.systemshock.com/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-300">Welcome to Cyberpunk Central</h1>
          <p className="text-lg text-gray-400 mt-2">
            Immerse yourself in the world of cybernetic dreams, gritty neon cities, and dystopian adventures.
          </p>
        </header>

        {/* Anime Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-300 flex items-center gap-2">
            <Tv size={24} /> Cyberpunk Anime
          </h2>
          <p className="text-gray-400 mt-2">
            Dive into thrilling anime that explore cyberpunk themes of technology and humanity.
          </p>
          <ul className="mt-4 space-y-3">
            {animeLinks.map((anime, index) => (
              <li key={index} className="hover:text-teal-400">
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Books Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-300 flex items-center gap-2">
            <Book size={24} /> Cyberpunk Books
          </h2>
          <p className="text-gray-400 mt-2">
            Explore seminal novels that define the cyberpunk genre and inspire a futuristic mindset.
          </p>
          <ul className="mt-4 space-y-3">
            {bookLinks.map((book, index) => (
              <li key={index} className="hover:text-teal-400">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  {book.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Games Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-300 flex items-center gap-2">
            <Play size={24} /> Cyberpunk Games
          </h2>
          <p className="text-gray-400 mt-2">
            Engage in interactive experiences that bring cyberpunk stories to life.
          </p>
          <ul className="mt-4 space-y-3">
            {gameLinks.map((game, index) => (
              <li key={index} className="hover:text-teal-400">
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-gray-500 text-sm mt-16">
          <p>
            Cyberpunk Central &copy; {new Date().getFullYear()} | Powered by Neon Dreams
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

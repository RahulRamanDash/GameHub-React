import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const games = [
    {
      id: 1,
      name: "FORTNITE",
      category: "Battle Royale",
      imgUrl: "https://img.freepik.com/premium-photo/fortnite-wallpaper-4k-gaming-wallpaper_1121250-395658.jpg",
      description: "Fortnite is a popular battle royale game known for its building mechanics and engaging gameplay.",
    },
    {
      id: 2,
      name: "APEX LEGENDS",
      category: "Battle Royale",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuoM_K_IdGyMIAIq40s9td534XBoCM6shtw&s",
      description: "Apex Legends is a squad-based battle royale game featuring unique characters and fast-paced action.",
    },
    {
      id: 3,
      name: "PUBG",
      category: "Battle Royale",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/320/205/156/pubg-mobile-wallpaper-preview.jpg",
      description: "PUBG is a pioneer in the battle royale genre, offering realistic gameplay and large-scale maps.",
    },
    {
      id: 4,
      name: "God of War",
      category: "Action-Adventure",
      imgUrl: "https://wallpapercg.com/media/ts_orig/18752.webp",
      description: "Experience the journey of Kratos and Atreus in a deeply emotional yet action-packed mythological adventure.",
    },
    {
      id: 5,
      name: "Horizon Zero Dawn",
      category: "Action-Adventure",
      imgUrl: "https://wallpapers.com/images/hd/horizon-zero-dawn-fanart-cover-sugmfb0fbmof1vns.webp",
      description: "An open-world game blending beautiful environments with mechanical creatures and engaging storytelling.",
    },
    {
      id: 6,
      name: "The Last of Us",
      category: "Action-Adventure",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/108/431/795/the-last-of-us-ellie-video-games-joel-wallpaper-thumb.jpg",
      description: "A story-driven game exploring survival and deep emotional bonds in a post-apocalyptic world.",
    },
    {
      id: 7,
      name: "Red Dead Redemption 2",
      category: "Action-Adventure",
      imgUrl: "https://wallpapers.com/images/hd/red-dead-redemption-2-full-hd-ul4kvf03rfghk8p8.jpg",
      description: "An open-world western game that combines thrilling action with a compelling storyline.",
    },
    {
      id: 8,
      name: "Spider-Man: Miles Morales",
      category: "Action-Adventure",
      imgUrl: "https://images.alphacoders.com/129/thumb-1920-1292613.png",
      description: "Swing through New York City as Miles Morales, a young Spider-Man with unique abilities.",
    },
    {
      id: 9,
      name: "Assassin's Creed Valhalla",
      category: "Action-Adventure",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/1023/66/471/assassin-s-creed-valhalla-viking-video-games-video-game-art-digital-art-hd-wallpaper-preview.jpg",
      description: "Play as a Viking in this action-packed game filled with exploration, battles, and rich Norse mythology.",
    },
    {
      id: 10,
      name: "Gran Turismo 7",
      category: "Racing",
      imgUrl: "https://wallpapercat.com/w/full/a/1/8/13183-1920x1080-desktop-full-hd-gran-turismo-7-background-photo.jpg",
      description: "A stunningly realistic racing simulator offering an immersive car collection and racing experience.",
    },
  ];

  // Extract unique categories from the games array
  const getCategories = (games) => {
    const categories = new Set(games.map(game => game.category));
    return ["All", ...categories];
  };

  const categories = getCategories(games);
  // const categories = ["All", "Battle Royale", "Action-Adventure", "Racing"]; // Example categories

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || selectedCategory === "" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="p-4">
        {/* Search Bar */}
<div className="mb-4 flex flex-wrap gap-4 justify-center">
  {/* Search Bar */}
  <input
    type="text"
    placeholder="Search by name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
  {/* Category Filter */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="w-full sm:w-1/4 md:w-auto lg:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>



        {/* {cards} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

          {filteredGames.map(({ id, name, imgUrl, description }) => (
            <Card key={id}
              gameName={name}
              imgUrl={imgUrl}
              description={description}
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default App

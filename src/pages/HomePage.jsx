import { useState, useEffect } from "react";

export function HomePage() {
    const movies = [
        {
            id: 1,
            title: "Arcane 2",
            description: "A mind-bending thriller about dream invasion.",
            image: "./arcane.png",
            details: "Dom Cobb is a thief with the rare ability to enter people's dreams and steal secrets from their subconscious.",
        },
        {
            id: 2,
            title: "Công tử bạc liêu",
            description: "A space adventure to save humanity.",
            image: "./ctbl.png",
            details: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        },
        {
            id: 3,
            title: "Mai",
            description: "The story of Gotham's savior, Batman.",
            image: "./mai.png",
            details: "Batman raises the stakes in his war on crime in Gotham City.",
        },
    ];

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (selectedMovie) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedMovie]);
    return (
        <div className="bg-gray-100 pt-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl text-left font-bold text-black mb-8">
                    Phim thịnh hành
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {movie.title}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {movie.description}
                                </p>
                                <button
                                    onClick={() => setSelectedMovie(movie)}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedMovie && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
                    onClick={(e) => {
                        // Nếu click vào overlay mà không phải modal
                        if (e.target === e.currentTarget) {
                            setSelectedMovie(null);
                        }
                    }}
                >
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 scale-95">
                        <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
                        <img
                            src={selectedMovie.image}
                            alt={selectedMovie.title}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <p className="text-gray-700 mb-4">{selectedMovie.details}</p>
                        <button
                            onClick={() => setSelectedMovie(null)}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

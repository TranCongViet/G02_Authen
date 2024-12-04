import { useState, useEffect } from "react";

export function HomePage() {
    const movies = [ //Demo data
        {
            id: 1,
            title: "Arcane 2",
            description: "Mùa thứ hai của Arcane, series hoạt hình dựa trên vũ trụ của game League of Legends, tiếp tục khai thác các cuộc đấu tranh giữa Piltover và Zaun.",
            image: "./arcane.png",
            details: "Mùa thứ hai của Arcane, series hoạt hình dựa trên vũ trụ của game League of Legends, tiếp tục khai thác các cuộc đấu tranh giữa Piltover và Zaun. Bộ phim tiếp tục phát triển mối quan hệ giữa các nhân vật chính như Vi, Jinx và Caitlyn trong bối cảnh chiến tranh và sự phân chia xã hội ngày càng sâu sắc. Mùa này mang đến nhiều tình tiết gay cấn và những yếu tố chiến lược mới.",
        },
        {
            id: 2,
            title: "Công tử bạc liêu",
            description: "Bộ phim kể lại câu chuyện của Ba Hơn, người con trai của ông Hội đồng Lịnh - một trong những gia đình giàu có đầu tiên ở Việt Nam. ",
            image: "./ctbl.png",
            details: "Bộ phim kể lại câu chuyện của Ba Hơn, người con trai của ông Hội đồng Lịnh - một trong những gia đình giàu có đầu tiên ở Việt Nam. Sau khi du học tại Pháp, Ba Hơn nổi tiếng với lối sống xa hoa, tiêu tiền vô tội vạ. Phim khai thác cuộc sống hào nhoáng nhưng đầy sóng gió của Ba Hơn khi đối mặt với các thử thách và sự cạnh tranh từ những người bạn và đối thủ, trong đó có Tư Phát​",
        },
        {
            id: 3,
            title: "Mai",
            description: "Phim kể về câu chuyện của Mai, một người phụ nữ đang đối mặt với những thử thách trong cuộc sống và tình yêu.",
            image: "./mai.png",
            details: "Phim kể về câu chuyện của Mai, một người phụ nữ đang đối mặt với những thử thách trong cuộc sống và tình yêu. Những mối quan hệ trong phim được khai thác sâu sắc, phản ánh sự đấu tranh giữa lý trí và tình cảm, mang đến một cái nhìn mới mẻ về thế giới nội tâm của nhân vật",
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

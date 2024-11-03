import {useState, useEffect} from 'react';

export default function CarouselSlider({  members}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 768) {
                setColumns(2);
            } else if (window.innerWidth < 1024) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        window.addEventListener('resize', updateColumns);
        updateColumns();

        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(members.length / columns) - 1));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-4xl font-bold mb-8">
                Meet our <span className="text-blue-600">special</span> team
            </h1>
            <div className="relative w-full max-w-4xl overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100 / columns}%)` }}>
                    {members.map((member, index) => (
                        <div key={index} className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/${columns} p-4`}>
                            <div className="flex flex-col items-center">
                                <img src={member.image} alt={member.alt} className="w-64 h-64 md:w-full md:h-auto md:rounded-none rounded-lg mb-4" />
                                <h2 className="text-xl font-medium">{member.name}</h2>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4 mt-8">
                <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-600" disabled={currentIndex === 0}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button onClick={handleNext} className={`w-10 h-10 flex items-center justify-center rounded-full ${currentIndex === Math.ceil(members.length / columns) - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`} disabled={currentIndex === Math.ceil(members.length / columns) - 1}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
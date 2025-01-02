"use client";
import { useState } from 'react';

const SingleSessionOfPt = () => {
    const videoTutorials = [
        { id: 1, title: "Warm-Up Routine", description: "A quick warm-up session for your workout.", videoUrl: "https://videos.pexels.com/video-files/15462514/15462514-uhd_2560_1440_30fps.mp4" },
        { id: 2, title: "Strength Training Basics", description: "Learn the basics of strength training.", videoUrl: "https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4" },
        { id: 3, title: "Cool-Down Stretches", description: "Stretching routines for post-workout recovery.", videoUrl: "https://videos.pexels.com/video-files/15462514/15462514-uhd_2560_1440_30fps.mp4" },
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNext = () => {
        if (currentVideoIndex < videoTutorials.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    return (
        <div className="container mx-auto py-5 md:py-14 px-3 md:px-2 flex flex-col md:flex-row gap-6">
            {/* Sidebar with Video List */}
            <div className="w-full md:w-1/4 bg-gray-100 shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Video List</h3>
                <ul className="space-y-2">
                    {videoTutorials.map((tutorial, index) => (
                        <li
                            key={tutorial.id}
                            className={`p-2 rounded-md cursor-pointer ${index === currentVideoIndex ? "bg-primary text-white" : "bg-gray-200 text-black"
                                }`}
                            onClick={() => setCurrentVideoIndex(index)}
                        >
                            {index + 1}. {tutorial.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Video Section */}
            <div className="w-full md:flex-1 bg-gray-50 shadow-md rounded-lg p-4">
                <video
                    controls
                    className="w-full rounded-md shadow-lg mb-4"
                    src={videoTutorials[currentVideoIndex]?.videoUrl}
                />
                <h2 className="text-2xl font-bold mb-2">{videoTutorials[currentVideoIndex]?.title}</h2>
                <p className="text-gray-600 mb-4">{videoTutorials[currentVideoIndex]?.description}</p>
                <div className="flex justify-between">
                    <button
                        className={`px-4 py-2 rounded-md ${currentVideoIndex > 0 ? "bg-primary text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                        onClick={handlePrevious}
                        disabled={currentVideoIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${currentVideoIndex < videoTutorials.length - 1
                            ? "bg-primary text-white"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                        onClick={handleNext}
                        disabled={currentVideoIndex === videoTutorials.length - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleSessionOfPt;

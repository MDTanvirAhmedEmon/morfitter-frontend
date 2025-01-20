import { ConfigProvider, Input, Pagination } from "antd";
import { useState } from "react";
import SingleContent from "./SingleContent";

import img from "../../../assets/content/post2.png";
import img2 from "../../../assets/content/post1.png";

const ContentManagementPage = () => {
  const staticCompetitions = [
    {
      competition_id: "1",
      title: "Title 1",
      participants: 100,
      image: img,
      description: "A fun and challenging competition for beginners.",
    },
    {
      competition_id: "2",
      title: "Title 2",
      participants: 150,
      image: img2,
      description: "A competition focused on creativity and innovation.",
    },
    {
      competition_id: "3",
      title: "Title 3",
      participants: 120,
      image: img,
      description: "A competition designed for those who excel under pressure.",
    },
    {
      competition_id: "4",
      title: "Title 4",
      participants: 90,
      image: img2,
      description:
        "A competition for problem solvers with a knack for strategy.",
    },
    {
      competition_id: "5",
      title: "Title 5",
      participants: 80,
      image: img,
      description: "A competition that tests both skill and endurance.",
    },
    {
      competition_id: "6",
      title: "Title 6",
      participants: 200,
      image: img2,
      description: "A high-stakes competition with a large prize pool.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter competitions based on the search term
  const filteredCompetitions = staticCompetitions.filter((competition) =>
    competition.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Slice the data based on pagination
  const displayedCompetitions = filteredCompetitions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: "black",
                hoverBorderColor: "black",
              },
            },
          }}
        >
          <h1 className="text-3xl font-bold mb-5">Content Management</h1>
          <div>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#0ba593] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
              />
            </div>
          </div>
        </ConfigProvider>
      </div>

      {/* Simulating loading state */}
      {false && "Loading..."}

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-14 mx-6 mb-6">
        {displayedCompetitions.map((competition) => (
          <SingleContent
            key={competition.competition_id}
            competition={competition}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="my-8 ml-4">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                colorPrimary: "rgb(0,0,0)",
                colorPrimaryHover: "rgb(0,0,0)",
              },
            },
          }}
        >
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredCompetitions.length}
            onChange={handlePageChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ContentManagementPage;

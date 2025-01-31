"use client";
import Image from "next/image";
import gymbg from "../../../assets/content/gym1.png";
import gymbg2 from "../../../assets/content/gym2.png";
import fitnessTeam from "../../../assets/content/fitnessTeam.png";
import { ConfigProvider, Pagination, Select } from "antd";
import { useGetAllContentsQuery } from "@/redux/features/content/contentApi";
import SingleBlog from "@/components/Content/SingleBlog";
import { useState } from "react";
import ContentSkeleton from "@/components/Skeleton/ContentSkeleton";

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserValue, setSelectedUserValue] = useState('');
  const { data, isLoading } = useGetAllContentsQuery({page: currentPage, role: selectedUserValue, sortOrder: 'desc'});

  const handleSelectedUserValue = (value) => {
    setSelectedUserValue(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10 md:py-20">
      {/* header image */}
      <div className="relative mx-2 md:mx-0">
        <Image src={gymbg} className="w-full" width={0} height={0} alt="gym" />

        <Image
          src={fitnessTeam}
          className="absolute md:left-5 bottom-[4px] md:bottom-[8px] lg:bottom-[12px] xl:bottom-[18px] lg:left-14 xl:left-44 w-[120px] md:w-[300px] lg:w-[400px] xl:w-[550px] "
          width={0}
          height={0}
          alt="person"
        />
      </div>
      {/* drop down */}
      <div className=" grid md:grid-cols-3 gap-10 mx-5 py-8 md:py-16">
        <Select
          className=" "
          onChange={handleSelectedUserValue}
          placeholder={<p className=" text-lg">Trainer Or Member</p>}
        >
          <Select.Option value="trainer">Trainer</Select.Option>
          <Select.Option value="trainee">Member</Select.Option>
        </Select>
        <Select
          className=" -mt-3 md:-mt-0"
          placeholder={<p className="text-lg">specialism</p>}
        >
          <Select.Option value="Ab Workouts">Ab Workouts</Select.Option>
          <Select.Option value="Anaerobic exercise">
            Anaerobic exercise
          </Select.Option>
          <Select.Option value="Boxercise">Boxercise</Select.Option>
          <Select.Option value="Calisthenics">Calisthenics</Select.Option>
          <Select.Option value="Circuits">Circuits</Select.Option>
          <Select.Option value="Core Strength">Core Strength</Select.Option>
          <Select.Option value="Fat Burners">Fat Burners</Select.Option>
          <Select.Option value="Flexibility & Mobility">
            Flexibility & Mobility
          </Select.Option>
          <Select.Option value="HIIT">HIIT</Select.Option>
          <Select.Option value="Nutritionist">Nutritionist</Select.Option>
          <Select.Option value="Pilates">Pilates</Select.Option>
          <Select.Option value="Senior Fitness">Senior Fitness</Select.Option>
          <Select.Option value="Spin">Spin</Select.Option>
          <Select.Option value="Yoga">Yoga</Select.Option>
          <Select.Option value="Weights">Weights</Select.Option>
          <Select.Option value="Zumba">Zumba</Select.Option>
          <Select.Option value="Other">Other</Select.Option>
        </Select>
        <Select
          className=" -mt-3 md:-mt-0"
          placeholder={<p className=" text-lg">Format</p>}
        >
          <Select.Option value="Onlien">Onlien</Select.Option>
          <Select.Option value="In-Person">In-Person</Select.Option>
        </Select>
      </div>
      {/* single content card */}
      <div className="pb-12 md:pb-10">
        {
          isLoading && <ContentSkeleton></ContentSkeleton>
        }
        {data?.data?.data?.map((content) => (
          <SingleBlog key={content._id} content={content} />
          // <div key={content._id}>
          //     <h1>{content?.title}</h1>
          //     <p>{content?.content}</p>
          // </div>
        ))}
      </div>
      <div className="">

          <Pagination
            current={data?.data?.meta?.page}
            pageSize={data?.data?.meta?.limit}
            total={data?.data?.meta?.total}
            onChange={handlePageChange}
          />
      </div>
      {/* footer image */}
      <div className=" mt-10 mx-3 md:mx-0">
        <Image src={gymbg2} className="w-full" width={0} height={0} alt="gym" />
      </div>
    </div>
  );
};

export default Content;

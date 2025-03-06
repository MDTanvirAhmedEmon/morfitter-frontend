"use client";
import Image from "next/image";
import gymbg from "../../../assets/content/gym1.png";
import gymbg2 from "../../../assets/content/gym2.png";
import fitnessTeam from "../../../assets/content/fitnessTeam.png";
import { ConfigProvider, Input, Pagination, Select } from "antd";
import { useGetAllContentsForUserQuery, useGetAllContentsQuery } from "@/redux/features/content/contentApi";
import SingleBlog from "@/components/Content/SingleBlog";
import { useState } from "react";
import ContentSkeleton from "@/components/Skeleton/ContentSkeleton";
import { CiSearch } from "react-icons/ci";
import Cookies from "js-cookie";
import SingleBlogForLogOut from "@/components/Content/SingleBlogForLogOut";

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedUserValue, setSelectedUserValue] = useState('');
  const [specialism, setSpecialism] = useState(undefined);
  const token = Cookies.get('morfitter-token');

  const { data: authData, isLoading: isLoadingAuth } = useGetAllContentsQuery(
    { page: currentPage, role: selectedUserValue, sortOrder: 'desc', searchTerm: searchValue, specialism },
    { skip: !token }
  );

  const { data: unauthData, isLoading: isLoadingUnauth } = useGetAllContentsForUserQuery(
    { page: currentPage, role: selectedUserValue, sortOrder: 'desc', searchTerm: searchValue, specialism },
    { skip: !!token }
  );

  const data = token ? authData : unauthData;
  const isLoading = token ? isLoadingAuth : isLoadingUnauth;

  const handleSelectedUserValue = (value) => {
    setSelectedUserValue(value);
  };

  const handleSpecialismValue = (value) => {
    setSpecialism(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="xxl:w-[1340px] mx-auto py-10 md:py-20">
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
          placeholder={<p className=" text-lg">PTs Or Member</p>}
        >
          <Select.Option value="trainer">PTs</Select.Option>
          <Select.Option value="trainee">Member</Select.Option>
        </Select>
        <Select
          className=" -mt-3 md:-mt-0"
          onChange={handleSpecialismValue}
          placeholder={<p className="text-lg">Specialism</p>}
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
          <Select.Option value="">Other</Select.Option>
        </Select>
        {/* <Select
          className=" -mt-3 md:-mt-0"
          placeholder={<p className=" text-lg">Format</p>}
        >
          <Select.Option value="Onlien">Onlien</Select.Option>
          <Select.Option value="In-Person">In-Person</Select.Option>
        </Select> */}
        <ConfigProvider
          theme={{
            components: {
              Input: {
                inputFontSize: 16,
                controlHeight: 39,
              },
            },
          }}
        >
          <Input
            value={searchValue}
            className="-mt-3 md:-mt-0"
            onChange={(e) => setSearchValue(e.target.value)}
            prefix={<CiSearch className="w-6 h-6 " />}
            placeholder="Search Content"
          />
        </ConfigProvider>


      </div>
      {/* single content card */}
      <div className="pb-12 md:pb-10">
        {
          isLoading && <ContentSkeleton></ContentSkeleton>
        }
        {
          data?.data?.data?.length === 0 ?
            <div className=' py-28 flex justify-center items-center'>
              <h3 className="text-xl md:text-3xl text-gray-600">No content here yet. Be the first to add something great!</h3>
            </div> :
            data?.data?.data?.map((content) =>
              token ? (
                <SingleBlog key={content?._id} content={content} />
              ) : (
                <SingleBlogForLogOut key={content?._id} content={content} />
              )
            )}
      </div>
      <div className="">
        {
          data?.data?.data?.length !== 0 &&
          <Pagination
            current={data?.data?.meta?.page}
            pageSize={data?.data?.meta?.limit}
            total={data?.data?.meta?.total}
            onChange={handlePageChange}
          />
        }
      </div>
      {/* footer image */}
      <div className=" mt-10 mx-3 md:mx-0">
        <Image src={gymbg2} className="w-full" width={0} height={0} alt="gym" />
      </div>
    </div>
  );
};

export default Content;

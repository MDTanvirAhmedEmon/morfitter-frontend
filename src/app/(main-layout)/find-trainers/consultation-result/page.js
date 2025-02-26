"use client"
import { useSearchParams } from "next/navigation";
import TrainerItem from "../../../../components/MainLayout/FindTrainers/ConsultationResult/TrainerItem";
import { useGetAllTrainerQuery } from "@/redux/features/trainer/trainerApi";
import TrainerItemSkeleton from "@/components/Skeleton/TrainerItemSkeleton";

const ConsultationResult = () => {
    const searchParams = useSearchParams();
    const specialism = searchParams.get("specialism");
    const onlineSession = searchParams.get("onlineSession");
    const faceToFace = searchParams.get("faceToFace");
    const consultationType = searchParams.get("consultationType");


    const queryParams = {};
    if (specialism) queryParams.specialism = specialism;
    if (onlineSession) queryParams.onlineSession = onlineSession;
    if (faceToFace) queryParams.faceToFace = faceToFace;
    if (consultationType) queryParams.consultationType = consultationType;


    const { data, isLoading } = useGetAllTrainerQuery(queryParams);

    if (!data?.data?.data?.length) {

        return (
            < div className=" py-16 md:container flex items-center justify-center mx-3 md:mx-auto min-h-[50vh]" >
                {
                    data?.data?.data?.length === 0 && <div className="text-center text-2xl">No trainers found</div>
                }
            </div >
        )
    }

    return (
        <div className=" py-16 md:container mx-3 md:mx-auto min-h-[50vh]">
            {
                isLoading &&
                <>
                    <TrainerItemSkeleton></TrainerItemSkeleton>
                    <TrainerItemSkeleton></TrainerItemSkeleton>
                </>
            }


            {
                data?.data?.data?.map((trainer) => (
                    <TrainerItem key={trainer?._id} trainer={trainer}></TrainerItem>
                ))
            }

        </div>
    );
};

export default ConsultationResult;
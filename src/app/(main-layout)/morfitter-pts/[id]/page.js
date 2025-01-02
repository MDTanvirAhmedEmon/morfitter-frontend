"use client"
import { Select } from 'antd';
import session1 from '../../../../assets/session/download.jpg'
import session2 from '../../../../assets/session/rated.jpg'
import Image from 'next/image';
import Link from 'next/link';

const SinglePtSession = () => {
    return (
        <div>
            <div className=' px-3 md:container md:mx-auto py-10 md:py-16'>
                <div className=' flex flex-col md:flex-row gap-6'>
                    <Select className=' md:w-[190px]' placeholder={<p className=" text-lg">Live Or Recorded?</p>}>
                        <Select.Option value="Live">Live</Select.Option>
                        <Select.Option value="Recorded">Recorded</Select.Option>
                    </Select>
                    <Select className="md:w-[190px]" placeholder={<p className="text-lg">specialism</p>}>
                        <Select.Option value="Ab Workouts">Ab Workouts</Select.Option>
                        <Select.Option value="Anaerobic exercise">Anaerobic exercise</Select.Option>
                        <Select.Option value="Boxercise">Boxercise</Select.Option>
                        <Select.Option value="Calisthenics">Calisthenics</Select.Option>
                        <Select.Option value="Circuits">Circuits</Select.Option>
                        <Select.Option value="Core Strength">Core Strength</Select.Option>
                        <Select.Option value="Fat Burners">Fat Burners</Select.Option>
                        <Select.Option value="Flexibility & Mobility">Flexibility & Mobility</Select.Option>
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
                    <Select className=' md:w-[220px]' placeholder={<p className=" text-lg">Online or in-person?</p>}>
                        <Select.Option value="Onlien">Onlien</Select.Option>
                        <Select.Option value="In-Person">In-Person</Select.Option>
                    </Select>
                </div>

                <div className=' mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10'>
                    <Link href={`/morfitter-pts/single-session-of-pt/777`}>
                        <div className=' cursor-pointer'>
                            <Image className=' w-full' src={session1} alt='session' width={0} height={0} />
                        </div>
                    </Link>
                    <div className=' cursor-pointer'>
                        <Image className=' w-full' src={session2} alt='session' width={0} height={0} />
                    </div>
                    <div className=' cursor-pointer'>
                        <Image className=' w-full' src={session1} alt='session' width={0} height={0} />
                    </div>
                    <div className=' cursor-pointer'>
                        <Image className=' w-full' src={session2} alt='session' width={0} height={0} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SinglePtSession;
import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../../components/Post';

const Blogs = () => {
    const lawerDatas = useLoaderData();
    return (
        <div className=' container mx-auto px-2'>

            <div className="py-6 rounded-2xl mt-4 md:mt-8 px-2">
                <h1 className=' Mulish font-extrabold text-2xl md:text-3xl text-black text-center pb-4'>Blogs</h1>
                <p className='max-w-[1000px] mx-auto Mulish font-medium text-sm md:text-base text-black/70 text-center pb-8'>Let's explare some basic concept that will make you a good developer.</p>
            </div>

            <div className="join join-vertical mb-8 space-y-6 bg-base-100">

                {
                    lawerDatas.map(post => <Post post={post} key={post.id} />)
                }
                
            </div>
        </div>
    );
};

export default Blogs;
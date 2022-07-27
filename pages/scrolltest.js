import Post from "@/Components/test/Post";
import { LISTDATA } from "@/lib/constants";
import MainSeo from "@/Seo/MainSeo";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Scrolltest({data}){
    const maindata = data.data;
    const [posts, setPosts] = useState(maindata);

    const getMorePosts = async() => {
        const res = await fetch(`/politics/2`);
        const newPosts = await res.json()
        const res_data = newPosts.data;
        
        setPosts(posts => [...posts, ...res_data]);
    }
    
    return (
        <>
        <MainSeo />
        <div>
            <InfiniteScroll
            dataLength={posts.length}
            next={getMorePosts}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center"}}>
                    <b>Ya</b>
                </p>
            }
            >
            {
                posts.map((i, index) => (
                    <Post post={i} key={index}/>
                ))
            }
            </InfiniteScroll>
        </div>
        </>
    )
}

export async function getServerSideProps(){
    const main_res = await fetch(`${LISTDATA}/politics`)
    const main_data = await main_res.json();
    return {
        props: {
            data: main_data
        }
    }
}
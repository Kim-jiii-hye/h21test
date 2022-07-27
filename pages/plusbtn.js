import Post from "@/Components/test/Post";
import { LISTDATA } from "@/lib/constants";
import MainSeo from "@/Seo/MainSeo";
import styled from "styled-components";
import { FiPlus } from 'react-icons/fi'
import { useState } from "react";

const Mycontainer = styled.div`
    margin: 0 20% 
`

export default function Plusbtn({ data }) {
    const maindata = data.data;
    const [page, setPage] = useState(2);
    const [posts, setPosts] = useState(maindata);
    
    const handleClick = async() => {
        setPage(page+1);
        const res = await fetch(`/politics/${page}`);
        const newPosts = await res.json()
        const res_data = newPosts.data;
        console.log(res_data);
    }

    return (
        <>
            <MainSeo />
            <Mycontainer>
                {
                    posts.map((i, index) => (
                        <Post post={i} key={index} />
                    ))
                }
            <button onClick={handleClick}>
                <FiPlus />더보기</button>
            </Mycontainer>
        </>
    )
}

export async function getServerSideProps() {
    const main_res = await fetch(`${LISTDATA}/politics`)
    const main_data = await main_res.json();
    return {
        props: {
            data: main_data
        }
    }
}
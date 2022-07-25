import MainSeo from "@/Seo/MainSeo";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material';
import Famoushani from "@/Components/test/Famoushani";

// function Example(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (

//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }
function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default function hotest({ famousdata }) {

    return (
        <>
            <MainSeo />
            <div>
                <h4>N호 주요뉴스</h4>
            </div>
            
               <Carousel>
                    <div className="row_home_sub">
                    {
                        famousdata.data.map((i, index) => (
                            (index <= 5) ?
                                <Paper>
                                    <Famoushani data={i} />
                                    <Button className="CheckButton">
                                        Check it out!
                                    </Button>
                                </Paper>
                                : <></>
                        ))
                    }
                    </div>
                </Carousel>
            
        </>
    )
}
export const getServerSideProps = async () => {
    const data = await fetch('https://www.hani.co.kr/section-homepage/gcp-ranks/news/news-all.json');
    const famousdata = await data.json();
    return {
        props: {
            famousdata
        }
    }
}
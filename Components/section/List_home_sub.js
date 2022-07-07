import Item_home_sub from "@/item/Item_home_sub";
import styles from "@/styles/Componentst.module.css";
import useSWR from 'swr'
import View_subscription from "./View_subscription";

export default function List_home_sub(){

    const { data } = useSWR('/api/main');
    const main_sub_data = data.data.top.slice(7, data.data.top.length);
    

    return (
        <section id="section_home_sub" className="home_sub">
        <div className="hr"></div>
        <h4 className="hidden">한겨레21 List</h4>
        <div className="table_home_sub">
            <div className="row_home_sub row_home_sub_B">
                <div className={`cell_home_sub cell_home_sub_R ${styles.home_sub_comp}`}>
                    <Item_home_sub homesubdata={ main_sub_data[0] } />
                </div>
                <div className={`cell_home_sub cell_home_sub_R ${styles.home_sub_comp}`}>
                    <Item_home_sub homesubdata={ main_sub_data[1] } />
                </div>
                <div className={`cell_home_sub cell_home_sub_R ${styles.home_sub_comp}`}>
                    <Item_home_sub homesubdata={ main_sub_data[2] } />
                </div>
                <div className="cell_home_sub cell_home_sub_subscription">
                    <View_subscription />
                </div>
            </div>
            <div className="row_home_sub row_home_sub_B">
                <div className={`cell_home_sub cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[3] }/>
                </div>
                <div className={`cell_home_sub cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[4] }/>
                </div>
                <div className={`cell_home_sub cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[5] }/>
                </div>
                <div className={`cell_home_sub`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[6] }/>
                </div>
            </div>
            <div className="row_home_sub">
                <div className={`cell_home_sub cell_home_sub8 cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[7] }/>
                </div>
                <div className={`cell_home_sub cell_home_sub9 cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[8] }/>
                </div>
                <div className={`cell_home_sub cell_home_sub10 cell_home_sub_R`} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[9] }/>
                </div>
                <div className={`cell_home_sub cell_home_sub11 `} style={{width:"25%"}}>
                    <Item_home_sub homesubdata={ main_sub_data[10] }/>
                </div>
            </div>
        </div>
    </section>
    )
}

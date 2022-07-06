import Item_home_main from "@/item/Item_home_main";
import styles from "@/styles/Componentst.module.css";
import Link from "next/link";
import useSWR from 'swr'

export default function List_home_main() {

    const { data } = useSWR('/api/main');
    const main_home_data = data.data.top.slice(1,7);

    return (
        <section id="section_home_main" className="home_main">
            <h4 className="hidden">한겨레21 Main</h4>
            <div className="table_home_main">
                <div className="row_home_main row_home_main_B">
                    <div className={`cell_home_main cell_home_main_R ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[0]}/>
                    </div>
                    <div className={`cell_home_main cell_home_main_R ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[1]} />
                    </div>
                    <div className={`cell_home_main ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[2]} />
                    </div>
                </div>
                <div className="row_home_main">
                    <div className={`cell_home_main cell_home_main_R ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[3]} />
                    </div>
                    <div className={`cell_home_main cell_home_main_R ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[4]} />
                    </div>
                    <div className={`cell_home_main ${styles.home_sub_comp}`}>
                        <Item_home_main homemaindata={main_home_data[5]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

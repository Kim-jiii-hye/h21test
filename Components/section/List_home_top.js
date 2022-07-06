import Item_home_top from "@/item/Item_home_top";
export default function List_home_top(){
    return (
        <section id="section_home_top" className="home_top">
            <h4 className="hidden">한겨레21 Top</h4>
            <ul className="home_top">
                <Item_home_top />
            </ul>
        </section>
    )
}

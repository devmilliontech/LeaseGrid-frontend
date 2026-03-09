import type { TicketProps } from "./ListView";
export interface ListViewProps {
    data: TicketProps[];
}
export const GridView: React.FC<ListViewProps> = ({ data }) => {


    return (
        <>
            {data.map((item,index) => {
                const data=item.ticket

                return (
                    <div>
                        <div></div>
                    </div>
                )
            })}

        </>
    );
}
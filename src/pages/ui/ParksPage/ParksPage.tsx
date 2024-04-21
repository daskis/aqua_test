import cls from "./ParksPage.module.scss"
import {IHotelCard} from "@entities/hotel/lib";
import {Typography} from "antd";
import Filters from "@assets/icons/filter.svg"
import {Park} from "@entities/park/ui";
import {useGetParkQuery} from "@entities/park/lib";
import {Loading} from "@shared/ui";

export const ParksPage = () => {

    const {data} = useGetParkQuery(null)
    if (data) {
        return (
            <div className={cls.wrapper}>
                <div className={cls.heading}>
                    <Typography.Title className={cls.title}>Парки</Typography.Title>
                    <Filters/>
                </div>
                {data && data.map((item, index) => (
                    <Park key={item.id} {...item}/>
                ))}
            </div>
        );
    } else {
        return <Loading/>
    }
};


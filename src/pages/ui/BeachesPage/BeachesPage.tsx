import cls from "./BeachesPage.module.scss"
import {IHotelCard} from "@entities/hotel/lib";
import {Typography} from "antd";
import Filters from "@assets/icons/filter.svg"
import {Beache} from "@entities/beaches/ui";
import {useGetBeaches} from "@entities/beaches/lib";
import {Loading} from "@shared/ui";

export const BeachesPage = () => {
    const {data} = useGetBeaches()
    if (data) {
        return (
            <div className={cls.wrapper}>
                <div className={cls.heading}>
                    <Typography.Title className={cls.title}>Пляжи</Typography.Title>
                    <Filters/>
                </div>
                {data && data.map((item, index) => (
                    <Beache key={item.id} {...item}/>
                ))}
            </div>
        );
    } else {
        return <Loading/>
    }
};


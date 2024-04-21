import cls from "./HotelCard.module.scss"
import {IHotelCard} from "@entities/hotel/lib";
import {Typography} from "antd";
//@ts-ignore
export const HotelCard = ({img, rating, reviews, type, name, id}) => {
    return (
        <div className={cls.wrapper}>
            <img src={img[1]} className={cls.image} alt=""/>
            <Typography.Title level={4} className={cls.title}>{name}</Typography.Title>
            <div className={cls.info}>
                <Typography.Text className={cls.rating}> {rating}</Typography.Text>
                <Typography.Text className={cls.reviews}>{reviews} · </Typography.Text>
                <Typography.Text className={cls.type}>{type}</Typography.Text>
            </div>
        </div>
    );
};


import cls from "./HotelList.module.scss"
import {Typography} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import {HotelCard} from "@entities/hotel/ui";
import {IHotelCard, useGetHotels} from "@entities/hotel/lib";
import {Link} from "react-router-dom";
import {Loading} from "@shared/ui";

export const HotelList = () => {
    const {data} = useGetHotels()
    if (data) {
        return (
            <div className={cls.wrapper}>
                <div className={cls.info}>
                    <Typography.Title level={2} className={cls.title}>Отели</Typography.Title>
                    <Link to={"/hotels"}>
                        <Typography.Link className={cls.link}>
                            Все
                        </Typography.Link>
                    </Link>
                </div>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={25}
                >
                    {data && data.map((item, i) => (
                        <SwiperSlide key={item.img_url[0]}>
                            <HotelCard {...item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    } else {
        return <Loading/>
    }
};


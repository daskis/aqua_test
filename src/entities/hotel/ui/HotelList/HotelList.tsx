import cls from "./HotelList.module.scss"
import {Typography} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import {HotelCard} from "@entities/hotel/ui";
import {IHotelCard, useGetHotels} from "@entities/hotel/lib";
import {Link} from "react-router-dom";
import {Loading} from "@shared/ui";
import {IPlace} from "@entities/place/lib";

export const HotelList = () => {
    const {data} = useGetHotels()
    const list: IPlace[] = [
        {
            name: "Золотой пляж",
            img: ["https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg"],
            place: "Анапа",
            rating: 4.5,
            description: "Аквапарк «Золотой пляж» — в один из самых больших в Анапе развлекательных комплексов под открытым небом, который расположился на берегу Черного моря."
        },
        {
            name: "Золотой пляж 1",
            img: ["https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg",],
            place: "Анапа",
            rating: 4.2,
            description: "Аквапарк «Золотой пляж» — в один из самых больших в Анапе развлекательных комплексов под открытым небом, который расположился на берегу Черного моря."
        },
        {
            name: "Золотой пляж 24",
            img: ["https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg", "https://i.pinimg.com/236x/97/6f/cd/976fcda0a602301fe9792180afaba6c4.jpg",],
            place: "Анапа",
            rating: 4.5,
            description: "Аквапарк «Золотой пляж» — в один из самых больших в Анапе развлекательных комплексов под открытым небом, который расположился на берегу Черного моря."
        },
    ]
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
                    {list.map((item, i) => (
                        <SwiperSlide key={item.img[0]}>
                            {/*@ts-ignore*/}
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


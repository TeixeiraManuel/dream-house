import React from "react";

import { Star } from "lucide-react";

import testimonyImg from "@/assets/testimonyImg.png";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function TestimonySlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const data = [
    {
      image: testimonyImg,
      description:
        "Graças à Casa dos Sonhos, encontramos o lar perfeito para nossa família. O atendimento foi excelente ",
      price: "1.800.000,00 kz",
    },
    {
      image: testimonyImg,
      description:
        "Graças à Casa dos Sonhos, encontramos o lar perfeito para nossa família. O atendimento foi excelente ",
    },
    {
      image: testimonyImg,
      description:
        "Graças à Casa dos Sonhos, encontramos o lar perfeito para nossa família. O atendimento foi excelente ",
    },
    {
      image: testimonyImg,
      description:
        "Graças à Casa dos Sonhos, encontramos o lar perfeito para nossa família. O atendimento foi excelente",
    },
    {
      image: testimonyImg,
      description:
        "Graças à Casa dos Sonhos, encontramos o lar perfeito para nossa família. O atendimento foi excelente ",
    },
  ];
  return (
    <div className="w-full relative ">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full min-w-sm"
      >
        <CarouselContent className="">
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1 ">
                <Card>
                  <CardContent className=" aspect-square space-y-6">
                    <img src={item.image} alt="slider image" />
                    <div className="space-y-6 p-6">
                      <h1 className="font-bold text-2xl">Mario Pedro</h1>
                      <div className="space-y-2">
                        <p> {item.description} </p>
                        <p> {item.description} </p>
                      </div>

                      <div className="flex flex-row gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index} className="text-yellow-400">
                            <Star />
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" border-primary/30" />
        <CarouselNext className="bg-secondary text-slate-100" />
      </Carousel>
      <div className="py-2 text-sm flex items-center justify-center gap-3">
        {Array.from({ length: count }).map((_, index) => {
          return (
            <span
              className={`
                ${
                  index + 1 === current
                    ? "bg-secondary p-2 rounded-full"
                    : "bg-secondary/55 p-2 rounded-full"
                }
              `}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

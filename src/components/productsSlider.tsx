import React from "react";

import armchairImgSlider from "@/assets/armchairImgSlider.png";
import bedImgSlider from "@/assets/bedImgSlider.png";
import mirrorImgSlider from "@/assets/mirrorImgSlider.png";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ShoppingBag } from "lucide-react";
export function ProductsSlider() {
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
      image: armchairImgSlider,
      description:
        "Esta deslumbrante casa moderna, localizada no prestigiado bairro Jardim das Flores, combina elegância e funcionalidadeem cada detalhe. ",
      price: "1.800.000,00 kz",
    },
    {
      image: mirrorImgSlider,
      description:
        "Esta deslumbrante casa moderna, localizada no prestigiado bairro Jardim das Flores, combina elegância e funcionalidadeem cada detalhe. ",
      price: "1000kz",
    },
    {
      image: bedImgSlider,
      description:
        "Esta deslumbrante casa moderna, localizada no prestigiado bairro Jardim das Flores, combina elegância e funcionalidadeem cada detalhe. ",
      price: "1000kz",
    },
    {
      image: armchairImgSlider,
      description:
        "Esta deslumbrante casa moderna, localizada no prestigiado bairro Jardim das Flores, combina elegância e funcionalidadeem cada detalhe. ",
      price: "1000kz",
    },
    {
      image: mirrorImgSlider,
      description:
        "Esta deslumbrante casa moderna, localizada no prestigiado bairro Jardim das Flores, combina elegância e funcionalidadeem cada detalhe. ",
      price: "1.800.000,00 kz",
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
                      <h1 className="font-bold text-4xl">Descrição</h1>
                      <p> {item.description} </p>
                      <h1 className="font-bold text-4xl">Preço</h1>
                      <p> {item.price} </p>
                      <button className=" flex  items-center gap-4 hover:bg-primary hover:text-slate-100 transition-colors border-2 border-primary/20 p-2 rounded-md shadow-md">
                        Comprar agora
                        <ShoppingBag size={18} />
                      </button>
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

import { Building2, Lamp, ShoppingBag } from "lucide-react";

import { Header } from "@/components/header";
import { AboutCard } from "@/components/aboutCard";
import { ProductsCard } from "@/components/productsCard";

import heroImage from "@/assets/heroImg.png";
import otherImgHero from "@/assets/othersImgHero.png";
import elipseImg from "@/assets/Ellipse.png";
import smallElipseImg from "@/assets/smallEllipse.png";
import aboutImg from "@/assets/aboutImg.png";
import productsImg from "@/assets/productsimg.png";
import { ProductsSlider } from "@/components/productsSlider";

export function App() {
  return (
    <div className="mx-14">
      <div className="h-screen relative pt-14 space-y-36">
        <Header />
        <div className="flex items-center gap-6">
          <img
            className="h-[45rem] w-[50rem] before:content-[''] before:block before:absolute before:w-full before:h-[100vh] before:bg-no-repeat before:-left-26 before:top-[10px] before:z-50  before:bg-[url('/src/assets/circleBeforeHero.png')]"
            src={heroImage}
            alt="Hero image"
          />
          <div className="space-y-5 relative">
            <h1 className="font-bold text-3xl w-[60rem]">
              <span className="text-secondary">Casa dos Sonhos</span>, onde
              ajudamos você a encontrar o lar perfeito para sua família.
              descobrir uma seleção exclusiva de imóveis que atendem a todas as
              suas necessidades.
            </h1>
            <p className="text-lg">
              Com anos de experiência no mercado imobiliário, estamos prontos
              para guiá-lo <br /> em cada etapa do processo.
            </p>
            <button className="text-slate-100 bg-secondary w-40 h-10 font-bold flex items-center justify-center gap-2 rounded-md">
              Comprar agora
              <ShoppingBag size={18} />
            </button>
            <img src={elipseImg} alt="" className="absolute right-0 top-32" />
            <div className="flex items-start gap-32">
              <img src={otherImgHero} alt="" />
              <div>
                <h5 className="font-bold text-xl">123 Milhões+</h5>
                <p className="font-bold">
                  Descubra nossa ampla variedade de imóveis, desde <br />
                  aconchegantes apartamentos até espaçosas <br /> casas em
                  bairros prestigiados
                </p>
              </div>
            </div>
            <img
              src={smallElipseImg}
              alt=""
              className="absolute right-36 top-42"
            />
          </div>
        </div>
      </div>
      <section className="flex justify-between pt-36">
        <div className="space-y-9">
          <h1 className="font-bold text-4xl">
            A Cama King Size Luxo Confort é a combinação perfeita de elegância
            conforto <br /> e durabilidade.
          </h1>
          <div className="space-y-9">
            <AboutCard
              icon={<Building2 />}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur elit, eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam."
              state={true}
            />
            <AboutCard
              icon={<Building2 />}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur elit, eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam."
              state={true}
            />
            <AboutCard
              icon={<Building2 />}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur elit, eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam."
              state={true}
            />
          </div>
        </div>
        <img
          src={aboutImg}
          className="h-[806px]"
          alt="about image of motel room"
        />
      </section>
      <section className="pt-36">
        <h1 className="text-center font-bold text-4xl">Produtos</h1>
        <p className="text-center text-base mt-4">
          Descubra nossa ampla variedade de imóveis, desde aconchegantes
          apartamentos até espaçosas casas em bairros prestigiados. <br /> Todos
          os imóveis são cuidadosamente selecionados para garantir que você
          encontre exatamente o que procura.
        </p>
        <div className="flex space-x-12 mt-12">
          <div className="space-y-12">
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          </div>
          <img src={productsImg} alt="products image" className="h-[806px]" />
          <div className="space-y-12">
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <ProductsCard
              icon={<Lamp />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          </div>
        </div>
      </section>
      <section className="pt-36">
        <h1 className="text-center font-bold text-4xl">
          Conheça os nossos produtos
        </h1>
        <p className="text-center mt-4">
          Desfrute de momentos de relaxamento com o nosso sofá retrátil de couro
          ecológico. Com design moderno e acabamento impecável, ele se adapta
          perfeitamente a qualquer ambiente. <br /> Seu revestimento em couro
          ecológico é fácil de limpar e proporciona um toque suave e elegante
        </p>
        <div className=" mt-12 mx-14">
          <ProductsSlider />
        </div>
      </section>
    </div>
  );
}

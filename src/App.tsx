import { ShoppingBag } from "lucide-react";

import { Header } from "./components/header";

import heroImage from "../src/assets/heroImg.png";
import otherImgHero from "../src/assets/othersImgHero.png";
import elipseImg from "../src/assets/Ellipse.png";
import smallElipseImg from "../src/assets/smallEllipse.png";

export function App() {
  return (
    <div>
      <div className="mx-14 h-screen relative pt-14 space-y-36">
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
    </div>
  );
}

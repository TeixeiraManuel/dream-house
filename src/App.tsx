import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Building2,
  Download,
  Lamp,
  Mail,
  Send,
  ShoppingBag,
  User,
} from "lucide-react";

import { Header } from "@/components/header";
import { AboutCard } from "@/components/aboutCard";
import { ProductsCard } from "@/components/productsCard";
import { ProductsSlider } from "@/components/productsSlider";
import { TestimonySlider } from "./components/testimonySlider";
import { QuestionsCard } from "./components/questionsCard";
import { Footer } from "./components/footer";
import { Spinner } from "./components/spinner";

import heroImage from "@/assets/heroImg.png";
import otherImgHero from "@/assets/othersImgHero.png";
import elipseImg from "@/assets/Ellipse.png";
import smallElipseImg from "@/assets/smallEllipse.png";
import aboutImg from "@/assets/aboutImg.png";
import productsImg from "@/assets/productsimg.png";
import googlePlay from "@/assets/IconGoogleplay.png";
import IconApple from "@/assets/IconApple.png";
import imgApp from "@/assets/imgApp.png";
import contactImg from "@/assets/contactImg.png";

export function App() {
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className="mx-4 md:mx-14">
            <div className="h-screen relative pt-14 space-y-36">
              <Header />
              <div className="flex items-center gap-6" data-aos="fade-up">
                <img
                  className="h-[45rem] w-[50rem] before:content-[''] before:block before:absolute before:w-full before:h-[100vh] before:bg-no-repeat before:-left-26 before:top-[10px] before:z-50  before:bg-[url('/src/assets/circleBeforeHero.png')]"
                  src={heroImage}
                  alt="Hero image"
                  data-aos="fade-up"
                />
                <div className="space-y-5 relative" data-aos="fade-down-left">
                  <h1 className="font-bold text-2xl lg:text-3xl w-[60rem]">
                    <span className="text-secondary">Casa dos Sonhos</span>,
                    onde ajudamos você a encontrar o lar perfeito para sua
                    família. Descubra uma seleção exclusiva de imóveis que
                    atendem a todas as suas necessidades.
                  </h1>
                  <p className="text-lg" data-aos="fade-up">
                    Com anos de experiência no mercado imobiliário, estamos
                    prontos para guiá-lo em cada etapa do processo.
                  </p>
                  <button
                    className="text-slate-100 bg-secondary w-40 h-10 font-bold flex items-center justify-center gap-2 rounded-md"
                    data-aos="fade-up"
                  >
                    Comprar agora
                    <ShoppingBag size={18} />
                  </button>
                  <img
                    src={elipseImg}
                    alt=""
                    className="absolute right-0 top-32"
                    data-aos="fade-up"
                  />
                  <div className="flex items-start gap-32">
                    <img src={otherImgHero} alt="" data-aos="fade-left" />
                    <div data-aos="fade-left">
                      <h5 className="font-bold text-xl">123 Milhões+</h5>
                      <p className="font-bold">
                        Descubra nossa ampla variedade de imóveis, desde
                        aconchegantes apartamentos até espaçosas casas em
                        bairros prestigiados.
                      </p>
                    </div>
                  </div>
                  <img
                    src={smallElipseImg}
                    alt=""
                    className="absolute right-36 top-42"
                    data-aos="fade-right"
                  />
                </div>
              </div>
            </div>

            {/* Primeira seção com animação */}
            <section
              className="flex justify-between pt-36 flex-col lg:flex-row"
              data-aos="fade-up"
            >
              <div className="space-y-9">
                <h1 className="font-bold text-2xl lg:text-4xl">
                  A Cama King Size Luxo Confort é a combinação perfeita de
                  elegância conforto e durabilidade.
                </h1>
                <div className="space-y-9">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <AboutCard
                      key={index}
                      icon={<Building2 />}
                      title="Lorem ipsum dolor sit"
                      description="Lorem ipsum dolor sit amet, consectetur elit, eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam."
                      state={true}
                      data-aos="fade-up"
                    />
                  ))}
                </div>
              </div>
              <img
                src={aboutImg}
                className="h-[806px] min-h-52 w-[60rem] min-w-60"
                alt="about image of motel room"
                data-aos="fade-up"
              />
            </section>

            {/* Seção de Produtos */}
            <section className="pt-36" data-aos="fade-up">
              <h1
                className="text-center font-bold text-2xl lg:text-4xl"
                data-aos="fade-up"
              >
                Produtos
              </h1>
              <p className="text-center text-base mt-4" data-aos="fade-up">
                Descubra nossa ampla variedade de imóveis, desde aconchegantes
                apartamentos até espaçosas casas em bairros prestigiados. Todos
                os imóveis são cuidadosamente selecionados para garantir que
                você encontre exatamente o que procura.
              </p>
              <div className="flex space-x-6 mt-12 ">
                <div className=" w-[60rem] h-auto min-w-52">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} data-aos="fade-right">
                      <ProductsCard
                        icon={<Lamp />}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </div>
                  ))}
                </div>
                <img
                  src={productsImg}
                  alt="products image"
                  className="w-[60rem] h-auto min-w-52"
                  data-aos="zoom-in"
                />
                <div className="space-y-4 w-[60rem] h-96 xl:h-auto min-w-52">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} data-aos="fade-left">
                      <ProductsCard
                        icon={<Lamp />}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="pt-36">
              <h1 className="text-center font-bold text-2xl lg:text-4xl">
                Conheça os nossos produtos
              </h1>
              <p className="text-center mt-4">
                Desfrute de momentos de relaxamento com o nosso sofá retrátil de
                couro ecológico. Com design moderno e acabamento impecável, ele
                se adapta perfeitamente a qualquer ambiente. <br /> Seu
                revestimento em couro ecológico é fácil de limpar e proporciona
                um toque suave e elegante
              </p>
              <div className=" mt-12 mx-2 md:mx-14" data-aos="fade-up">
                <ProductsSlider />
              </div>
            </section>
            {/* Aplicação do AOS para a próxima seção */}
            <section className="mt-36 flex lg:gap-9" data-aos="fade-up">
              <div className="bg-secondary rounded-md">
                <img
                  src={imgApp}
                  alt=""
                  className="w-[60rem] h-auto min-w-52 lg:block hidden"
                  data-aos="zoom-in"
                />
              </div>
              <div className=" space-y-6">
                <h1
                  className="font-bold text-2xl lg:text-4xl"
                  data-aos="fade-left"
                >
                  Faça o download do nosso aplicativo
                </h1>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div
                  className="flex items-center gap-2 md:gap-6"
                  data-aos="fade-up"
                >
                  <button className="bg-zinc-950 flex text-slate-100 w-44 gap-4 items-center p-2 rounded-md transition-all hover:scale-105 hover:transition-shadow">
                    <img src={IconApple} alt="" />
                    <span>
                      <p className="text-sm">Disponível na</p>
                      <h1 className="text-lg">App Store</h1>
                    </span>
                  </button>
                  <button className="bg-zinc-950 flex text-slate-100 min-w-28 w-44 gap-4 items-center p-2 rounded-md transition-all hover:scale-105 hover:transition-shadow">
                    <img src={googlePlay} alt="" />
                    <span>
                      <p className="text-sm">Disponível na</p>
                      <h1 className="text-lg">Google Play</h1>
                    </span>
                  </button>
                </div>
                <button className="bg-primary text-slate-100 w-40 gap-4 flex items-center p-2 rounded-md transition-all justify-center hover:scale-105 hover:transition-shadow">
                  Download
                  <Download />
                </button>
              </div>
            </section>

            {/* Testemunhos */}
            <section className="mt-36">
              <h1
                className="text-center text-2xl lg:text-4xl font-bold"
                data-aos="fade-up"
              >
                Testemunho dos nossos clientes
              </h1>
              <p className="text-center mt-4" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-12 mx-2 md:mx-14" data-aos="fade-up">
                <TestimonySlider />
              </div>
            </section>

            {/* Perguntas Frequentes */}
            <section className="mt-36 space-y-8" data-aos="fade-up">
              <h1
                className="font-bold text-center text-2xl lg:text-4xl"
                data-aos="fade-up"
              >
                Perguntas frequentes
              </h1>
              <div className="space-y-4">
                <QuestionsCard data-aos="fade-up" />
                <QuestionsCard data-aos="fade-up" />
                <QuestionsCard data-aos="fade-up" />
              </div>
            </section>

            {/* Seção de Contato */}
            <section className="mt-36" data-aos="fade-up">
              <h1
                className="font-bold text-2xl lg:text-4xl text-center mb-4"
                data-aos="fade-up"
              >
                Contacto
              </h1>
              <div
                className="shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-4 bg-white flex justify-between gap-24 rounded-2xl flex-col lg:flex-row"
                data-aos="fade-up"
              >
                <div className="space-y-6 lg:w-11/12">
                  <h1
                    className="text-xl lg:text-2xl font-bold"
                    data-aos="fade-left mt-2"
                  >
                    Lorem ipsum dolor sit amet, Consectetur.
                  </h1>
                  <p data-aos="fade-left">
                    Lorem Ipsum is simply dummy text of the printing and <br />
                    typesetting industry.
                  </p>
                  <form
                    action=""
                    className="placeholder-zinc-900 flex flex-col space-y-9"
                  >
                    <div
                      className="flex items-center gap-2 border-primary/35 border-2 p-4 hover:border-secondary cursor-pointer"
                      data-aos="fade-left"
                    >
                      <User className="text-secondary" />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Digite o seu nome"
                        className="placeholder-zinc-900 outline-none flex-1"
                      />
                    </div>
                    <div
                      className="flex items-center gap-2 border-primary/35 border-2 p-4 hover:border-secondary cursor-pointer"
                      data-aos="fade-left"
                    >
                      <Mail className="text-secondary" />
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Digite o seu email"
                        className="placeholder-zinc-900 outline-none flex-1"
                      />
                    </div>
                    <div
                      className="flex gap-2 border-primary/35 border-2 h-28 items-start hover:border-secondary p-4 cursor-pointer"
                      data-aos="fade-left"
                    >
                      <Send className="text-secondary" />
                      <textarea
                        name=""
                        id=""
                        placeholder="Digite a sua mensagem"
                        className="placeholder-zinc-900 outline-none flex-1 h-full resize-none overflow-hidden"
                      ></textarea>
                    </div>
                    <button
                      className="bg-primary text-slate-100 p-4 font-bold "
                      data-aos="fade-up"
                    >
                      Enviar mensagem
                    </button>
                  </form>
                </div>
                <img
                  src={contactImg}
                  alt=""
                  className="w-[85rem] h-auto min-w-52"
                  data-aos="fade-right"
                />
              </div>
            </section>
          </div>
          <Footer data-aos="fade-up" />
        </>
      )}
    </>
  );
}

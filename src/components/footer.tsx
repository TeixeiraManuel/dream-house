import { Facebook, Instagram, Linkedin, Twitch } from "lucide-react";
import logo from "/logo.svg";
import { ListFooter } from "./listFooter";

export function Footer() {
  return (
    <footer className="mt-36 bg-primary px-4 md:px-12 py-4">
      <div>
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} className="w-8 h-14" alt="logo da aplicação" />
            <a href="#" className="text-slate-100 font-bold text-base">
              Casa dos Sonhos
            </a>
          </div>
          <p className="text-slate-100 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-row md:justify-end gap-6 md:gap-4 sm:gap-16 mt-4">
        <ListFooter
          title="Fins"
          oneItem="Pagamento"
          twoItem="Card"
          threeItem="Princípio"
        />
        <ListFooter
          title="Produtos"
          oneItem="Cadeiras"
          twoItem="Luzes"
          threeItem="Mesas"
        />
        <ListFooter
          title="Companhia "
          oneItem="Sobre"
          twoItem="Testemunho"
          threeItem="Kits"
        />
        <ListFooter
          title="Suporte"
          oneItem="Ajuda"
          twoItem="FAQ"
          threeItem="Contacto"
        />
      </div>
      <div className="flex md:justify-end items-center gap-3 my-12 ">
        <a
          href="#"
          className="bg-secondary p-2 text-slate-100 hover:bg-secondary/80 rounded-full hover:scale-105 transition-shadow hover:transition-shadow"
        >
          <Linkedin />
        </a>
        <a
          href="#"
          className="bg-secondary p-2 text-slate-100 hover:bg-secondary/80 rounded-full hover:scale-105 transition-shadow hover:transition-shadow"
        >
          <Facebook />
        </a>
        <a
          href="#"
          className="bg-secondary p-2 text-slate-100 hover:bg-secondary/80 rounded-full hover:scale-105 transition-shadow hover:transition-shadow"
        >
          <Instagram />
        </a>
        <a
          href="#"
          className="bg-secondary p-2 text-slate-100 hover:bg-secondary/80 rounded-full hover:scale-105 transition-shadow hover:transition-shadow"
        >
          <Twitch />
        </a>
      </div>
      <p className="text-slate-100 md:text-center">
        2024 © All rights reserved by Teixeira Manuel
      </p>
    </footer>
  );
}

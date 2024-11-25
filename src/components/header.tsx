import logo from "/logo.svg";
export function Header() {
  return (
    <div className="absolute w-full">
      <nav
        className="flex  justify-between px-14 bg-primary h-24 rounded-lg relative header after:content-[''] after:block after:absolute after:w-full after:h-[400px] after:bg-no-repeat after:bg-right after:bottom-[-350px]  after:z-[-1] after:bg-[url('/src/assets/lampHeader.png')]
                  before:content-[''] before:block before:absolute before:w-full before:h-[100vh] before:bg-no-repeat before:bg-left before:top-[10px] before:z-[-1]  before:bg-[url('/src/assets/lineHeader.png')]"
      >
        <div className="flex items-center gap-4">
          <img src={logo} className="w-8 h-14" alt="logo da aplicação" />
          <a href="#" className="text-slate-100 font-bold text-base">
            Casa dos Sonhos
          </a>
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#" className="font-bold text-slate-100">
              Página inicial
            </a>
          </li>
          <li>
            <a href="" className="">
              Produtos
            </a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Baixar app</a>
          </li>
          <li>
            <a href="">Testemunhos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <button>Login</button>
          <button className="bg-white text-primary font-bold w-36 h-9 rounded-sm">
            Cadastro
          </button>
        </div>
      </nav>
    </div>
  );
}

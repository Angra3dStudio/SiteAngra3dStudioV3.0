import { Helmet } from "react-helmet";




function HeadBR() {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>Angra 3D Studio 2.0</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Estúdio de Visualização Arquitetônica | ArchViz | CGI | Fotorrealismo" />
      <link rel="canonical" href="https://angra3dstudio.com.br" />
      <meta name="keywords" content="3D, Fotorrealismo, CGI, ArchViz, Projetos Arquitetônicos, Angra, Angra 3D Studio, Unreal Engine, Blender, 3DS MAX" />
      <meta property="og:title" content="Angra 3D Studio - Projetos Arquitetônicos Foto Realistas" />
      <meta property="og:description" content="Angra 3D Studio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="./assets/images/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="./styles/style.css" />
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/favicon180x180.png" />
    </Helmet>
  );
}


function HeadUs() {
  return (
    <Helmet>
        <html lang="en"/>
        <title>Angra 3D Studio 2.0</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Architectural Visualization Studio | ArchViz | CGI | Photorealism" />
        <link rel="canonical" href="https://angra3dstudio.com.br" />
        <meta name="keywords" content="3D, Photorealism, CGI, ArchViz, Architectural Projects, Angra, Angra 3D Studio, Unreal Engine, Blender, 3DS MAX" />
        <meta property="og:title" content="Angra 3D Studio - Photorealistic Architectural Projects" />
        <meta property="og:description" content="Angra 3D Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="./assets/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="./styles/style.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/favicon180x180.png" />
    </Helmet>
  );
}


function MenuUs() {
  return (
    <>
      <header className="header">
        <img src="./assets/images/logo.svg" alt="Logo" className="logo" />
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </header>
      <nav className="fullscreen-menu">
        <span className="close-btn">&times;</span>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="services.html">Services</a></li>
          <li>
            <a href="index.html" id="a-btn-lang-br">
              <img src="./assets/images/BrasilFlag.png" className="btn-lang-br" alt="bandeira Brasil" />
            </a>
            <a href="home.html" id="a-btn-lang-us">
              <img src="./assets/images/USAflag.png" className="btn-lang-us" alt="bandeira USA" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}


function MenuBr() {
  return (
    <>
      <header className="header">
        <img src="./assets/images/logo.svg" alt="Logo" className="logo" />
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </header>
      <nav className="fullscreen-menu">
        <span className="close-btn">&times;</span>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="projetos.html">Galeria</a></li>
          <li><a href="servicos.html">Serviços</a></li>
          <li>
            <a href="index.html" id="a-btn-lang-br">
              <img src="./assets/images/BrasilFlag.png" className="btn-lang-br" alt="bandeira Brasil" />
            </a>
            <a href="home.html" id="a-btn-lang-us">
              <img src="./assets/images/USAflag.png" className="btn-lang-us" alt="bandeira USA" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}







export { HeadBR };
export { HeadUs };
export { MenuUs };
export { MenuBr };

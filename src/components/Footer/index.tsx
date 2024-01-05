import facebookBrand  from "../../assets/images/footer/facebook-brand.png";
import instagramBrand from "../../assets/images/footer/instagram-brand.png";
import youtubeBrand   from "../../assets/images/footer/youtube-brand.png";

import footerAnimation from "../../assets/images/footer/footer-image.png";

import "./style.scss";

function Footer()
{
  return (
    <footer>
      <img className="footer-image" src={footerAnimation} />

      <div className="footer-content">
        <p>Siga-nos nas redes sociais</p>
        <div className="brands">
          <img src={facebookBrand} />
          <img src={instagramBrand} />
          <img src={youtubeBrand} />
        </div>
        <p>50711-580, Rua Pedro S. Fonseca,<br /> Cordeiro, Recife, Pernambuco</p>
        <p>Telefone para contato: (81) 2547-8711</p>
      </div>
    </footer>
  );
}

export default Footer;
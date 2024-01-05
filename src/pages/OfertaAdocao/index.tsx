import { useParams } from "react-router-dom";

import Menu   from "../../components/Menu";
import Footer from "../../components/Footer";

import "./style.scss";

function OfertaAdocaoPage()
{
  const { id } = useParams();

  return (
    <>
      <Menu />

      <div className="oferta-adocao-page">
        {id}
      </div>

      <Footer />
    </>
  );
}

export default OfertaAdocaoPage;
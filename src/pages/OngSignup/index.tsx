import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/images/ong-signup-page/arrow-left.png';

import "./style.scss";

function OngSignup()
{
  const navigator = useNavigate();

  return (
    <div className="ong-signup-page">

      <div className="signup-area">
        <div className="signup-image-area">
          <button className="back" onClick={() => navigator("/login")}>
            <img src={arrowLeft} />
          </button>
        </div>

        <div className="signup-form-area">

          <h2 className="title">DoaPet</h2>
          <p>Informe os dados abaixo para validarmos sua inscrição!</p>
          <p>Cadastro de ONG</p>

          <form action="">
            <input type="text" name="" id="" placeholder="Nome da ONG" />
            <input type="email" name="" id="" placeholder="E-mail da ONG" />

            <div className="input-group">
              <label htmlFor="">Data de Fundação</label>
              <input type="date" name="" id="" />
            </div>

            <div className="input-group">
              <label htmlFor="">Aqui você informa o nome que utilizará para acessar a plataforma</label>
              <input type="text" name="" id="" placeholder="Login da ONG" />
            </div>

            <div className="input-group">
              <label htmlFor="">Dados de Endereço</label>

              <div className="inline-input">
                <select>
                  <option disabled selected>Estado</option>
                </select>

                <select>
                  <option disabled selected>Cidade</option>
                </select>
              </div>

              <input type="text" name="" id="" placeholder="Bairro"/>
              <input type="text" name="" id="" placeholder="Logradouro"/>
            </div>

            <div className="input-group">
              <label htmlFor="">Senha de acesso à conta da ONG</label>
              <input type="password" name="" id="" placeholder="Senha"/>
            </div>

            <button className="login-button" type="submit" >Cadastrar</button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default OngSignup;
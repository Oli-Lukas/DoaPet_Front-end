import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

import { IbgeApi, api } from "../../lib/axios";
import { IbgeCityResponseObject, IbgeUfResponseObject } from "./types";

import arrowLeft from "../../assets/images/user-signup-page/arrow-left.png";
import "./style.scss";

function UserSignup()
{
  const navigator = useNavigate();

  const [fullname  , setFullname  ] = useState<string>("");
  const [email     , setEmail     ] = useState<string>("");
  const [birthDate , setBirthDate ] = useState<string>("");
  const [username  , setUsername  ] = useState<string>("");
  const [estado    , setEstado    ] = useState<string>("");
  const [cidade    , setCidade    ] = useState<string>("");
  const [bairro    , setBairro    ] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [password  , setPassword  ] = useState<string>("");

  async function makeUserSignup(event: FormEvent<HTMLFormElement | EventTarget>)
  {
    event.preventDefault();

    const ufSigla = ufs?.filter((uf) => uf.nome === estado)[0].sigla;

    const response = await api.post("/auth/cadastro", {
      nome: fullname,
      email,
      senha: password,
      endereco: ufSigla +", "+ cidade +", "+ bairro +", "+ logradouro,
      tipoUsuario: "INDIVIDUAL"
    });

    if (response.status === 200)
    {
      console.log("Cadastro realizado com sucesso!");
    }
    else
    {
      console.log("Erro ao realizar cadastro!");
    }
  }

  const [ufs   , setUfs   ] = useState<IbgeUfResponseObject[]>();
  const [cities, setCities] = useState<IbgeCityResponseObject[]>();

  function loadUfs()
  {
    const loadDataFromIbgeApi = async () => {
      const response = await IbgeApi.get("/localidades/estados");
      setUfs(response.data);
    }

    loadDataFromIbgeApi()
      .catch(console.error);
  }

  function loadCities()
  {
    const loadDataFromIbgeApi = async () => {

      const ufSigla  = ufs?.filter((uf) => uf.nome === estado)[0]?.sigla ?? undefined;
      const response = await IbgeApi.get(`/localidades/estados/${ufSigla}/municipios`);

      setCities(response.data);
      setCidade(response.data[0]?.nome ?? "");
    }

    loadDataFromIbgeApi()
      .catch(console.error);
  }

  useEffect(loadUfs, []);
  useEffect(loadCities, [estado, ufs]);

  return (
    <div className="user-signup-page">
      <div className="signup-area">
        <div className="signup-image-area">
          <button className="back" onClick={() => navigator("/login")}>
            <img src={arrowLeft} />
          </button>
        </div>

        <div className="signup-form-area">

          <h2 className="title">DoaPet</h2>
          <p>Informe os dados abaixo para validarmos sua inscrição!</p>
          <p>Cadastro de conta individual</p>

          <form action="">
            <input
              type="text"
              onChange={(event) => setFullname(event.target.value)}
              placeholder="Nome completo"
            />
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-mail"
            />

            <div className="input-group">
              <label htmlFor="">Data de Nascimento</label>
              <input
                type="date"
                onChange={(event) => setBirthDate(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Aqui você informa o nome que utilizará para acessar a plataforma</label>
              <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Login do usuário"
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Dados de Endereço</label>

              <div className="inline-input">
                <select onChange={(event) => { setEstado(event.target.value) }}>

                  {
                    estado ? (
                      ufs?.map((uf) => {
                        if (uf.nome === estado) return <option key={uuid4()} value={uf.nome} selected >{uf.nome}</option>
                        else                    return <option key={uuid4()} value={uf.nome}>{uf.nome}</option>
                      })
                    ) : (
                      <>
                        <option disabled selected>Estado</option>
                        { ufs?.map((uf) => <option key={uuid4()} value={uf.nome}>{uf.nome}</option>) }
                      </>
                    )
                  }

                </select>

                <select onChange={(event) => setCidade(event.target.value)}>

                  {
                    cidade ? (
                      cities?.map((city) => {
                        if (city.nome === cidade) return <option key={uuid4()} value={city.nome} selected>{city.nome}</option>
                        else                      return <option key={uuid4()} value={city.nome}>{city.nome}</option>
                      })
                    ) : (
                      <>
                        <option disabled selected>Cidade</option>
                        { cities?.map((city) => <option key={uuid4()} value={city.nome}>{city.nome}</option>) }
                      </>
                    )
                  }

                </select>
              </div>

              <input
                type="text"
                onChange={(event) => setBairro(event.target.value)}
                placeholder="Bairro"
              />
              <input
                type="text"
                onChange={(event) => setLogradouro(event.target.value)}
                placeholder="Logradouro"
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Senha do usuário</label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Senha"
              />
            </div>

            <button
              className="login-button"
              type="submit"
              onClick={makeUserSignup}
            >Cadastrar</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default UserSignup;
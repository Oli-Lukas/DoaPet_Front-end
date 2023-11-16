import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

import { IbgeApi, api } from "../../lib/axios";
import { FormResponse, IbgeCitiesResponseObject, IbgeStatesResponseObject, emptyFormResponse } from "./types";

import arrowLeft from "../../assets/images/user-signup-page/arrow-left.png";
import "./style.scss";

function UserSignup()
{
  const navigator = useNavigate();

  const [formResponses, setFormResponses] = useState<FormResponse>(emptyFormResponse);
  const [ibgeStates   , setIbgeStates   ] = useState<IbgeStatesResponseObject[]>();
  const [ibgeCities   , setIbgeCities   ] = useState<IbgeCitiesResponseObject[]>();

  function updateFormResponses(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>)
  {
    const { name, value } = event.target;
    setFormResponses((previousState) => ({ ...previousState, [name]: value }));
  }

  async function makeUserSignup(event: FormEvent<HTMLFormElement | EventTarget>)
  {
    event.preventDefault();

    const stateAcronym = ibgeStates?.filter((ibgeState) => ibgeState.nome === formResponses.state)[0].sigla;

    const response = await api.post("/auth/cadastro", {
      nome       : formResponses.fullname,
      email      : formResponses.email,
      senha      : formResponses.password,
      endereco   : stateAcronym +", "+ formResponses.city +", "+ formResponses.neighborhood +", "+ formResponses.publicPlace,
      tipoUsuario: "INDIVIDUAL"
    });

    if (response.status === 200)
    {
      console.log("Cadastro realizado com sucesso!");
      setFormResponses(emptyFormResponse);
    }
    else
    {
      console.log("Erro ao realizar cadastro!");
    }
  }

  function loadStatesFromIbgeApi()
  {
    const loadDataFromIbgeApi = async () => {
      const response = await IbgeApi.get("/localidades/estados");
      setIbgeStates(response.data);
    }

    loadDataFromIbgeApi()
      .catch(console.error);
  }

  function loadCitiesFromIbgeApi()
  {
    const loadDataFromIbgeApi = async () => {

      const ibgeStateAcronym = ibgeStates?.filter((ibgeState) => ibgeState.nome === formResponses.state)[0]?.sigla ?? undefined;
      const response = await IbgeApi.get(`/localidades/estados/${ibgeStateAcronym}/municipios`);
      setIbgeCities(response.data);
    }

    loadDataFromIbgeApi()
      .catch(console.error);
  }

  useEffect(loadStatesFromIbgeApi, []);
  useEffect(loadCitiesFromIbgeApi, [formResponses.state, ibgeStates]);

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
              placeholder="Nome completo"
              name="fullname"
              onChange={updateFormResponses}
              value={formResponses.fullname}
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={updateFormResponses}
              value={formResponses.email}
            />

            <div className="input-group">
              <label htmlFor="">Data de Nascimento</label>
              <input
                type="date"
                name="birthDate"
                onChange={updateFormResponses}
                value={formResponses.birthDate}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Aqui você informa o nome que utilizará para acessar a plataforma</label>
              <input
                type="text"
                placeholder="Login do usuário"
                name="username"
                onChange={updateFormResponses}
                value={formResponses.username}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Dados de Endereço</label>

              <div className="inline-input">
                <select name="state" onChange={updateFormResponses}>

                  {
                    formResponses.state ? (
                      ibgeStates?.map((ibgeState) => {
                        if (ibgeState.nome === formResponses.state) return <option key={uuid4()} value={ibgeState.nome} selected >{ibgeState.nome}</option>
                        else                                        return <option key={uuid4()} value={ibgeState.nome}>{ibgeState.nome}</option>
                      })
                    ) : (
                      <>
                        <option disabled selected>Estado</option>
                        { ibgeStates?.map((ibgeState) => <option key={uuid4()} value={ibgeState.nome}>{ibgeState.nome}</option>) }
                      </>
                    )
                  }

                </select>

                <select name="city" onChange={updateFormResponses}>

                  {
                    formResponses.city ? (
                      ibgeCities?.map((ibgeCity) => {
                        if (ibgeCity.nome === formResponses.city) return <option key={uuid4()} value={ibgeCity.nome} selected>{ibgeCity.nome}</option>
                        else                                      return <option key={uuid4()} value={ibgeCity.nome}>{ibgeCity.nome}</option>
                      })
                    ) : (
                      <>
                        <option disabled selected>Cidade</option>
                        { ibgeCities?.map((ibgeCity) => <option key={uuid4()} value={ibgeCity.nome}>{ibgeCity.nome}</option>) }
                      </>
                    )
                  }

                </select>
              </div>

              <input
                type="text"
                placeholder="Bairro"
                name="neighborhood"
                onChange={updateFormResponses}
                value={formResponses.neighborhood}
              />
              <input
                type="text"
                placeholder="Logradouro"
                name="publicPlace"
                onChange={updateFormResponses}
                value={formResponses.publicPlace}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Senha do usuário</label>
              <input
                type="password"
                placeholder="Senha"
                name="password"
                onChange={updateFormResponses}
                value={formResponses.password}
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
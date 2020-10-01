import React, { PureComponent } from 'react';
import './form.scss'

export default class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            peso: "",
            altura: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        const { nome, peso, altura } = this.state
        if (
            (nome !== "" && nome !== null) &&
            (peso !== "" && peso !== null) &&
            (altura !== "" && altura !== null)
        ) {
            this.props.handleSubmit(this.state)
            this.setState({
                nome: "",
                peso: "",
                altura: ""
            })
        } else {
            alert("Preencha todos os campos antes de calcular")
        }
    }
    handleInputChange(event, campo) {
        const floatRegExp = new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$')
        const stringValue = event.target.value
        const value = parseInt(stringValue, 10)
        const NaoEhCampoNome = campo !== "nome";
        const naoSaoApenasNumeros = !stringValue.match(floatRegExp);
        const NaoEhStringVazia = stringValue !== "";
        const valorEhMenorQueZero = value < 0;
        const condicoesDeRestricaoSaoVerdadeiras = (NaoEhCampoNome && naoSaoApenasNumeros && NaoEhStringVazia) || valorEhMenorQueZero;

        if (condicoesDeRestricaoSaoVerdadeiras) {
          alert("O campo deve conter apenas numeros positivos");
          event.target.value = "";
          return;
        }
        switch (campo) {
            case "nome":
                this.setState({ nome: stringValue })
                break;
            case "peso":
                this.setState({ peso: stringValue })
                break;
            case "altura":
                this.setState({ altura: stringValue })
                break;
            default:
                console.log("error on form.js inside handleInputChange function");
                break;
        }
    }
    render() {
      const { nome, peso, altura } = this.state
      return (
          <>
              <div className="form-wrapper">
                <div className="calc-imc">
                    <p>Calcular IMC</p>
                  </div>
                  <div className="inner-form-wrapper">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Digite o nome" id="" value={nome} onChange={(event) => this.handleInputChange(event,"nome")}/>
                        <label htmlFor="peso">Peso</label>
                        <input type="text" name="peso" placeholder="00" id="" value={peso} onChange={(event) => this.handleInputChange(event,"peso")}/>
                        <label htmlFor="altura">Altura</label>
                        <input type="text" name="altura" placeholder="0.00"  id="" value={altura} onChange={(event) => this.handleInputChange(event, "altura")} />
                          <div className="buttons">
                            <input type="submit" name="" id="btn-1" value="Calcular"/>
                            <input type="submit" name="" id="btn-2" value="Calcular"/>
                        </div>
                    </form>
                  </div>
            </div>
        </>
    )
  }
}

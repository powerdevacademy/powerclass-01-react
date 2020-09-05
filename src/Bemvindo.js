import React from 'react';
import logo from './logo.svg';

class Bemvindo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nome: 'Desconhecido'}
    }

    componentWillMount() {
        if(this.props.nome) {
            this.setState({
                nome: `Senhor(a) ${this.props.nome}`
            });
        }
    }

    componentWillUnmount(){
        
    }

    componentDidMount() {
        const tarefaDemorada = () => {
            setTimeout(() => {
                this.setState({
                    nome: `${this.state.nome} 2.0`
                });
            } , 2500);
        };
        tarefaDemorada();
    }

    render() {
       return (
        <>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Bem vindo à POWERCLASS, {this.state.nome}
            </p>
            {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
        </header>
      </>)
    }
}

export default Bemvindo;
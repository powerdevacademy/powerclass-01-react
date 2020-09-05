import React, {useState, useEffect} from 'react';
import logo from './logo.svg';



const BemvindoF = (props) => {

    const [nome, setNome] = useState( props.nome ? `Senhor ${props.nome}` : 'Desconhecido');
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setContador(c => c +1)
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if(contador > 10) {
            setContador(0);
        }
    }, [contador]);

    return (
        <>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Bem vindo à POWERCLASS, {nome} {contador}
            </p>
        </header>
      </>);
}

export default BemvindoF;
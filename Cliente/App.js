import React, { useState, useEffect, } from "react";
import './App.css';
import Axios from "axios";
import Card from "./componentes/cards/cards";


function App() {
    const [values, setValues] = useState({ name: '', date: '', value: '' });
    const [listFinancas, setListFinancas] = useState([]);

    const handleChangeValues = (event) => {
        let newValue = event.target.value;

        if (event.target.name === 'value') {
            if (!isNaN(newValue)) {
                newValue = parseFloat(newValue).toFixed(2);
            }

        }

        setValues((prevValue) => ({
            ...prevValue,
            [event.target.name]: newValue,

        }));
    };

    const handleClickButton = async () => {
        if (values.name.trim() === '' || values.date.trim() === '' || values.value.trim() === '') {
            alert('Preencha todos os campos antes de salvar.');
            return;
        }
        try {
            const result = await Axios.post("http://localhost:3000/register", {
                nome_conta: values.name,
                data_vencimento: values.date,
                valor_conta: values.value,
            });

            alert(result.data);
            await refreshList();
            setValues({ name: '', date: '', value: '' });
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao tentar cadastrar a conta. Verifique os dados e tente novamente.")
        }
    };

    const refreshList = async () => {
        try {
            const result = await Axios.get("http://localhost:3000/getCards");
            setListFinancas(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        refreshList();
    }, []);

    const menuShow = () => {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "./menu-icon.ico";
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "./icone-x.ico";
        }
    }

    return (
        <div className="pai">
            <nav className="header">
                <nav className="App-container">
                    <div className="logo">
                        <img className="logo-class" src="./icon-192x192.png" alt="logo-controle-financeiro" />
                    </div>


                    <div className="container-menu">
                        <ul>
                            <li className="nav-item"><a href="#Menu" className="nav-link">Menu</a></li>
                            <li className="nav-item"><a href="#Finanças" className="nav-link">Finanças</a></li>
                            <li className="nav-item"><a href="#Cadastrar" className="nav-link">Cadastrar</a></li>
                            
                            <li className="nav-item"><a href="#Contatos" className="nav-link">Contatos</a></li>
                        </ul>
                    </div>

                    <div class="login-button">
                        <button><a href="#Entrar">Entrar</a></button>
                    </div>

                    <div class="mobile-menu-icon">
                        <button onClick={menuShow}><img class="icon" src="./menu-icon.ico" alt="icon-menu" /></button>
                    </div>
                </nav>

                <div class="mobile-menu">
                    <ul>
                        <li className="nav-item"><a href="#Menu" className="nav-link">Menu</a></li>
                        <li className="nav-item"><a href="#Finanças" className="nav-link">Finanças</a></li>
                        <li className="nav-item"><a href="#Cadastrar" className="nav-link">Cadastrar</a></li>
                        <li className="nav-item"><a href="#Contatos" className="nav-link">Contatos</a></li>
                    </ul>
                    <div class="login-button">
                        <button><a href="#Entrar">Entrar</a></button>
                    </div>
                </div>
            </nav>


            <nav className="textos">
                <div id="Menu" className="espaco"></div>
                <h1 className="sis">Sistema para controle<br></br> financeiro online</h1>
                <h2 className="gra">Completo, fácil e gratuito</h2>

                <div className="text-financas grid" id="Financas">
                    <div className="inicio">
                        <h1 className="controle">CONTROLE SUAS FINANACAS E TENHA O CONTROLE DA SUA VIDA.</h1>
                        <img className="image-computed" src="./header.png" alt="decoration" />
                    </div>

                    <div id="Finanças" className="espaco"></div>

                    <div  className="text-linha">
                        <h2 className="linha1"><img className="image-banco" src="./bank.png" alt="Instuição financeira" /><br></br>De acordo com um levantamento<br></br> do Banco Central e da Federação Brasileira <br></br> de Bancos (Febraban), 70% das pessoas <br></br> gastam todo ou mais dinheiro do que ganham.</h2>

                        <h2 className="linha2"><img className="image-banco" src="./metas_1.png" alt="Instuição financeira" /><br></br>Isso representa 150 milhões de brasileiros que não têm controle sobre a própria vida financeira e podem estar a um passo de entrar no vermelho.</h2>

                        <h2 className="linha3"><img className="image-banco" src="./custo.png" alt="Instuição financeira" /><br></br>A educação financeira ainda é um grande desafio no Brasil. Devido à falta de conhecimento e despreparo para lidar com as finanças, o dinheiro é a maior angústia da vida de 74% dos brasileiros.</h2>
                    </div>

                    <div className="linha-correr"></div>

                    <div className="aspas"><img className="image-aspas" src="./aspas.png" alt="Aspas de texto" /></div>

                    <div className="linha">
                        Segundo uma pesquisa
                        da fintech Onze Não é à toa que um percentual de pessoas bem parecido com esse esteja cometendo um erro financeiro grave, que pode gerar dívidas pesadas.
                        Para mudar essa situação é preciso tomar medidas muitas vezes simples como por exempo realizar um controle de gastos, podendo saber tudo que já gastou, ou o que ainda pode gastar.
                        <br></br>
                        <br></br>
                        Há por tanto soluções diversas em que podem auxiliar o Brasileiro no controle de seus gastos e na manutenção saudável de sua vida financeira. Uma delas é organizar os gastos de forma clara e fácil, fazendo com que dessa forma você tenha na palma das mãos tudo que já pagou, o que ainda falta pagar e quando pagar.
                    </div>



                    <h2 className="saida"> Saia das estatísticas de endividamento e ganhe de vez a sua liberdade financeira.</h2>

                    <div className="promessa-grid">
                        <h3 className="promessa">Utilize a ferramenta gratuita para salvar todas as suas contas e tenha em mãos o controle de toda a sua vida financeira.</h3>
                        <br></br>
                        <h3 className="promessa">Não perca tempo tentando somar todas as vezes que tiver que efetuar o pagamento de uma conta, realize o cadastro de  todas elas e tenha sempre em mãos para quando precisar.</h3>
                        <br></br>
                        <h3 className="promessa">A sua liberdade está na palma da sua mão, sem aprender sobre finanças ou gastar tempo com cursos de investimento.</h3>
                        <br></br>
                        <h3 className="promessa">Tenha sua Agenda Financeira em suas mãos apenas com um click.</h3>
                    </div>

                    <div className="aspas1"><img className="image-aspas" src="./aspas.png" alt="Aspas de texto" /></div>

                    <div id="Cadastrar" className="linha-correr"></div>

                    <div  className="register-container">
                        <h1   className="controle1">Controle Financeiro</h1>
                        <h2 className="informacao">Descrição do Lançamento</h2>
                        <input type='text'
                            name='name'
                            placeholder="Descrição"
                            className='register-input descricao'
                            onChange={handleChangeValues}
                            value={values.name}
                        /><br />

                        <h2 className='dia'>Data de Vencimento</h2>
                        <input
                            type='date'
                            name='date'
                            placeholder='01/01/2023'
                            className='register-input data'
                            onChange={handleChangeValues}
                            value={values.date}
                        />

                        <h2 className='conta'>Valor da Conta</h2>
                        <input type='text'
                            name='value'
                            placeholder='R$'
                            className='register-input valor'
                            onChange={handleChangeValues}
                            value={values.value}
                        /><br />

                        <button type='button' className='salvar'
                            onClick={() => handleClickButton()}
                        >
                            Salvar
                        </button>
                    </div>
                    <footer id="Contatos" className="rodape">
                        <img className="icone-rodape" src="./icon-192x192.png" alt="icone" />
                        <div className="todos">Todos os Direitos Reservados</div>
                        <div className="siga">Siga</div>
                        <img className="instagram" src="./instagram.png" alt="icone do instagram" />


                    </footer>

                </div>



                <div className="mobile-inicio">
                    <h1 className="controle-mobile">CONTROLE SUAS FINANACAS E TENHA O CONTROLE DA SUA VIDA.</h1>
                    <img className="image-computed-mobile" src="./header.png" alt="decoration" />
                    <div id="Finanças" className="espaco-mobile"></div>
                    <div  className="text-linha-mobile">
                        <h2 className="linha1-mobile"><img className="image-banco-mobile" src="./bank.png" alt="Instuição financeira" /><br></br>De acordo com um levantamento<br></br> do Banco Central e da Federação Brasileira <br></br> de Bancos (Febraban), 70% das pessoas <br></br> gastam todo ou mais dinheiro do que ganham.</h2>

                        <h2 className="linha2-mobile"><img className="image-banco-mobile" src="./metas_1.png" alt="Instuição financeira" /><br></br>Isso representa 150 milhões de brasileiros que não têm controle sobre a própria vida financeira e podem estar a um passo de entrar no vermelho.</h2>

                        <h2 className="linha3-mobile"><img className="image-banco-mobile" src="./custo.png" alt="Instuição financeira" /><br></br>A educação financeira ainda é um grande desafio no Brasil. Devido à falta de conhecimento e despreparo para lidar com as finanças, o dinheiro é a maior angústia da vida de 74% dos brasileiros.</h2>
                    </div>
                    <div className="linha-corrermobile"></div>
                    <div className="aspas-mobile"><img className="image-aspas" src="./aspas.png" alt="Aspas de texto" /></div>
                    <div className="linha-mobile">
                        Segundo uma pesquisa
                        da fintech Onze Não é à toa que um percentual de pessoas bem parecido com esse esteja cometendo um erro financeiro grave, que pode gerar dívidas pesadas.
                        Para mudar essa situação é preciso tomar medidas muitas vezes simples como por exempo realizar um controle de gastos, podendo saber tudo que já gastou, ou o que ainda pode gastar.
                        <br></br>
                        <br></br>
                        Há por tanto soluções diversas em que podem auxiliar o Brasileiro no controle de seus gastos e na manutenção saudável de sua vida financeira. Uma delas é organizar os gastos de forma clara e fácil, fazendo com que dessa forma você tenha na palma das mãos tudo que já pagou, o que ainda falta pagar e quando pagar.
                    </div>
                    <h2 className="saida-mobile"> Saia das estatísticas de endividamento e ganhe de vez a sua liberdade financeira.</h2>
                    <div className="promessa-mobile">
                        <h3 className="promessa">Utilize a ferramenta gratuita para salvar todas as suas contas e tenha em mãos o controle de toda a sua vida financeira.</h3>
                        <br></br>
                        <h3 className="promessa">Não perca tempo tentando somar todas as vezes que tiver que efetuar o pagamento de uma conta, realize o cadastro de  todas elas e tenha sempre em mãos para quando precisar.</h3>
                        <br></br>
                        <h3 className="promessa">A sua liberdade está na palma da sua mão, sem aprender sobre finanças ou gastar tempo com cursos de investimento.</h3>
                        <br></br>
                        <h3 className="promessa">Tenha sua Agenda Financeira em suas mãos apenas com um click.</h3>
                    </div>
                    <div className="aspas1-mobile"><img className="image-aspas" src="./aspas.png" alt="Aspas de texto" /></div>
                    <div className="linha-corrermobile"></div>
                    <div  className="register-mobile">
                        <h1   className="controle1">Controle Financeiro</h1>
                        <h2 className="informacao">Descrição do Lançamento</h2>
                        <input type='text'
                            name='name'
                            placeholder="Descrição"
                            className='register-input descricao'
                            onChange={handleChangeValues}
                            value={values.name}
                        /><br />

                        <h2 className='dia'>Data de Vencimento</h2>
                        <input
                            type='date'
                            name='date'
                            placeholder='01/01/2023'
                            className='register-input data'
                            onChange={handleChangeValues}
                            value={values.date}
                        />

                        <h2 className='conta'>Valor da Conta</h2>
                        <input type='text'
                            name='value'
                            placeholder='R$'
                            className='register-input valor'
                            onChange={handleChangeValues}
                            value={values.value}
                        /><br />

                        <button type='button' className='salvar'
                            onClick={() => handleClickButton()}
                        >
                            Salvar
                        </button>
                    </div>
                    <footer id="Contatos" className="rodape-mobile">
                        <img className="icone-rodape" src="./icon-192x192.png" alt="icone" />
                        <div className="todos">Todos os Direitos Reservados</div>
                        <div className="siga">Siga</div>
                        <img className="instagram" src="./instagram.png" alt="icone do instagram" />


                    </footer>
                </div>


            </nav>
            {
                listFinancas.map((item) => (
                    <Card
                        key={item.id}
                        listFinancas={listFinancas}
                        setListFinancas={setListFinancas}
                        id={item.id}
                        nome_conta={item.nome_conta}
                        data_vencimento={item.data_vencimento}
                        valor_conta={item.valor_conta}
                    />
                ))
            }

        </div>


    );
}

export default App;

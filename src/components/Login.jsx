import { useState } from 'react'
import logo from '../img/logo.png'
import './Login.css'

export function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ativo, setAtivo] = useState(false);


    const handleButtonClick = (e) => {

         if (!Email || !Password) {
            return
        }
        
        alert(`Email: ${Email}\nSenha:${Password}`)
    };

    const showDanger = `msg ${ativo ? 'ativo' : 'inativo'}`;


    return(

        <main>
            <section className='login'>
                <div className="content">
                    <div className="logo">
                        <img className='imgLogo' src={logo} alt="logo" />
                        <span>Vertigo</span>
                    </div>

                    <h1>Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    <form>
                        <div className="inputEmail">
                            <label for="Email">E-mail</label>
                            <input type="email" id="Email" placeholder='Digite seu e-mail' onChange={e => setEmail(e.target.value)}/>
                            <p className={showDanger}>Digite um e-mail valido</p>
                        </div>

                        <div className="inputSenha">
                            <div className="box">
                                <label for="Senha">Senha</label>
                                <span className='esqueceuSenha'>Esqueceu a senha?</span>
                            </div>
                            <input type="password" id="Senha" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <button className='buttonEntrar' onClick={handleButtonClick}>
                            Entrar
                        </button>
                    </form>

                    <p>Ainda não tem uma conta?<span className='destaque'> Inscreva-se</span></p>
                </div>

            </section>

            <section className='capa'>
                <div className='imagem'>
                    {/* imagem pelo css  */}
                </div>
            </section>

        </main>
        
    )
}


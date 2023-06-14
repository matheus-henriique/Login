import { useState } from 'react'

import './Login.css'

import logo from '../img/logo.png'
import showPasswordIcon from '../img/eye.svg'
import hidePasswordIcon from '../img/eye-off.svg'

export function Login() {
    const [Senha, setSenha] = useState("")
    const [Email, setEmail] = useState("")
    const [EmailError, setEmailError] = useState("")
    const [showPassword, setShowPassword] = useState(false)


    function Login(e) {
        if (validaEmail(Email)) {
            return alert(`Seu Email é: ${Email}\nSua Senha é: ${Senha}`)
        } else if(!Senha && !Email){
            e.preventDefault()
            alert("Digite nos inputs")
        } else {
            setEmailError("Digite um Email válido")
        }
    }

    function validaEmail(Email) {
        return Email.includes("@")
    }

    function togglePassword() {
        setShowPassword(!showPassword)
    }

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
                            <input type="Email" id="Email" placeholder='Digite seu e-mail' onChange={e => setEmail(e.target.value)}/>
                            {EmailError && <p className="error">{EmailError}</p>}
                        </div>

                        <div className="inputSenha">
                            <div className="box">
                                <label for="Senha">Senha</label>
                                <span className='esqueceuSenha'>Esqueceu a Senha?</span>
                            </div>
                            <div className="passwordContainer">
                                <input  type={showPassword ? "text" : "password"} id="Senha" className='inputBox' onChange={e => setSenha(e.target.value)}/>
                                <img className="passwordIcon" src={showPassword ? hidePasswordIcon : showPasswordIcon} alt={showPassword ? "Ocultar Senha" : "Mostrar Senha"} onClick={togglePassword}/>
                            </div>
                        </div>

                        <button className='buttonEntrar' onClick={Login}>
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


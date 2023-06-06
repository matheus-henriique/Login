import logo from '../img/logo.png'
import './Login.css'

export function Login() {
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
                            <input type="text" id="Email" />
                        </div>

                        <div className="inputSenha">
                            <label for="Senha">Senha</label>
                            <input type="text" id="Senha" />
                        </div>

                        <button className='buttonEntrar'>
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


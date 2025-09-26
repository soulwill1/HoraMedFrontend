import LoginForm from "./form"

const LoginPage = () => {
  return (
    <div>
      <div className="flex m-auto justify-center gap-4 h-screen items-center">
        <div>IMagem</div>
        <div>
          <div className="py-4">
            <h2>Para acessar, insira suas informações</h2>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
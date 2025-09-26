export default function LoginForm() {
    return (
        <div className="">
            <form action="" className="flex flex-col gap-2">
                <div>
                    Usuário: <input type="text" name="user" className="bg-amber-50"/>
                </div>
                <div>
                    Senha: <input type="password" name="password" className="bg-amber-50"/>
                </div>
                <button className="border rounded-xl">Continuar</button>
            </form>
        </div>
    )
}
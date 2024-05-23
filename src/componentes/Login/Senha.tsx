export default function Senha(props: any) {
    function aoDigitado (evento: any) {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
                </label>
            </div>
            <div className="mt-2">
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={props.valor}
                onChange={aoDigitado}
                />
            </div>
        </div>
    )
}
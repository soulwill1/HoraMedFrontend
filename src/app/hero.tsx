const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] md:px-8 px-4">
      <div className="py-36">
        <div className="flex justify-center">
          <div className="flex-col text-center">
            <h1 className="text-2xl md:text-5xl font-bold pb-6">
              Seus remédios na hora certa
            </h1>
            <p className="pb-6">
              Um sistema acessível para ajudar cuidadores, idosos e famílias a manterem a rotina de medicação em dia.
            </p>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-md px-5 py-2.5 text-center">
              Agendar demonstração
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
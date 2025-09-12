import React from 'react'

const BannerService = () => {
  return (
    /* Modularizar tbm as sections para manter o padrão */
    <div className="py-20 px-4">
        <div>
            <div className="max-w-7xl m-auto">
                <h3 className="pb-6 text-xl md:text-4xl font-bold">Seu companheiro para nunca mais esquecer os remédios</h3>
                <div className="">
                    {/* Grid */}                 
                    <div className="grid grid-cols-4 grid-rows-1 gap-4 max-sm:grid-cols-1 max-sm:grid-rows-4">
                        {/* Criar conteineres para os banners */}
                        <div className="border rounded-2xl p-2">
                            <h3 className="pb-2 font-semibold">Alertas de horários</h3>
                            <p>Receba lembretes visuais e sonoros para cada dose.</p>
                        </div>
                        <div className="border rounded-2xl p-2">
                            <h3 className="pb-2 font-semibold">Interface acessível</h3>
                            <p>Desenvolvida para idosos, nossa plataforma possui leitura facilitada e cores de alto contraste.</p>
                        </div>
                        <div className="border rounded-2xl p-2">
                            <h3 className="pb-2 font-semibold">Apoio a cuidadores</h3>
                            <p>Familiares e cuidadores podem acompanhar remotamente se as doses foram tomadas.</p>
                        </div>
                        <div className="border rounded-2xl p-2">
                            <h3 className="pb-2 font-semibold">Relatórios Rápidos</h3>
                            <p>Histórico de doses tomadas e pendentes em poucos cliques.</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerService
import React from 'react'
import BigXL from '../Text/BigXL/BigXL'

function Banner() {
    return (
        <div className="bg-linear-to-b from-white to-slate-200 py-6 px-6 md:px-20">
            <BigXL text={`
                    Ogni progetto nasce da un’idea.
                    Ma un’idea, da sola, non basta.
                `} className={"text-black whitespace-pre-line"} />
            <BigXL text={`
                    Perché possa crescere, ha bisogno di ascolto, metodo e visione.
                `} className={"text-black whitespace-pre-line"} />
            <BigXL text={`
                    Ecco come, insieme, trasformiamo ciò che immagini in qualcosa di concreto.
                `} className={"text-black whitespace-pre-line"} />
        </div>
    )
}

export default Banner
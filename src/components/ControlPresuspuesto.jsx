import React, { useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresuspuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

   useEffect(() => {
     
    const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado 
    setDisponible(totalDisponible)

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
    
    setTimeout(() => {
        setGastadoPorcentaje(nuevoPorcentaje)
    }, 1000);

    
     
   }, [gastos])
    

   const [disponible, setDisponible] = useState(0)
   const [gastado, setGastado] = useState(0)
   const [gastadoPorcentaje, setGastadoPorcentaje] = useState(0)
   

    const formatearCantidad = (cantidad)=>{
         return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        
    }

    const handleResetApp = () =>{
        const resultado = confirm('Estas seguro que quieres reiniciar la App?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: gastadoPorcentaje > 100 ? '#dc2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: gastadoPorcentaje > 100 ? '#dc2626' : '#3b82f6'
                    })}
                    value={gastadoPorcentaje}
                    text={`${gastadoPorcentaje}% Gastado`}
                
                />
            </div>

            <div className='contenido-presupuesto'>
                <button className='reset-app'
                        type='button'
                        onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
    </div>
  )
}

export default ControlPresuspuesto
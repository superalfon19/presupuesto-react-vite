import ControlPresuspuesto from "./ControlPresuspuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"




const Header = ({
                 presupuesto,
                 setPresupuesto,
                 setIsValidPresupuesto,
                 isValidPresupuesto,
                 gastos,
                 setGastos
            }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresuspuesto
            presupuesto={presupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ):(
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
        
        
        />
        )}

        
    </header>
  )
}

export default Header
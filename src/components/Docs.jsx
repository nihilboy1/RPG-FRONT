import { Context } from '../providers/Context'
import React from 'react'

const Docs = () => {
  const { texto } = React.useContext(Context)
  switch (texto) {
    case 'lostmine':
      return (
        <iframe
          className="texto nada"
          title="lost_mine"
          src="https://docs.google.com/document/d/e/2PACX-1vSaSLknFRwz-0cnr7tj0ucM_qgPbA5A7_YswpmujStECG8sehKGyMltMlA1m2BOQzbCB90h6zirXoK5/pub?embedded=true"
        ></iframe>
      )
    case 'age1':
      return (
        <iframe
          className="texto nada"
          title="primeira_era"
          src="https://docs.google.com/document/d/e/2PACX-1vSig2rYwEqMMMFgjywPH5X3Cox5pgKypDsKcbJq0z8qXjxBm0pduq8prdSMIBMJSJuhjWja5BVc-Gbu/pub?embedded=true"
        ></iframe>
      )
    case 'age2':
      return (
        <iframe
          className="texto nada"
          title="segunda_era"
          src="https://docs.google.com/document/d/e/2PACX-1vSC0aL4oV_qZxSdwv5YUBAPlKJK-UyHt2qfR5zj4rDwqhWDXrgiw8QW3PvTItrpWmU8KKPdLX_JFyt4/pub?embedded=true"
        ></iframe>
      )
    case 'age3':
      return (
        <iframe
          className="texto nada"
          title="terceira_era"
          src="https://docs.google.com/document/d/e/2PACX-1vSwnIbm12kvEfc_d9m-y1bHSikYENpQj656JjDDdLgKmKNqI-6MKfIBTco2Ns1IzMK4DqN9zpEPCSsW/pub?embedded=true"
        ></iframe>
      )
    default:
      return <h1 className="nada texto">oi</h1>
  }
}
export default Docs

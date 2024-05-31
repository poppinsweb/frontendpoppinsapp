import React from 'react'
import useGetEvaluations from './hooks/useGetEvaluations'

const Evaluation = () => {
  const data = useGetEvaluations();
  return (
    <div>
        {
        data ?.[0]?.title || "Cargando"
        }
    </div>
  )
}

export default Evaluation;
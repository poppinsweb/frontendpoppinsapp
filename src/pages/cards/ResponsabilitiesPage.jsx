import React from 'react';
import { useFetchData } from '../../services/evaluationService/hooks/useGetEvaluations';
import CardQuestions from '../../components/cards/CardQuestions';

const ResponsabilitiesPage = () => {
  const { data: questionsData, loading, error } = useFetchData('http://localhost:3000/evaluations/responsabilities');
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error loading data: {error.message}</p>

  return (
    <div>
      {/* <h1>Habilidades del Vestido</h1> */}
      {questionsData && questionsData.length > 0 ? (
        <CardQuestions questionsData={questionsData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ResponsabilitiesPage;

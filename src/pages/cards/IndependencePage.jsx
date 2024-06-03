import React from 'react';
import { useGetIndependence } from '../../services/evaluationService/hooks/useGetIndependence';
import CardQuestions from '../../components/cards/CardQuestions';

const IndependencePage = () => {
  const questionsData = useGetIndependence();

  return (
    <div>
      <h1>Independencia</h1>
      {questionsData && questionsData.length > 0 ? (
        <CardQuestions questionsData={questionsData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndependencePage;

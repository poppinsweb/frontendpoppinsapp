import React from 'react';
import { useFetchData } from '../../services/hooks/useFetchData';
import CardQuestions from '../../components/cards/CardQuestions.jsx';

const IndependencePage = () => {
  const { data: questionsData, loading, error } = useFetchData('http://localhost:3000/api/evaluation');

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error loading data: {error.message}</p>
  return (
    <div>
      {questionsData && questionsData.length > 0 ? (
        <>
          <CardQuestions questionsData={questionsData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndependencePage;

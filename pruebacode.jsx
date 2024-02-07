useEffect(() => {
    const fetchData = async () => {
      if (latestChild) {
        // Obtener los scores de independencia
        await getIndependenceScores(latestChild.id);
      }
    };
  
    fetchData();
  
    return () => {
      // Limpiar el estado de categoryData al desmontar el componente
      setCategoryData(initialCategoryData);
    };
  }, [latestChild]);
  
  useEffect(() => {
    if (independenceScores) {
      // Actualizar categoryData combinando initialCategoryData y los puntajes de independencia
      setCategoryData({
        ...initialCategoryData,
        ...independenceScores,
      });
    }
  }, [independenceScores]);
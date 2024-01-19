export const independenceQuestions = {
  questions: [
    {
      question: "Independencia al Bañarse:", // bd: independencia_ducha
      choices: [
        "1. No se baña solo, siempre un adulto se encarga de bañarlo. (El adulto es quien realiza la mayoría de la actividad con poca colaboración del niño)",
        "2. Para bañarse siempre recibe ayuda, independiente del tiempo que tenga para hacerlo (Es decir, que el niño colabora con la actividad, pero el adulto no solo supervisa, sino que la realiza con él). ",
        "3. Se baña todos los días con apoyo de un adulto cuando tiene poco tiempo (por ejemplo, en las mañanas antes de ir al colegio), pero cuando tiene tiempo suficiente, lo hace solo. ",
        "4. Se baña solo todos los días recibiendo apoyo solamente para lavar bien el cabello y supervisión de seguridad (evitar caídas, mezclar el agua caliente).",
        
      ],
      score: []
    },
    {
      question: "Independencia al Vestirse", // bd: independencia_vestido
      choices: [
        "1. No se viste solo, siempre alguien se encarga de vestirlo, con poco o nula colaboración del niño.",
        "2. Le ayudan a vestirse frecuentemente realizando la actividad de manera compartida entre el niño y el adulto.",
        "3. Se viste solo frecuentemente, pero cuando tiene poco tiempo los adultos lo ayudan a vestir.",
        "4. Se viste solo todos los días, incluso si tiene poco tiempo para hacerlo, como cuando debe prepararse para el colegio en las mañanas.",

      ],
      score: []
    },
    {
      question: "independencia al Alimentarse", // bd: independencia_alimentacion
      choices: [
        "1. No come solo, siempre requiere un adulto para darle los alimentos.",
        "2. Come solo en algunas ocasiones, requiriendo ayuda para empezar o terminar los alimentos.",
        "3. Come usualmente sin ayuda a excepción de momentos donde tiene poco tiempo en los que un adulto le ayuda.",
        "4. Come usualmente sin ayuda en cualquier comida del día.",
      ],
      score: []
    },
    {
      question: "independencia al Dormir", // bd: indepencia_dormir
      choices: [
        "1. Duerme siempre en cama de los adultos (sea uno o ambos padres u otro familiar o cuidador).",
        "2. Duerme solo, pero con frecuencia se pasa a la cama de los adultos o de sus hermanos. También marque esta opción, si alguno de los padres viaja con frecuencia y en su ausencia el niño duerme con quien se queda a su cuidado.",
        "3. Se acuesta en su cama todas las noches, duerme bien, pero necesita compañía hasta quedarse dormido.",
        "4. Se acuesta en su cama todas las noches y duerme bien y solo.",
      ],
      score: []
    },
  ]
}

// export const scoreAsign = (questionIndex, choiceIndex) => {
//   const question = independenceQuestions.questions[questionIndex];
//   const score = choiceIndex +1
//   question.score.push(score);
// }

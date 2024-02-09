
/**
 * TASK --> 1 :
 * 
  1. You realize  that you forgat to add "Walk  The dog " to your to do list .add it to the list
 */


  // task --> 2 :
  // You receive a call,and you need to attended an emargency metting
  const  toDoList = [
    "Buy grocerise",
    "Complete Project",
    "Exercice",
    "Read a book",
    "Attended meating"
  ]
  toDoList.push("Walk  The dog")
  console.log(toDoList);
  if(toDoList.includes("Read a book")){
    const indexOfMetting = toDoList.indexOf('Read a book')
    toDoList.splice(indexOfMetting,1)
  }
  console.log(toDoList);

  // task --> 3 ;
  // You want to take a break and do something  relaxing . Extract  the task related to relaxing (index 2 to index 4,inclusive ) into a new relaxationTask

  const relaxingTask = toDoList.slice(2,5);

  console.log(relaxingTask)

// task ---> 
it ("should return the correct object with raceResults()", () => {
   expect(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])).toEqual({
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  });   
});
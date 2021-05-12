import firebase from "../firebase/db.js";
const firestore = firebase.firestore();

export const getAnimals = async (req, res) => {
  let animals = await firestore.collection("animals").get();
  let animalsArray = [];

  animals.forEach((doc) => {
    animalsArray.push({
      Animal: doc.id,
      Facts: doc.data().facts,
    });
  });
  res.send(animalsArray);
};

export const getAnimal = async (req, res) => {
  let animal = req.params.animal;
  let animalRef = await firestore.collection("animals").doc(animal);
  let doc = await animalRef.get();

  let animalObj = {
    Animal: doc.id,
    Facts: doc.data().facts,
  };

  res.send(animalObj);
};

export const addAnimalFact = async (req, res) => {
  let fact = req.body.fact;
  let animal = req.params.animal;

  let animalsRef = await firestore.collection("animals").doc(animal);
  let doc = await animalsRef.get();
  let facts = doc.data().facts;
  facts.push(fact);
  await firestore.collection("animals").doc(animal).set({ facts });

  res.send(`Added new fact "${fact}" for ${animal}`);
};

export const deleteAnimalFact = async (req, res) => {
  let animal = req.params.animal;
  let id = req.params.id;

  let animalsRef = await firestore.collection("animals").doc(animal);
  let doc = await animalsRef.get();

  let facts = doc.data().facts;
  facts.map((fact, i) => {
    if (i == id) {
      facts.splice(i, 1);
      return facts;
    }
  });
  await firestore.collection("animals").doc(animal).update({ facts });

  res.send(`Deleted fact ${id} on ${animal}`);
};

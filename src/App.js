import styles from './main.module.css';

function Animal({ name, number, eats }) {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
    </div>
  )
}

function App() {
  const animals = [ 
    { 
      name: "Lion", 
      number: 3, 
      eats: ["zebra", "antelope", "buffalo", "hippopotamus"] 
    }, 
    { 
      name: "Tiger", 
      number: 5, 
      eats: ["moose", "deer", "buffalo"] 
    }, 
    { 
      name: "Giraffe", 
      number: 6, 
      eats: ["leaves", "twigs"] 
    }, 
    { 
      name: "Elephant", 
      number: 4, 
      eats: ["grass", "leaves", "flowers", "fruit"] 
    }, 
    { 
      name: "Monkey", 
      number: 10, 
      eats: ["fruit", "leaves", "vegetables", "insects"] 
    }, 
    { 
      name: "Lemur", 
      number: 15, 
      eats: ["fruit", "leaves", "insects"] 
    }, 
    { 
      name: "Rhinoceros", 
      number: 2, 
      eats: ["grass", "shoots", "leaves", "berries"] 
    } 
   ]; 

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <h1>Week 2</h1>

        <div className={styles.animals}>
          {animals.map(animal => (
              <Animal {...animal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

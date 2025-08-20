function Header() // a custom component created and  named as "Header" in same file.
{
  return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function DynamicComp() {
  return (
    <p>This is a Dynamic Component</p>
  );
}

const nums = [1, 2, 3]; // array of numbers to be used in dynamic values

function RandomNum(max) {
  return (
    Math.floor(Math.random() * (max))
  );
} // function to generate random number

function App() {
  return (
    <div>
      <Header /> {/* calling Header Custom Component so that it will show in html page */}
      <main>
        <h2>Time to get started!</h2>
        <DynamicComp /> {RandomNum(3)} {/* Using Dynamic Value here */}
      </main>
    </div>
    
  );
}

export default App;

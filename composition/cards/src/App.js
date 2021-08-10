import './App.css';
import Card from './components/Card/Card';

function App() {
  const card1 = {
    imgSrc: `#`,
    alt: `Image cap`,
    title: `Card title`,
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    actionLink: `#`,
    actionCall: `Go somewhere`,
  };
  const card2 = {
    title: `Another card title`,
    text: `Another quick example text to build on the card title and make up the bulk of the card's content.`,
    actionLink: `#`,
    actionCall: `Go somewhere`,
  };

  return (
    <div className='App'>
      <Card {...card1} />
      <Card {...card2} />
    </div>
  );
}

export default App;

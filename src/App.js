import logo from './logo.svg';
import './App.css';
import CustomButton from './components/button/button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='App'>
      <CustomButton onClick={handleClick}>Click Me!</CustomButton>
      <CustomButton onClick={handleClick} disabled>
        Button disabled
      </CustomButton>
    </div>
  );
}

export default App;

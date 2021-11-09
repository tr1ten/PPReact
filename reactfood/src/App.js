import Header from "./components/reactfood/header";
import './app.scss';
import Card from "./components/UI/card";
import ShowItems from "./components/reactfood/showitems";
function App() {
  return (
    <div>
      <Header />
      <div className='store'>
        <Card title="Welcome" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas accusamus eveniet facilis saepe, ab asperiores ratione cupiditate, inventore veritatis cumque corporis aut quaerat alias laboriosam nesciunt non repellat natus?' />
        <ShowItems />
      </div>
    </div>
  );
}

export default App;

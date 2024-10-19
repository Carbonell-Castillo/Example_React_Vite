import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/welcome">Bienvenida</Link></li>
          <li><Link to="/goodbye">Despedida</Link></li>
        </ul>
      </nav>
      <h1>Página principal</h1>
      <p>Haz clic en el menú para navegar entre las páginas.</p>
    </div>
  );
};

export default App;

import React, {useEffect, useState} from "react";
import './styles/style.css'

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadAPI(){
      let url = 'http://localhost:3000/posts/';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      })
    }

    loadAPI();

  }, [])

  return (
    <div className="container">
      <header>
        <strong>React nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo"> {item.titulo} </strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo"> {item.subtitulo} </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;

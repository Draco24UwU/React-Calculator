import { useLocation } from "react-router-dom";

function MainContent() {
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

function Home() {
  const location = useLocation();
  return <>{location.pathname == "/" && <MainContent />}</>;
}

export default Home;

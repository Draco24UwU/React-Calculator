import DarkThemeLayout from "@/components/DarkThemeLayout";
import PageWraper from "@/components/PageWraper";
import Navbar from "@/components/NavBar";
import Content from "@/components/Content";

function App() {
  return (
    <>
      <DarkThemeLayout>
        <PageWraper>
          <Navbar />
          <Content />
        </PageWraper>
      </DarkThemeLayout>
    </>
  );
}

export default App;

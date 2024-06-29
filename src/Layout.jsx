import Navbar from './components/Home/Navbar';
import Main from './components/Home/Home';
import Footer from './components/Home/Footer';
import ProjectShowcase from './components/Project/ProjectShowcase';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      <Navbar />
      <div className="flex-grow">
        <Main />
        <ProjectShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


// Thanks to our barrel file, we can import all components in one clean line.
import {
  Header,
  Hero,
  Services,
  Pricing,
  Gallery,
  About,
  Footer
} from './components';

// The App component is now just a simple layout assembler.
// All the complex logic and JSX has been moved to the individual components.
const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;


function App() {
  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/:carId" element={<CarDetailPage />} />
        <Route path="/cars/new" element={<CarForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
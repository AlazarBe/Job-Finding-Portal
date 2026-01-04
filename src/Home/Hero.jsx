function Hero() {
  return (
    <div className="h-100 bg-[url('/hero.jpg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/60"></div>
      <div className="absolute left-0 right-0 top-0 bottom-0 h-100">
        <div className="h-full flex flex-col justify-center items-center">
          <h1>Find Your Dream Job</h1>
          <p>Discover opportunities that match your skills and interests.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

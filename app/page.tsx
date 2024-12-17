function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      ></div>

      {/* Hero Content */}
      <main className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to <span className="text-blue-400">CITE Technical Institute Inc.</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Providing opportunities to the less privileged youth.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/get-started"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Apply Now!
          </a>
          <a
            href="/learn-more"
            className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;

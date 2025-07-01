
import React from 'react'
import Navbar from './Shared/Navbar'
import { Button } from './ui/button'
import Footer from './Shared/Footer'

const LandingPage = () => {

const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5000/api/contact", {
      FullName,
      email,
      mobile,
      city,
    });
    console.log("Contact form submitted:", response.data);
  } catch (error) {
    console.error("Error submitting contact form:", error);
  }
};




  return (
    <div>
      <Navbar />

      <div>
        <div className="relative w-full h-screen mt-19">
          <img className="absolute w-full h-full object-cover" src="\young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg" alt="image" ></img>
          {/* Overlay Section */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
            {/* Left Content (Text) */}
            <div className="text-white md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold leading-tight">
                Consultation, <br />
                Design, <br />
                & Marketing
              </h1>
            </div>

            {/* Right Content (Form) */}
            <div className="inset-0 bg-blue-900 opacity-80 rounded-md p-8 rounded-md shadow-lg md:w-1/3 w-full">
              <h2 className="text-white text-2xl font-semibold mb-6">
                Get a Free Consultation
              </h2>
              <form onSubmit={handleFormSubmit} >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 mb-4 border rounded text-white border-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 mb-4 border rounded text-white border-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full p-3 mb-4 border rounded text-white border-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full p-3 mb-4 border rounded text-white border-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-bold p-3 rounded hover:cursor-pointer"
                >
                  Get Quick Quote
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


            {/* Left Content */}
            <div>
              <div >
                <img src="\Ellipse 19.svg" className="relative "></img>
              </div>
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                Not Your Average Realtor
              </h1>
              <p className="text-gray-600">
                Real estate is our life. We’re going to give you exceptional
                market insights, design, and advertising prowess to help get
                you into your dream home in weeks.
              </p>
            </div>

            {/* Right Content (Images in Circles) */}
            <div className="relative flex justify-center items-center">
              {/* Background Circle */}
              <img
                src="/Ellipse 7.svg"
                alt="Background Circle"
                className="absolute h-150"
              />
              {/* Blue Circle */}
              <img
                src="\Ellipse 24.svg"
                alt="Blue Circle"
                className="absolute w-10 h-10 top-4 left-22"
              />

              {/* Orange Circle */}
              <img
                src="\Ellipse 25-1.svg"
                alt="Orange Circle"
                className="absolute w-8 h-8 top-50 left-15"
              />
              {/* small blue Circle */}
              <img
                src="\Ellipse 26.svg"
                alt="Orange Circle"
                className="absolute w-6 h-6 top-100 left-43"
              />

              {/* Main Circle Image */}
              <div className="w-90 h-90 rounded-full overflow-hidden z-10">
                <img
                  src="/Ellipse 11.svg"
                  alt="Person 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Circle Image */}
              <div className="absolute top-0 left-125 w-40 h-40 rounded-full overflow-hidden">
                <img
                  src="/Ellipse 12.svg"
                  alt="Person 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Circle Image */}
              <div className="absolute top-45 left-130 w-40 h-40 rounded-full overflow-hidden">
                <img
                  src="/Ellipse 13.svg"
                  alt="Person 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              {/* Background Circle */}
              <img
                src="/Ellipse 7-1.svg"
                alt="Background Circle"
                className="absolute h-80 top-280"
              />
              {/* dot Circle */}
              <img
                src="\Group 1000001645.svg"
                alt="dot Circle"
                className="absolute h-50 w-50 top-295 left-50"
              />
            </div>


          </div>
        </section>

        {/* Why Choose Us Section */}
<section className=" px-4">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-blue-800">Why Choose Us?</h2>
    <div className="mt-2 w-16 h-1 mx-auto bg-blue-800"></div> {/* Line under the title */}
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="\home.svg" alt="Potential ROI" className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Potential ROI</h3>
      <p className="text-gray-600">
        Whether you're looking to buy a forever property or increase your returns, we’ll help you navigate your best real estate success.
      </p>
    </div>

    {/* Card 2 */}
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="\paintbrush-2.svg" alt="Design" className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Design</h3>
      <p className="text-gray-600">
        Our in-house design team and their guided plans help you design great spaces and advertising materials to suit your real estate needs.
      </p>
    </div>

    {/* Card 3 */}
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="\circle-dollar-sign.svg" alt="Marketing" className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Marketing</h3>
      <p className="text-gray-600">
        Highly targeted, refined, and dynamic ad implementation is just one way we get results for buyers and sellers.
      </p>
    </div>
  </div>
</section>

{/* About Us Section */}
<section className="relative flex bg-white py-16 px-4 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-1 right-10">
    <img
      src="\Group 1000001645.svg"
      alt="Dotted Circle"
      className=" "
    />
  </div>
  <div className="absolute top-30 right-20">
    <img
      src="\Ellipse 19.svg"
      alt="Blue Circle"
      className="h-40 w-40"
    />
  </div>
  <div className="absolute top-60 right-3">
    <img
      src="\Ellipse 19.svg"
      alt="Blue Circle"
      className="h-50 w-50"
    />
  </div>
  <div className="absolute top-60 left-90">
    <img
      src="\Ellipse 19.svg"
      alt=" Circle"
      className="h-50 w-50"
    />
  </div>
  <div className="absolute top-30 left-30">
    <img
      src="\Ellipse 19.svg"
      alt="Blue Circle"
      className="h-50 w-50"
    />
  </div>
  <div className="absolute bottom-130 left-28">
    <img
      src="\Ellipse 20.svg"
      alt=" Circle"
       className="h-40 w-40"
    />
  </div>
  

  {/* Main Content */}
  <div className="max-w-7xl mx-auto">
    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
      {/* Image 1 */}
      <div className="relative w-60 h-60 ml-40">
        <img src="\Rectangle 54.svg" className="absolute w-10 h-10 ml-70"></img>
        <img
          src="\pexels-brett-sayles-2881232.svg"
          alt="Image 1"
          className="w-full h-auto object-cover ml-10"
        />
        
        <img src="\Subtract-4.svg" className="absolute w-10 h-10 ml-5"></img>
      </div>

      {/* Image 2 */}
      <div className="relative mt-30 h-90 w-90 ml-15">
        <img src="\Subtract.svg" className="absolute w-10 h-10 ml-80 "></img>
        <img
          src="\pexels-andres-ayrton-6578391.svg"
          alt="Image 2"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="relative ml-10 mt-90 h-60 w-60">
        <img
          src="\pexels-fauxels-3182834.svg"
          alt="Image 3"
          className="w-full h-auto object-cover"
        />
        <img src="Subtract-5.svg" className="absolute ml-60"></img>
      </div>
    </div>

    {/* About Us Content */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Fifteen years of experience in real estate, excellent customer service, and a
        commitment to work that is clear and follow-through. We provide quality services to
        build relationships with clients and, more importantly, maintain those relationships by
        communicating effectively.
      </p>
      <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* Our Projects Section */}
<section className="bg-gray-100 py-16 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-800">Our Projects</h2>
      <div className="mt-2 w-16 h-1 mx-auto bg-blue-800"></div> {/* Underline */}
      <p className="text-gray-600 mt-4">
        Explore our diverse range of projects designed to meet your needs and bring value to your investments.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {/* Project Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="\pexels-brett-sayles-2881232.svg"
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Consultation</h3>
          <p className="text-gray-600">
            Offering tailored advice to help clients make informed real estate decisions.
          </p>
          <Button className="bg-orange-300 mt-15">Read More</Button>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="\pexels-brett-sayles-2881232-1.svg"
          alt="Project 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Design</h3>
          <p className="text-gray-600">
            Crafting exceptional property designs that align with modern aesthetics and functional requirements.
          </p>
          <Button className="bg-orange-300 mt-4">Read More</Button>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="\pexels-brett-sayles-2881232-2.svg"
          alt="Project 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Marketing & Design</h3>
          <p className="text-gray-600">
           Leveraging cutting-edge marketing techniques to showcase properties effectively. 
          </p>
          <Button className="bg-orange-300 mt-10">Read More</Button>
        </div>
      </div>

       {/* Project Card 4 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="\pexels-brett-sayles-2881232-3.svg"
          alt="Project 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Consultation & Marketing</h3>
          <p className="text-gray-600">
           Combining our expertise in consultation and design to deliver well-rounded solutions.
          </p>
          <Button className="bg-orange-300 mt-5">Read More</Button>
        </div>
      </div>
       {/* Project Card 5 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="\pexels-fauxels-3182834.svg"
          alt="Project 3"
          className="w-full h-48 object-cover"></img>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Consultation</h3>
          <p className="text-gray-600">
            Providing professional insights to navigate the complexities of real estate.
          </p>
          <Button className="bg-orange-300 mt-15">Read More</Button>
        </div>
      </div>
       
    </div>
  </div>
</section>
 
 {/* Happy Clients Section */}
<section className="bg-gray-100 py-16 px-4">
  <div className="max-w-7xl mx-auto text-center mb-12">
    {/* Section Header */}
    <h2 className="text-3xl font-bold text-blue-800">Happy Clients</h2>
    <div className="mt-2 w-16 h-1 mx-auto bg-blue-800"></div>
    <p className="text-gray-600 mt-4">
      Hear what our clients have to say about their experience working with us.
    </p>
  </div>

  {/* Clients Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ml-20 mr-20">
    {/* Client 1 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="\Ellipse 29.svg"
        alt="Client 1"
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />
      <p className="text-gray-600">
        "Working with this team was an incredible experience. Their expertise
        in consultation and design exceeded my expectations!"
      </p>
      <h3 className="text-xl font-semibold text-blue-800 mt-5">John Doe</h3>
      <p className="text-gray-500 text-sm mb-4">CEO, XYZ Corporation</p>
      
    </div>

    {/* Client 2 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="\Ellipse 28.svg"
        alt="Client 2"
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />
      <p className="text-gray-600">
        "Their marketing strategies helped us achieve amazing results. Highly
        recommend their services!"
      </p>
      <h3 className="text-xl font-semibold text-blue-800 mt-10">Jane Smith</h3>
      <p className="text-gray-500 text-sm mb-4">Marketing Manager, ABC Ltd.</p>
      
    </div>

    {/* Client 3 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="\Ellipse 31.svg"
        alt="Client 3"
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />
      <p className="text-gray-600">
        "From consultation to design, everything was seamless. Their team is
        professional and dedicated!"
      </p>
      <h3 className="text-xl font-semibold text-blue-800 mt-10">Emily Johnson</h3>
      <p className="text-gray-500 text-sm mb-4">Real Estate Investor</p>
      
    </div>
    {/* Client 4 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="\Ellipse 33.svg"
        alt="Client 3"
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />
      <p className="text-gray-600">
        "From consultation to design, everything was seamless. Their team is
        professional and dedicated!"
      </p>
      <h3 className="text-xl font-semibold text-blue-800 mt-10">Emily Johnson</h3>
      <p className="text-gray-500 text-sm mb-4">Real Estate Investor</p>
      
    </div>
    {/* Client 5 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="\Ellipse 35.svg"
        alt="Client 3"
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />
       <p className="text-gray-600">
        "From consultation to design, everything was seamless. Their team is
        professional and dedicated!"
      </p>
      <h3 className="text-xl font-semibold text-blue-800 mt-10">Emily Johnson</h3>
      <p className="text-gray-500 text-sm mb-4">Real Estate Investor</p>
     
    </div>
  </div>
</section>




      </div>
      <Footer />
    </div>
  )
}

export default LandingPage

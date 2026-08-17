import user1 from "../assets/1-user.jpg";
import user2 from "../assets/2-user.jpg";
import user3 from "../assets/3-user.jpg";
import heroSection from "../assets/hero-section.avif";
const HeroSection = () => {
  return (
    <div className="pt-16" id="home">
      <section className="container-custom overflow-hidden flex flex-col lg:flex-row gap-10 py-5">
        <div className="flex-1 info">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">Artificial Intelligence </span>
            for a Smarter Future
          </h1>
          <p className="my-8 text-lg text-gray-600">
            Discover how AI is transforming industries and improving lives
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <button className="btn-primary-lg">Explore AI Solutions</button>
            <button className="btn-primary-transparent-lg">Learn More</button>
          </div>
          <div className="flex px-2.5 py-10 items-center">
            <div className="img-box-overlap">
              <img src={user1} alt="" />
            </div>
            <div className="img-box-overlap">
              <img src={user2} alt="" />
            </div>
            <div className="img-box-overlap">
              <img src={user3} alt="" />
            </div>
            <p className="px-4 font-medium ">
              Trusted by <span className="text-primary font-bold">10,000+</span>{" "}
              people worldwide
            </p>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            className="h-full rounded-2xl w-full object-cover"
            src={heroSection}
            alt="hero section image"
          />
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

import {
  faFacebook,
  faInstagram,
  faSquareLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const footerExplore = [
  { text: "About Us", href: "#" },
  { text: "Ai Technologies", href: "#types" },
  { text: "Case Studies", href: "#benefits" },
  { text: "Contact Us", href: "#contact" },
  { text: "Careers", href: "#" },
];
const footerResources = [
  { text: "Documentation", href: "#" },
  { text: "API Reference", href: "#" },
  { text: "Community Forum", href: "#" },
  { text: "Blog & News", href: "#" },
  { text: "Help Center", href: "#" },
];
const endFoot = [
  { text: "Terms of Service", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Cookie Policy", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-dark to-gray-900">
      <div className="container-custom">
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 py-15 border-b border-gray-700">
          <div className="space-y-4">
            <h3 className="text-gradient w-fit text-2xl font-bold">
              AI Revolution
            </h3>
            <p className="text-gray-400">
              Pioneering AI solutions for tomorrow's challenges. We empower
              businesses with cutting-edge artificial intelligence.
            </p>
            <div className="space-x-3">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faSquareLinkedin} className="" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Explore</h3>
            <ul>
              {footerExplore.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="footer-link">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-sm"
                    />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul>
              {footerResources.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="footer-link">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-sm"
                    />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for the latest AI insights and company
              news.
            </p>
            <form action="GET">
              <div className="flex flex-wrap gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="py-2 px-3 w-full sm:w-auto rounded-lg  bg-white/5 text-white placeholder:text-gray-400 outline-2 outline-transparent border-transparent focus:outline-primary  transition"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn-primary w-full sm:w-auto"
                />
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-1.5">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* end foot */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 py-8 text-sm text-gray-500  ">
          <div>&copy; 2025 AI Revolution. All rights reserved.</div>
          <ul className="flex gap-8">
            {endFoot.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:text-gray-300 transition">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const contactInfo = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="pt-16 bg-light" id="contact">
      <section className="container-custom pt-5 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          {/* left content */}
          <div className="flex-1">
            <div>
              <span className="sec-name">Get in Touch</span>
              <h2 className="sec-heading text-gray-800">
                Ready to <span className="text-gradient ">Transform</span> Your
                Business with AI?
              </h2>
              <p className="text-gray-800">
                Our team of AI experts is ready to help you implement
                cutting-edge solutions tailored to your specific needs. Contact
                us today to schedule a consultation.
              </p>
            </div>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 mt-6">
                <span className="item-trans-primary p-3 rounded-md">
                  {item.icon}
                </span>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-gray-900 ">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* right content */}
          <div className="flex-1 flex-col bg-white shadow-lg p-6 lg:p-8 rounded-xl">
            <form action="GET">
              <label className="input-label">
                Full Name
                <input type="text" name="name" className="input" />
              </label>
              <label className="input-label">
                Email Address
                <input type="email" name="email" className="input" />
              </label>
              <label className="input-label">
                Subject
                <input type="text" name="subject" className="input" />
              </label>
              <label className="input-label">
                Message
                <input type="text" name="subject" />
                <textarea name="message" className="input" rows="4"></textarea>
              </label>
              <input
                type="submit"
                value="Send Message"
                className="btn-primary-lg w-full"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

export default function CBNIntegratedSolutionsWebsite() {
  const services = [
    {
      title: 'Bid Writing & Tender Preparation',
      description:
        'Compelling, compliant and winning proposals that secure opportunities.',
      icon: '📝',
    },
    {
      title: 'RFQ (Request For Quotation) Writing',
      description:
        'Clear, detailed and professional RFQs that attract the best suppliers.',
      icon: '📄',
    },
    {
      title: 'Professional Photography & Video Shooting',
      description:
        'High-quality visual content that captures your brand and tells your story.',
      icon: '📸',
    },
    {
      title: 'RFP (Request For Proposal) Development',
      description:
        'Strategic and professional proposals tailored to your business objectives.',
      icon: '📑',
    },
    {
      title: 'Graphic Designing & Branding',
      description:
        'Creative designs that bring your brand to life and make you stand out.',
      icon: '🎨',
    },
    {
      title: 'Invoice Books Printing',
      description:
        'Professional invoice books printing services for businesses.',
      icon: '📘',
    },
    {
      title: 'Company Profiles & Business Proposals',
      description:
        'Corporate documents that showcase your brand and build trust.',
      icon: '🏢',
    },
    {
      title: 'Printing & General Supplies',
      description:
        'High-quality prints and supplies for your business operations.',
      icon: '🖨️',
    },
    {
      title: 'Quotation Books Printing',
      description:
        'Custom quotation books designed for professional business operations.',
      icon: '📚',
    },
    {
      title: 'ICT Services & Technical Support',
      description:
        'Reliable IT solutions and technical support to keep your business running smoothly.',
      icon: '💻',
    },
    {
      title: 'Company Letterheads',
      description:
        'Professional letterheads that strengthen your corporate identity.',
      icon: '📃',
    },
    {
      title: 'Receipt Books Printing',
      description:
        'Durable and professionally printed receipt books for businesses.',
      icon: '🧾',
    },
  ];

  const values = [
    {
      title: 'Professionalism',
      text: 'We deliver with integrity and excellence.',
      icon: '✔️',
    },
    {
      title: 'Innovation',
      text: 'Creative solutions for a dynamic business world.',
      icon: '💡',
    },
    {
      title: 'Reliability',
      text: 'Trusted, consistent and committed to your success.',
      icon: '🎯',
    },
    {
      title: 'Attention To Detail',
      text: 'Every detail matters in every solution we deliver.',
      icon: '🔍',
    },
    {
      title: 'Business Growth',
      text: 'Empowering your business to grow, compete and lead.',
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              CBN <span className="text-blue-300">Integrated Solutions</span>
            </h1>

            <p className="text-xl text-blue-100 mb-6 tracking-wide">
              Innovate • Create • Deliver
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Solutions For Modern Business Needs.
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              At CBN Integrated Solutions, we deliver innovative, reliable and
              high-quality business services that help organizations grow,
              compete and succeed.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Our Services
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Business office"
                className="rounded-2xl h-64 w-full object-cover"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl mt-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Professional working"
                className="rounded-2xl h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-blue-900 mb-6">
            About CBN Integrated Solutions
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are committed to providing professional business services that
            help companies improve efficiency, strengthen branding and achieve
            sustainable growth. From tender preparation and branding to ICT
            support and professional printing services, we deliver solutions
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 mb-4">
              Our Services
            </h2>

            <p className="text-gray-600 text-lg">
              Professional services designed to support modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-blue-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">Why Choose Us</h2>
            <p className="text-blue-100 text-lg">
              We focus on excellence, innovation and business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-6 backdrop-blur-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>

                <h3 className="text-xl font-bold mb-3">{value.title}</h3>

                <p className="text-blue-100 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-6">
            Professional Solutions For Modern Business Needs.
          </h2>

          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let CBN Integrated Solutions help your business grow, compete and
            succeed with reliable and professional services.
          </p>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              CBN Integrated Solutions
            </h3>

            <p className="leading-relaxed text-gray-400">
              Innovate • Create • Deliver
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Our Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Bid Writing & Tender Preparation</li>
              <li>Graphic Designing & Branding</li>
              <li>Printing & General Supplies</li>
              <li>ICT Services & Technical Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>

            <p className="text-gray-400 leading-relaxed">
              Ready to work with us? Reach out today and let us help your
              business succeed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-black text-blue-900 mb-3">
                Brian Nthandira
              </h3>
              <p className="text-blue-700 font-semibold mb-4">Chief Executive Officer (CEO)</p>
              <p className="text-gray-600 leading-relaxed">
                Brian Nthandira is the visionary leader behind CBN Integrated Solutions.
                With a strong passion for innovation, entrepreneurship and business
                excellence, he leads the company with dedication, creativity and a
                commitment to delivering reliable solutions that empower businesses
                to grow and succeed in today’s competitive world.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-black text-blue-900 mb-3">
                Samson Kalanga
              </h3>
              <p className="text-blue-700 font-semibold mb-4">General Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Samson Kalanga oversees the daily business operations and strategic
                coordination of the company. Known for professionalism, leadership
                and strong organizational skills, he ensures that every project is
                executed efficiently while maintaining high standards of service
                delivery and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-black text-blue-900 mb-3">
                Alex Jordan
              </h3>
              <p className="text-blue-700 font-semibold mb-4">Operations Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Alex Jordan manages operational activities and ensures smooth workflow
                across all company services. His attention to detail, technical
                understanding and commitment to operational excellence help CBN
                Integrated Solutions deliver dependable and high-quality business
                solutions to clients.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10 grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h4 className="text-white text-xl font-semibold mb-3">Contact Numbers</h4>
              <p>+265 (0) 883 689 015</p>
              <p>+265 (0) 992 606 355</p>
            </div>

            <div>
              <h4 className="text-white text-xl font-semibold mb-3">Email Address</h4>
              <p>cbnintegratedsolutions@gmail.com</p>
            </div>

            <div>
              <h4 className="text-white text-xl font-semibold mb-3">Location</h4>
              <p>Along Michiru Road Opposite Tiyanjane Hospital</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 CBN Integrated Solutions. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

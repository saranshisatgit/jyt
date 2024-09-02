import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Get to know us better.",
}

type Params = {
  data: {}
  params: {
    countryCode: string
  }
}

export default async function TermPage({ params }: Params) {
  const getLegalIdentifier = () => {
    switch (params.countryCode) {
      case "in":
        return "You are in India region and we operate as Jaal Yantra Textiles Private Limited."
      case "nl":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "de":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "fr":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "es":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "it":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "dk":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "se":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "ch":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "lv":
        return "You are in Europe region and we operate as Kind Health Tech SIA Reg No: 40203579735."
      case "CA":
        return "You are in Canada region and we operate as XYZ Inc."
      default:
        return "You are in an unlisted region. Please contact us for specific legal information."
    }
  }

  return (
    <div>
      {/* Hero Section with Full-Screen Gradient Background */}
      <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Terms that are simple.
        </h1>
      </div>

      {/* Content Section with Spacing */}
      <div className="max-w-2xl mx-auto mt-12 mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          There are things you may know but,
        </h2>
        <p className="mb-6">
          Here we would like to share some things that are legally binding
          between us and you as a customer. As you know, we make high quality
          personalised custom garments for which we use different kind of
          technology and store various information across the globe and so we
          thought you should how we use your information
        </p>

        {/* Conditional Rendering based on countryCode */}
        {params.countryCode && (
          <p className="text-lg font-medium">{getLegalIdentifier()}</p>
        )}

        {/* Comprehensive Terms and Conditions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Service Regions</h3>
          <p className="mb-4">
            We currently serve customers in various regions including India,
            Europe (Netherlands, Germany, France, Spain, Italy, Denmark, Sweden,
            Switzerland, Latvia), and Canada. If you are located outside these
            regions, please contact us for more information on our services.
          </p>

          <h3 className="text-xl font-semibold mb-2">Shipping and Delivery</h3>
          <p className="mb-4">
            Shipping is managed by third-party providers and is therefore out of
            our direct control. We strive to ensure timely delivery of your
            orders, but we cannot be held responsible for any delays caused by
            shipping companies. Any customs duties or taxes applicable to your
            region are the responsibility of the customer.
          </p>

          <h3 className="text-xl font-semibold mb-2">Returns Policy</h3>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If for
            any reason you are not happy with your product, you may return it to
            us at any time. Please ensure that the product is in its original
            condition and packaging. Contact our customer service team for
            assistance with returns.
          </p>

          <h3 className="text-xl font-semibold mb-2">Personalized Products</h3>
          <p className="mb-4">
            If you opt to personalize a product, you may choose a private design
            option. This ensures that your personalized design will not be
            published or used on our website or in any of our promotional
            materials. Your privacy and creative expression are important to us.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Privacy and Data Protection
          </h3>
          <p className="mb-4">
            We are committed to protecting your privacy. We do not sell your
            data to third parties. Our website is GDPR compliant, and we use
            Plausible for analytics to ensure your data is handled responsibly
            and securely.
          </p>

          <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
          <p className="mb-4">
            In the event of a dispute, the matter must be raised with the
            concerned jurisdiction as specified in our legal agreements. We
            strive to resolve any issues amicably and to your satisfaction.
          </p>

          <p className="mb-5 mt-12">
            These terms and conditions were last updated on Monday 2nd of
            September 2024
          </p>
        </div>
      </div>
    </div>
  )
}

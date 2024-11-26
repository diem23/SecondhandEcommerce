import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const FlyoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Categories = [
    {
      title: "Engagement",
      links: [
        { icon: "📄", title: "About", url: "#" },
        { icon: "👥", title: "Customers", url: "#" },
        { icon: "📰", title: "Press", url: "#" },
        { icon: "💼", title: "Careers", url: "#" },
        { icon: "🔒", title: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { icon: "🌐", title: "Community", url: "#" },
        { icon: "🤝", title: "Partners", url: "#" },
        { icon: "📘", title: "Guides", url: "#" },
        { icon: "🎥", title: "Webinars", url: "#" },
      ],
    },
    {
      title: "Cards",
      links: [
        {
          image: "https://via.placeholder.com/150",
          date: "Mar 16, 2023",
          category: "Marketing",
          title: "Boost your conversion rate",
          description:
            "Learn strategies to optimize your conversion funnel and increase sales.",
        },
        {
          image: "https://via.placeholder.com/150",
          date: "Mar 10, 2023",
          category: "Sales",
          title: "Use SEO to drive sales",
          description:
            "Discover how SEO strategies can help you reach more customers.",
        },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black bg-gray-200 rounded hover:bg-[#FA8232] hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Thể loại</span>
        <CaretDown />
      </button>

      {/* Flyout Menu */}
      {isOpen && (
        <div className="absolute left z-10 top-full mt-2 w-screen max-w-max bg-white shadow-lg border">
          <div className="container mx-auto p-6 grid grid-cols-3 gap-6 w-screen max-w-5xl">
            {/* Left Section - Links */}
            <div className="col-span-1">
              {/* <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">📄</span>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    About
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">👥</span>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Customers
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">📰</span>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Press
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">💼</span>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Careers
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">🔒</span>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Privacy
                  </a>
                </li>
              </ul> */}
              {Categories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-gray-500 font-medium mb-3">
                    {category.title}
                  </h3>
                  {/* <ul className="space-y-2">
                    {category.links.map((link, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600">{link.icon}</span>
                        <a
                          href={link.url}
                          className="text-gray-700 hover:text-blue-500"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>

            {/* Middle Section - Links */}
            <div className="col-span-1">
              {Categories.map((category, index) => (
                <div key={index}>
                  <ul className="space-y-2">
                    {category.links.map((link, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600">{link.icon}</span>
                        <a
                          href={link.url}
                          className="text-gray-700 hover:text-blue-500"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Section - Cards */}
            <div className="col-span-1">
              <div className="grid grid-cols-1 gap-4">
                {/* Card 1 */}
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Boost your conversion rate"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">
                      Mar 16, 2023 | Marketing
                    </span>
                    <h4 className="text-lg font-bold mt-2">
                      Boost your conversion rate
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Learn strategies to optimize your conversion funnel and
                      increase sales.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Search Engine Optimization"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">
                      Mar 10, 2023 | Sales
                    </span>
                    <h4 className="text-lg font-bold mt-2">
                      Use SEO to drive sales
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Discover how SEO strategies can help you reach more
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlyoutMenu;

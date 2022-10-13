const path = require("path");
module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: [path.join(__dirname, "styles")],
    };
  }
  return defaultConfig;
};

module.exports = {
  reactStrictMode: false,
};
module.exports = {
  images: {
    domains: ["www.webethicssolutions.com"],
  },
};
module.exports = {
  async redirects() {
    return [
      {
        source: "/services/ipad-app-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/careers/life-at-webethics",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/request-consulting",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/php-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/ruby-on-rails-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/python-web-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/facebook-app-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/iphone-app-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/android-app-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/phone-gap-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/magento",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/wordpress",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/joomla",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/prestashop",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/webdesign",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/logo",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/business-card",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/brochures",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/flyers",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/print",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/codeigniter",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/cake",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/yii",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};
// module.exports = {
//   basePath: "www.webethicssolutions.com",
// };

/** @type {import('tailwindcss').Config} */

import { a } from "react-spring";

const generateVhUnits = () => {
  const units = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vh`;
    units[value] = value;
  }
  return units;
};

const generateFontSizeVh = () => {
  const fontSizes = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vh`;
    fontSizes[value] = [value, { lineHeight: value }];
  }
  return fontSizes;
};

const generateVwUnits = () => {
  const units = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vw`;
    units[value] = value;
  }
  return units;
};

const generateFontSizeVw = () => {
  const fontSizes = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vw`;
    fontSizes[value] = [value, { lineHeight: value }];
  }
  return fontSizes;
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

// MAKING A PLUGIN:
// const NameOfPlugin = plugin(function ({ addUtilities }) {
//   const utilities = {
//     ".className": { styles },
//   };

//   addUtilities(utilities, ["responsive", "hover"]);
// });

// const NameOfPlugin = plugin(function ({ addUtilities }) {
//   const utilities = {
//     ".className": { styles },
//   };

//   addUtilities(utilities, ["responsive", "hover"]);
// });
const transitionTimingFunctionsPlugin = plugin(function ({
  addUtilities,
  theme,
}) {
  const timingFunctions = theme("transitionTimingFunction");
  const newUtilities = Object.keys(timingFunctions).reduce((acc, key) => {
    // Creating shorter class names, e.g., .ease-elastic
    const name = `.ease-${key}`;
    acc[name] = { transitionTimingFunction: timingFunctions[key] };
    return acc;
  }, {});

  addUtilities(newUtilities, ["responsive", "hover"]);
});

const transformStyles = plugin(function ({ addUtilities }) {
  const utilities = {
    ".transform-style-3d": {
      transformStyle: "preserve-3d",
    },
    // Add more custom utilities as needed
  };
  addUtilities(utilities, ["responsive", "hover"]);
});

const backfaceVisibilityPlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const perspectivePlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".perspective-30": { perspective: "30vh" },
    ".perspective-40": { perspective: "40vh" },
    ".perspective-50": { perspective: "50vh" },
    ".perspective-60": { perspective: "60vh" },
    ".perspective-70": { perspective: "70vh" },
    ".perspective-80": { perspective: "80vh" },
    ".perspective-90": { perspective: "90vh" },
    ".perspective-100": { perspective: "100vh" },
    ".perspective-110": { perspective: "110vh" },
    ".perspective-120": { perspective: "120vh" },
    ".perspective-130": { perspective: "130vh" },
    ".perspective-140": { perspective: "140vh" },
    ".perspective-150": { perspective: "150vh" },
    ".perspective-160": { perspective: "160vh" },
    ".perspective-170": { perspective: "170vh" },
    ".perspective-180": { perspective: "180vh" },
    ".perspective-190": { perspective: "190vh" },
    ".perspective-200": { perspective: "200vh" },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const rotateYPlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-15": {
      transform: "rotateY(15deg)",
    },
    ".rotate-y-45": {
      transform: "rotateY(45deg)",
    },
    ".rotate-y-60": {
      transform: "rotateY(60deg)",
    },
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
    ".rotate-y-105": {
      transform: "rotateY(105deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const buttonStyles = plugin(function ({ addUtilities, theme }) {
  // Base styles for all buttons, excluding shadow properties
  const baseButtonStyles = {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "0.2vh",
    transition: "all 0.4s ease-in-out",
  };

  // Function to generate button styles with specific colors and shadows
  function generateButtonStyles(
    fontSize,
    height,
    bgColor,
    color,
    borderColor,
    hoverBgColor,
    hoverColor,
    hoverBorderColor,
    hoverTextStrokeWidth = "0.1vh"
  ) {
    return {
      ...baseButtonStyles,
      fontSize,
      height,
      backgroundColor: theme(`colors.${bgColor}`, "transparent"),
      color: theme(`colors.${color}`, "currentColor"),
      borderColor: theme(`colors.${borderColor}`, "transparent"),
      boxShadow: theme("boxShadow.shadowNarrowNormal"),
      textShadow: theme("textShadow.textShadow"),
      "&:hover": {
        backgroundColor: theme(`colors.${hoverBgColor}`, "transparent"),
        color: theme(`colors.${hoverColor}`, "currentColor"),
        borderColor: theme(`colors.${hoverBorderColor}`, "transparent"),
        boxShadow: theme("boxShadow.metallicEdgesMd"),
        textShadow: theme("textShadow.lightTextShadow"),
        "-webkit-text-stroke-width": hoverTextStrokeWidth,
        "-webkit-text-stroke-color": theme(
          `colors.${hoverBorderColor}`,
          "currentColor"
        ), // Use the border color for stroke color on hover
      },
    };
  }

  // Function to generate unstyled button styles without shadows
  function generateUnstyledButtonStyles(fontSize, height) {
    return {
      ...baseButtonStyles,
      fontSize,
      height,
      backgroundColor: "transparent",
      color: "currentColor",
      borderColor: "transparent",
      boxShadow: "none", // No box shadow for unstyled buttons
      "&:hover": {
        backgroundColor: "transparent",
        color: "currentColor",
        borderColor: "transparent",
        boxShadow: "none", // No box shadow on hover for unstyled buttons
      },
    };
  }

  // Utilities for specific button types
  const utilities = {
    ".normalButtonStyles": generateButtonStyles(
      "2.1vh", // fontSize
      "3.5vh", // height
      "col.700", // bgColor
      "col.100", // color
      "col.500", // borderColor
      "col.300", // hoverBgColor
      "col.900", // hoverColor
      "col.970" //hoverBorderColor
    ),
    ".smallButtonStyles": generateButtonStyles(
      "1.6vh", // fontSize
      "2.9vh", // height
      "col.700", // bgColor
      "col.100", // color
      "col.500", // borderColor
      "col.300", // hoverBgColor
      "col.900", // hoverColor
      "col.970" //hoverBorderColor
    ),
    ".negativeButtonStyles": generateButtonStyles(
      "2.1vh", // fontSize
      "3.5vh", // height
      "red.400", // bgColor
      "col.100", // color
      "red.800", // borderColor
      "col.200", // hoverBgColor
      "red.800", // hoverColor
      "red.800" //hoverBorderColor
    ),
    ".smallNegativeButtonStyles": generateButtonStyles(
      "1.6vh", // fontSize
      "2.9vh", // height
      "red.400", // bgColor
      "col.100", // color
      "red.800", // borderColor
      "col.200", // hoverBgColor
      "red.800", // hoverColor
      "red.800" //hoverBorderColor
    ),
    ".unstyledButtonStyles": generateUnstyledButtonStyles("2.1vh", "3.5vh"),
    ".smallUnstyledButtonStyles": generateUnstyledButtonStyles(
      "1.6vh",
      "2.9vh"
    ),
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const typographyPlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".text-xs-tighter": { fontSize: "1.2vh", lineHeight: "1.2vh" },
    ".text-xs-normal": { fontSize: "1.2vh", lineHeight: "1.8vh" },
    ".text-xs-tight": { fontSize: "1.2vh", lineHeight: "1.4vh" },
    ".text-xs-loose": { fontSize: "1.2vh", lineHeight: "2.2vh" },
    ".text-xs-looser": { fontSize: "1.2vh", lineHeight: "2.6vh" },

    ".text-sm-tighter": { fontSize: "1.5vh", lineHeight: "1.5vh" },
    ".text-sm-normal": { fontSize: "1.5vh", lineHeight: "2.1vh" },
    ".text-sm-tight": { fontSize: "1.5vh", lineHeight: "1.7vh" },
    ".text-sm-loose": { fontSize: "1.5vh", lineHeight: "2.5vh" },
    ".text-sm-looser": { fontSize: "1.5vh", lineHeight: "2.9vh" },

    ".text-md-tighter": { fontSize: "2vh", lineHeight: "2vh" },
    ".text-md-normal": { fontSize: "2vh", lineHeight: "2.5vh" },
    ".text-md-tight": { fontSize: "2vh", lineHeight: "2.2vh" },
    ".text-md-loose": { fontSize: "2vh", lineHeight: "3vh" },
    ".text-md-looser": { fontSize: "2vh", lineHeight: "3.9vh" },

    ".text-lg-tighter": { fontSize: "2.4vh", lineHeight: "2.4vh" },
    ".text-lg-normal": { fontSize: "2.4vh", lineHeight: "3vh" },
    ".text-lg-tight": { fontSize: "2.4vh", lineHeight: "2.6vh" },
    ".text-lg-loose": { fontSize: "2.4vh", lineHeight: "3.4vh" },
    ".text-lg-looser": { fontSize: "2.4vh", lineHeight: "3.8vh" },

    ".text-xl-tighter": { fontSize: "3.1vh", lineHeight: "3.1vh" },
    ".text-xl-normal": { fontSize: "3.1vh", lineHeight: "3.7vh" },
    ".text-xl-tight": { fontSize: "3.1vh", lineHeight: "3.2vh" },
    ".text-xl-loose": { fontSize: "3.1vh", lineHeight: "4.1vh" },
    ".text-xl-looser": { fontSize: "3.1vh", lineHeight: "4.5vh" },

    ".text-xxl-tighter": { fontSize: "3.6vh", lineHeight: "3.6vh" },
    ".text-xxl-normal": { fontSize: "3.6vh", lineHeight: "4.2vh" },
    ".text-xxl-tight": { fontSize: "3.6vh", lineHeight: "3.8vh" },
    ".text-xxl-loose": { fontSize: "3.6vh", lineHeight: "4.6vh" },
    ".text-xxl-looser": { fontSize: "3.6vh", lineHeight: "5vh" },

    ".text-xxxl-tighter": { fontSize: "4.1vh", lineHeight: "4.1vh" },
    ".text-xxxl-normal": { fontSize: "4.1vh", lineHeight: "4.7vh" },
    ".text-xxxl-tight": { fontSize: "4.1vh", lineHeight: "4.3vh" },
    ".text-xxxl-loose": { fontSize: "4.1vh", lineHeight: "5.1vh" },
    ".text-xxxl-looser": { fontSize: "4.1vh", lineHeight: "5.5vh" },

    ".text-mega-tighter": { fontSize: "4.3vh", lineHeight: "4.3vh" },
    ".text-mega-normal": { fontSize: "4.3vh", lineHeight: "4.9vh" },
    ".text-mega-tight": { fontSize: "4.3vh", lineHeight: "4.5vh" },
    ".text-mega-loose": { fontSize: "4.3vh", lineHeight: "5.3vh" },
    ".text-mega-looser": { fontSize: "4.3vh", lineHeight: "5.7vh" },

    ".text-too-big-tighter": { fontSize: "4.5vh", lineHeight: "4.5vh" },
    ".text-too-big-normal": { fontSize: "4.5vh", lineHeight: "5.1vh" },
    ".text-too-big-tight": { fontSize: "4.5vh", lineHeight: "4.7vh" },
    ".text-too-big-loose": { fontSize: "4.5vh", lineHeight: "5.5vh" },
    ".text-too-big-looser": { fontSize: "4.5vh", lineHeight: "5.9vh" },

    ".text-insane-tighter": { fontSize: "5.1vh", lineHeight: "5.1vh" },
    ".text-insane-normal": { fontSize: "5.1vh", lineHeight: "5.7vh" },
    ".text-insane-tight": { fontSize: "5.1vh", lineHeight: "5.3vh" },
    ".text-insane-loose": { fontSize: "5.1vh", lineHeight: "6.1vh" },
    ".text-insane-looser": { fontSize: "5.1vh", lineHeight: "6.5vh" },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const customBackgroundsPlugin = plugin(function ({ addUtilities, theme }) {
  const generateBackgroundUtilities = () => {
    const utilities = {};
    // Assuming you have defined your colors under 'colors.col' and gradients under 'backgroundImage'
    const colors = theme("colors.col", {});
    const gradients = theme("backgroundImage", {});

    Object.keys(colors).forEach((color) => {
      Object.keys(gradients).forEach((gradient) => {
        const className = `.bg-${color}-${gradient.replace(/\./g, "-")}`; // Sanitizing class name
        utilities[className] = {
          backgroundColor: colors[color],
          backgroundImage: gradients[gradient],
        };
      });
    });

    return utilities;
  };

  addUtilities(generateBackgroundUtilities(), ["responsive", "hover"]);
});

const customBordersPlugin = plugin(function ({ addUtilities, theme }) {
  // Define the sizes with corresponding border widths
  const sizes = {
    sm: "0.1vh",
    md: "0.2vh",
    lg: "0.3vh",
    xl: "0.4vh",
  };

  // Colors to iterate over
  const colorKeys = [
    "100",
    "190",
    "180",
    "170",
    "160",
    "150",
    "200",
    "290",
    "280",
    "270",
    "260",
    "250",
    "300",
    "390",
    "380",
    "370",
    "360",
    "350",
    "400",
    "490",
    "480",
    "470",
    "460",
    "450",
    "500",
    "590",
    "580",
    "570",
    "560",
    "550",
    "600",
    "690",
    "680",
    "670",
    "660",
    "650",
    "700",
    "790",
    "780",
    "770",
    "760",
    "750",
    "800",
    "890",
    "880",
    "870",
    "860",
    "850",
    "900",
    "990",
    "980",
    "970",
    "960",
    "950",
  ];

  const borderUtilities = {};

  // Iterate over each size
  Object.entries(sizes).forEach(([size, borderWidth]) => {
    // For each color
    colorKeys.forEach((color) => {
      const colorKey = `col.${color}`;
      const borderColor = theme(`colors.${colorKey}`, "currentColor");

      // Generate utility for each size and color
      borderUtilities[`.border-${color}-${size}`] = {
        borderWidth: borderWidth,
        borderStyle: "solid",
        borderColor: borderColor,
      };

      // Optional: Generate hover state utilities if needed
      borderUtilities[`.hover\\:border-${color}-${size}:hover`] = {
        borderWidth: borderWidth,
        borderStyle: "solid",
        borderColor: borderColor,
      };

      // Optional: Generate utilities for specific sides if needed (e.g., bottom border)
      borderUtilities[`.border-b-${color}-${size}`] = {
        borderBottomWidth: borderWidth,
        borderStyle: "solid",
        borderBottomColor: borderColor,
      };
    });
  });

  // Add the generated utilities to Tailwind
  addUtilities(borderUtilities, ["responsive", "hover"]);
});

export default {
  content: ["./app/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        col: {
          100: "rgba(228, 237, 245, 1)",
          110: "rgba(228, 237, 245, 0.1)",
          120: "rgba(228, 237, 245, 0.2)",
          130: "rgba(228, 237, 245, 0.3)",
          140: "rgba(228, 237, 245, 0.4)",
          150: "rgba(228, 237, 245, 0.5)",
          160: "rgba(228, 237, 245, 0.6)",
          170: "rgba(228, 237, 245, 0.7)",
          180: "rgba(228, 237, 245, 0.8)",
          190: "rgba(228, 237, 245, 0.9)",

          200: "rgba(208, 226, 242, 1)",
          210: "rgba(208, 226, 242, 0.1)",
          220: "rgba(208, 226, 242, 0.2)",
          230: "rgba(208, 226, 242, 0.3)",
          240: "rgba(208, 226, 242, 0.4)",
          250: "rgba(208, 226, 242, 0.5)",
          260: "rgba(208, 226, 242, 0.6)",
          270: "rgba(208, 226, 242, 0.7)",
          280: "rgba(208, 226, 242, 0.8)",
          290: "rgba(208, 226, 242, 0.9)",

          300: "rgba(217, 181, 173, 1)",
          310: "rgba(217, 181, 173, 0.1)",
          320: "rgba(217, 181, 173, 0.2)",
          330: "rgba(217, 181, 173, 0.3)",
          340: "rgba(217, 181, 173, 0.4)",
          350: "rgba(217, 181, 173, 0.5)",
          360: "rgba(217, 181, 173, 0.6)",
          370: "rgba(217, 181, 173, 0.7)",
          380: "rgba(217, 181, 173, 0.8)",
          390: "rgba(217, 181, 173, 0.9)",

          400: "rgba(167, 189, 217, 1)",
          410: "rgba(167, 189, 217, 0.1)",
          420: "rgba(167, 189, 217, 0.2)",
          430: "rgba(167, 189, 217, 0.3)",
          440: "rgba(167, 189, 217, 0.4)",
          450: "rgba(167, 189, 217, 0.5)",
          460: "rgba(167, 189, 217, 0.6)",
          470: "rgba(167, 189, 217, 0.7)",
          480: "rgba(167, 189, 217, 0.8)",
          490: "rgba(167, 189, 217, 0.9)",

          500: "rgba(84, 123, 171, 1)",
          510: "rgba(84, 123, 171, 0.1)",
          520: "rgba(84, 123, 171, 0.2)",
          530: "rgba(84, 123, 171, 0.3)",
          540: "rgba(84, 123, 171, 0.4)",
          550: "rgba(84, 123, 171, 0.5)",
          560: "rgba(84, 123, 171, 0.6)",
          570: "rgba(84, 123, 171, 0.7)",
          580: "rgba(84, 123, 171, 0.8)",
          590: "rgba(84, 123, 171, 0.9)",

          600: "rgba(97, 116, 140, 1)",
          610: "rgba(97, 116, 140, 0.1)",
          620: "rgba(97, 116, 140, 0.2)",
          630: "rgba(97, 116, 140, 0.3)",
          640: "rgba(97, 116, 140, 0.4)",
          650: "rgba(97, 116, 140, 0.5)",
          660: "rgba(97, 116, 140, 0.6)",
          670: "rgba(97, 116, 140, 0.7)",
          680: "rgba(97, 116, 140, 0.8)",
          690: "rgba(97, 116, 140, 0.9)",

          700: "rgba(41, 60, 84, 1)",
          710: "rgba(41, 60, 84, 0.1)",
          720: "rgba(41, 60, 84, 0.2)",
          730: "rgba(41, 60, 84, 0.3)",
          740: "rgba(41, 60, 84, 0.4)",
          750: "rgba(41, 60, 84, 0.5)",
          760: "rgba(41, 60, 84, 0.6)",
          770: "rgba(41, 60, 84, 0.7)",
          780: "rgba(41, 60, 84, 0.8)",
          790: "rgba(41, 60, 84, 0.9)",

          800: "rgba(1, 42, 94, 1)",
          810: "rgba(1, 42, 94, 0.1)",
          820: "rgba(1, 42, 94, 0.2)",
          830: "rgba(1, 42, 94, 0.3)",
          840: "rgba(1, 42, 94, 0.4)",
          850: "rgba(1, 42, 94, 0.5)",
          860: "rgba(1, 42, 94, 0.6)",
          870: "rgba(1, 42, 94, 0.7)",
          880: "rgba(1, 42, 94, 0.8)",
          890: "rgba(1, 42, 94, 0.9)",

          900: "rgba(1, 17, 38, 1)",
          910: "rgba(1, 17, 38, 0.1)",
          920: "rgba(1, 17, 38, 0.2)",
          930: "rgba(1, 17, 38, 0.3)",
          940: "rgba(1, 17, 38, 0.4)",
          950: "rgba(1, 17, 38, 0.5)",
          960: "rgba(1, 17, 38, 0.6)",
          970: "rgba(1, 17, 38, 0.7)",
          980: "rgba(1, 17, 38, 0.8)",
          990: "rgba(1, 17, 38, 0.9)",
        },
      },
      height: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      minHeight: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxHeight: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      width: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      minWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      padding: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      gap: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      // Add pixels to the spacing scale
      spacing: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      transition: ["hover", "focus"],
      duration: ["hover", "focus"],
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
        105: "1.05",
        106: "1.06",
        107: "1.07",
        108: "1.08",
        109: "1.09",
        110: "1.1",
        111: "1.11",
        112: "1.12",
        113: "1.13",
        114: "1.14",
        115: "1.15",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        cursive: ["Comic Neue", "cursive"],
      },
      fontSize: {
        xxs: ["1.2vh", { lineHeight: "1.8vh" }],
        xs: ["1.3vh", { lineHeight: "2.2vh" }],
        sm: ["1.5vh", { lineHeight: "2.3vh" }],
        md: ["1.7vh", { lineHeight: "2.6vh" }],
        lg: ["2.3vh", { lineHeight: "3.1vh" }],
        xl: ["3vh", { lineHeight: "3.8vh" }],
        xxl: ["3.5vh", { lineHeight: "4.3vh" }],
        xxxl: ["4vh", { lineHeight: "4.8vh" }],
        mega: ["4.2vh", { lineHeight: "5vh" }],
        tooBig: ["4.4vh", { lineHeight: "5.2vh" }],
        insane: ["5vh", { lineHeight: "5.8vh" }],
        ...generateFontSizeVh(),
        ...generateFontSizeVw(),
      },
      spacing: {
        ...generateVhUnits(),
      },
      screens: {
        mobile: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1600px",
        fullHD: "1920px",
        quadHD: "2560px",
        ultraHD: "3840px",
      },
      boxShadow: {
        shadowNarrowTight: "0.1vh 0.1vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowNarrowNormal: "0.1vh 0.1vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowNarrowLoose: "0.1vh 0.1vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowNarrowLooser: "0.1vh 0.1vh 1.2vh rgba(0, 0, 0, 0.9)",
        shadowBroadTight: "0.2vh 0.2vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowBroadNormal: "0.2vh 0.2vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowBroadLoose: "0.2vh 0.2vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowBroadLooser: "0.2vh 0.2vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowWideTight: "0.3vh 0.3vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowWideNormal: "0.3vh 0.3vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowWideLoose: "0.3vh 0.3vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowWideLooser: "0.3vh 0.3vh 0.9vh rgba(0, 0, 0, 0.9)",
        insetShadowSm: "inset 0 0 0.3vh rgba(0, 0, 0, 0.9)",
        insetShadowMd: "inset 0 0 0.6vh rgba(0, 0, 0, 0.9)",
        insetShadowLg: "inset 0 0 0.9vh rgba(0, 0, 0, 0.9)",
        insetShadowXl: "inset 0 0 1.2vh rgba(0, 0, 0, 0.9)",
        insetShadowXxl: "inset 0 0 1.5vh rgba(0, 0, 0, 0.9)",
        insetShadow3xl: "inset 0 0 2vh rgba(0, 0, 0, 0.9)",
        insetShadow4xl: "inset 0 0 2.5vh rgba(0, 0, 0, 0.9)",
        insetShadow5xl: "inset 0 0 3vh rgba(0, 0, 0, 0.9)",
        insetShadow6xl: "inset 0 0 3.5vh rgba(0, 0, 0, 0.9)",
        insetGlowSm: "inset 0 0 0.3vh rgba(255, 255, 255, 0.9)",
        insetGlowMd: "inset 0 0 0.6vh rgba(255, 255, 255, 0.9)",
        insetGlowLg: "inset 0 0 0.9vh rgba(255, 255, 255, 0.9)",
        insetGlowXl: "inset 0 0 1.2vh rgba(255, 255, 255, 0.9)",
        insetGlowXxl: "inset 0 0 1.5vh rgba(255, 255, 255, 0.9)",
        insetGlow3xl: "inset 0 0 2vh rgba(255, 255, 255, 0.9)",
        insetGlow4xl: "inset 0 0 2.5vh rgba(255, 255, 255, 0.9)",
        insetGlow5xl: "inset 0 0 3vh rgba(255, 255, 255, 0.9)",
        insetGlow6xl: "inset 0 0 3.5vh rgba(255, 255, 255, 0.9)",
        lightShadowTight: "0.2vh 0.2vh 0.3vh rgba(240, 240, 240, 0.9)",
        lightShadowNormal: "0.2vh 0.2vh 0.6vh rgba(240, 240, 240, 0.9)",
        lightShadowLoose: "0.2vh 0.2vh 0.9vh rgba(240, 240, 240, 0.9)",
        lightShadowLooser: "0.2vh 0.2vh 1.2vh rgba(240, 240, 240, 0.9)",
        standoutShadowSm: "rgb(38, 57, 77) 0px 0.3vh 1.5vh -0.4vh",
        standoutShadowMd: "rgb(38, 57, 77) 0px 0.5vh 2.5vh -0.4vh",
        standoutShadowLg: "rgb(38, 57, 77) 0px 1vh 4.5vh -0.6vh",
        standoutShadowXl: "rgb(38, 57, 77) 0px 0.8vh 3.5vh -0.5vh",
        shadow3DXs:
          "rgba(0, 0, 0, 0.17) 0px -0.1vh 0.1vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.15vh 0.15vh 0px inset, rgba(0, 0, 0, 0.1) 0px -0.4vh 0.2vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.01vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.02vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.02vh, rgba(0, 0, 0, 0.09) 0px -0.05vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.15vh 0.1vh",
        shadow3DSm:
          "rgba(0, 0, 0, 0.17) 0px -0.3vh 0.3vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.3vh 0.3vh 0px inset, rgba(0, 0, 0, 0.1) 0px -0.8vh 0.4vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.02vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.04vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.3vh 0.2vh",
        shadow3DMd:
          "rgba(0, 0, 0, 0.17) 0px -0.6vh 0.6vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.45vh 0.45vh 0px inset, rgba(0, 0, 0, 0.1) 0px -1.2vh 0.6vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.1vh 0.5vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.3vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.15vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.4vh 0.3vh",
        shadow3DLg:
          "rgba(0, 0, 0, 0.17) 0px -0.9vh 0.9vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.6vh 0.6vh 0px inset, rgba(0, 0, 0, 0.1) 0px -1.6vh 0.8vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.03vh 0.6vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.4vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.5vh 0.4vh",
        shadow3DXl:
          "rgba(0, 0, 0, 0.17) 0px -2vh 2vh 0px inset, rgba(0, 0, 0, 0.15) 0px -3vh 3vh 0px inset, rgba(0, 0, 0, 0.1) 0px -8vh 4vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.2vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.5vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.8vh 0.4vh, rgba(0, 0, 0, 0.09) 0px -1.5vh 0.8vh, rgba(0, 0, 0, 0.09) 0px -3vh 2vh",
        lightGlowSm: "0 0 0.1vh #FFF, 0 0 1px #ebd7d5, 0 0 0.3vh #FFF",
        lightGlowMd: "0 0 0.2vh #FFF, 0 0 2px #ebd7d5, 0 0 0.6vh #FFF",
        lightGlowLg: "0 0 0.3vh #FFF, 0 0 3px #ebd7d5, 0 0 0.9vh #FFF",
        lightGlowXl: "0 0 0.4vh #FFF, 0 0 4px #ebd7d5, 0 0 1.2vh #FFF",
        boxGlowSm:
          "#00FFFF 0px 0px 0.2vh, #00FFFF 0px 0px 0.4vh, #FFF 0px 0px 0.6vh, #d5f5f0 0px 0px 0.8vh, #d5f5f0 0px 0px 1.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowMd:
          "#00FFFF 0px 0px 0.3vh, #00FFFF 0px 0px 0.6vh, #FFF 0px 0px 0.9vh, #d5f5f0 0px 0px 1.2vh, #d5f5f0 0px 0px 1.8vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowLg:
          "#00FFFF 0px 0px 0.5vh, #00FFFF 0px 0px 1vh, #FFF 0px 0px 1.5vh, #d5f5f0 0px 0px 2vh, #d5f5f0 0px 0px 3vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowXl:
          "#00FFFF 0px 0px 0.7vh, #00FFFF 0px 0px 1.4vh, #FFF 0px 0px 2.1vh, #d5f5f0 0px 0px 2.8vh, #d5f5f0 0px 0px 4.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesSm:
          "#000 0.05vh 0.05vh 0.05vh, black 0px 0px 0.2vh, #FFF 0px 0px 0.1vh, #FFF 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, #FFF 0px 0px 0.4vh, #FFF 0px 0px 0.5vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesMd:
          "#000 0.1vh 0.1vh 0.1vh, white 0px 0px 0.1vh, rgb(208, 226, 242) 0px 0px 0.2vh, #00FFFF 0px 0px 0.3vh, #FFF 0px 0px 0.4vh, #e3fcf9 0px 0px 0.5vh, #e3fcf9 0px 0px 0.6vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesLg:
          "#000 0.2vh 0.2vh 0.2vh, white 0px 0px 0.2vh, #00FFFF 0px 0px 4px, #00FFFF 0px 0px 6px, #FFF 0px 0px 8px, #d5f5f0 0px 0px 1vh, #d5f5f0 0px 0px 1.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesXl:
          "#000 0.3vh 0.3vh 0.3vh, white 0px 0px 0.3vh, #00FFFF 0px 0px 0.6vh, #00FFFF 0px 0px 0.9vh, #FFF 0px 0px 1vh, #d5f5f0 0px 0px 1.2vh, #d5f5f0 0px 0px 1.4vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
      },
      textShadow: {
        noShadow: "none",
        none: "",
        lightTextShadow: "0.1vh 0.1vh 0.3vh rgba(255, 255, 255, 0.9)",
        textShadow: "0.2vh 0.2vh 0.2vh rgba(0, 0, 0, 0.9)",
        subtleTextShadow: "0.1vh 0.1vh 0.2vh rgba(0, 0, 0, 0.9)",
        standoutTextShadow: "0.3vh 0.3vh 0.4vh rgba(0, 0, 0, 0.9)",
        textFog:
          "0 0 0.5vh #000, 0 0 1vh #000, 0 0 1.5vh #000, 0 0 1vh #000, 0 0 3vh #000, 0 0 4vh #575757, 0 0 5.5vh #5E5E5E, 0 0 7.5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlow:
          "#00FFFF 0px 0px 0.5vh, #00FFFF 0px 0px 1vh, #FFF 0px 0px 1.5vh, rgb(208, 226, 242) 0px 0px 1vh, rgb(208, 226, 242) 0px 0px 1vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boldText:
          "#000 0.05vh 0.05vh 0.05vh, black 0px 0px 0.5vh,  #FFF 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, #FFF 0px 0px 1.2vh, #FFF 0px 0px 0.4vh, #FFF 0px 0px 0.5vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boldTextGlow:
          "#000 0.1vh 0.1vh 0.1vh, white 0px 0px 0.7vh,  #00FFFF 0px 0px 0.8vh, #00FFFF 0px 0px 1vh, #FFF 0px 0px 1.5vh, #FF2D95 0px 0px 1vh, #FF2D95 0px 0px 3vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
      },
      textStrokeWidth: {
        1: "0.02vh",
        2: "0.03vh",
        3: "0.04vh",
        4: "0.05vh",
        5: "0.06vh",
        6: "0.07vh",
        7: "0.08vh",
        8: "0.09vh",
        9: "0.1vh",
        10: "0.11vh",
        11: "0.12vh",
        12: "0.13vh",
        13: "0.14vh",
        14: "0.15vh",
        15: "0.16vh",
        16: "0.17vh",
        17: "0.18vh",
        18: "0.19vh",
        19: "0.2vh",
        20: "0.21vh",
      },
      textStrokeColor: {
        white: "#FFF",
        100: "rgba(255, 245, 216, 1)",
        170: "rgba(255, 245, 216, 0.7)",
        180: "rgba(255, 245, 216, 0.8)",
        190: "rgba(255, 245, 216, 0.9)",

        200: "rgba(255, 233, 122, 1)",
        270: "rgba(255, 233, 122, 0.7)",
        280: "rgba(255, 233, 122, 0.8)",
        290: "rgba(255, 233, 122, 0.9)",

        300: "rgba(243, 220, 149, 1)",
        370: "rgba(243, 220, 149, 0.7)",
        380: "rgba(243, 220, 149, 0.8)",
        390: "rgba(243, 220, 149, 0.9)",

        400: "rgba(255, 171, 100, 1)",
        470: "rgba(255, 171, 100, 0.7)",
        480: "rgba(255, 171, 100, 0.8)",
        490: "rgba(255, 171, 100, 0.9)",

        500: "rgba(84, 123, 171, 1)",
        570: "rgba(84, 123, 171, 0.7)",
        580: "rgba(84, 123, 171, 0.8)",
        590: "rgba(84, 123, 171, 0.9)",

        black: "#000",

        600: "rgba(2, 175, 168, 1)",
        670: "rgba(2, 175, 168, 0.7)",
        680: "rgba(2, 175, 168, 0.8)",
        690: "rgba(2, 175, 168, 0.9)",

        700: "rgba(0, 149, 211, 1)",
        770: "rgba(0, 149, 211, 0.7)",
        780: "rgba(0, 149, 211, 0.8)",
        790: "rgba(0, 149, 211, 0.9)",

        800: "rgba(2, 48, 89, 1)",
        870: "rgba(2, 48, 89, 0.7)",
        880: "rgba(2, 48, 89, 0.8)",
        890: "rgba(2, 48, 89, 0.9)",

        900: "rgba(8, 13, 38, 1)",
        970: "rgba(8, 13, 38, 0.7)",
        980: "rgba(8, 13, 38, 0.8)",
        990: "rgba(8, 13, 38, 0.9)",
      },
      backgroundImage: {
        // FadeOut Gradients
        fadeOut900Op07:
          "radial-gradient(circle, rgba(1, 17, 38, 0.7), rgba(1, 17, 38, 0))",
        fadeOut900Op05:
          "radial-gradient(circle, rgba(1, 17, 38, 0.5), rgba(1, 17, 38, 0))",
        fadeOut900Op03:
          "radial-gradient(circle, rgba(1, 17, 38, 0.3), rgba(1, 17, 38, 0))",
        fadeOut800Op07:
          "radial-gradient(circle, rgba(1, 42, 94, 0.7), rgba(1, 42, 94, 0))",
        fadeOut800Op05:
          "radial-gradient(circle, rgba(1, 42, 94, 0.5), rgba(1, 42, 94, 0))",
        fadeOut800Op03:
          "radial-gradient(circle, rgba(1, 42, 94, 0.3), rgba(1, 42, 94, 0))",
        fadeOut700Op07:
          "radial-gradient(circle, rgba(41, 60, 84, 0.7), rgba(41, 60, 84, 0))",
        fadeOut700Op05:
          "radial-gradient(circle, rgba(41, 60, 84, 0.5), rgba(41, 60, 84, 0))",
        fadeOut700Op03:
          "radial-gradient(circle, rgba(41, 60, 84, 0.3), rgba(41, 60, 84, 0))",
        fadeOut600Op07:
          "radial-gradient(circle, rgba(97, 116, 140, 0.7), rgba(97, 116, 140, 0))",
        fadeOut600Op05:
          "radial-gradient(circle, rgba(97, 116, 140, 0.5), rgba(97, 116, 140, 0))",
        fadeOut600Op03:
          "radial-gradient(circle, rgba(97, 116, 140, 0.3), rgba(97, 116, 140, 0))",
        fadeOut500Op07:
          "radial-gradient(circle, rgba(84, 123, 171, 0.7), rgba(84, 123, 171, 0))",
        fadeOut500Op05:
          "radial-gradient(circle, rgba(84, 123, 171, 0.5), rgba(84, 123, 171, 0))",
        fadeOut500Op03:
          "radial-gradient(circle, rgba(84, 123, 171, 0.3), rgba(84, 123, 171, 0))",
        fadeOut400Op07:
          "radial-gradient(circle, rgba(167, 189, 217, 0.7), rgba(167, 189, 217, 0))",
        fadeOut400Op05:
          "radial-gradient(circle, rgba(167, 189, 217, 0.5), rgba(167, 189, 217, 0))",
        fadeOut400Op03:
          "radial-gradient(circle, rgba(167, 189, 217, 0.3), rgba(167, 189, 217, 0))",
        fadeOut300Op07:
          "radial-gradient(circle, rgba(217, 181, 173, 0.7), rgba(217, 181, 173, 0))",
        fadeOut300Op05:
          "radial-gradient(circle, rgba(217, 181, 173, 0.5), rgba(217, 181, 173, 0))",
        fadeOut300Op03:
          "radial-gradient(circle, rgba(217, 181, 173, 0.3), rgba(217, 181, 173, 0))",
        fadeOut200Op07:
          "radial-gradient(circle, rgba(208, 226, 242, 0.7), rgba(208, 226, 242, 0))",
        fadeOut200Op05:
          "radial-gradient(circle, rgba(208, 226, 242, 0.5), rgba(208, 226, 242, 0))",
        fadeOut200Op03:
          "radial-gradient(circle, rgba(208, 226, 242, 0.3), rgba(208, 226, 242, 0))",
        fadeOut100Op07:
          "radial-gradient(circle, rgba(228, 237, 245, 0.7), rgba(228, 237, 245, 0))",
        fadeOut100Op05:
          "radial-gradient(circle, rgba(228, 237, 245, 0.5), rgba(228, 237, 245, 0))",
        fadeOut100Op03:
          "radial-gradient(circle, rgba(228, 237, 245, 0.3), rgba(228, 237, 245, 0))",
        // Linear Gradients
        linear1:
          "linear-gradient(to top, rgba(228, 237, 245, 1), rgba(208, 226, 242, 1))",
        linear1op25:
          "linear-gradient(to top, rgba(228, 237, 245, 0.25), rgba(208, 226, 242, 0.25))",
        linear1op50:
          "linear-gradient(to top, rgba(228, 237, 245, 0.5), rgba(208, 226, 242, 0.5))",
        linear1op75:
          "linear-gradient(to top, rgba(228, 237, 245, 0.75), rgba(208, 226, 242, 0.75))",

        linear2:
          "linear-gradient(to bottom, rgba(217, 181, 173, 1), rgba(167, 189, 217, 1))",
        linear2op25:
          "linear-gradient(to bottom, rgba(217, 181, 173, 0.25), rgba(167, 189, 217, 0.25))",
        linear2op50:
          "linear-gradient(to bottom, rgba(217, 181, 173, 0.5), rgba(167, 189, 217, 0.5))",
        linear2op75:
          "linear-gradient(to bottom, rgba(217, 181, 173, 0.75), rgba(167, 189, 217, 0.75))",

        linear3:
          "linear-gradient(to right, rgba(84, 123, 171, 1), rgba(97, 116, 140, 1))",
        linear3op25:
          "linear-gradient(to right, rgba(84, 123, 171, 0.25), rgba(97, 116, 140, 0.25))",
        linear3op50:
          "linear-gradient(to right, rgba(84, 123, 171, 0.5), rgba(97, 116, 140, 0.5))",
        linear3op75:
          "linear-gradient(to right, rgba(84, 123, 171, 0.75), rgba(97, 116, 140, 0.75))",

        linear4:
          "linear-gradient(to left, rgba(41, 60, 84, 1), rgba(97, 116, 140, 1))",
        linear4op25:
          "linear-gradient(to left, rgba(41, 60, 84, 0.25), rgba(97, 116, 140, 0.25))",
        linear4op50:
          "linear-gradient(to left, rgba(41, 60, 84, 0.5), rgba(97, 116, 140, 0.5))",
        linear4op75:
          "linear-gradient(to left, rgba(41, 60, 84, 0.75), rgba(97, 116, 140, 0.75))",

        linear5:
          "linear-gradient(to top, rgba(97, 116, 140, 1), rgba(41, 60, 84, 1))",
        linear5op25:
          "linear-gradient(to top, rgba(97, 116, 140, 0.25), rgba(41, 60, 84, 0.25))",
        linear5op50:
          "linear-gradient(to top, rgba(97, 116, 140, 0.5), rgba(41, 60, 84, 0.5))",
        linear5op75:
          "linear-gradient(to top, rgba(97, 116, 140, 0.75), rgba(41, 60, 84, 0.75))",

        linear6:
          "linear-gradient(to bottom, rgba(1, 42, 94, 1), rgba(1, 17, 38, 1))",
        linear6op25:
          "linear-gradient(to bottom, rgba(1, 42, 94, 0.25), rgba(1, 17, 38, 0.25))",
        linear6op50:
          "linear-gradient(to bottom, rgba(1, 42, 94, 0.5), rgba(1, 17, 38, 0.5))",
        linear6op75:
          "linear-gradient(to bottom, rgba(1, 42, 94, 0.75), rgba(1, 17, 38, 0.75))",

        // Diagonal Gradients
        diagonal1:
          "linear-gradient(45deg, rgba(228, 237, 245, 1), rgba(217, 181, 173, 1))",
        diagonal1op25:
          "linear-gradient(45deg, rgba(228, 237, 245, 0.25), rgba(217, 181, 173, 0.25))",
        diagonal1op50:
          "linear-gradient(45deg, rgba(228, 237, 245, 0.5), rgba(217, 181, 173, 0.5))",
        diagonal1op75:
          "linear-gradient(45deg, rgba(228, 237, 245, 0.75), rgba(217, 181, 173, 0.75))",

        diagonal2:
          "linear-gradient(45deg, rgba(208, 226, 242, 1), rgba(167, 189, 217, 1))",
        diagonal2op25:
          "linear-gradient(45deg, rgba(208, 226, 242, 0.25), rgba(167, 189, 217, 0.25))",
        diagonal2op50:
          "linear-gradient(45deg, rgba(208, 226, 242, 0.5), rgba(167, 189, 217, 0.5))",
        diagonal2op75:
          "linear-gradient(45deg, rgba(208, 226, 242, 0.75), rgba(167, 189, 217, 0.75))",

        diagonal3:
          "linear-gradient(45deg, rgba(84, 123, 171, 1), rgba(41, 60, 84, 1))",
        diagonal3op25:
          "linear-gradient(45deg, rgba(84, 123, 171, 0.25), rgba(41, 60, 84, 0.25))",
        diagonal3op50:
          "linear-gradient(45deg, rgba(84, 123, 171, 0.5), rgba(41, 60, 84, 0.5))",
        diagonal3op75:
          "linear-gradient(45deg, rgba(84, 123, 171, 0.75), rgba(41, 60, 84, 0.75))",

        diagonal4:
          "linear-gradient(45deg, rgba(97, 116, 140, 1), rgba(1, 42, 94, 1))",
        diagonal4op25:
          "linear-gradient(45deg, rgba(97, 116, 140, 0.25), rgba(1, 42, 94, 0.25))",
        diagonal4op50:
          "linear-gradient(45deg, rgba(97, 116, 140, 0.5), rgba(1, 42, 94, 0.5))",
        diagonal4op75:
          "linear-gradient(45deg, rgba(97, 116, 140, 0.75), rgba(1, 42, 94, 0.75))",

        diagonal5:
          "linear-gradient(45deg, rgba(217, 181, 173, 1), rgba(84, 123, 171, 1))",
        diagonal5op25:
          "linear-gradient(45deg, rgba(217, 181, 173, 0.25), rgba(84, 123, 171, 0.25))",
        diagonal5op50:
          "linear-gradient(45deg, rgba(217, 181, 173, 0.5), rgba(84, 123, 171, 0.5))",
        diagonal5op75:
          "linear-gradient(45deg, rgba(217, 181, 173, 0.75), rgba(84, 123, 171, 0.75))",

        diagonal6:
          "linear-gradient(45deg, rgba(167, 189, 217, 1), rgba(97, 116, 140, 1))",
        diagonal6op25:
          "linear-gradient(45deg, rgba(167, 189, 217, 0.25), rgba(97, 116, 140, 0.25))",
        diagonal6op50:
          "linear-gradient(45deg, rgba(167, 189, 217, 0.5), rgba(97, 116, 140, 0.5))",
        diagonal6op75:
          "linear-gradient(45deg, rgba(167, 189, 217, 0.75), rgba(97, 116, 140, 0.75))",

        // Radial Gradients
        radial1:
          "radial-gradient(circle, rgba(208, 226, 242, 1) 0%, rgba(167, 189, 217, 1) 100%)",
        radial1op25:
          "radial-gradient(circle, rgba(208, 226, 242, 0.25) 0%, rgba(167, 189, 217, 0.25) 100%)",
        radial1op50:
          "radial-gradient(circle, rgba(208, 226, 242, 0.5) 0%, rgba(167, 189, 217, 0.5) 100%)",
        radial1op75:
          "radial-gradient(circle, rgba(208, 226, 242, 0.75) 0%, rgba(167, 189, 217, 0.75) 100%)",

        radial2:
          "radial-gradient(circle, rgba(217, 181, 173, 1) 0%, rgba(167, 189, 217, 1) 100%)",
        radial2op25:
          "radial-gradient(circle, rgba(217, 181, 173, 0.25) 0%, rgba(167, 189, 217, 0.25) 100%)",
        radial2op50:
          "radial-gradient(circle, rgba(217, 181, 173, 0.5) 0%, rgba(167, 189, 217, 0.5) 100%)",
        radial2op75:
          "radial-gradient(circle, rgba(217, 181, 173, 0.75) 0%, rgba(167, 189, 217, 0.75) 100%)",

        radial3:
          "radial-gradient(circle, rgba(84, 123, 171, 1) 0%, rgba(97, 116, 140, 1) 100%)",
        radial3op25:
          "radial-gradient(circle, rgba(84, 123, 171, 0.25) 0%, rgba(97, 116, 140, 0.25) 100%)",
        radial3op50:
          "radial-gradient(circle, rgba(84, 123, 171, 0.5) 0%, rgba(97, 116, 140, 0.5) 100%)",
        radial3op75:
          "radial-gradient(circle, rgba(84, 123, 171, 0.75) 0%, rgba(97, 116, 140, 0.75) 100%)",

        radial4:
          "radial-gradient(circle, rgba(167, 189, 217, 1) 0%, rgba(208, 226, 242, 1) 100%)",
        radial4op25:
          "radial-gradient(circle, rgba(167, 189, 217, 0.25) 0%, rgba(208, 226, 242, 0.25) 100%)",
        radial4op50:
          "radial-gradient(circle, rgba(167, 189, 217, 0.5) 0%, rgba(208, 226, 242, 0.5) 100%)",
        radial4op75:
          "radial-gradient(circle, rgba(167, 189, 217, 0.75) 0%, rgba(208, 226, 242, 0.75) 100%)",

        radial5:
          "radial-gradient(circle, rgba(84, 123, 171, 1) 0%, rgba(217, 181, 173, 1) 100%)",
        radial5op50:
          "radial-gradient(circle, rgba(84, 123, 171, 0.5) 0%, rgba(217, 181, 173, 0.5) 100%)",
        radial5op75:
          "radial-gradient(circle, rgba(84, 123, 171, 0.75) 0%, rgba(217, 181, 173, 0.75) 100%)",

        radial6:
          "radial-gradient(circle, rgba(41, 60, 84, 1) 0%, rgba(1, 42, 94, 1) 100%)",
        radial6op25:
          "radial-gradient(circle, rgba(41, 60, 84, 0.25) 0%, rgba(1, 42, 94, 0.25) 100%)",
        radial6op50:
          "radial-gradient(circle, rgba(41, 60, 84, 0.5) 0%, rgba(1, 42, 94, 0.5) 100%)",
        radial6op75:
          "radial-gradient(circle, rgba(41, 60, 84, 0.75) 0%, rgba(1, 42, 94, 0.75) 100%)",
      },
      borderRadius: {
        xxs: "0.3vh",
        xs: "0.5vh",
        sm: "0.7vh",
        md: "1vh",
        lg: "1.5vh",
        xl: "2vh",
        xxl: "3vh",
        xxxl: "4vh",
        full: "100%",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeOutUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        fadeOutDown: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(100%)" },
        },
        fadeOutRight: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        fadeOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rotateUp: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(360deg)" },
        },
        rotateDown: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(-360deg)" },
        },
        rotateLeft: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        rotateRight: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(-360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        scaleUpLeft: {
          "0%": { transform: "scale(0) translateX(0)" },
          "100%": { transform: "scale(1) translateX(-50%)" },
        },
        scaleUpRight: {
          "0%": { transform: "scale(0) translateX(0)" },
          "100%": { transform: "scale(1) translateX(50%)" },
        },
        scaleDownLeft: {
          "0%": { transform: "scale(1) translateX(0)" },
          "100%": { transform: "scale(0) translateX(-50%)" },
        },
        scaleDownRight: {
          "0%": { transform: "scale(1) translateX(0)" },
          "100%": { transform: "scale(0) translateX(50%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInUp50vh: {
          "0%": { transform: "translateY(50vh)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideOutDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideUpLeft: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%) translateX(-100%)" },
        },
        slideUpRight: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%) translateX(100%)" },
        },
        slideDownLeft: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%) translateX(-100%)" },
        },
        slideDownRight: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%) translateX(100%)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: 1 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        },
        rippleUp: {
          "0%": { transform: "scale(0.8) translateY(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateY(-50%)", opacity: 0 },
        },
        rippleDown: {
          "0%": { transform: "scale(0.8) translateY(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateY(50%)", opacity: 0 },
        },
        rippleLeft: {
          "0%": { transform: "scale(0.8) translateX(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateX(-50%)", opacity: 0 },
        },
        rippleRight: {
          "0%": { transform: "scale(0.8) translateX(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateX(50%)", opacity: 0 },
        },
        // Define keyframes for diagonal directions
        rippleUpLeft: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(-50%, -50%)",
            opacity: 0,
          },
        },
        rippleUpRight: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(50%, -50%)",
            opacity: 0,
          },
        },
        rippleDownLeft: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(-50%, 50%)",
            opacity: 0,
          },
        },
        rippleDownRight: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translate(50%, 50%)", opacity: 0 },
        },
        hueRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        hueRotateUp: {
          "0%": { transform: "translateY(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateY(-50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateDown: {
          "0%": { transform: "translateY(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateY(50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateLeft: {
          "0%": { transform: "translateX(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateX(-50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateRight: {
          "0%": { transform: "translateX(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateX(50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(1vh)" },
        },
        vibrateUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(1vh)" },
        },
        vibrateDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(-1vh)" },
        },
        vibrateLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(1vh)" },
        },
        vibrateRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(-1vh)" },
        },
        vibrateUpLeft: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-1vh, -1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(1vh, 1vh)" },
        },
        vibrateUpRight: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(1vh, -1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(-1vh, 1vh)" },
        },
        vibrateDownLeft: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-1vh, 1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(1vh, -1vh)" },
        },
        vibrateDownRight: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(1vh, 1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(-1vh, -1vh)" },
        },
        raindrop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        fadeIn: "fadeIn 1.5s ease-out",
        fadeOut: "fadeOut 1.5s ease-out",
        fadeInUp: "fadeInUp 1.5s ease-out",
        fadeInDown: "fadeInDown 1.5s ease-out",
        fadeInRight: "fadeInRight 1.5s ease-out",
        fadeInLeft: "fadeInLeft 1.5s ease-out",
        fadeOutUp: "fadeOutUp 1.5s ease-out",
        fadeOutDown: "fadeOutDown 1.5s ease-out",
        fadeOutRight: "fadeOutRight 1.5s ease-out",
        fadeOutLeft: "fadeOutLeft 1.5s ease-out",
        rotate: "rotate 2s linear infinite",
        rotateUp: "rotateUp 1.5s linear infinite",
        rotateDown: "rotateDown 1.5s linear infinite",
        rotateLeft: "rotateLeft 1.5s linear infinite",
        rotateRight: "rotateRight 1.5s linear infinite",
        scaleUp: "scaleUp 1.5s ease-out",
        scaleDown: "scaleDown 1.5s ease-out",
        scaleUpLeft: "scaleUpLeft 1.5s ease-out",
        scaleUpRight: "scaleUpRight 1.5s ease-out",
        scaleDownLeft: "scaleDownLeft 1.5s ease-out",
        scaleDownRight: "scaleDownRight 1.5s ease-out",
        slideUp: "slideUp 1.5s ease-out",
        slideDown: "slideDown 1.5s ease-out",
        slideLeft: "slideLeft 1.5s ease-out",
        slideRight: "slideRight 1.5s ease-out",
        slideInUp: "slideInUp 1.5s ease-out",
        slideInUp50vh: "slideInUp50vh 1.5s ease-out",
        slideInDown: "slideInDown 1.5s ease-out",
        slideInRight: "slideInRight 1.5s ease-out",
        slideInLeft: "slideInLeft 1.5s ease-out",
        slideOutUp: "slideOutUp 1.5s ease-out",
        slideOutDown: "slideOutDown 1.5s ease-out",
        slideUpLeft: "slideUpLeft 1.5s ease-out",
        slideUpRight: "slideUpRight 1.5s ease-out",
        slideDownLeft: "slideDownLeft 1.5s ease-out",
        slideDownRight: "slideDownRight 1.5s ease-out",
        zoomIn: "zoomIn 1.5s ease-out",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        ripple: "ripple 1.5s linear infinite",
        rippleUp: "rippleUp 1.5s linear infinite",
        rippleDown: "rippleDown 1.5s linear infinite",
        rippleLeft: "rippleLeft 1.5s linear infinite",
        rippleRight: "rippleRight 1.5s linear infinite",
        rippleUpLeft: "rippleUpLeft 1.5s linear infinite",
        rippleUpRight: "rippleUpRight 1.5s linear infinite",
        rippleDownLeft: "rippleDownLeft 1.5s linear infinite",
        rippleDownRight: "rippleDownRight 1.5s linear infinite",
        hueRotate: "hueRotate 3s linear infinite",
        hueRotateUp: "hueRotateUp 3s linear infinite",
        hueRotateDown: "hueRotateDown 3s linear infinite",
        hueRotateLeft: "hueRotateLeft 3s linear infinite",
        hueRotateRight: "hueRotateRight 3s linear infinite",
        vibrate: "vibrate 1.5s infinite",
        vibrateUp: "vibrateUp 1.5s infinite",
        vibrateDown: "vibrateDown 1.5s infinite",
        vibrateLeft: "vibrateLeft 1.5s infinite",
        vibrateRight: "vibrateRight 1.5s infinite",
        vibrateUpLeft: "vibrateUpLeft 1.5s infinite",
        vibrateUpRight: "vibrateUpRight 1.5s infinite",
        vibrateDownLeft: "vibrateDownLeft 1.5s infinite",
        vibrateDownRight: "vibrateDownRight 1.5s infinite",
        rain: "raindrop 1s linear infinite",
      },
      transitionTimingFunction: {
        elastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
        "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
        "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
        "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
        "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
        "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "snail-pace": "cubic-bezier(0.2, 0.1, 0.3, 0.2)",
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "elastic-start": "cubic-bezier(0.75, -0.5, 0.25, 1.75)",
        "sharp-snap": "cubic-bezier(0.9, 0.1, 0.1, 0.1)",
        "slow-mo": "cubic-bezier(0.05, 0.85, 0.15, 1)",
      },
    },
  },
  variants: {
    // Enable variants for text shadow if needed
    textShadow: ["responsive", "hover", "focus"],
  },
  plugins: [
    // TEXT SHADOW PLUGIN
    plugin(function ({ addUtilities, theme }) {
      const textShadows = theme("textShadow");
      const newUtilities = {};

      Object.keys(textShadows).forEach((key) => {
        // Skip HD keys to prevent duplication
        if (key.endsWith("HD")) return;

        const normalValue = textShadows[key];
        const hdKey = `${key}HD`;
        const hdValue = textShadows[hdKey];

        // Normal utility
        newUtilities[`.${key}`] = {
          textShadow: normalValue,
        };

        // HD utility with a media query
        if (hdValue) {
          newUtilities[`@media (min-width: 1920px)`] = {
            ...newUtilities[`@media (min-width: 1920px)`],
            [`.${key}`]: {
              textShadow: hdValue,
            },
          };
        }
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // TEXT STROKE PLUGIN
    plugin(function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      const strokeWidths = theme("textStrokeWidth", {});
      const strokeColors = theme("textStrokeColor", {});

      Object.keys(strokeWidths).forEach((widthKey) => {
        Object.keys(strokeColors).forEach((colorKey) => {
          const className = `.text-stroke-${widthKey}-${e(colorKey)}`;
          newUtilities[className] = {
            "-webkit-text-stroke-width": strokeWidths[widthKey],
            "-webkit-text-stroke-color": strokeColors[colorKey],
          };
        });
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // TRANSITIONS PLUGIN
    plugin(function ({ addUtilities }) {
      const transitionUtilities = {
        ".transition-300": {
          transition: "all 300ms ease-in-out",
        },
        ".transition-400": {
          transition: "all 400ms ease-in-out",
        },
        ".transition-500": {
          transition: "all 500ms ease-in-out",
        },
        ".transition-600": {
          transition: "all 600ms ease-in-out",
        },
        ".transition-700": {
          transition: "all 700ms ease-in-out",
        },
        ".transition-800": {
          transition: "all 800ms ease-in-out",
        },
        ".transition-900": {
          transition: "all 900ms ease-in-out",
        },
        ".transition-1000": {
          transition: "all 1000ms ease-in-out",
        },
        ".transition-1100": {
          transition: "all 1100ms ease-in-out",
        },
        ".transition-1200": {
          transition: "all 1200ms ease-in-out",
        },
        ".transition-1300": {
          transition: "all 1300ms ease-in-out",
        },
        ".transition-1400": {
          transition: "all 1400ms ease-in-out",
        },
        ".transition-1500": {
          transition: "all 1500ms ease-in-out",
        },
        ".transition-1600": {
          transition: "all 1600ms ease-in-out",
        },
        ".transition-1700": {
          transition: "all 1700ms ease-in-out",
        },
        ".transition-1800": {
          transition: "all 1800ms ease-in-out",
        },
        ".transition-1900": {
          transition: "all 1900ms ease-in-out",
        },
        ".transition-2000": {
          transition: "all 2000ms ease-in-out",
        },
      };
      addUtilities(transitionUtilities, ["responsive", "hover", "focus"]);
    }),
    // BOX SHADOW PLUGIN
    plugin(function ({ addUtilities, theme }) {
      const boxShadows = theme("boxShadow");
      const newUtilities = {};

      Object.keys(boxShadows).forEach((key) => {
        // Skip HD keys to prevent duplication
        if (key.endsWith("HD")) return;

        const normalValue = boxShadows[key];
        const hdKey = `${key}HD`;
        const hdValue = boxShadows[hdKey];

        // Normal utility
        newUtilities[`.${key}`] = {
          boxShadow: normalValue,
        };

        // HD utility with a media query
        if (hdValue) {
          newUtilities[`@media (min-width: 1920px)`] = {
            ...newUtilities[`@media (min-width: 1920px)`],
            [`.${key}`]: {
              boxShadow: hdValue,
            },
          };
        }
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // SCALE ITEM PLUGIN
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scale-item-xs": {
          "@apply hover:cursor-pointer hover:scale-101 transition-all duration-500":
            {},
        },
        ".scale-item-sm": {
          "@apply hover:cursor-pointer hover:scale-102 transition-all duration-500":
            {},
        },
        ".scale-item-md": {
          "@apply hover:cursor-pointer hover:scale-103 transition-all duration-500":
            {},
        },
        ".scale-item-lg": {
          "@apply hover:cursor-pointer hover:scale-104 transition-all duration-500":
            {},
        },
        ".scale-item-Looser": {
          "@apply hover:cursor-pointer hover:scale-105 transition-all duration-500":
            {},
        },
        ".scale-item-xxl": {
          "@apply hover:cursor-pointer hover:scale-107 transition-all duration-500":
            {},
        },
      };

      // Add the utilities to Tailwind
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    // OVERLAYS PLUGIN
    plugin(function ({ addBase, theme }) {
      addBase({
        ".defaultOverlay": {
          backgroundColor: theme("colors.col.850"), // Accessing your theme colors
          backdropFilter: "blur(4px)", // Example - use 'backdrop-blur-md' directly if appropriate
        },
        ".insetOverlay": {
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)", // Example - adjust as needed
          backgroundColor: theme("colors.col.930"),
        },
        ".defaultOverlayBlur": {
          backdropFilter: "blur(4px)",
        },
        ".imageOverlay": {
          backgroundImage:
            "linear-gradient(rgba(255, 233, 122, 0.4), rgba(255, 233, 122, 0.6)), url('/images/doathingbg2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
        ".defaultTextGradient": {
          backgroundImage:
            "linear-gradient(to right, #D0E2F2, #D9B5AD, #e4edf5,  #D9B5AD, #D0E2F2);",
        },
        ".butterflyFont": {
          fontFamily: "'Butterfly Kids', cursive",
        },
      });
    }),
    // INPUT AND TEXTAREA PLUGIN
    plugin(function ({ addComponents, theme }) {
      const newComponents = {
        ".inputStyles": {
          width: "100%", // Full width
          backgroundColor: theme("colors.col.200"),
          backgroundImage: theme("backgroundImage.diagonal1op25"),
          boxShadow: theme("boxShadow.insetShadowMd"),
          color: theme("colors.col.900"),
          padding: `0.4vh 1vh`,
          borderWidth: "0.2vh",
          borderStyle: "solid",
          borderColor: theme("colors.col.400"),
          outline: "none",
          "&:focus": {
            boxShadow: theme("boxShadow.insetShadowLg"),
            borderWidth: "0.2vh",
            borderColor: theme("colors.col.300"),
          },
          transition: "all 0.4s ease-in-out",
        },
        ".textareaStyles": {
          width: "100%", // Full width
          backgroundColor: theme("colors.col.200"),
          backgroundImage: theme("backgroundImage.diagonal1op25"),
          boxShadow: theme("boxShadow.insetShadowMd"),
          color: theme("colors.col.900"),
          padding: `0.4vh 1vh`,
          borderWidth: "0.2vh",
          borderStyle: "solid",
          borderColor: theme("colors.col.400"),
          outline: "none",
          "&:focus": {
            boxShadow: theme("boxShadow.insetShadowLg"),
            borderWidth: "0.2vh",
            borderColor: theme("colors.col.300"),
          },
          transition: "all 0.4s ease-in-out",
        },
      };

      addComponents(newComponents);
    }),
    // ELEMENTS and LINKS PLUGIN
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          scrollBehavior: "smooth",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          overflow: "hidden",
          borderFadius: "none",
          maxHeight: "100svh",
        },
        body: {
          color: theme("colors.col.100"),
          width: "100%",
          maxHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: '"Prompt", sans-serif',
          // backgroundImage: "url('/images/sitebackground.webp')",
          backgroundImage: "url('/images/sitebackground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: 0,
          position: "relative",
          overflow: "hidden",
          scrollBehavior: "smooth",
          borderRadius: "0px",
        },
        a: {
          textDecoration: "none",
          "&:focus": {
            outline: "none",
          },
        },
        p: {
          margin: 0,
          padding: 0,
          fontSize: "inherit",
        },
        h1: {
          fontSize: "5.5vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        h2: {
          fontSize: "4.5vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        h3: {
          fontSize: "3.5vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        h4: {
          fontSize: "2.5vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        h5: {
          fontSize: "2vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        h6: {
          fontSize: "1.7vh",
          lineHeight: 1.05,
          fontWight: 600,
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        table: {
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
          backgroundColor: theme("colors.col.410"),
          boxShadow: theme("boxShadow.shadowNarrowLoose"),
        },
        th: {
          textAlign: "center",
          padding: "0.5vh 1.5vh",
          backgroundColor: theme("colors.col.320"),
          borderRadius: "0px",
          borderBotom: `0.2vh solid ${theme("colors.col.300")}`,
        },
        td: {
          textAlign: "center",
          padding: "0.5vh 1.5vh",
        },
        span: {
          fontSize: "inherit",
        },
      });
    }),
    typographyPlugin,
    customBackgroundsPlugin,
    buttonStyles,
    customBordersPlugin,
    transitionTimingFunctionsPlugin,
    perspectivePlugin,
    rotateYPlugin,
    backfaceVisibilityPlugin,
    transformStyles,
  ],
};

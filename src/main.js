import "./style.css";






document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("custom-cursor");

  const colors = [
    "text-blue-500",
    "text-red-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];
  const bgColors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
  const textHoverColors = [
    "hover:text-blue-500",
    "hover:text-red-500",
    "hover:text-green-500",
    "hover:text-yellow-500",
    "hover:text-purple-500",
  ];
  const borderHoverColors = [
    "hover:border-blue-500",
    "hover:border-red-500",
    "hover:border-green-500",
    "hover:border-yellow-500",
    "hover:border-purple-500",
  ];
  const svgColors = [
    "fill-blue-500",
    "fill-red-500",
    "fill-green-500",
    "fill-yellow-500",
    "fill-purple-500",
  ];
  const placeholderColors = [
    "placeholder-blue-500",
    "placeholder-red-500",
    "placeholder-green-500",
    "placeholder-yellow-500",
    "placeholder-purple-500",
  ];
  const hexColors = ["#3B82F6", "#EF4444", "#10B981", "#EAB308", "#A855F7"];
  const cursorColor = ["#3B82F6", "#EF4444", "#10B981", "#EAB308", "#A855F7"];
  let currentIndex = 0; // To track the current color index

  function changeDotColors(dColor, gColor) {
    // Select the SVG elements inside the document
    const dDots = document.querySelectorAll(".t-dot");
    const gDots = document.querySelectorAll(".g-dot");
    const shed = document.querySelectorAll(".secondary-colour");

    // Change the fill color for d-dot elements
    dDots.forEach((dot) => {
      dot.setAttribute("fill", dColor); // Use "stroke" if it's a stroke-based SVG
    });
    shed.forEach((dot) => {
      dot.setAttribute("fill", dColor); // Use "stroke" if it's a stroke-based SVG
    });

    // Change the fill color for g-dot elements
    gDots.forEach((dot) => {
      dot.setAttribute("fill", gColor);
    });
  }

  // Function to update favicon dynamically based on the theme
  function dynamicColorShift(color) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="700.000000pt" height="700.000000pt" viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="${color}" stroke="none">
        <path d="M6 6052 c-3 -2 16 -97 40 -194 2 -10 6 -26 8 -35 2 -10 25 -108 51 -218 25 -110 48 -207 50 -215 2 -8 13 -55 24 -105 12 -49 30 -130 42 -180 11 -49 22 -97 24 -105 2 -8 13 -55 25 -105 12 -49 23 -100 26 -112 2 -12 47 -204 99 -425 112 -474 102 -433 114 -483 36 -159 187 -787 222 -922 45 -178 133 -399 218 -548 18 -33 42 -76 53 -95 30 -53 108 -170 143 -215 111 -143 162 -202 255 -296 134 -134 208 -197 348 -298 178 -127 343 -219 527 -296 50 -20 99 -41 110 -46 60 -27 314 -103 411 -124 95 -20 227 -45 264 -50 25 -3 56 -8 70 -10 14 -3 54 -7 90 -10 36 -3 79 -8 95 -11 17 -3 852 -7 1856 -8 l1826 -3 -8 41 c-4 23 -26 120 -49 216 -23 96 -43 184 -45 195 -6 26 -52 228 -76 330 -21 90 -59 252 -64 275 -2 8 -17 76 -35 150 -35 148 -34 144 -50 215 -6 28 -22 97 -36 155 -14 58 -28 116 -30 130 -3 14 -12 52 -21 85 -16 64 -21 85 -29 125 -3 14 -16 70 -29 125 -62 258 -137 572 -141 592 -2 12 -27 116 -55 230 -28 114 -53 218 -55 231 -10 52 -86 269 -126 360 -253 576 -713 1055 -1285 1335 -276 135 -639 246 -923 282 -25 3 -56 8 -70 10 -14 2 -54 7 -90 11 -36 3 -83 8 -105 11 -42 6 -3664 11 -3669 5z m4649 -1377 c39 -10 111 -37 162 -60 177 -83 298 -243 329 -435 2 -14 6 -35 9 -46 3 -15 -1 -23 -13 -26 -9 -2 -134 -3 -277 -3 l-259 1 -7 32 c-15 75 -78 112 -181 108 -118 -5 -182 -96 -128 -183 30 -49 101 -88 245 -134 370 -117 447 -152 547 -251 90 -90 135 -210 133 -353 -3 -165 -52 -290 -159 -403 -53 -56 -151 -125 -227 -160 -48 -21 -173 -56 -244 -67 -48 -7 -217 -8 -265 -1 -278 41 -490 186 -582 396 l-23 53 -26 -39 c-97 -146 -271 -278 -452 -341 -85 -30 -86 -30 -203 -46 -86 -13 -271 -14 -324 -3 -14 2 -48 9 -75 15 -28 5 -85 21 -127 35 -42 14 -79 26 -81 26 -2 0 -4 -139 -4 -308 0 -170 -2 -313 -5 -318 -5 -7 -494 -12 -541 -5 -10 1 -4 1675 6 1712 68 259 135 386 277 530 139 142 289 221 495 263 161 33 397 22 544 -25 121 -39 245 -107 340 -188 57 -48 163 -173 175 -206 6 -16 12 -9 31 39 85 208 262 343 526 401 85 18 291 13 384 -10z m1006 -1440 c191 -68 247 -313 104 -459 -180 -183 -493 -39 -473 218 15 183 197 301 369 241z"/>
        <path d="M2858 4165 c-2 -2 -23 -5 -48 -8 -115 -15 -217 -75 -286 -169 -68 -92 -95 -176 -95 -293 1 -347 335 -571 635 -424 97 48 172 126 217 228 28 63 34 102 34 206 -1 210 -119 376 -312 439 -42 13 -138 27 -145 21z"/>
        <path d="M3879 3723 c0 -4 -2 -46 -4 -93 -4 -71 -25 -172 -61 -297 l-6 -23 217 -2 217 -3 13 -38 c26 -77 100 -126 190 -127 75 0 125 18 167 60 34 33 38 43 38 87 0 45 -13 76 -45 109 -23 24 -136 73 -325 143 -207 76 -324 129 -371 168 -16 14 -29 21 -30 16z"/>
        </g>
      </svg>
    `;

    const encodedSvg = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    document.getElementById("dynamic-favicon").setAttribute("href", encodedSvg);
  }

  const updateDynamicColors = () => {
    // Select elements
    const dynamicElements = document.querySelectorAll(".dynamic-color");
    const bgElements = document.querySelectorAll(".dynamic-bg, .preloader");
    const emailInput = document.getElementById("email-input");
    const subscribeButton = document.getElementById("subscribe-button");
    const dynamicBg = document.getElementById("dynamic-bg");
    const dynamicHoverElements = document.querySelectorAll(".dynamic-hover");
    const animatedShapes = document.querySelectorAll("#animated-shape");

    // Remove only dynamic classes, keeping other necessary styles
    dynamicElements.forEach((el) => el.classList.remove(...colors));
    bgElements.forEach((el) => el.classList.remove(...bgColors));
    emailInput.classList.remove(...colors, ...placeholderColors);
    subscribeButton.classList.remove(...bgColors);
    dynamicBg.classList.remove(...bgColors);
    dynamicHoverElements.forEach((el) =>
      el.classList.remove(...textHoverColors, ...borderHoverColors)
    );
    animatedShapes.forEach((el) => el.classList.remove(...svgColors));

    // Apply new colors
    const selectedTextColor = colors[currentIndex];
    const selectedBgColor = bgColors[currentIndex];
    const selectedTextHover = textHoverColors[currentIndex];
    const selectedBorderHover = borderHoverColors[currentIndex];
    const selectedSvgColor = svgColors[currentIndex];
    const selectedPlaceholder = placeholderColors[currentIndex];
    const selectedHexColor = hexColors[currentIndex];
    const selectedCursorColor = cursorColor[currentIndex];

    // Apply new color classes without breaking other styles
    dynamicElements.forEach((el) => el.classList.add(selectedTextColor));
    bgElements.forEach((el) => el.classList.add(selectedBgColor));
    emailInput.classList.add(selectedTextColor, selectedPlaceholder);
    subscribeButton.classList.add(selectedBgColor);
    dynamicBg.classList.add(selectedBgColor);
    dynamicHoverElements.forEach((el) =>
      el.classList.add(selectedTextHover, selectedBorderHover)
    );
    animatedShapes.forEach((el) => el.classList.add(selectedSvgColor));

    // Update cursor color dynamically
    document.documentElement.style.setProperty(
      "--cursor-color",
      selectedCursorColor
    );

    // Update the favicon dynamically
    // dynamicColorShift(selectedCursorColor);

    // Update the favicon dynamically
    dynamicColorShift(selectedHexColor);

    setTimeout(() => {
      changeDotColors(selectedHexColor, selectedHexColor); // Change to orange and green
    }, 100);

    // Move to the next color, loop back when reaching the end
    currentIndex = (currentIndex + 1) % colors.length;
  };

  // Initial call
  updateDynamicColors();

  // Change color every 5 seconds
  setInterval(updateDynamicColors, 2000);

  // Move the cursor with mouse movement
  document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });
});

// founder's blob setup
document.addEventListener("DOMContentLoaded", function () {
  // Register MorphSVGPlugin
  let MorphSVGPlugin
  gsap.registerPlugin(MorphSVGPlugin);

  // Define the paths for morphing
  const maskPaths = [
    "M193.09 0.1 C109.19 -4.66 -58.55 214.66 20.84 302.31 95.99 380.82 135.51 309.24 189.81 306.26 280.76 304.54 291.95 370.99 332.59 333.22 336.46 324.43 393.79 256.46 335.76 137.83 310.95 85.69 290.48 41.14 263.72 22.59 238.33 5.22 221.12 1.77 193.09 0.1",
    "M58.29 44.07 C27.07 87.33 -29.12 184.7 18.28 249.54 47.4 64.84 77.19 92.34 146.82 89.52 116.82 -33.01 133.79 -47.56 91.85 -107.92 40.32 -195.07 295.08 21.78 243.31 2.71 221.04 -4.57 89.52 0.8 58.29 44.07 Z",
    "M191.86 0.06 C107.98 -4.12 -59.9 229.36 21.86 307.42 106.37 -11.44 154.86 -9.81 100.26 94.22 150.27 59.39 5.93 -4.4 76.28 -84.46 14.71 -214.14 -24.52 -54.49 -49.38 -102.45 -75.74 -119.87 223.53 1.91 191.86 0.06 Z",
  ];

  // Select the mask path
  const maskPath = document.getElementById("mask-path");

  let index = 0;

  function animateMask() {
    // Morph to the next path
    gsap.to(maskPath, {
      duration: 3, // Duration of each transition
      ease: "power1.inOut", // Smooth easing
      morphSVG: maskPaths[index], // Morph to the next path
      onComplete: () => {
        // Update the index for the next path
        index = (index + 1) % maskPaths.length;
        // Restart the animation
        animateMask();
      },
    });
  }

  // Start the animation
  animateMask();
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonials-slideshow li");
  let currentIndex = 0;

  function showNextTestimonial() {
    // Hide the current testimonial
    testimonials[currentIndex].classList.remove("active");

    // Move to the next testimonial (looping back if necessary)
    currentIndex = (currentIndex + 1) % testimonials.length;

    // Show the next testimonial
    testimonials[currentIndex].classList.add("active");
  }

  // Initially show the first testimonial
  testimonials[currentIndex].classList.add("active");

  // Set interval for automatic transition
  setInterval(showNextTestimonial, 5000); // Change every 5 seconds
});

const grids = document.querySelectorAll(".group");
const imageSets = [
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/d80/thumb_6329_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/ac7/thumb_6325_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/ad7/thumb_6336_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/665/thumb_6331_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/190/thumb_6330_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a19/thumb_6319_1920_1080_0_0_crop.jpg",
  ],
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/ad7/thumb_6336_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/665/thumb_6331_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/190/thumb_6330_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a19/thumb_6319_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
  ],
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/190/thumb_6330_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a19/thumb_6319_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/adb/thumb_6327_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/ad9/thumb_6326_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
  ],
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/adb/thumb_6327_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/ad9/thumb_6326_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
  ],
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/d80/thumb_6329_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/ac7/thumb_6325_1920_1080_0_0_crop.jpg",
  ],
  [
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/a0c/thumb_6318_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/a56/thumb_6335_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/d80/thumb_6329_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8b9/ac7/thumb_6325_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/ad7/thumb_6336_1920_1080_0_0_crop.jpg",
    "https://df93k41893ij1.cloudfront.net/uploads/public/605/8ba/665/thumb_6331_1920_1080_0_0_crop.jpg",
  ],
];

grids.forEach((grid, index) => {
  let img = grid.querySelector("img");
  let images = imageSets[index];
  let i = 0;
  grid.addEventListener("mouseenter", () => {
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      img.src = images[i];
    }, 500);
    grid.addEventListener("mouseleave", () => clearInterval(interval), {
      once: true,
    });
  });
});

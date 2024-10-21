import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  google,
  instagramLogo,
  facebookLogo,
  chatgpt,
  amazonAds,
  twitterAds,
  linkdin,
  googleColab,
  instagramColab,
  facebookColab,
  twitterColab,
  chatGptColab,
  pinterestColab,
  amazonAdsColab,
  SVG1,
  SVG2,
  SVG4,
  SVG3,
  SVG5,
  SVG6,
  SVG7,
  SVG8,
  SVG9,
  SVG10,
  SVG11,
  SVG12,
  SVG13,
  SVG14,
  YoutubeAds,
  YoutubeAdsColab,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Advertisements",
    url: "#advertisements",
  },
  {
    id: "2",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Service",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [google, instagramLogo, facebookLogo, twitterAds, amazonAds,YoutubeAds,linkdin];

export const brainwaveServices = [
  "Engaging Visual Content",
  "Visual Optimization for Maximum Impact",
  "Effortless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Worldwide Presence",
    text: "Expand your brand's reach with tailored digital marketing strategies that resonate globally, connecting you with diverse audiences and unlocking new opportunities for growth.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    svgUrl1 : SVG1,
    svgUrl2 : SVG2,
    svgUrl3 : SVG3,
    svgUrl4 : SVG4,
    svgText1 : "National SEO",
    svgText2 : "Local SEO",
    svgText3 : "Paid Media",
    svgText4 : "Social Media",
    colorful: true,
  },
  {
    id: "1",
    title: "Engage audiences",
    text: "Unlock the potential of authentic connections by captivating your audience, inspiring dialogue, and creating meaningful interactions that transform interest into loyalty and drive real results.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    svgUrl1 : SVG5,
    svgUrl2 : SVG3,
    svgUrl3 : SVG6,
    svgUrl4 : SVG7,
    svgText1 : "Content Writing",
    svgText2 : "Paid Media",
    svgText3 : "Email Marketing",
    svgText4 : "Amazon Marketing",
  },
  {
    id: "2",
    title: "Convert Ideas",
    text: "Transform innovative concepts into actionable strategies that drive results, turning interest into conversion by aligning audience needs with impactful solutions that deliver measurable success.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    svgUrl1 : SVG8,
    svgUrl2 : SVG9,
    svgUrl3 : SVG10,
    svgUrl4 : SVG12,
    svgText1 : "Web Development & Design",
    svgText2 : "Conversion Rate Optimization",
    svgText3 : "Best Offer Based Content",
    svgText4 : "High Growth",
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
    svgUrl1 : SVG11,
    svgUrl2 : SVG6,
    svgUrl3 : SVG13,
    svgUrl4 : SVG14,
    svgText1 : "Remarketing Services",
    svgText2 : "Email Nature",
    svgText3 : "Connect Through Glob",
    svgText4 : "Advertise It Well",

  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    // text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google",
    icon: googleColab,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Instagram",
    icon: instagramColab,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Facebook",
    icon: facebookColab,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Twitter",
    icon: twitterColab,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Chat Gpt",
    icon: YoutubeAdsColab,
    width: 40,
    height: 40,
  },
  {
    id: "6",
    title: "pinterest",
    icon: pinterestColab,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Amazon ads",
    icon: amazonAdsColab,
    width: 32,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: '50.00',
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Maximize Your Social Media Impact",
    text: "Targeted Ads, Engaging Content, Analytics & Growth, Influencer Partnerships ",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/ggsl5eykjn7soqyn8baq",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Dominate Search with Local & Global SEO",
    text: "Search Optimization, Local SEO, Global Reach, Data-Driven Results",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/decbjbdszcko01rcj9cz",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Drive Results with Smart Paid Media Strategies",
    text: "Targeted Ads, Multi-Platform Reach, Budget Optimization, Performance Tracking",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/y78i6fzrrwtzjyir6avv",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Build Authority with Strategic Content & PR",
    text: "Compelling Content, PR Campaigns, Storytelling, Media Outreach",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/nfsap9iuzzoc7y53aqef",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Elevate Your Brand with Unique Creative Solutions",
    text: "Brand Identity, Creative Design, Consistent Messaging, Custom Visuals",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/uj9uqm4xmmctfou67w3v",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Transform Ideas into Websites and Applications",
    text: "Custom Solutions, User-Centric Design, Responsive Development, Ongoing Support",
    backgroundUrl: "https://res.cloudinary.com/dioj9xjzc/image/upload/f_auto,q_auto/rvh8gyhubmzc7aodlqgb",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

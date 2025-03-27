import { assets } from "../assets/assets"

// export const databaseUrl = "http://localhost:8000"
export const databaseUrl = "https://portal.epahubb.com"
export const links = [
  {
    id: 1,
    name: "About Us",
    subLinks: [
      { name: "Why Epahubb", url: "#why-epahubb" },
      { name: "Features", url: "#features" },
      { name: "Integration", url: "#integration" },
      { name: "How It Works", url: "#how-it-works" },
      { name: "Best Solutions", url: "#best-solutions" },
      { name: "Testimonials", url: "#testimonials" },
      { name: "Faqs", url: "#faqs" },
      { name: "Contact Us", url: "#contact-us" },
    ],
  },
  { id: 2, name: "Features", subLinks: [] },
  {
    id: 3,
    name: "Products",
    subLinks: [
      { name: "Kromonline", url: "https://kromonline.com" },
      { name: "Teappos", url: "https://teappos.com" },
      { name: "Teahrm", url: "https://teahrm.com" },
      { name: "BuyData", url: "https://buydata.kromonline.com" },
      { name: "Epasmart", url: "https://epasmart.epahubb.com/" },
      { name: "Trufunder", url: "https://trufunder.io" },
      { name: "Malosaonline", url: "https://malosaonline.com" },
    ],
  },
  { id: 4, name: "FAQs", subLinks: [] },
]

export const customerReviews = [
  {
    name: "Elvis Justice",
    company: "CEO. Trufunder Prop Firm LTD",
    review:
      "I had my first-ever prop firm web application developed by Epahubb Consult, and guess what? It was absolutely worth it!'",
    image: `${assets.elvis}`,
  },
  {
    name: "Raphael Atta Agyei",
    company: "Holy Cross Catholic International School",
    review:
      "Epasmart  has completely transformed the way we manage our school’s operations. From student enrollment to daily fee collection and academic records, everything is now seamless and well-organized. ",
    image: `${assets.dummy}`,
  },
  {
    name: "Emmanuel Mensah",
    company: "School of Mercy Preparatory and Junior High School",
    review:
      "Epasmart has revolutionized the way we handle school administration. Managing student records, tracking daily fees, and overseeing academic performance has never been easier. The platform is intuitive, efficient, and saves us a lot of time.",
    image: `${assets.dummy}`,
  },
  {
    name: "Aboagye Gideon",
    company: "Westernlink Educational Complex, Kumasi",
    review:
      "Epasmart has been a game-changer for our school. With its seamless fee management, student record tracking, and academic reporting, we have significantly improved our efficiency. The system is easy to use, and the support team is always available to assist. It has made school administration stress-free, and we couldn't be happier with the results. Highly recommended!",
    image: `${assets.dummy}`,
  },
  {
    name: "Kinsley Ofori",
    company: "Customer",
    review:
      "Shopping on KromOnline has been an amazing experience! The website is easy to navigate, the product selection is fantastic, and the delivery was faster than I expected. I love the quality of the items I purchased, and the customer service was very responsive and helpful. I will definitely be shopping here again!",
    image: `${assets.dummy}`,
  },
  
]

export const faqs = [
  {
    id: 1,
    question: "What service does Epahubb offer",
    answer:
      "Epahubb provides a wide range of tech solutions, including software development, web abd mobile app development, UI/UX design,e-commerce platforms, and IT consulting services",
  },
  {
    id: 2,
    question: "How can I get started with Epahubb",
    answer:
      "To get started with Epahubb Tech Consult, visit our website, identify your needs, contact our team, schedule a consultation, and collaborate to achieve tailored solutions for your business.",
  },
  {
    id: 3,
    question: "Who can benefits from Epahubb's services?",
    answer:
      "Epahubb's services benefits businesses of all sizes,startups, enterprise , and individuals seeking experts in software development,IT,consulting,digital transformation, tailored technology-driven strategies",
  },
  {
    id: 4,
    question: "How does Epahubb stay innovative in its approach?",
    answer:
      "Epahubb stays innovative by leveraging the latest technologies, prioritizing continuous learning, fostering a culture of creativity, and collaborating closely with clients to deliver tailored, forward-thinking solutions that meet evolving industry needs.",
  },
]



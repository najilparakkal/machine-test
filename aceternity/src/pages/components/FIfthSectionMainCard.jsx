import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkles } from "../acertenityComponents/Tools";

const testimonials = [
  {
    name: "Manu Arora",
    title: "Tech Innovator & Entrepreneur",
    image: "/fifthSection/150.jpg",
    quote:
      "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
  },
  {
    name: "Tyler Durden",
    title: "Creative Director & Business Owner",
    image: "/fifthSection/150(1).jpg",
    quote:
      "This AI tool has revolutionized our workflow. It's like having a genius assistant at your fingertips 24/7.",
  },
  {
    name: "Alice Johnson",
    title: "Senior Software Engineer",
    image: "/fifthSection/150(2).jpg",
    quote:
      "The efficiency gains we've seen with this AI are unprecedented. It's a game-changer for our development process.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[600px] z-auto flex items-center justify-center  text-[#D8D9D9] p-8 rounded-3xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-cover bg-center" />
      <Sparkles />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        <div className=" bg-gradient-to-b from-[#151616]  to-transparent h-[450px] w-[450px] relative rounded-full flex justify-center ">
          <div className="w-16 h-16 mb-8 rounded-full overflow-hidden border-1 border-gray-700 shadow-lg mt-7">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="h-80 z-10 -mt-80">
          <p
            className="text-2xl font-bold mb-8 text-center leading-relaxed max-w-2xl mx-auto transition-opacity duration-700 ease-in-out"
            style={{ opacity: 1 }}
          >
            {testimonials[activeIndex].quote}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#151616] rounded-full px-4 py-1 text-sm transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "ring-1 ring-[#0E9BB3] scale-110" : ""
                }`}
              >
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-gray-400"> - {testimonial.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

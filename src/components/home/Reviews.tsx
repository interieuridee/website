import { useIsMobile } from "@/hooks/use-mobile";
import Quote from "../shared/Quote";

const reviews = [
  {
    text: "We zijn ontzettend blij met het resultaat. Het ontwerp is creatief, praktisch en helemaal passend bij onze wensen.",
    author: "Familie Jansen, Rotterdam"
  },
  {
    text: "Het contact verliep prettig en professioneel. We voelden ons echt gehoord.",
    author: "Marieke, Delft"
  },
  {
    text: "De begeleiding tijdens de verbouwing was erg waardevol. We raden Interieur-Idee zeker aan!",
    author: "Sander & Kim, Den Haag"
  },
  {
    text: "Dankzij het advies van Interieur-Idee is ons huis veel lichter en ruimer geworden.",
    author: "Anoniem"
  }
];

const mobileReview = {
  text: "Fijn om met kennis en kunde te zijn bijgestaan bij het ontwerp van onze benedenverdieping. Naast voorstellen voor indeling en materialen heeft Interieur-Idee ook veel betekend in de realisatie van de verbouwing.",
  author: "Familie uit Delft"
};

export default function Reviews() {
  const isMobile = useIsMobile();
  const shownReviews = isMobile ? [...reviews, mobileReview] : reviews;
  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <h2 className="text-3xl font-serif mb-8 text-left">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shownReviews.map((review, idx) => (
            <Quote key={idx} text={review.text} author={review.author} className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between" />
          ))}
        </div>
      </div>
    </section>
  );
}

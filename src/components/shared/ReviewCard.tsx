interface ReviewCardProps {
  text: string;
  author: string;
}

export default function ReviewCard({ text, author }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md h-full">
      <div className="flex flex-col h-full relative">
        {/* Quote mark */}
        <div className="absolute -left-1 -top-4">
          <span className="text-7xl font-serif text-taupe opacity-80">"</span>
        </div>
        
        {/* Review text */}
        <div className="flex-grow relative z-10 pt-8">
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            {text}
          </p>
        </div>
        
        {/* Author section with avatar */}
        <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-taupe flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="font-serif text-base text-charcoal">{author}</p>
        </div>
      </div>
    </div>
  );
}
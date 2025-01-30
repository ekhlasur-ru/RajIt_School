import React, { useState, useEffect, useRef } from "react";

const Carausel = () => {
  const images = [
    {
      id: 1,
      title: "About rajIT School",
      description: `RajIT School একটি RajIT Solutions Ltd এর সহযোগী প্রতিষ্ঠান। RajIT School ২০১২ সাল থেকে রাজশাহীতে আইটি সেক্টরে দক্ষ জনশক্তি গড়তে কাজ করে যাচ্ছে। ২০১২ সাল থেকে শুধু রাজশাহীতে দক্ষ জনশক্তি গড়তে কাজ করে থাকলেও ২০১৫ সাল থেকে অনলাইন ব্যাচের মাধ্যমে পুরো দেশব্যাপী দক্ষ জনশক্তি গড়তে কাজ শুরু করে। আমরা ছাত্র-ছাত্রী, চাকরিপ্রার্থী, গৃহিনী, এবং ফ্রিলান্সিং এ আগ্রহীদের দক্ষ প্রশিক্ষকদের মাধ্যমে দক্ষতা বিকাশের সুযোগ প্রদান করি। RajIT School থেকে ট্রেনিং নিয়ে ১০ হাজারেরও অধিক শিক্ষার্থী দেশের বিভিন্ন প্রতিষ্ঠানে কাজ করার সাথে সাথে বিভিন্ন ফ্রিলান্সিং মার্কেটপ্লেসগুলোতেও সফলতার সাথে কাজ করে যাচ্ছে। ট্রেড লাইসেন্স নাম্বার: 02/B - 384`,
      image:
        "https://school.rajit.net/images/jSfqsZWFJ7jo48A869bXiiMtO4yX482Tf7V8Dg2u.jpg",
    },
    {
      id: 2,
      title: "Mern Stack Web Development",
      description: `আপনি কি ফ্রিল্যান্সিং, রিমোট জব বা জুনিয়র ওয়েব ডেভেলপার হিসেবে ক্যারিয়ার গড়তে চান❓ 
কিন্তু সঠিক গাইড লাইনের অভাবে শিখতে পারছেন না ❗
হাজার হাজার অননাইল কোর্সের ভীড়ে আপনার জন্য কোনটা ঠিকা বুঝছেন না ❓
তাহলে আমাদের MERN Stack কোর্স আপনার জন্য একটি সুবর্ণ সুযোগ।

এখানে আপনি mongoDB , ExpressJS , REACT এবং nodeJS দিয়ে ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখতে পারবেন।`,
      image:
        "https://school.rajit.net/images/rCAa6lLZo6NaXMmiBx42hKnk2YrnJtOrin2iAvXC.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    e.target.ontouchmove = (ev) => {
      if (ev.touches[0].clientX - touchStartX > 50) {
        goToPrevious();
      } else if (touchStartX - ev.touches[0].clientX > 50) {
        goToNext();
      }
    };
  };

  const handleTouchEnd = (e) => {
    e.target.ontouchmove = null;
  };

  return (
    <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden">
      <button
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-200 p-3 text-white transition-transform duration-500 ease-in-out hover:bg-gray-700 focus:outline-none"
        onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="relative h-[800px] w-full">
        <div
          className="duration-800 absolute left-0 top-0 flex h-full w-full transition-transform ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, idx) => (
            <div
              key={idx}
              className="flex w-full flex-shrink-0 items-center justify-center">
              <div className="flex h-full w-full flex-col md:flex-row">
                <div className="flex-1 p-8">
                  <h2 className="text-4xl font-bold">{image.title}</h2>
                  <p className="mt-4 text-lg">{image.description}</p>
                  <div className="mt-4 flex gap-4">
                    <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-600">
                      সকল কোর্স দেখুন
                    </button>
                    <button className="rounded-md border border-black px-4 py-2 hover:bg-black hover:text-white">
                      জয়েন করুন
                    </button>
                  </div>
                </div>
                <div className="my-auto flex-1">
                  <img
                    src={image.image}
                    alt={`slide-${idx}`}
                    className="w-full object-center p-8"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-200 p-3 text-white transition-transform duration-500 ease-in-out hover:bg-gray-700 focus:outline-none"
        onClick={goToNext}>
        &#10095;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-3 px-6 ${idx === currentIndex ? "bg-red-800" : "bg-gray-400"} focus:outline-none`}
            onClick={() => goToSlide(idx)}></button>
        ))}
      </div>
    </div>
  );
};

export default Carausel;

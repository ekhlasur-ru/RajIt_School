import React from "react";
import { FaHands } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";
import { LuLeafyGreen } from "react-icons/lu";

function WhySelectUs() {
  return (
    <>
      <div className="my-8 px-4 py-8">
        <div className="text-center">
          <p className="text-3xl font-bold">
            কেন আমাদেরকেই নির্বাচন করবেন .. ?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 text-center">
          <div className="item-center border p-4">
            <FaHands className="mx-auto my-4 text-8xl" />

            <h3 className="py-4 text-xl font-bold">প্রয়োজনীয় দক্ষতা শিখুন</h3>
            <p>
              আমাদের এখানে বেসিক কম্পিউটার থেকে শুরু করে গ্রাফিক ডিজাইন, ডিজিটাল
              মার্কেটিং, ওয়েব ডেভেলপমেন্ট, ওয়েব ডিজাইন, নেটওয়ার্কিং কোর্সসহ
              বিভিন্ন কোর্স চলতে থাকে। বিস্তারিত জানতে কোর্স সমূহতে ভিজিট করুন।
            </p>
          </div>
          <div className="item-center border p-4">
            <LuLeafyGreen  className="mx-auto my-4 text-8xl" />
            <h3 className="py-4 text-xl font-bold">সার্টিফিকেট এবং ডিগ্রি</h3>
            <p>
              আমাদের প্রতিষ্ঠানের নিজস্ব সার্টিফিকেট প্রদান হয়। এটা আপনি আপনার
              সিভিতে যোগ করতে পারবেন যেটা আপনার চাকরি বা কাজ পাওয়ার ক্ষেত্রে
              সহযোগিতা করবে।
            </p>
          </div>
          <div className="item-center col-span-2 border p-4">
            <SiCodeblocks  className="mx-auto my-4 text-8xl" />
            <h3 className="py-4 text-xl font-bold">
              বিভিন্ন ক্ষেত্রে বিশেষজ্ঞ
            </h3>
            <p>
              আমাদের এখানে বেসিক কম্পিউটার থেকে শুরু করে গ্রাফিক ডিজাইন, ডিজিটাল
              মার্কেটিং, ওয়েব ডেভেলপমেন্ট, ওয়েব ডিজাইন, নেটওয়ার্কিং কোর্সসহ
              বিভিন্ন কোর্স চলতে থাকে। বিস্তারিত জানতে কোর্স সমূহতে ভিজিট করুন।
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhySelectUs;

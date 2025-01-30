import React from "react";

function Review() {
  return (
    <>
      <div className="p-4">
        <h2 className="mb-8 bg-[#F4F5F7] py-16 text-center text-4xl font-bold">
          স্টুডেন্ট রিভিউ
        </h2>
        <div className="flex w-full items-center justify-center">
          <div className="">
            <img
              src="https://school.rajit.net/assets/images/frontend/customer-support.png"
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <h2 className="pb-4 text-xl font-semibold">
              সার্বক্ষণিক সহায়তার জন্য থাকছে ডিসকোর্ড সাপোর্ট চ্যানেল
            </h2>
            <p className="text-justify">
              এই কোর্সের জন্য আমরা একটি প্রাইভেট ডিসকোর্ড সাপোর্ট চ্যানেল তৈরী
              করেছি যেখানে কোর্স ইন্সট্রাক্টর সহ আরো 4-5 জন ওয়েব ডেভেলপার সরাসরি
              আপনাদের বিভিন্ন প্রশ্নের উত্তর দিবেন আমরা অঙ্গীকার করছি সর্বোচ্চ
              ২৪ ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো তবে অধিকাংশ
              ক্ষেত্রে তার চেয়েও কম সময়ে আপনারা উত্তর পেয়ে যাবেন এছাড়া প্রতি
              সপ্তাহে আলোচিত মডিউলের উপর লাইভ সেশন থাকবে যেখানে আপনারা সরাসরি
              প্রশ্ন করে উত্তর পেতে পারবেন।
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;

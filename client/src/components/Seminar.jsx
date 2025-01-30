import React from "react";

function Seminar() {
  return (
    <>
      <div className="my-8 flex items-center px-4 py-8">
        <div className="w-[60%]">
          <img

            className="object-cover"
            src="https://school.rajit.net/assets/images/frontend/online-education.png"
            alt=""
          />
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold ">আমাদের ফ্রী সেমিনার সমূহ</h2>
          <p className="py-4">
            ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
            জয়েন করুন আমাদের ফ্রি সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি
            কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন।
          </p>
          <button className="rounded-md mt-4 bg-blue-400 px-4 py-2 text-white">
            বর্তমানে কোনো সেমিনার নেই
          </button>
        </div>
      </div>
    </>
  );
}

export default Seminar;

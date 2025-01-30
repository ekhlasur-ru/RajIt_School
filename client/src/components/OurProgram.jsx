import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OurProgram() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  return (
    <>
      <div className="px-4 md:p-1">
        <div>
          <h2 className="my-8 text-center text-4xl font-bold">
            আমাদের <span className="text-blue-400">প্রোগ্রামসমূহ</span>
          </h2>
          <p className="text-center text-lg">
            নিচের প্রোগ্রামগুলো থেকে আপনার কাঙ্ক্ষিত প্রোগ্রামটি সিলেক্ট করুন
          </p>
        </div>
        {/* //col-span-2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded border p-4 text-center shadow"
              style={{ backgroundColor: "#f9f9f9" }}>
              <h3 className="pb-4 text-xl font-semibold">{course.name}</h3>
              <p className="pb-8">{course.description} 1 টি কোর্স</p>
              <button
                onClick={() => navigate(`/category/${course.id}`)}
                className="w-full rounded-md bg-blue-400 px-4 py-1 text-white hover:bg-blue-500">
                সকল কোর্স দেখুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurProgram;

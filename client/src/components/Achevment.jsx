import React from "react";
import CountUp from "react-countup";

function Achevment() {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold">আমাদের অর্জন</h2>
          <img
            className="mx-auto"
            src="https://school.rajit.net/assets/images/frontend/achievement.png"
            alt="Achievement"
          />
        </div>
        <div className="grid grid-cols-3 gap-8 px-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <CountUp start={0} end={2050}>
              {({ countUpRef, start }) => (
                <div>
                  <span className="text-4xl font-bold" ref={countUpRef} />
                  <div>
                    <button
                      className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                      onClick={start}>
                      স্টুডেন্ট
                    </button>
                  </div>
                </div>
              )}
            </CountUp>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <CountUp start={0} end={15}>
              {({ countUpRef, start }) => (
                <div>
                  <span className="text-4xl font-bold" ref={countUpRef} />
                  <div>
                    <button
                      className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
                      onClick={start}>
                      ট্রেনার
                    </button>
                  </div>
                </div>
              )}
            </CountUp>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <CountUp start={0} end={768}>
              {({ countUpRef, start }) => (
                <div>
                  <span className="text-4xl font-bold" ref={countUpRef} />
                  <div>
                    <button
                      className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
                      onClick={start}>
                      সম্পুর্ন ব্যাচ
                    </button>
                  </div>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achevment;

import React from "react";

function Client() {
  const ExternalLink = [
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/0bmBetdnqlLtHQdBh4cNAmJJPjzWL6mLwzIly0rK.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/sRCdX20RKtkaxY1tO6q1eXgY9Dx8BOJaf8XX8kzT.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/W3HGXPtEEvBUjYbIXUoebnWeVcGxYGeHU67l7j66.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/0bmBetdnqlLtHQdBh4cNAmJJPjzWL6mLwzIly0rK.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/sRCdX20RKtkaxY1tO6q1eXgY9Dx8BOJaf8XX8kzT.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/W3HGXPtEEvBUjYbIXUoebnWeVcGxYGeHU67l7j66.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/0bmBetdnqlLtHQdBh4cNAmJJPjzWL6mLwzIly0rK.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/sRCdX20RKtkaxY1tO6q1eXgY9Dx8BOJaf8XX8kzT.png",
    },
    {
      name: "ICT DIVITION",
      link: "https://school.rajit.net/images/W3HGXPtEEvBUjYbIXUoebnWeVcGxYGeHU67l7j66.png",
    },
  ];
  return (
    <>
      <div className="bg-opacity-10 bg-gradient-to-r from-blue-200 to-cyan-200 backdrop-blur-3xl backdrop:opacity-10">
        <div className="mt-16 p-4">
          <h2 className="my-4 text-center text-4xl font-bold">
            আমাদের ক্লায়েন্ট সমূহ
          </h2>
          <div className="flex gap-4 py-8">
            {ExternalLink.map((item, index) => (
              <div key={index} className="gap-4">
                <img
                  className="rounded-full bg-slate-200"
                  width={100}
                  src={item.link}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;

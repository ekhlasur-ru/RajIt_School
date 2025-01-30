import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";

function OurProgramDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/${id}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto my-8 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto my-8 text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto my-8 text-center">
        No data available
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 w-[400px] shadow-md">
      <div className="relative">
        <img
          className="h-48 w-full rounded-t-md object-cover"
          src={data.image}
          alt="Cover"
        />
      </div>
      <div className="text-center">
        <div className="flex justify-between p-2">
          <p className="border-2 bg-orange-200 px-2">
            BC - <span>{data.batchNumber}</span>
          </p>
          <p>{data.price}</p>
        </div>
        <hr />
      </div>
      <p className="my-4 px-4 text-lg">{data.name}</p>
      <div className="flex justify-end p-2">
        <button className="flex items-center rounded-md bg-gray-200 px-4 py-2">
          বিস্তারিত <FaAngleRight />{" "}
        </button>
      </div>
    </div>
  );
}

OurProgramDetails.propTypes = {
  id: PropTypes.string,
};

export default OurProgramDetails;

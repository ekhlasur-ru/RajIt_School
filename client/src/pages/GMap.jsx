import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 24.3745, // Latitude for Rajshahi city
  lng: 88.6042, // Longitude for Rajshahi city
};

function MyMapComponent() {
  return (
    <>
      <div className=" ">
        <LoadScript googleMapsApiKey="AIzaSyC9nugXu1NEecJ2tkKQSwuZusI9FClZcJI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}>
            {/* Add additional map components (markers, etc.) here */}
          </GoogleMap>
        </LoadScript>
        <hr />
        <div className="my-4" style={{ width: "100%", height: "400px" }}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848153672122!2d88.6010656!3d24.3745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzI4LjIiTiA4OMKwMzYnMjIuOSJF!5e0!3m2!1sen!2sbd!4v1617207103109!5m2!1sen!2sbd"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
        <hr />
        <div className="my-4">
          <iframe
            className="mt-8 h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7268.673426309313!2d88.58979056365936!3d24.369587386087638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef043b54e911%3A0x1cae28fd0670918d!2sFire%20Service%20%26%20Civil%20Defence%20Station!5e0!3m2!1sen!2sbd!4v1738821983537!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"></iframe>
        </div>
        <hr />
      </div>
    </>
  );
}

export default MyMapComponent;

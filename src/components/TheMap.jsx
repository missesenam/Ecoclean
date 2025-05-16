function TheMap() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2271.731979573481!2d-88.16486452518784!3d41.62599608116279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5f820c4c7d4d%3A0x844202b79df5b910!2s14142%20S%20Napa%20Cir%2C%20Plainfield%2C%20IL%2060544%2C%20USA!5e1!3m2!1sen!2sgh!4v1747431444755!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default TheMap;

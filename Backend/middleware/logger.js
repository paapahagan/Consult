import colors from "colors";
// request logger middleware
// logs the request to the console
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };
  const colors = methodColors[req.method] || "white";
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      colors
    ]
  );
  next();
};

export default logger;

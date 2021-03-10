let ejs = require("ejs");
let pdf = require("html-pdf");

var optionsTicket = {
  height: "750px",
  width: "375px",
  header: {
    height: "20mm",
  },
  footer: {
    height: "20mm",
  },
};
var optionsFormat = {
  format: "A4",
  header: {
    height: "20mm",
  },
  footer: {
    height: "20mm",
  },
};
ejs.renderFile("./templateFormat.ejs", { students: {} }, (err, data) => {
  if (err) {
    console.log({ error: err });
  } else {
    pdf.create(data, optionsFormat).toFile("ticket.pdf", function (err, data) {
      if (err) {
        console.log({ error: err });
      } else {
        ptp.getPrinters().then(console.log).catch(console.error);
        ptp
          .print("./ticket.pdf")
          .then((res) => {
            console.log("operation done");
          })
          .catch((err) => {
            console.log({ error: err });
          });

        console.log("success");
      }
    });
  }
});

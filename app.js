let ejs = require("ejs");
let pdf = require("html-pdf");
const express = require("express");
const app = express();
const port = 3000;
const ptp = require("pdf-to-printer");

var option = {};
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    //app.use(bodyParser.urlencoded({ extended: true }));

app.post("/print/ticket", (req, res) => {

    console.log(req)

    // get request data here
    let data = {
        'date': req.body.date,
        'heure': req.body.heure,
        'salle_attente_nom': req.body.salle_attente_nom,
        'salle_attente_numero': req.body.salle_attente_numero,
        'list_consigne': req.body.list_consigne,
        'numero_passage': req.body.numero_passage,
        'heure_passage': req.body.heure_passage,
        'type_format': req.body.format


    };

    console.log(data)
        //initialisation default
    var cfg = "ticket";
    if (data.type_format == 'format') {
        cfg = "format"
    }


    var template = "";
    if (cfg == "ticket") {
        option = {
            height: "750px",
            width: "375px",
            header: {
                height: "20mm",
            },
            footer: {
                height: "20mm",
            },
        };
        template = "./templateTicket.ejs";
    }
    if (cfg == "format") {
        option = {
            format: "A4",
            header: {
                height: "20mm",
            },
            footer: {
                height: "20mm",
            },
        };
        template = "./templateFormat.ejs";
    }


    ejs.renderFile(template, { recu: data }, (err, data) => {
        if (err) {
            console.log({ error: err });
        } else {
            pdf.create(data, option).toFile("ticket.pdf", function(err, data) {
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

    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
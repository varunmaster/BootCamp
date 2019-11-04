var orm = require("./config/orm.js");

orm.select("party_name", "parties");
orm.select("client_name", "clients");
orm.selectWhere("parties", "party_type", "grown-up");
orm.clientParties("parties", "clients", "client_id");
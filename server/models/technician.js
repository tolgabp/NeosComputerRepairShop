const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema(
    {
        name: "Dubhan Doe",
        email: "dubhan@example.com",
        phone: "1111111",
        address: "123 Swords, Dublin, Ireland"
    },
    {
        name: "Keefe Smith",
        email: "keefe@example.com",
        phone: "2222222",
        address: "456 Elm St, Dublin, Ireland"
    },
    {
        name: "Meallan Johnson",
        email: "meallan@example.com",
        phone: "3333333",
        address: "789 Oak St, Dublin, Ireland"
    },
    {
        name: "Riagan Johnson",
        email: "riagan@example.com",
        phone: "3333333",
        address: "789 Oak St, Dublin, Ireland"
    }
);
const Technician = mongoose.model('Technician', technicianSchema);

module.exports = Technician;
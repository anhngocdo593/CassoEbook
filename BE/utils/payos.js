const PayOS = require("@payos/node");
require('dotenv').config();

module.exports = new PayOS(
    "17c3fe41-aa4e-46fe-bff1-6b2ac2747c17",
    "3d5f0b78-c0d7-4878-97bd-4ae195997edf", 
    "2f07a4a58e91bf2c76ba48b4c1f9b996a9370dc7496b717a9814573b4f718ba0",
);
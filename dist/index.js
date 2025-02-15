"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./config/env");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const referral_1 = __importDefault(require("./routes/referral"));
// create a new express application instance
const app = (0, express_1.default)();
// middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// define a route handler for the default home page
app.get("/v1", (_req, res) => {
    res.send("API is running");
});
// route definitions below
app.use("/v1/referral", referral_1.default);
// Export the app for Vercel
exports.default = app;
// Start server locally when not in a serverless environment
if (process.env.NODE_ENV !== "production") {
    const port = env_1.envVariables.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

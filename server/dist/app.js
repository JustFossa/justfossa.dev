"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "dist")));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "dist/index.html"));
});
//https.createServer(keys, app).listen(443, () => {console.log("Server is running on port 443")})
app.listen(80, () => {
    console.log("Server running on port 80");
});

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "init", {
    enumerable: true,
    get: ()=>init
});
const _fs = /*#__PURE__*/ _interopRequireDefault(require("fs"));
const _path = /*#__PURE__*/ _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isESM() {
    const pkgPath = _path.default.resolve("./package.json");
    try {
        let pkg = JSON.parse(_fs.default.readFileSync(pkgPath, "utf8"));
        return pkg.type && pkg.type === "module";
    } catch (err) {
        return false;
    }
}
function init(args) {
    let messages = [];
    let isProjectESM = args["--ts"] || args["--esm"] || isESM();
    let syntax = args["--ts"] ? "ts" : isProjectESM ? "js" : "cjs";
    let extension = args["--ts"] ? "ts" : "js";
    var _args___;
    let tailwindConfigLocation = _path.default.resolve((_args___ = args["_"][1]) !== null && _args___ !== void 0 ? _args___ : `./tailwind.config.${extension}`);
    if (_fs.default.existsSync(tailwindConfigLocation)) {
        messages.push(`${_path.default.basename(tailwindConfigLocation)} already exists.`);
    } else {
        let stubContentsFile = _fs.default.readFileSync(args["--full"] ? _path.default.resolve(__dirname, "../../../../stubs/config.full.js") : _path.default.resolve(__dirname, "../../../../stubs/config.simple.js"), "utf8");
        let stubFile = _fs.default.readFileSync(_path.default.resolve(__dirname, `../../../../stubs/tailwind.config.${syntax}`), "utf8");
        // Change colors import
        stubContentsFile = stubContentsFile.replace("../colors", "tailwindcss/colors");
        // Replace contents of {ts,js,cjs} file with the stub {simple,full}.
        stubFile = stubFile.replace("__CONFIG__", stubContentsFile.replace("module.exports =", "").trim()).trim() + "\n\n";
        _fs.default.writeFileSync(tailwindConfigLocation, stubFile, "utf8");
        messages.push(`Created Tailwind CSS config file: ${_path.default.basename(tailwindConfigLocation)}`);
    }
    if (messages.length > 0) {
        console.log();
        for (let message of messages){
            console.log(message);
        }
    }
}

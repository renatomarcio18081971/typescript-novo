"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao_1 = __importDefault(require("./ConcessionariaDao"));
var concessionariaDao = new ConcessionariaDao_1.default();
var concessionaria = new Concessionaria_1.default('', []);
concessionariaDao.incluir(concessionaria);

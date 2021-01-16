"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.incluir = function (objecto) {
        console.log('incluir');
    };
    ConcessionariaDao.prototype.excluir = function (id) {
        console.log('excluir');
    };
    ConcessionariaDao.prototype.obter = function (id) {
        console.log('obter');
    };
    ConcessionariaDao.prototype.obterTodos = function () {
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.incluir = function (objecto) {
        console.log('incluir');
    };
    PessoaDao.prototype.excluir = function (id) {
        console.log('excluir');
    };
    PessoaDao.prototype.obter = function (id) {
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.obterTodos = function () {
        return [new Array];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log('obter');
    };
    PessoaDao.prototype.obterTodos = function () {
        return [new Array];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;

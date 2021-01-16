import Concessionaria from "./Concessionaria";
import ConcessionariaDao from "./ConcessionariaDao";

let concessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])
concessionariaDao.incluir(concessionaria)
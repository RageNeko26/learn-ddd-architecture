import { Model, Sequelize } from "sequelize";
import MemoEntity from "./Entities/memo_entity";

class MemoModel extends Model<MemoEntity> {
    declare id: number;
    declare activity: string;
    declare author: string;
    declare isDone: boolean;

}

const sequelize = new Sequelize()
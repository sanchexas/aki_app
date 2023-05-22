import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { User } from "./User";
import { Industry } from "./Industry";


@Table({timestamps:false,tableName:"area_holders"})
export class AreaHolder extends Model{
    @ForeignKey(()=>User)
    @Column({primaryKey:true,type:DataType.INTEGER,autoIncrement:false})
    id!:number
    
    @Column(DataType.STRING)
    position!:string;

    @Column(DataType.STRING)
    area_name!:string;

    @Column(DataType.STRING)
    organisation!:string;

    @ForeignKey(()=>Industry)
    @Column(DataType.INTEGER)
    industry!:number;

    @Column(DataType.STRING)
    description!:string;

    @Column(DataType.FLOAT)
    square!:number;

    @Column(DataType.FLOAT)
    cost!:number;

    @BelongsTo(()=>User)
    user!:User;

    @BelongsTo(()=>Industry)
    indust!:Industry;
}
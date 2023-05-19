import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { User } from "./User";


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

    @Column(DataType.STRING)
    industry!:string;

    @Column(DataType.STRING)
    description!:string;

    @BelongsTo(()=>User)
    user!:User;
}
import { Table,Column,DataType,HasMany,Model } from "sequelize-typescript";
import { AreaHolder } from "./AreaHolder";

@Table({
    timestamps:false,
    tableName:"industries"
})
export class Industry extends Model{
    @Column({primaryKey:true,type:DataType.INTEGER,autoIncrement:true})
    id!:number

    @Column(DataType.STRING)
    name!:string;
    @HasMany(()=>AreaHolder)
    areaHolder!:AreaHolder;
}
    
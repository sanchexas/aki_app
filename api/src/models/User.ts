import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps:true,
    tableName:"users"
})
export class User extends Model{
    @Column({primaryKey:true,type:DataType.INTEGER,autoIncrement:true})
    id!:number
    @Column(DataType.STRING)
    second_name!:string;
    @Column(DataType.STRING)
    name!:string;
    @Column(DataType.STRING)
    middlename!:string
    @Column(DataType.STRING)
    email!:string;
    @Column(DataType.STRING)
    phone!: string;
    @Column(DataType.STRING)
    password!:string;
}
    

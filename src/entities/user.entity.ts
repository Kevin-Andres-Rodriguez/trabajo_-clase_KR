import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RolEntity } from "./rol.entiti";
@Entity('Rol',{schema:'ventas'})

export class UserEntity
{
@PrimaryGeneratedColumn('uuid')
id:string;
@CreateDateColumn({
    name:'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
})
createAt: Date;

@UpdateDateColumn({
    name:'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
})
updateAt:Date;
@DeleteDateColumn({
    name:'delete_at',
    type: 'timestamp',
    nullable: true,
})
deleteAt:Date;

@OneToOne(() =>RolEntity, rol => rol.user)
@JoinColumn()
rol:RolEntity;





@Column('varchar',{
    name:'title',
    nullable:false,
    comment:'user lasnamename'
})
title:string;

@Column('number',{
    name:'identification',
    nullable:false,
    comment:'user identification'
})
price:number;

@Column('varchar',{
    name:'adress',
    nullable:true,
    comment:'user adress'
})
descripcion:string;

}
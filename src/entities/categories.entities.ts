import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories',{schema:'categories'})

export class CategoryEntity
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

@OneToMany(() => ProductEntity, product =>product.category)
products:ProductEntity[];

@Column('varchar',{
    name:'title',
    nullable:false,
    comment:'product name'
})
title:string;

@Column('number',{
    name:'price',
    nullable:false,
    comment:'product price'
})
price:number;

@Column('varchar',{
    name:'description',
    nullable:true,
    comment:'product name'
})
descripcion:string;

}

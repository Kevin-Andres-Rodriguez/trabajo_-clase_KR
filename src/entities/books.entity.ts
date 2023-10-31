import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuthorsEntity } from "./authors.entity";

@Entity('books',{schema:'look'})

export class BooksEntity
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

@ManyToOne(() => AuthorsEntity, authors => authors.books)
authors:AuthorsEntity;

@Column('varchar',{
    name:'title',
    nullable:false,
    comment:'book title'
})
title:string;

@Column('number',{
    name:'price',
    nullable:false,
    comment:'book price'
})
price:number;

@Column('varchar',{
    name:'description',
    nullable:true,
    comment:'book descripcion'
})
descripcion:string;

}
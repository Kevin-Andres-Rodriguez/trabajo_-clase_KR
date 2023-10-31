import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BooksEntity } from "./books.entity";
@Entity('authors',{schema:'write'})

export class AuthorsEntity
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

@ManyToOne(() => BooksEntity, books => books.authors)
books:BooksEntity;

@Column('varchar',{
    name:'title',
    nullable:false,
    comment:'author name'
})
title:string;

@Column('number',{
    name:'price',
    nullable:false,
    comment:'author price'
})
price:number;



}
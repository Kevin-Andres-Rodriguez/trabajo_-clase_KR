import { AfterLoad, AfterRemove, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./categories.entities";
import { randomBytes } from "crypto";

@Entity('products',{schema:'ventas'})

export class ProductEntity
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

@ManyToOne(() => CategoryEntity, category => category.products)
category:CategoryEntity;

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
    password: any;
    email: any;
    nombre: any;
    correo_electronico: any;
    tokenAutenticacion: string;

@BeforeInsert()
@BeforeUpdate()

async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}

@BeforeInsert()
@BeforeUpdate()

async setDescripcion(){
    if(!this.descripcion){
        return;
    }
    this.descripcion = this.descripcion.toLowerCase();
}

@BeforeInsert()
@BeforeUpdate()

async setEmail(){
    if(!this.email){
        return;
    }
    this.email = this.email.toUpperCase();
}

@BeforeInsert()
@BeforeUpdate()

async setPassword(){
    if(!this.password){
        return;
    }
    this.password = Bcrypt.hast(this.setPassword, 15);
}

@BeforeInsert()
@BeforeUpdate()
async validarCorreoElectronico(){
    const regex = /\S+@\S+\.\S+/;
    if(!this.correo_electronico || !regex.test(this.correo_electronico)){
        throw new Error('Correo electrónico inválido');
    }
}
@BeforeInsert()
@BeforeUpdate()
async setTokenAutenticacion(){
    this.tokenAutenticacion = randomBytes(20).toString('hex');
}
@BeforeInsert()
@BeforeUpdate()
async setTokenAutenticacion1(){
    this.tokenAutenticacion = randomBytes(20).toString('base64');
}
}

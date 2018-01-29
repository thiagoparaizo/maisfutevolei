import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FIREBASE_URL } from '../environments/firebase-url';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class SelectProvider {

    optionsEstado:any;
	optionsTempoPratica:any;
	optionsAcesso:any;

    constructor(private afDataBase: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
        console.log('construtor SelectProvider >>');
        
        
    this.optionsEstado = [
    
    { value:"AC",label:"Acre"},
	{ value:"AL",label:"Alagoas"},
	{ value:"AP",label:"Amapá"},
	{ value:"AM",label:"Amazonas"},
	{ value:"BA",label:"Bahia"},
	{ value:"CE",label:"Ceará"},
	{ value:"DF",label:"Distrito Federal"},
	{ value:"ES",label:"Espírito Santo"},
	{ value:"GO",label:"Goiás"},
	{ value:"MA",label:"Maranhão"},
	{ value:"MT",label:"Mato Grosso"},
	{ value:"MS",label:"Mato Grosso do Sul"},
	{ value:"MG",label:"Minas Gerais"},
	{ value:"PA",label:"Pará"},
	{ value:"PB",label:"Paraíba"},
	{ value:"PR",label:"Paraná"},
	{ value:"PE",label:"Pernambuco"},
	{ value:"PI",label:"Piauí"},
	{ value:"RJ",label:"Rio de Janeiro"},
	{ value:"RN",label:"Rio Grande do Norte"},
	{ value:"RS",label:"Rio Grande do Sul"},
	{ value:"RO",label:"Rondônia"},
	{ value:"RR",label:"Roraima"},
	{ value:"SC",label:"Santa Catarina"},
	{ value:"SP",label:"São Paulo"},
	{ value:"SE",label:"Sergipe"},
	{ value:"TO",label:"Tocantins"}

    ];

    this.optionsTempoPratica = [
        {value:"0",label:"Iniciante"},
        {value:"0.5",label:"1 a 6 meses"},
        {value:"1",label:"1 a 2 anos"},
        {value:"2",label:"3 a 5 anos"},
        {value:"5",label:"5 a 10 anos"},
        {value:"10",label:"10 a 15 anos"},
        {value:"15",label:"15 a 20 anos"},
        {value:"20",label:"mais de 20 anos"},
	 ];
	 
	 this.optionsAcesso = [
		{value:"todos",label:"todos"},
		{value:"publico",label:"publico"},
		{value:"privado",label:"privado"},
		{value:"aluguel",label:"aluguel"},
		{value:"apostas",label:"apostas"}
	];

    }

	



}

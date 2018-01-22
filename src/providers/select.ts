import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FIREBASE_URL } from '../environments/firebase-url';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class SelectProvider {

    optionsEstado:any;
    optionsTempoPratica:any;

    constructor(private afDataBase: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
        console.log('construtor SelectProvider >>');
        
        
    this.optionsEstado = [
        { value:"CE",label:"Ceará"}, {value:"SP",label:"São Paulo"} 
    ];

    this.optionsTempoPratica = [
        { value:"0",label:"Iniciante"},
        {value:"0.5",label:"1 a 6 meses"},
        {value:"1",label:"1 a 2 anos"},
        {value:"2",label:"3 a 5 anos"},
        {value:"5",label:"5 a 10 anos"},
        {value:"10",label:"10 a 15 anos"},
        {value:"15",label:"15 a 20 anos"},
        {value:"20",label:"mais de 20 anos"},
     ]
      ;
    }



}

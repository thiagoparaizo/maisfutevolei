import { QuadraRachaProvider } from './../../providers/quadra-racha';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectProvider } from '../../providers/select';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';

@Component({
    template: `
    <form [formGroup]="filtroBuscaForm" (ngSubmit)="onSubmit(filtroBuscaForm.value)">
        <ion-list>
            <ion-list-header>Filtros</ion-list-header>
           
            <ion-item>
                <ion-label>Estado:</ion-label>
                    <ion-select okText="OK" cancelText="Cancelar" formControlName="estado" (ionChange)="escolheuEstado(filtroBuscaForm.controls.estado.value)">
                    <ion-option *ngFor="let opt2 of selectProvider.optionsEstado" [value]="opt2.value">{{opt2.label}}</ion-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Quadras</ion-label>
                <ion-toggle formControlName="quadras" checked></ion-toggle>
            </ion-item>

            <ion-item>
                <ion-label>Rachas</ion-label>
                <ion-toggle formControlName="rachas" checked="true"></ion-toggle>
            </ion-item>
            
            <ion-item>
                <ion-label>Acesso:</ion-label>
                    <ion-select okText="OK" cancelText="Cancelar" formControlName="acesso" interface="action-sheet">
                    <ion-option *ngFor="let opt2 of selectProvider.optionsAcesso" [value]="opt2.value">{{opt2.label}}</ion-option>
                </ion-select>
            </ion-item>

            <button ion-item color="verde">aplicar</button>
        </ion-list>
    </form>  
    
    `
})
export class FiltroBusca {
    constructor(public viewCtrl: ViewController, private builder: FormBuilder, 
        private quadraRachaProvider: QuadraRachaProvider, public selectProvider: SelectProvider,
    private actionSheetControler: ActionSheetController) {
        
        if(!this.quadraRachaProvider.filtrosBusca){
           console.log('construtor 1');
            this.filtroBuscaForm = builder.group({
                'estado': [''],//['', Validators.required],
                'quadras':['true'],
                'rachas':['true'],
                'acesso':['publico']
    
            });
        }else{
            console.log('construtor 2');
            this.filtroBuscaForm = builder.group({
                'estado': [this.quadraRachaProvider.filtrosBusca.estado],//['', Validators.required],
                'quadras':[this.quadraRachaProvider.filtrosBusca.quadras],
                'rachas':[this.quadraRachaProvider.filtrosBusca.rachas],
                'acesso':[this.quadraRachaProvider.filtrosBusca.acesso]
    
            });
        }
        

    }

    filtroBuscaForm: FormGroup;

    onSubmit(formData) {
        console.log('submit...');
        this.quadraRachaProvider.filtrosBusca = formData;
        this.close();
    }

    escolheuEstado(value){
        console.log('value:'+ value);
    }

    close() {
        this.viewCtrl.dismiss();
    }

    actionSheet = this.actionSheetControler.create({
        title: 'Action Sheet', buttons: [
            {
              text: 'Test 1',
              icon: 'check'
            },
            {
              text: 'Test 2',
              icon: 'close'
            }]
    });
}
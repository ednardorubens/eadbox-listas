import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    private cursos;
    private nomeColunas = ['#', 'nome', 'descricao', 'categoria'];

    constructor(@Inject('eadbox-api') private eadbox) { }

    ngOnInit() {
        this.eadbox.consultar('http://localhost:3000/cursos', res => this.cursos = res);
    }

}
import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../candidat.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css'],
  providers: [CandidatService],
})
export class CandidatComponent implements OnInit {
  // nom;
  // prenom;
  // Cand_form;
  // // tslint:disable-next-line:variable-name
  // date_naiss;
  // tel;
  // disp;
  // exp;
  // cv;
  // msg;
  // // tslint:disable-next-line:variable-name
  // cand_status;
  // // tslint:disable-next-line:variable-name
  // email_status;


  constructor(private api: CandidatService) {
    this.getCandidats();
    this.selectedCand = {
      id: -1, nom: '', prenom: '', email: '', date_naiss: '', tel: '',
      disp: '', exp: '', msg: '', cand_status: '', email_status: ''
    };
  }

  candidats = [];
  selectedCand;

  dtOptions: DataTables.Settings = {};
  getCandidats = () => {
    this.api.getAllCandidats().subscribe(
      data => {
        this.candidats = data;
      },
      error => {
        alert('Internet connection problem');

      }
    );
  }
  candidateClicked = (candidat) => {
    this.api.getOneCandidat(candidat.id).subscribe(
      data => {
        this.selectedCand = data;
        // this.nom = data.nom;
        // this.prenom = data.prenom;
        // this.Cand_form = data.Cand_form;
        // this.date_naiss = data.date_naiss;
        // this.tel = data.tel;
        // this.disp = data.disp;
        // this.exp = data.exp;
        // this.cv = data.cv;
        // this.msg = data.msg;
        // this.cand_status = data.cand_status;
        // this.email_status = data.email_status;
      },
      error => {
        console.log(error);
      }
    );
  }
  UpdateCand = () => {
    this.api.UpdateCand(this.selectedCand).subscribe(
      data => {
        this.getCandidats();
        alert('Candidat updated successfully');
      },
      error => {
        alert('Please check your informations before updating');
      }
    );
  }
  CreateCand = () => {
    this.api.CreateCand(this.selectedCand).subscribe(
      data => {
        this.candidats.push(data);
        this.getCandidats();
        alert('Candidat added successfully');
      },
      error => {
        alert('Please make sure of email address and phone number.');
      }
    );
  }
  DeleteCand = () => {
    this.api.DeleteCand(this.selectedCand.id).subscribe(
      data => {
        this.getCandidats();
      },
      error => {
        alert('Error while deleting');
      }
    );
  }

  ngOnInit() {
    this.candidats = [];
  }
}

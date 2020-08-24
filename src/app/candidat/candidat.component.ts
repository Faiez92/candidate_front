import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../candidat.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

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


  constructor(private api: CandidatService, private router: Router) {
    this.getCandidats();
    this.selectedCand = {
      id: -1, nom: '', prenom: '', email: '', date_naiss: '', tel: '',
      disp: '', exp: '', msg: '', cand_status: '', email_status: ''
    };
  }

  candidats = [];
  selectedCand;

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

  ToLogin() {
    this.router.navigate(['']);
  }
}

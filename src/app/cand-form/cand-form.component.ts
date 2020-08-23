import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../candidat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cand-form',
  templateUrl: './cand-form.component.html',
  styleUrls: ['./cand-form.component.css']
})
export class CandFormComponent implements OnInit {
  candidats = [];
  selectedCand;

  constructor(private api: CandidatService, private router: Router) {
    this.getCandidats();
    this.selectedCand = {id: -1, nom: '', prenom: '', email: '', date_naiss: '', tel: '',
      disp: '', exp: '', msg: '', cv: '', cand_status: '', email_status: '' };
  }
  getCandidats = () => {
    this.api.getAllCandidats().subscribe(
      data => {
        this.candidats = data;

      },
      error => {
        console.log(error);
      }
    );
  }
  CreateCand = () => {
    this.api.CreateCand(this.selectedCand).subscribe(
      data => {
        this.candidats.push(data);
        alert('Your application is successfully added');
      },
      error => {
        alert('Please make sure you gave your own email adress and phone number.');
      }
    );
  }
  ngOnInit() {
  }

  ToLogin() {
    this.router.navigate(['']);
  }
}

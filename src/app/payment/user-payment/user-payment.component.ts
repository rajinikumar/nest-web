import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentService } from '../../_services/payment.service';
import { Payment } from "../../_models/payment";
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_auth/auth.service';
import { ThemeService } from 'ng2-charts';
import { Complaint } from '../../_models/complaint';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  payments: Observable<Payment[]>;
  id: number;
  private currentUser: User;
  private currentComplaint: Complaint;

  constructor(private paymentService: PaymentService,
              private router: Router,
              private authenticationService: AuthenticationService) {
                this.currentUser = this.authenticationService.currentUser;
                this.reloadData();
              }

  ngOnInit() {

  }

  reloadData() {
    // this.payments = this.paymentService.getPaymentsList();
    this.id = this.currentUser.userId;
    this.payments = this.paymentService.getuserPaymentInfo(this.id);
  }


  addComplaintsToComplaint(currentComplaint: Complaint){
    this.router.navigate(['complaint/add', currentComplaint.userId]);
  }

}





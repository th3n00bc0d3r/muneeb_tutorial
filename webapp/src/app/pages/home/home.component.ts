import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private toastr: ToastrService
  ) {}

  presentToast() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}

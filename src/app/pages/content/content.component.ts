import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";

  constructor( ){ }
}

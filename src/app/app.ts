import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecero } from "./cabecero/cabecero";
import { Footer } from "./footer/footer";
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecero, Footer, HttpClientModule, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GiftShop';
}

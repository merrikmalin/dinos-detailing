import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'dinos-detailing';
    servicesUrl = '/assets/documents/dinos-detailing-services.pdf';
    email = 'dinosdetailss@gmail.com';
    phoneNumber = '(740) 296-8807';
    phoneNumberRaw = '+17402968807'; // for tel: links
    bookingUrl = 'https://docs.google.com/forms/d/1neRl-h6J1Q2WL8h5JfkDIqDBSFrtWpO6JSyv7ne1aVM/edit';

    instagramUrl = 'https://www.instagram.com/dinosdetailing_/';
    youtubeUrl = 'https://youtube.com/@dinosdetailingg?si=pY6nqhg77knbE7UF';
    tiktokUrl = 'https://www.tiktok.com/@dinos.detailing6';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  image: string;
  title: string;
  description: string;
}

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

    firstRowServices: Service[] = [
        {
            image: '/assets/images/interior-detail.jpg',
            title: 'Interior Detail',
            description: 'Complete interior cleaning to restore freshness and remove stains.'
        },
        {
            image: '/assets/images/exterior-detail.jpg',
            title: 'Exterior Detail',
            description: 'Professional cleaning to enhance the exterior shine and eliminate imperfections.'
        },
        {
            image: '/assets/images/ozone-elimination.jpg',
            title: 'Ozone Elimination',
            description: 'Eliminating Odors with an ozone generator and shampooing carpets ensures a deep clean and fresh environment.'
        },
        {
            image: '/assets/images/interior-exterior.jpg',
            title: 'Interior & Exterior Detail',
            description: 'An interior and exterior detail includes thorough cleaning of the car\'s interior surfaces, seats, and carpets. As well as washing, polishing, and protecting the exterior paint and wheels.'
        }
    ];

    secondRowServices: Service[] = [
        {
            image: '/assets/images/premium-detail.jpg',
            title: 'Premium Detail',
            description: 'A premium detail offers an extensive cleaning package includes deep interior cleaning, carpet shampooing, exterior polishing, and a protective wax coating, ensuring your vehicle looks and feels like new. It\'s the ultimate service for maintaining your car\'s appearance and value.'
        },
        {
            image: '/assets/images/routine-subscription.jpg',
            title: 'Routine Service Subscription',
            description: 'A monthly detailing subscription ensures your vehicle receives regular, professional care, keeping it consistently clean and well-maintained all year round.'
        },
        {
            image: '/assets/images/heavy-equipment-detail.jpg',
            title: 'Heavy Equipment Detail',
            description: 'Heavy equipment detail involves thorough cleaning and maintenance of large machinery ensuring optimal performance and extending the lifespan of the equipment.'
        }
    ];
}

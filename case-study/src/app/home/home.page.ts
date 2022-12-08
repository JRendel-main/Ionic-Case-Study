import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // create class for car news
  carNews = [
    {
      title: '2020 Toyota Supra',
      description: 'The 2020 Toyota Supra is a sports car that is a joint venture between Toyota and BMW. The Supra is the spiritual successor to the Toyota Celica Supra, but it is not a direct replacement.',
      image: "../assets/news/supra.jpg",
      link: 'https://www.toyota.com/supra/',
      date: '2020-01-01'
    },
    {
      title: '2020 Ford Mustang',
      description: 'Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang.',
      image: '../assets/news/mustang.jpg',
      link: 'https://www.ford.com/cars/mustang/',
      date: '2020-01-01'
    },
    {
      title: '2020 Chevrolet Corvette',
      description: 'The 2020 Chevrolet Corvette is a sports car that is available as a coupe or convertible. The Corvette is available in a variety of trim levels, including the Stingray, Grand Sport, and Z06.',
      image: '../assets/news/chevrolet.jpg',
      link: 'https://www.chevrolet.com/cars/corvette/',
      date: '2020-01-01'
    },
    {
      title: '2020 Dodge Challenger',
      description: 'The 2020 Dodge Challenger is a sports car that is available as a coupe or convertible. The Challenger is available in a variety of trim levels, including the SXT, GT, R/T, and SRT Hellcat.',
      image: '../assets/news/dodge.jpg',
      link: 'https://www.dodge.com/cars-dodge/challenger.html',
      date: '2020-01-01'
},
    {
      title: '2020 Nissan 370Z',
      description: 'The 2020 Nissan 370Z is a sports car that is available as a coupe. The 370Z is available in a variety of trim levels, including the Sport, Touring, and NISMO.',
      image: '../assets/news/370z.jpg',
      link: 'https://www.nissanusa.com/vehicles/cars/370z.html',
      date: '2020-01-01'
    },
    {
      title: '2020 Hyundai Veloster',
      description: 'The 2020 Hyundai Veloster is a sports car that is available as a coupe. The Veloster is available in a variety of trim levels, including the Base, Turbo, and N.',
      image: '../assets/news/veloster.jpg',
      link: 'https://www.hyundaiusa.com/vehicles/cars/veloster.html',
      date: '2020-01-01'
    }
  ];
  openLink(url: string) {
    window.open(url, '_blank');
  }
  constructor() {}

}

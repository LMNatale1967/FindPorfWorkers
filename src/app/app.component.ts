import { Component, Input, OnInit } from '@angular/core';
import { Profile } from './models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {    
  appTitle = 'Find Professional Workers';
  appDevFullName = "Natale Luis Miguel";


  profiles: Profile[]= [
    {
      id : 1,
      name: "amber-williams",
      gender: "Female",
      contactPreference: 'Unknown',
      email: "Amber-Williams@nomade.ch",
      phoneNumber: "+41 (0)79 342 84 22 ",
      dateOfBirth: new Date('09/20/1967'),
      department: 'HR',
      isActive: true,
      photoPath: "./assets/images/amber-williams.png"
    },
    {
      id : 2,
      name: "andrew-deceuster",
      gender: "Male",
      contactPreference: 'Unknow',
      email: "Andrew-deceuster@nomade.ch",
      phoneNumber: "+41 (0)79 342 84 22 ",
      dateOfBirth: new Date('09/20/1967'),
      department: 'IT',
      isActive: true,
      photoPath: "./assets/images/andrew-deceuster.jpg"
    },
    {
        id : 3,
        name: "beard-richard",
        gender: "Male",
        contactPreference: 'Unknow',
        email: "Beard-Richard@nomade.ch",
        phoneNumber: "+41 (0)79 342 84 22 ",
        dateOfBirth: new Date('09/20/1967'),
        department: 'Developpment',
        isActive: true,
        photoPath: "./assets/images/beard-richard.jpg"
      }
  ];
}

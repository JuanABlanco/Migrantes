import { Component, OnInit } from '@angular/core';
import { Organization } from '../../shared/models/organization.model'

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {


  private rate=false;
  private organizations:Organization[] = [{
    resume: "Lorem ipsum dolor sit amet consectetur adipiscing elit. In ut felis et nibh dignissim lobortis. Etiam facilisis, ex sed congue faucibus, diam urna pellentesque arcu, vitae aliquet odio erat eu.",
    name: "The Great South",
    type: "Medicine distribution",
    image: "The Great South",
    imageUrl: "",
    rate: 10,

  },
  {
    resume: "Lorem ipsum dolor sit amet consectetur adipiscing elit. In ut felis et nibh dignissim lobortis. Etiam facilisis, ex sed congue faucibus, diam urna pellentesque arcu, vitae aliquet odio erat eu.",
    name: "Alter",
    type: "Water distribution",
    image: "Alter",
    imageUrl: "",
    rate: 50,
  },
];

  constructor() { }

  ngOnInit() {
  }

  activateRating(){
    this.rate=true;
  }

  ratingValue(){
    return this.rate;
  }

  

}

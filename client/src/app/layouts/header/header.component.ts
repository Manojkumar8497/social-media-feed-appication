import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // For navbar toggle in mobile
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  // Navbar Links
  navbarLinks = [
    {
      icon: "far fa-newspaper",
      text: "Feed",
      link: "/feeds"
    },
    {
      icon: "fas fa-tasks",
      text: "Jobs",
      link: "/jobs"
    },
    {
      icon: "far fa-bell",
      text: "Notification",
      link: "/notification"
    },
    {
      icon: "far fa-building",
      text: "Bazaar",
      link: "/bazaar"
    }
  ];

  constructor() { }

  // Toggle the navbar for mobile devices
  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  // Close the navbar after the navlink clicked
  closeNavbar() {
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
      const app = {
        title : 'Crowsong'
      };

      const contact = {
        title : 'Contact'
      };

      const error = {
        pageNotFound : {
          title: 'Page Not Found'
        },
        serverNotFound: {
          title: 'Server Not Found'
        }
      };

      const heading = {
        title: "Crowsong Software",
        styles: {
          "border": "2px solid black",
          "border-radius": "2vw",
          "background": "radial-gradient(rgb(91,79,79), #9d9d98, rgb(187,187,181))",
          "color": "black",
          "font-family": "Arial",
          "font-size": "3.5vw",
          "font-weight": "600",
          "margin": "2vw",
          "padding": ".5vw",
          "width": "auto"
        }
      };

      const home = {

      };

      const introduction = {
        title: "Michael McMahon",
        styles: {
          "border": "1px solid black",
          "border-radius": "1vw",
          "background": "radial-gradient(rgb(91,79,79), #9d9d98, rgb(187,187,181))",
          "color": "black",
          "font-family": "Arial",
          "font-size": "2.0vw",
          "font-weight": "400",
          "margin": "0 0 2vw 0",
          "padding": ".5vw",
          "width": "auto"
        }
      };

      const mainMenu = {
        title: "",
        items: [
          {
            text: "Home",
            route: "/home"
          },
          {
            text: "Introduction",
            route: "/cover-letter"
          },
          {
            text: "Resume",
            route: "/resume"
          },
          {
            text: "Portfolio",
            route: "/portfolio"
          },
          {
            text: "Contact",
            route: "/contact"
          }
        ],
        menuStyles: {
          "background-color": "rgb(188, 188, 188)",
          "border": "1px solid black",
          "border-radius": ".3vw",
          "box-sizing": "border-box",
          "color": "rgb(91,79,79)",
          "display": "block",
          "font-family": "Arial",
          "font-size": "1.5vw",
          "margin": ".5vw 0",
          "padding": ".25vw"
        }
      };

      const portfolioMenu = {
        title: "",
        items: [
          {
            "text": "Crowsong WCMS",
            "route": "/wcms"
          },
          {
            "text": "Crowsong Conference",
            "route": "/conference"
          },
          {
            "text": "Crowsong Recipe",
            "route": "/recipe"
          },
          {
            "text": "Crowsong Lounge",
            "route": "/lounge"
          },
          {
            "text": "Crowsong Vendor",
            "route": "/vendor"
          }
        ],
        menuStyles: {
          "background-color": "rgb(188, 188, 188)",
          "border": "1px solid black",
          "border-radius": ".3vw",
          "box-sizing": "border-box",
          "color": "rgb(91,79,79)",
          "display": "block",
          "font-family": "Arial",
          "font-size": "1.5vw",
          "margin": ".5vw 0",
          "padding": ".25vw"
        }
      };

      const resume = {
        resumeMenu:{
          items: [
            {
              "text": "MEAN",
              "route": "mean"
            },
            {
              "text": ".NET",
              "route": "net"
            },
            {
              "text": "Clear",
              "route": "/resume"
            }
          ]
        }
      };

      return { app, contact, error, heading, home, mainMenu, portfolioMenu, resume }
    }
  };

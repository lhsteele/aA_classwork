import { htmlGenerator } from "./warmup.js";

export class Clock  {
  constructor() {
    const currentTime = new Date();
    
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    
  }
  
  printTime() {
    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    return timeString;
  }
  
}
const clock = new Clock();
const clockElement = document.getElementById("clock");
htmlGenerator(clock.printTime(), clockElement);

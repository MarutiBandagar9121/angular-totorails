import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  userName: WritableSignal<string> = signal("Maruti");
  upperCaseUsernameSignal:Signal<string>=computed(()=>this.userName().toUpperCase())

  // signal() by default creates an writable signa;
  // But if we use `myVar:Signal<string>=signal("xyz")` -> this here is an read only signal

  changeUsername(event:Event){
    // console.log(event)
    if(this.userName() === "Maruti"){
      this.userName.set("Nutan")
    }
    else{
      this.userName.set("Maruti")
    }
  }

  updateUsername(event:Event){
    this.userName.update((userName)=>userName.toUpperCase())
  }
}


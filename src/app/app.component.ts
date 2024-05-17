import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  passwordLength = 1;
  includeLetters = true;
  includeNumbers = true;
  includeSpecialChars = true;
  password = '';

  ngOnInit() {
    this.passwordLength = 1;
  }

  generatePassword(): void {
    this.password = '';

    const numberList = '01234567890';
    const alphabetList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialList = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let allowlist = '';

    if (this.includeLetters) {
      allowlist += alphabetList;
    }
    if (this.includeNumbers) {
      allowlist += numberList;
    }
    if (this.includeSpecialChars) {
      allowlist += specialList;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      this.password += allowlist.charAt(
        Math.floor(Math.random() * allowlist.length)
      );
    }
  }
}

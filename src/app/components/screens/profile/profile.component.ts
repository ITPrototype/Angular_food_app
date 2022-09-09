import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
  username: string = ''
  profilePicture: string = ''
  email: string = ''
  isUser: boolean
  showLog: boolean
  async checkUser() {
    const user = await this.authService.isLoggedIn()
    if (user) {
      this.isUser = true
      this.showLog = false
      this.username = user.displayName
      this.profilePicture = user.photoURL
      this.email = user.email
    } else {
      this.isUser = false
      this.showLog = true
    }
  }
  ngOnInit(): void {
    this.checkUser()
  }
  login() {
    this.authService.GoogleAuth()
    this.checkUser()
  }
  logout() {
    this.authService.afAuth.signOut()
    this.checkUser()
  }
}

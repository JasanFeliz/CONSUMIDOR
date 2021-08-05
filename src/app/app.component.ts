import { GlobalMethods } from './services/global';
import { AuthServiceService } from './services/auth-service.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Directorio', url: '/directory', icon: 'search' },
    { title: 'Valoraciones recientes', url: '/recentreviews', icon: 'eye' },
    { title: 'Perfile', url: '/profile', icon: 'person' },
    { title: 'Cerrar sesión', url: '/login', icon: 'log-out' },
    { title: 'Ayuda y contacto', url: '/contact', icon: 'call' },
    { title: 'Información', url: '/aboutus', icon: 'information-circle' },
  ];
  public dark:boolean = false
  constructor(private plt:Platform,
    private authService:AuthServiceService,
    public global:GlobalMethods) {
    this.plt.ready().then(() =>{
      if (localStorage.getItem('dark') === 'true') {
        this.dark = true
      } else {
        localStorage.setItem('dark', 'false')
        this.dark = false
      }      
      this.authService.checkUser()
    })
   }

   onClick(key){
    switch (key) {
      case 'Logout':
        this.authService.logoutUser()
        break;
    
      default:
        break;
    }
   }
}

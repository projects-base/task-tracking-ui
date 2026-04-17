import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  settingsImage = "https://cdn-icons-png.flaticon.com/128/1835/1835948.png";
  burgerButton = "https://cdn-icons-png.flaticon.com/512/3075/3075977.png";
  hideSettingsModal = true;

  settingsClick() {
    this.hideSettingsModal = false;
  }

  async settingsClickOld() {
    const settings = document.getElementsByClassName("settings")[0]
    const thread = document.getElementsByClassName("thread")[0]
    const popUp = document.getElementsByClassName("settings-pop")[0]
    settings.addEventListener('click', async () => {

      settings.classList.add('settings-animate');

      for (let i = 0; i < 6; i++) {

        if (i % 2 == 0) {
          if (thread.classList.contains('thread')) {
            thread.classList.remove('thread');
          }
          thread.classList.add('thread-animate');
        } else {
          if (thread.classList.contains('thread-animate')) {
            thread.classList.remove('thread-animate');
          }
          thread.classList.add('thread');
        }
        await new Promise(r => setTimeout(r, 1000));
      }
    });

    if (thread.classList.contains('thread-animate')) {
      thread.classList.remove('thread-animate');
    }
    thread.classList.add('thread');

    popUp.classList.add("settings-pop-active");
  }

  settingsMouseOver() {
    // const settings = document.getElementsByClassName("settings")[0]
    // settings.addEventListener('mouseover', () => {
    //   settings.classList.add('settings-animate-hover')
    // });
  }

  settingsMouseOut() {
    // const settings = document.getElementsByClassName("settings")[0]
    // settings.addEventListener('mouseout', () => {
    //   settings.classList.remove('settings-animate-hover')
    // });
  }
}

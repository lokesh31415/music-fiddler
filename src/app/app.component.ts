import { Component } from '@angular/core';
import { ElectronService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'music-fiddler';

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    const { driver, By } = this.electronService.webDriver;
    driver
      .get('https://www.google.com/')
      .then(async () => {
        console.log(await driver.getTitle());
        const el = await driver.findElement(By.css('div'));
        console.log(await el.getText());
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

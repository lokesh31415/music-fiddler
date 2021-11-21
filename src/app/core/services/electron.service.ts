import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import { Builder, By, WebDriver } from 'selenium-webdriver';

@Injectable({ providedIn: 'root' })
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  childProcess: typeof childProcess;
  fs: typeof fs;
  webDriver: { driver: WebDriver; By: any };

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      let selenium = window.require('selenium-webdriver');
      window.require('chromedriver');
      const chrome = window.require('selenium-webdriver/chrome');

      let driver = (new selenium.Builder() as Builder)
        .forBrowser('chrome')
        .setChromeOptions(
          new chrome.Options()
            .headless()
            .windowSize({ width: 640, height: 480 })
        )
        .build();

      this.webDriver = { driver, By: selenium.By };
    }
  }
}

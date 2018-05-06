import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from "../pages/welcome/welcome";
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { RegisterPage } from "../pages/register/register";
import {FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { AuthenticationCodeProvider } from '../providers/authentication-code/authentication-code';
import {CopyrightComponent} from "../components/copyright/copyright";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {LogInPage} from "../pages/log-in/log-in";
import {SettingPage} from "../pages/setting/setting";
import {EditPasswordPage} from "../pages/edit-password/edit-password";
import { ToastProvider } from '../providers/toast/toast';
import {AboutusPage} from "../pages/aboutus/aboutus";
import { CategoryProvider } from '../providers/category/category';
import { CommodityProvider } from '../providers/commodity/commodity';
import {PhotoLibrary} from "@ionic-native/photo-library";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    CopyrightComponent,
    LogInPage,
    ForgotPasswordPage,
    SettingPage,
    EditPasswordPage,
    AboutusPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    backButtonText: '返回'
    }),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LogInPage,
    ForgotPasswordPage,
    SettingPage,
    EditPasswordPage,
    AboutusPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationCodeProvider,
    ToastProvider,
    CategoryProvider,
    CommodityProvider,
    PhotoLibrary,
    BarcodeScanner,
    Camera,
    ImagePicker,
  ]
})
export class AppModule {}

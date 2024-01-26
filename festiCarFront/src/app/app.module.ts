import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from 'src/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AccueilComponent } from './accueil/accueil.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ListeFestivalsComponent } from './liste-festivals/liste-festivals.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FestivalComponent } from './festival/festival.component';
import { ListeCovoituragesComponent } from './liste-covoiturages/liste-covoiturages.component';
import { ChoixCovoiturageComponent } from './choix-covoiturage/choix-covoiturage.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatMenuModule} from '@angular/material/menu';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CorsInterceptor } from './cors.interceptor';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    ListeFestivalsComponent,
    FestivalComponent,
    ListeCovoituragesComponent,
    ChoixCovoiturageComponent,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    GooglePlaceModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatListModule


  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

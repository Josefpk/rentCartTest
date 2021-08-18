import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalInfoComponent } from './principal-view/modal-info/modal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CardsCarsComponent } from './principal-view/cards-cars/cards-cars.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    ModalInfoComponent,
    CardsCarsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatCarouselModule.forRoot()
  ],
  providers: [ ],
  entryComponents: [
    ModalInfoComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

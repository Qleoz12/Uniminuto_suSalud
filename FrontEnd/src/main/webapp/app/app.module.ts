import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SuSaludFrontSharedModule } from 'app/shared/shared.module';
import { SuSaludFrontCoreModule } from 'app/core/core.module';
import { SuSaludFrontAppRoutingModule } from './app-routing.module';
import { SuSaludFrontHomeModule } from './home/home.module';
import { SuSaludFrontEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { TestComponent } from './test/test.component';
import { BandejaVerificadoresComponent } from './bandeja-verificadores/bandeja-verificadores.component';
import { DataModule } from './data/data.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    SuSaludFrontSharedModule,
    SuSaludFrontCoreModule,
    SuSaludFrontHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SuSaludFrontEntityModule,
    SuSaludFrontAppRoutingModule,
    //fakemodule
    DataModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    TestComponent,
    BandejaVerificadoresComponent,
  ],

  bootstrap: [MainComponent],
})
export class SuSaludFrontAppModule {}

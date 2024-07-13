import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitePageRoutingModule } from './site-routing.module';

import { SitePage } from './site.page';

import { HeaderComponent } from 'src/app/components/site/header/header.component';
import { FooterComponent } from 'src/app/components/site/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitePageRoutingModule
  ],
  declarations: [
    SitePage,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SitePageModule {}

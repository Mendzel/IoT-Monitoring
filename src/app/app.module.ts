import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TabsViewComponent } from './components/dialog/tabs-view/tabs-view.component';
import { TabComponent } from './components/dialog/tabs-view/tab/tab.component';
import { DeviceComponent } from './components/dialog/tabs-view/device/device.component';
import { FilterPickerComponent } from './components/filter-picker/filter-picker.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    DialogComponent,
    TabsViewComponent,
    TabComponent,
    DeviceComponent,
    FilterPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    TabViewModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

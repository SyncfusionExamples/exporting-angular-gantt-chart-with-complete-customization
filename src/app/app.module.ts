import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ToolbarService, PdfExportService, ExcelExportService } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GanttModule
  ],
  providers: [ToolbarService, PdfExportService, ExcelExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }

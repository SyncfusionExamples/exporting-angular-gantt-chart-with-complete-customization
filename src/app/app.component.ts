import { Component, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { PdfColor} from '@syncfusion/ej2-pdf-export';
import { projectNewData } from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  @ViewChild("ganttObject")
  public ganttObject: GanttComponent | undefined;
  public data: object[] = projectNewData;
  public toolbarOptions: string[] = ["PdfExport", "ExcelExport", "CsvExport"];
  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "StartDate", headerText: "Start Date"},
    { field: 'EndDate', headerText: "End Date"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor"
  }

  public toolbarBtnClick(args:any):void{
    if(args.item.text === "Pdf export"){
      (this.ganttObject as GanttComponent).pdfExport({
        fileName: "ProjectData.pdf",
        enableFooter: false,
        showPredecessorLines: false,
        theme: "Fabric",
        ganttStyle: {
          taskbar: {
            taskColor: new PdfColor(240, 128, 128),
            taskBorderColor: new PdfColor(240, 128, 128),
            progressColor: new PdfColor(205, 92, 92)
          }
        }
      });
    } else if(args.item.text === "Excel export"){
      (this.ganttObject as GanttComponent).excelExport({
        fileName: "ProjectData.xlsx",
        theme: {
          header: { fontColor:"#C67878"},
          record: { fontColor:"#C67878"}
        },
        header:{
          headerRows: 1,
          rows: [{
            cells:[{
              colSpan: 4,
              value: "Project Time Tracking Report",
              style: { fontSize:20, hAlign:"Center"}
            }]
          }]
        },
        footer:{
          footerRows: 1,
          rows: [{
            cells:[{
              colSpan: 4,
              value: "Visit Again!!!",
              style: { fontSize:18, hAlign:"Center"}
            }]
          }]
        }
      });
    } else if(args.item.text === "CSV export"){
      (this.ganttObject as GanttComponent).csvExport();
    }
  }
};


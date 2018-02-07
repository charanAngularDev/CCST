import { Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  dialogResult ="";
  displayedColumns = ['projectID', 'projectName', 'clientName','actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

   
  }
  selectRow(row) {
    console.log(row);
  }
 

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor(private dialog:MatDialog) {
    
   }
   openDialog(){
     let dialogRef=this.dialog.open(MyDialogComponentComponent,{
          width:'600px',
          data:'{{}}'
     });

     dialogRef.afterClosed().subscribe(result=>{
       console.log('dialog Closed: ${result}');
       this.dialogResult=result;
     })
   }
}
  export interface Element {
    projectID:number,
    projectName:string,
    clientName: string
    
  }

  const ELEMENT_DATA: Element[] = [
    {projectID: 2002, projectName: 'Android Task Monitoring', clientName: 'GooGle'},
    {projectID: 1051, projectName: 'Online Mobile Recharge Portal Project', clientName: 'IBM'},
    {projectID: 3021, projectName: 'Fingerprint Based ATM System',  clientName: 'accenture'},
    {projectID: 4401, projectName: 'Image Steganography With 3 Way Encryption', clientName: 'First Command'},
    {projectID: 5012, projectName: 'Android Employee Tracker',  clientName: 'kIEWIT'},
    {projectID: 5110, projectName: 'Opinion Mining For Social Networking Site',  clientName: 'IT commence'},
    {projectID: 6003, projectName: 'FeedBack Enquiry Chat Bot', clientName: 'Fidelity'},
    {projectID: 7114, projectName: 'Improved Data Leakage Detection', clientName: 'tech Systems'},
    {projectID: 2818, projectName: 'Airport Network Flight Scheduler', clientName: 'Maxo'},
    {projectID: 9453, projectName: 'Remote User Recognition And Access Provision', clientName: 'Maxo'},
    {projectID: 1007, projectName: 'Network Based Stock Price System', clientName: 'Maxo'},
    {projectID: 1052, projectName: 'College automation project', clientName: 'Maxo'},
    {projectID: 1237, projectName: 'Advanced Mobile Store', clientName: 'Maxo'},
    {projectID: 1369, projectName: 'Mobile(location based) Advertisement System', clientName: 'Maxo'},
    {projectID: 1481, projectName: 'Cargo Booking Software', clientName: 'Maxo'},
    {projectID: 1591, projectName: 'Corporate Dashboard Project', clientName: 'Maxo'},
    {projectID: 1623, projectName: 'Wireless Data Handling And Management',  clientName: 'Maxo'},
    {projectID: 1738, projectName: 'Cloud computing for advanced banking', clientName: 'Maxo'},
    {projectID: 1899, projectName: 'Stock Market Analysis and Prediction', clientName: 'Maxo'},
    {projectID: 1901, projectName: 'Video Steganography', clientName: 'Maxo'},
    {projectID: 2008, projectName: 'Attack Source Tracing Project', clientName: 'Maxo'},
  ];
 

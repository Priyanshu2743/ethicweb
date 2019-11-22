import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import { ExcelService } from '../shared/excel.service';
import { CanComponentDeactivate } from '../shared/authDeGaurd.service';
import { Authenticate } from '../shared/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,CanComponentDeactivate {
  formData:any[]=[];
  stayTuneData:any[]=[];
  newsletterData:any[]=[];
  joinusData:any[]=[];
  caData:any[]=[];
  eeoData:any[]=[];

  constructor(private http:HttpClient,private excel:ExcelService,private auth:Authenticate,
    private router:Router) { }

  ngOnInit() {
    const fdata1=[];
    const fdata2=[];
    const fdata3=[];
    const fdata4=[];
    const fdata5=[];
    const fdata6=[];
    this.http.get('https://ethiccraft-41131.firebaseio.com/getintouch.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata1.push({...responseData[key],Id:key});
        }
      }
      return fdata1;})).subscribe((data)=>{
        this.formData=data;
      });

  /******************************************************************************************************* */   
      this.http.get('https://ethiccraft-41131.firebaseio.com/stayTune.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata2.push({...responseData[key],Id:key});
        }
      }
      return fdata2;})).subscribe((data)=>{
        this.stayTuneData=data;
      });

  /**************************************************************************************************** */

      this.http.get('https://ethiccraft-41131.firebaseio.com/newsletter.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata3.push({...responseData[key],Id:key});
        }
      }
      return fdata3;})).subscribe((data)=>{
        this.newsletterData=data;
      });
      
/***************************************************************************************************************/

this.http.get('https://ethiccraft-41131.firebaseio.com/joinus.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata4.push({...responseData[key],Id:key});
        }
      }
      return fdata4;})).subscribe((data)=>{
        this.joinusData=data;
      });

/********************************************************************************************* */
this.http.get('https://ethiccraft-41131.firebaseio.com/ca.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata5.push({...responseData[key],Id:key});
        }
      }
      return fdata5;})).subscribe((data)=>{
        this.caData=data;
      });
/************************************************************************************************* */
this.http.get('https://ethiccraft-41131.firebaseio.com/eeo.json').pipe(map(
      responseData=>{
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          fdata6.push({...responseData[key],Id:key});
        }
      }
      return fdata6;})).subscribe((data)=>{
        this.eeoData=data;
      });
    }
/************************************************************************************************* */
  exportAsXLSX(filename:string)
  {
    
    switch(filename)
    {
   case 'getInTouch': this.excel.exportAsExcelFile(this.formData,filename);
   break;

   case 'StayTune': this.excel.exportAsExcelFile(this.stayTuneData,filename);
   break;

   case 'Newsletter': this.excel.exportAsExcelFile(this.newsletterData,filename);
   break;

   case 'joinus': this.excel.exportAsExcelFile(this.joinusData,filename);
   break;

   case 'ca': this.excel.exportAsExcelFile(this.caData,filename);
   break;

   case 'eeo': this.excel.exportAsExcelFile(this.eeoData,filename);
   break;
    }
   
  }

  canComponentDeactivate()
  {
this.auth.logout();
return true;
  }

  signout()
  {
this.router.navigate(['/admin']);
  }
}

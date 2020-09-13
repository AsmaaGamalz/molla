import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  constructor() {
    $("#options i").click(function(){
    
      $("#color-options").toggle()
  })
  
  
  var lis = $("#color-options ul li");
  lis.eq(0).css("backgroundColor","red");
  lis.eq(1).css("backgroundColor","orange");
  lis.eq(2).css("backgroundColor","blue");
  lis.eq(3).css("backgroundColor","black");
  lis.eq(4).css("backgroundColor","tomato");
  
  $("#color-options ul li").click(function(){
      var color = $(this).css("backgroundColor");
      $("h1,h2,p").css("color",color);
  })
  
    /*
    var mybutton=document.getElementById('goup');
  window.onscroll=function(){
   
    if(window.pageYOffset >= 300)
    {
      mybutton.style.display = 'block';
    }
    else{
      mybutton.style.display='none';
    }
    
  };*/
    
  

/*
  mybutton.onclick =function(){
    'use strict';
    window.scrollTo(0,0);
  };*/
  
}

  ngOnInit(): void {
  /*  $(document).ready(function(){
    });*/
  }
  /*
  welcome(){
  
    window.scrollTo(0,0);
  };*/

}

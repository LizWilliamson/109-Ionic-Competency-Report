import { Post } from './../models/Post';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postsToShow: Post[] = [];

  constructor(private data : DataService) {
    console.log("Hey, hey, hey. Here is some data from the data service:", this.data.getAllPost());

    this.data.getAllPost().subscribe(res => {
      this.postsToShow = [];

      for(var i=0; i<res.length; i++){
        var msg = res[i];
        if(msg.to == "Liz" || msg.from == "Liz" || msg.to == "Everyone"){
          this.postsToShow.push(msg);
        }
      }

     

      });
    }
}

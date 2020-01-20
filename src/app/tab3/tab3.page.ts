import { DataService } from './../services/data.service';
import { Friend } from './../models/Friends';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  myFriends: Friend[] = [];

  constructor(private data: DataService) {

    this.data.getAllFriends().subscribe(res => {
      this.myFriends = [];

      for(var i = 0; i < res.length; i++){
        if(res[i].belongsTo == 'Liz'){
          this.myFriends.push(res[i]);
        }
      }

     
    });
  }

  saveFriend(){
    console.log("Hey, look who made a new friend", this.model);

    this.data.saveFriend(this.model);

    this.model = new Friend();

  }

}

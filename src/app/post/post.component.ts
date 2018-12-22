import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.postLove += 1;
  }

  onHate() {
    this.postLove -= 1;
  }

  getColor() {
    if(this.postLove > 0)
    {
      return 'green';
    }
    else if(this.postLove < 0)
    {
      return 'red';
    }
  }
}

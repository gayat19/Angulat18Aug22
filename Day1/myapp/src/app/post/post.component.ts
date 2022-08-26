import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blogpost.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService:BlogPostService) { 
    this.postService.getPostData().subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}

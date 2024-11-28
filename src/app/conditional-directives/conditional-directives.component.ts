import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { conditionalDirectives } from './conditional-directives.directive';

@Component({
  selector: 'app-conditional-directives',
  standalone: true,
  imports: [conditionalDirectives, CommonModule],
  templateUrl: './conditional-directives.component.html',
  styleUrl: './conditional-directives.component.css'
})
export class ConditionalDirectivesComponent {
title: string='Conditional Directives'
videos=[
  {
    "title": "First Video",
    "share": 120,
    "likes": 300,
    "dislikes": 20,
    "thumbnail": "/assets/bird-thumbnail.jpg"
  },
  {
    "title": "Second Video",
    "share": 80,
    "likes": 200,
    "dislikes": 15,
    "thumbnail": "/assets/spring-images-min.jpg"
  },
  {
    "title": "Third Video",
    "share": 150,
    "likes": 400,
    "dislikes": 10,
    "thumbnail": "/assets/tropical-butterfly-yellow-bright-summer-flowers-background-blue-foliage-fairy-garden-macro-artistic-image-165648135.webp"
  }
]
mostLikedVideo=this.getMostLikedVideo();

getMostLikedVideo(){
  let videoCopy=[...this.videos]; ///... is a spread operator spades the operator inti its individual elements
return videoCopy.sort((curr,next)=>next.likes-curr.likes)[0];
}
}
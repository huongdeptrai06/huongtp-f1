import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { ITodo } from './interface/todo';
import { Todoitem } from './components/todoitem/todoitem';
import { IPost } from './interface/post';
import { PictureItem } from './components/picture-item/picture-item';
import { IPicture } from './interface/picture';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header,FormsModule,Todoitem,PictureItem,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20307');
  title:string = 'Xin chào WD20307 - Ahihih'
  classname:string = "text-red"
  fontweight:string = 'font-bold'
  show:boolean = true
  color:string = 'red'
  chieudai:number = 0
  chieurong:number = 0
  dientich:number = 0
  name:string = ''
  priority:string = ''
  message:string = ''
  pictures: IPicture[] = [];
  selectedAuthor: string = '';
  selectedId: number = 0;
  posts: IPost[]=[
    
  ]
  todos:ITodo[]=[
    {
      name:"Đi học",
      priority:"Cao"
    },
    {
      name:"Đi làm",
      priority:"Trung bình"
    },
    {
      name:"Tán gái",
      priority:"Trung bình"
    }
  ]
  handleClick=()=>{
    // alert("Ahihihi")
    this.classname = (this.classname=='text-red')?"text-blue":'text-red'
    this.show = !this.show
  }
  Caculator = ()=>{
    this.dientich = this.chieudai*this.chieurong
  }
  onChange =()=>{
    this.show = !this.show
  }
  onAddTodo =()=>{
    const newtodo:ITodo = {
      name:this.name,
      priority:this.priority
    }
    this.todos.push(newtodo)
    this.name=''
    this.priority=''
  }
 ChooseFn = (text:string)=>{
    this.message = text
  }
  // async ngOnInit(){
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     this.posts = await res.json()
  // }
  async ngOnInit(){
    const res = await fetch('https://picsum.photos/v2/list');
    this.pictures = await res.json();
  }
  handleReceiveAuthor(author: string, id: number){
    this.selectedAuthor = author;
    this.selectedId = id;
  }
}
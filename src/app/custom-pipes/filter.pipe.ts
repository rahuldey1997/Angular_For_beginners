import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone:true,
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(list: any, filterText:string) {
    if(list.length==0 || filterText==""){
      return list
    }
    else{
      return list.filter((item:any)=>{
          return item.gender.toLowerCase()===filterText.toLocaleLowerCase()
      })
    }
  }
}

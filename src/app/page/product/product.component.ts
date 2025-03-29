import { Component } from '@angular/core';
import { CardComponent } from '../../UI/card/card.component';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-product',
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products:any[]=[];
  constructor(private apiservice:ApiserviceService){}

  ngOnInit()
  {
    this.apiservice.getProduct().subscribe((data:any)=>{
      this.products=data;
    //console log(data)
  });
  }


}
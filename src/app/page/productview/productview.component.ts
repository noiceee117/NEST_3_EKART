import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { CardComponent } from '../../UI/card/card.component';
import { NavbarComponent } from '../../UI/navbar/navbar.component';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
  product: any;

  constructor(private route:ActivatedRoute, private apiService: ApiserviceService){}

  ngOnInit(){
    const productId = this.route.snapshot.paramMap.get('id');

    if(productId){
      this.apiService.getProductById(productId).subscribe((data)=>{
        this.product = data;
        //console.log(this.product);
        });
      
    }
  }

}

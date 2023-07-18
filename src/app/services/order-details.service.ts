import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"IT Consultations",
      foodDetails:"Consult From Our Best IT Staff.",
      foodPrice:20000,
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257957/jud-mackrill-Of_m3hMsoAA-unsplash_bnqfui.jpg"
    },
    {
      id:2,
      foodName:"Web Development",
      foodDetails:"Get The Best Web Designs",
      foodPrice:50000,
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257949/linkedin-sales-solutions-PIM07Y2OHzE-unsplash_nkcgja.jpg"
    },
    {
      id:3,
      foodName:"Web Improvements",
      foodDetails:"Improve Your Application To Have a Better Outlook",
      foodPrice:60000,
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257947/arlington-research-nFLmPAf9dVc-unsplash_e8f2iz.jpg"
    },
    {
      id:4,
      foodName:"Presentable Designs",
      foodDetails:"We Offer Most Presentable Designs",
     
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257309/arnold-francisca-f77Bh3inUpE-unsplash_cime0l.jpg"
    },
    {
      id:5,
      foodName:"Dynamic Designs",
      foodDetails:"We Offer Flexible Designs",
      
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257946/istockphoto-1342266594-1024x1024_gnscqu.jpg"
    },
    {
      id:6,
      foodName:"Certified Experts",
      foodDetails:"Be Sure To Get Very Good Designers",
     
      foodImg:"https://res.cloudinary.com/djjdzej7t/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689257946/istockphoto-1479167798-1024x1024_qznfcw.jpg"
    }
  ]


  

}
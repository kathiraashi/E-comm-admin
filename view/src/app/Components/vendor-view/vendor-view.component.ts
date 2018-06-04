import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { PromotionsViewComponent } from '../Models/promotions-view/promotions-view.component';
import { OrderViewComponent } from '../Models/order-view/order-view.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {
  bsModalRef: BsModalRef;

  Active_Tab = 'locations' ;
  title: String;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
    this.Active_Tab = name;
  }
  ViewPromotion() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PromotionsViewComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }
  ViewOrder() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(OrderViewComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }
}

import { Component, TemplateRef } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class NgbdModalBasic {

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: 'xl',
        windowClass: 'custom-modal',
        backdrop : true,
        keyboard : true
      }
    );

    if(document.getElementById('modalImage')  != null) {
      (<HTMLImageElement>document.getElementById('modalImage')).src = "https://www.w3schools.com/w3images/mac.jpg";
    }

  } 

  close() {
    this.modalService.dismissAll();
  }
}
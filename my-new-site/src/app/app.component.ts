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
  }

  close() {
    this.modalService.dismissAll();
  }
}
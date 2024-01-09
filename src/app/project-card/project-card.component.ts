import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  ngbModalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {

  }

  OpenProjectModal() {
    const modalOptions = { size: 'lg' };
    this.ngbModalRef = this.modalService.open(ProjectModalComponent, modalOptions);
    this.ngbModalRef.componentInstance.project = this.project;
  }

}

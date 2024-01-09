import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public ngbModalRef: NgbModal) {

  }
}

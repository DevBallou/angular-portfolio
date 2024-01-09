import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgbCollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed = true;
  // Languages
  typescript = false;
  javascript = false;
  python = false;
  csharp = false;
  java = false;
  // Frameworks
  angular = false;
  nodejs = false;
  aspnet = false;
  react = false;

  filtering = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Hicham Baallou - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if(this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if(this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.react) {
      filterTags.push(Tag.REACT);
    }

    if (this.python || this.csharp || this.java || this.angular || this.typescript || this.nodejs || this.aspnet || this.javascript || this.react) {
      this.filtering = true;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.angular = false;
    this.typescript = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}

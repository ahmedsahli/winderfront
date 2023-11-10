import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(jobs: any[], filter: any): any[] {
    if (!jobs || !filter) {
      console.log(jobs);

      return jobs;
    }
    console.log(filter);

    return jobs.filter((job) => {
      console.log(jobs);

      const projectMatch = job.title.toLowerCase().includes(filter.project.toLowerCase());
      const durationMatch = job.duration.toLowerCase().includes(filter.duration.toLowerCase());
      const experienceMatch = filter.experience ? job.experience.toLowerCase() === filter.experience.toLowerCase() : true;
      const titleMatch = job.title.toLowerCase().includes(filter.title.toLowerCase());
      const budgetFromMatch = job.budgetFrom ? job.budgetFrom >= filter.budgetFrom : null;
      const budgetToMatch = job.budgetTo ? job.budgetTo >= filter.budgetTo : null;

      // console.log(budgetFromMatch);
      // console.log(budgetToMatch);
      // console.log(job.budgetFrom);
      // console.log(job.budgetTo);

      if (filter.skills.length > 0) {
        const skillsMatch = filter.skills.every((skill: any) => job.skills.some((jobSkill: any) => jobSkill.label === skill.label));
      }

      const skillsMatch = filter.skills.every((skill: any) => job.skills.some((jobSkill: any) => jobSkill.label === skill.label));

      return projectMatch && durationMatch && experienceMatch && titleMatch && skillsMatch && budgetFromMatch && budgetToMatch;
    });
  }
}

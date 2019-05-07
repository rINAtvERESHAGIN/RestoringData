import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const ROUTES: Routes = [
  // {path: '', redirectTo: 'event-table', pathMatch: 'full'},
  // {path: 'event-table', component: EventTableComponent},
  // {path: 'goal', component: GoalComponent},
  // {path: 'enterstudent', component: EnterstudentComponent},
  // {path: 'searchstudent', component: SearchstudentComponent},
  // {path: 'allstudent', component: AllstudentComponent},
  // {path: 'student-course-group', component: StudentCourseGroupComponent},
  // {
  //     path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard],
  //     data: {expectedRoles: [Role.ADMIN]}
  // },
  // {path: '**', component: NotFoundPageComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/HeroTutorial/heroes/heroes.component';
import { DashboardComponent } from './components/HeroTutorial/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/HeroTutorial/hero-detail/hero-detail.component';
import { HeroParentComponent } from './components/DataTransferParentChild/hero-parent-data/hero-parent-data.component';
import { AttributeDirectiveComponent } from './components/AttributeDirective/attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './components/StructuralDirectives/structural-directives/structural-directives.component';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { UserInputsComponent } from './components/userInputs/user-inputs/user-inputs.component';
import { DynamicComponentComponent } from './components/DynamicComponents/dynamic-component/dynamic-component.component';
import { FilesComponent } from './components/files/files.component';
import { FormsComponent } from './components/forms/forms.component';
import { AppComponent as componenteApp} from './components/DynamicForms/app/app.component';
import { HttpComponent } from './components/http/http.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dataParent', component: HeroParentComponent },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: 'attribute', component: AttributeDirectiveComponent },
  { path: 'structural', component: StructuralDirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'input', component: UserInputsComponent},
  { path: 'files', component: FilesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'dynamic-forms', component: componenteApp},
  { path: 'http', component: HttpComponent},
  { path: 'unitTest', component: UnitTestComponent},
  { path: '**', component: HeroesComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

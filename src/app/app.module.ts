import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/HeroTutorial/heroes/heroes.component';
import { HeroDetailComponent } from './components/HeroTutorial/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/HeroTutorial/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/HeroTutorial/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/HeroTutorial/hero-search/hero-search.component';
import { HeroParentComponent } from './components/DataTransferParentChild/hero-parent-data/hero-parent-data.component';
import { HeroChildComponent } from './components/DataTransferParentChild/hero-child-data/hero-child-data.component';
import { AttributeDirectiveComponent } from './components/AttributeDirective/attribute-directive/attribute-directive.component';
import { HighlightDirective } from './components/AttributeDirective/highlight.directive';
import { StructuralDirectivesComponent } from './components/StructuralDirectives/structural-directives/structural-directives.component';
import { UnlessDirective } from './components/StructuralDirectives/unless.directive';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { UppercasePipe } from './components/pipes/uppercase.pipe';
import { SortPipe } from './components/pipes/sort.pipe';
import { SortByPipe } from './components/pipes/sort-by.pipe';
import { UserInputsComponent } from './components/userInputs/user-inputs/user-inputs.component';
import { BannerOneComponent } from './components/DynamicComponents/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/DynamicComponents/banner-two/banner-two.component';
import { DynamicComponentComponent } from './components/DynamicComponents/dynamic-component/dynamic-component.component';
import { DynamicComponentDirective } from './components/DynamicComponents/Directives/dynamic-component.directive';
import { FilesComponent } from './components/files/files.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './components/DynamicForms/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './components/DynamicForms/dynamic-form/dynamic-form.component';
import { AppComponent as componenteApp } from './components/DynamicForms/app/app.component';
import { HttpComponent } from './components/http/http.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroParentComponent,
    HeroChildComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    UnlessDirective,
    PipesComponent,
    UppercasePipe,
    SortPipe,
    SortByPipe,
    UserInputsComponent,
    BannerOneComponent,
    BannerTwoComponent,
    DynamicComponentComponent,
    DynamicComponentDirective,
    FilesComponent,
    FormsComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    componenteApp,
    HttpComponent,
    UnitTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
/* 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  */
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

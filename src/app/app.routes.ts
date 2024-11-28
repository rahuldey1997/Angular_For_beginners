import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CustomAttributeDirectiveComponent } from './Custom Attribute Directive/customAttributeDirective.component'; 
import { RendererComponent } from './Renderer/renderer.component';  
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HostListenerComponent } from './HostListner/hostlistner.component';
import { HostBindingComponent } from './HostBinding/hostbinding.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { BindingDirectivePropertyComponent } from './binding-directive-property/binding-directive-property.component';          
import { CustomAppClassDirectiveComponent } from './custom-app-class-directive/custom-app-class-directive.component';
import { ConditionalDirectivesComponent } from './conditional-directives/conditional-directives.component';
import { CustomAppDirectiveComponent } from './custom-app-directive/custom-app-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { ServicesComponent } from './services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { HierarchicalInjectionComponent } from './HierarchicalInjection/hierarchicalInjection.component';
import { CreatingDataServiceComponent } from './Creating Data Service/creatingDataService.component';
import { InjectingServiceToAnotherServiceComponent } from './InjectingServiceToAnotherService/injectingServiceToAnotherService.component';
import { ComponentInteractionWithServices } from './Component Interaction with Services/componentInteractionWithServices.component';
import { EventBindingComponent } from './Event Binding/eventbinding.component';
import { ObservableComponent } from './Observable/observable.component';
import { DifferentWaysOfCreatingObservableComponent } from './Different Ways of Creating Observables/waysOfCreatingObservable.component';
import { UndestandingOperatorsOnObservableComponent } from './undestanding-operators-on-observable/undestanding-operators-on-observable.component';
import { SubjectInRxJSComponent } from './subject-in-rx-js/subject-in-rx-js.component';
import { UnsubscribeToAnObservableComponent } from './unsubscribe-to-an-observable/unsubscribe-to-an-observable.component';
import { RoutingInAngularComponent } from './routing-in-angular/routing-in-angular.component';
import { HomeComponent } from './routing-in-angular/home/home.component';
import { AboutComponent } from './routing-in-angular/about/about.component';
import { ImplementPageNotFoundRouteComponent } from './implement-page-not-found-route/implement-page-not-found-route.component';
import { ErrorComponent } from './implement-page-not-found-route/error/error.component';
import { ConfiguringNavigationLinkForRouteComponent } from './configuring-navigation-link-for-route/configuring-navigation-link-for-route.component';
import { Home1Component } from './configuring-navigation-link-for-route/home/home1.component';
import { About1Component } from './configuring-navigation-link-for-route/about/about1.component';
import { ContactComponent } from './routing-in-angular/contact/contact.component';
import { CoursesComponent } from './routing-in-angular/courses/courses.component';
import { PassingParametersToRouteComponent } from './passing-parameters-to-route/passing-parameters-to-route.component';
import { CourseComponent } from './passing-parameters-to-route/course/course.component';
import { PassingQueryParameterToRoutesComponent } from './passing-query-parameter-to-routes/passing-query-parameter-to-routes.component';
import { CourseDemoComponent } from './passing-query-parameter-to-routes/course/course.component';
import { PassingFragmentsToRouteComponent } from './passing-fragments-to-route/passing-fragments-to-route.component';
import { Item1Component } from './passing-fragments-to-route/item1/item1.component';
import { Item2Component } from './passing-fragments-to-route/item2/item2.component';
import { Item3Component } from './passing-fragments-to-route/item3/item3.component';
import { CreatingARouterModuleFileComponent } from './creating-arouter-module-file/creating-arouter-module-file.component';
import { RouterGuardComponent } from './router-guard/router-guard.component';
import { RouterGuardCoursesComponent } from './router-guard/courses/routeGuardCourses.component';
import { CourseRouteService } from './router-guard/service/routeguard.service';
import { LogInComponent } from './router-guard/logIn/login.component';
import { authGuard } from './router-guard/service/auth.guard';
import { RegistrationComponent } from './router-guard/registration/registration.component';
import { authDeactivateGuard } from './router-guard/service/authDeactivate.guard';
import { SessionManagementComponent } from './session-management/session-management.component';
import { CookiesComponent } from './cookies/cookies.component';
import { NavigationEventComponent } from './navigation-events/navigation-events.component';
import { HomeNavComponent } from './navigation-events/home/home.component';
import { ContactNavComponent } from './navigation-events/contact/contact.component';
import { ContactRouteComponent } from './router-guard/contact/contact.component';
import { resolve } from './router-guard/service/resolveguardcontact.service';
import { NgModel } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SetValueAndPatchValueMethodsComponent } from './set-value-and-patch-value-methods/set-value-and-patch-value-methods.component';
import { ResettingTemplateDrivenFormComponent } from './resetting-template-driven-form/resetting-template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SetValueAndPatchValueReactiveFormComponent } from './set-value-and-patch-value-reactive-form/set-value-and-patch-value-reactive-form.component';
import { RetrivingFormDataAndResettingFormComponent } from './retriving-form-data-and-resetting-form/retriving-form-data-and-resetting-form.component';
import { HttprequestsComponent } from './httprequests/httprequests.component';

export const routes: Routes = [
    {path:'customAttributeDirective', component:CustomAttributeDirectiveComponent},   
    {path: 'renderer',component: RendererComponent},
    {path: 'bootstrap',component:BootstrapComponent},
    {path: 'hostlistner',component: HostListenerComponent},
    {path: 'hostbinding',component: HostBindingComponent},
    {path: 'life-cycle-hook',component: LifeCycleHookComponent},
    {path: 'binding-directive-property',component: BindingDirectivePropertyComponent},
    {path:'custom-app-class-directive', component:  CustomAppClassDirectiveComponent},
    {path:'', component:NavComponent},
    {path: 'conditional-directives', component: ConditionalDirectivesComponent},
    {path: 'custom-app-directives', component: CustomAppDirectiveComponent},
    {path: 'structural-directives', component: StructuralDirectiveComponent},
    {path:'ng-switch-directives', component:NgSwitchDirectiveComponent},
    {path:'services', component:ServicesComponent},
    {path:'dependency-injection', component:DependencyInjectionComponent},
    {path:'hierarchical-injection', component:HierarchicalInjectionComponent},
    {path:'creating-data-service', component:CreatingDataServiceComponent},
    {path:'injecting-service-to-another-service', component:InjectingServiceToAnotherServiceComponent},
    {path:'component-interaction-with-services', component:ComponentInteractionWithServices},
    {path:'event-binding', component:EventBindingComponent},
    {path:'observable', component:ObservableComponent},
    {path:'different-ways-of-creating-observable', component:DifferentWaysOfCreatingObservableComponent},
    {path:'undestanding-operators-on-observable', component:UndestandingOperatorsOnObservableComponent},
    {path:'subject-in-rxjs', component:SubjectInRxJSComponent},
    {path:'unsubscribe-to-an-observable', component:UnsubscribeToAnObservableComponent},
    {path:'routing-in-angular', component:RoutingInAngularComponent},
    {path:'routing-in-angular', children:[{path:'home', component: HomeComponent},  
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'courses', component: CoursesComponent}]},
    {path:'implement-page-not-found-routes', component:ImplementPageNotFoundRouteComponent},
    {path:'implement-page-not-found-routes', children:[
        {path:'**', component:ErrorComponent}
    ]},
    {path:'configuring-navigation-link-for-route', component:ConfiguringNavigationLinkForRouteComponent},
    {path:'configuring-navigation-link-for-route', children:[  
        {path:'about1', component: About1Component}
    ]},
    {path:'home1', component: Home1Component},
    {path:'passing-parameters-to-route', component: PassingParametersToRouteComponent},
    {path:'course/:id', component: CourseComponent},
    {path:'passing-query-parameter-to-routes',component:PassingQueryParameterToRoutesComponent},
    {path:'courses/course/:id',component:CourseDemoComponent},
    {path:'passing-fragments-to-route', component:PassingFragmentsToRouteComponent},
    {path:'passing-fragments-to-route', children:[
        {path:'item/item1',component:Item1Component},
        {path:'item/item2',component:Item2Component},
        {path:'item/item3',component:Item3Component}
    ]},
    {path:'creating-a-router-module-file', component:CreatingARouterModuleFileComponent},
    {path:'router-guard',component:RouterGuardComponent},
    {path:'router-guard', children:[
        {path:'CanActivateRoute', component:RouterGuardCoursesComponent,canActivate:[authGuard]},
        {path:'router-guard/LogIn', component:LogInComponent},
        {path:'router-guard/Contact', component:ContactRouteComponent, resolve:{contacts:resolve }},
        {path:'router-guard/registration', component:RegistrationComponent, canDeactivate:[authDeactivateGuard]},
        {path:'admin',loadChildren:()=>import('./router-guard/admin/admin.module').then(m=>m.AdminModule)},  
    ],},
    {path:'session-management', component:SessionManagementComponent},
    {path:'cookies', component:CookiesComponent},
    {path:'navigation-event', component:NavigationEventComponent},
    {path:'navigation-event', children:[
        {path:'home', component:HomeNavComponent},
        {path:'contact', component:ContactNavComponent,resolve:{contacts:resolve }}
    ]},
    {path:'pipes',component:PipesComponent},
    {path:'custom-pipes', component:CustomPipesComponent},
    {path:'template-driven-form',component:TemplateDrivenFormComponent},
    {path:'setValue-And-patchValue', component: SetValueAndPatchValueMethodsComponent},
    {path:'resetting-template-driven-form',component:ResettingTemplateDrivenFormComponent},
    {path:'reactive-forms',component:ReactiveFormsComponent},
    {path:'setValue-And-patchValue-reactive-form', component: SetValueAndPatchValueReactiveFormComponent},
    {path: 'retriving-reactive-form-data-and-resetting-reactive-form', component:RetrivingFormDataAndResettingFormComponent},
    {path: 'introduction-to-http-request', component: HttprequestsComponent},
    {path:'**', component:ErrorComponent},  
];

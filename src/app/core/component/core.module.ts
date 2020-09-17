import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponet } from './nav-bar/nav-bar.component';

@NgModule({
    declarations:[
        NavBarComponet
    ],
    imports:[
        RouterModule
    ],
    exports:[
        NavBarComponet
    ]
})
export class CoreModule {

}
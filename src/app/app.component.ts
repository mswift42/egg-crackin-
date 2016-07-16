import { Component } from '@angular/core';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';
import {RecipeService} from './recipe.service';
import {FavouriteService} from './favourite.service';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {SearchHistoryService} from './search-history.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RecipesviewComponent, MdToolbar, ROUTER_DIRECTIVES,
                 MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES,
                 MD_BUTTON_DIRECTIVES],
    providers: [RecipeService, FavouriteService, SearchHistoryService]
})
export class AppComponent {
}

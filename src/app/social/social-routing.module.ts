import { SocialComponent } from '../social/social/social.component';
import { RouterModule, Routes } from "@angular/router";
import { NotificationComponent } from '../social/notification/notification.component';
import { NewsComponent } from './news/news.component';
import { LibraryComponent } from './library/library.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: SocialComponent,
        data: { 'link': '/social' },
        children: [
            {
                data: { "link": "/notification" },
                path: 'notification',
                component: NotificationComponent
            },
            {
                data: { "link": "/social/news" },
                path: 'news',
                component: NewsComponent
            },
            {
                data: { "link": "/social/library" },
                path: 'library',
                component: LibraryComponent
            },
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SocialRouting { }
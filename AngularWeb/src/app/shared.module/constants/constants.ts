import { BaseConstants } from '@app/core.module';

export class Constants extends BaseConstants {
    public static routerPaths = {
        login: 'login',
        app: 'app',
        layoutModule: 'layout/layout.module#LayoutModule',
        noMatch: '**'
    };

    public static apiEndPoints = {
        getRoomDetails: 'api/room/details'
    };
}

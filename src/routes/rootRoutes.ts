import { lazy } from "react";
import { routePaths } from "./route-path";
import { RouteProperties } from "./routes";

const BaseLayout = lazy(() => import("../BaseLayout"));
const SpellsListPage = lazy(() => import("../pages/SpellsList"));
const SpellDetailsPage = lazy(() => import("../pages/SpellDetails"));
const PageNotFound = lazy(() => import("../common/PageNotFound"));

const rootRoute: RouteProperties[] = [
    {
        path: routePaths.root,
        element: BaseLayout,
        children: [
            {
                path: routePaths.root,
                element: SpellsListPage,
            },
            {
                path: routePaths.spellDetails,
                element: SpellDetailsPage,
            },
            // {
            //     path: routePaths.overlay,
            //     element: OtherPage,
            // },
        ],
    },
    { path: "*", element: PageNotFound },
];

export default rootRoute;

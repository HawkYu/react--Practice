import Home from '../components/Home';
import Content from '../components/Content';
import User from '../components/User';
import Contentone from '../components/Content/Contentone';
import Contenttwo from '../components/Content/Contenttwo';
import Userone from '../components/User/Userone';
import Usertwo from '../components/User/Usertwo';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/content",
    component: Content,
    routes:[   /*嵌套路由*/
        {
          path: "/content/",
          component: Contentone
        },
        {
          path: "/content/contenttwo",
          component: Contenttwo
        }
    ]
  },
  {
    path: "/user",
    component: User,
    routes:[   /*嵌套路由*/
        {
          path: "/user/",
          component: Userone
        },
        {
          path: "/user/usertwo",
          component: Usertwo
        }
    ]
  }
];

export default routes;